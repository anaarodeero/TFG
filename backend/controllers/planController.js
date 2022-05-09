const Plan = require("../models/plan");
const PlanDiario = require("../models/plan");
const Comida = require("../models/plan");
const Piramide = require("../models/piramide");
const Receta = require("../models/receta");
const User = require("../models/user");

var jwt = require("jsonwebtoken");
const recetaController = require('./recetaController');
const piramideController = require('./piramideController');
const userController = require('./userController');
const RecetaSimple = require("../models/recetaSimple");

const planCtrl = {};

planCtrl.getMyPlan = async (req, res, next) => {
  let id = req.query.id;
  console.log("id", id)
  const plan = await Plan.find({ id: Number(id) });
  if (plan[0]) res.json(plan[0]);
  else null;
};

planCtrl.createPlanRegular = async (req, res, next) => {
  // Calculamos los contadores de cada categoria
  let piramide = await Piramide.find({ dieta: "REGULAR" });
  // creamos un mapa con cada categoria asociada a su contador
  let mapaIntervalosSemanal = new Map();
  let mapaIntervalosDiario = new Map();
  piramide[0].piramide.forEach(categoria => {
    let nombre = categoria.nombre;
    if(nombre.includes('INTEGRAL')){
      nombre = nombre.split(' ')[0]
    }
    //Vemos el intervalo de la categoria
    let intervalo;
    if(categoria.limiteInferior == categoria.limiteSuperior){
      intervalo = categoria.limiteInferior
    } else {
      intervalo = random(categoria.limiteInferior, categoria.limiteSuperior)
    }
    if(categoria.frecuencia == 'SEMANAL'){
      mapaIntervalosSemanal.set(nombre, intervalo)
    } else if(categoria.frecuencia == 'DIARIA'){
      let array = new Array(7)
      array.fill(intervalo)
      mapaIntervalosDiario.set(nombre, array)
    }
  })
  // console.log(mapaIntervalosSemanal, mapaIntervalosDiario)

  // comenzamos con las comidas principales, ya que es algo fijo.
  // primeros platos ensaladas, cremas o sopas
  var script = require('../assets/primerPlatoComidaRegular.json')
  let recetas = await Receta.find(script);
  //// console.log("recetas: ", recetas.length)
  let primerosPlatos = new Array(7);
  if(recetas.length == 7){
    // Cojo los 7
    primerosPlatos = recetas;
  } else if(recetas.length > 7){
    // Cojo 7 aleatorios
    primerosPlatos = getMultipleRandom(recetas, 7)
  } else {
    // Repito alguno
    let numeroRepeticiones = 7 - recetas.length;
    primerosPlatos = recetas.concat(getMultipleRandom(recetas, numeroRepeticiones))
  }

  let arrayIntervalos = mapaIntervalosDiario.get('VERDURAS')
  for (let i = 0; i < primerosPlatos.length; i++) {
    if(primerosPlatos[i].categoria == 'VERDURAS'){
      arrayIntervalos[i] = arrayIntervalos[i] - 1
    }
  }
  mapaIntervalosDiario.set('VERDURAS', arrayIntervalos)

  //// console.log("queda por tomar de ARROCES: ", mapaIntervalosSemanal.get('ARROCES'))
  //// console.log("queda por tomar de PASTA: ", mapaIntervalosSemanal.get('PASTA'))

  // Vemos los platos principales
  let platosPrincipales = new Array(7);
  // Cogemos los 3 platos de comidas fijas, arroz, pasta y legumbres
  let recetasArroz = await Receta.find({"categoria": "ARROCES"});
  // Cogemos una aleatoria
  let recetaArroz = recetasArroz[random(0, recetasArroz.length-1)]
  // Repetimos con la pasta y legumbres
  let recetasPasta = await Receta.find({"categoria": "PASTA"});
  let recetaPasta = recetasPasta[random(0, recetasPasta.length-1)]
  // //// console.log("pasta: ", recetaPasta)
  var script = require('../assets/lemgumbresSinEnsaladas.json')
  let recetasLegumbres = await Receta.find(script);
  let recetaLegumbres = recetasLegumbres[random(0, recetasLegumbres.length-1)]
  // Las colocamos en 3 días, evitando que las legumbras caigan el mismo dia que una ensalada de legumbres
  // Arroz
  let dia = random(0,6)
  while(platosPrincipales[dia] != undefined){
    dia = random(0,6);
  }
  platosPrincipales[dia] = recetaArroz
  // Pasta
  dia = random(0,6)
  while(platosPrincipales[dia] != undefined){
    dia = random(0,6);
  }
  platosPrincipales[dia] = recetaPasta
  // Legumbres
  dia = random(0,6)
  while((platosPrincipales[dia] != undefined) && (primerosPlatos[dia].categoria != "LEGUMBRES")){
    dia = random(0,6);
  }
  platosPrincipales[dia] = recetaLegumbres

  

  // Para los 4 dias restantes necesitamos recetas de carne, pescado, 2 de cada
  // buscamos las recetas con un join para visualizar la relacion con los alimentos
  var script = require('../assets/recetasCarneUnion.json')
  let recetasCarne = await Receta.aggregate(script);
  recetasCarne = getMultipleRandom(recetasCarne, 2)
  var script = require('../assets/recetasPescadoUnion.json')
  let recetasPescado = await Receta.aggregate(script);
  recetasPescado = getMultipleRandom(recetasPescado, 2)
  
  let recetasCarnePescado = recetasCarne.concat(recetasPescado)
  // desordenamos el array
  recetasCarnePescado = getMultipleRandom(recetasCarnePescado, recetasCarnePescado.length)
  //// console.log(recetasCarnePescado)

  // relacionar tabla de receta con alimentos para comprobar las categorias de los alimentos

  for (let i = 0; i < platosPrincipales.length; i++) {
    if(platosPrincipales[i] == undefined){
      platosPrincipales[i] = recetasCarnePescado.pop();
    }
  }

  platosPrincipales.forEach(plato => {
    let intervalo = mapaIntervalosSemanal.get(plato.categoria) - 1
    mapaIntervalosSemanal.set(plato.categoria, intervalo)
  })

  // guarniciones extra para los platos de carne y pescado
  // Comprobar para cada una si quedan por asignar o si esa receta no tiene ya esa categoria
  //// console.log("queda por tomar: ", mapaIntervalosSemanal)
  for (let i = 0; i < platosPrincipales.length; i++) {
    let plato = platosPrincipales[i];
    platosPrincipales[i] = {
      plato: plato,
      guarnicion: ""
    }
    if(!(plato.categoria == 'CARNE BLANCA' || plato.categoria == 'PESCADO')) continue;
    let guarnicion = "";
    
    // PASTA
    //// console.log("queda pasta? " + mapaIntervalosSemanal.get('PASTA'))
    if(mapaIntervalosSemanal.get('PASTA') > 0){
      // //// console.log(" aver", platosPrincipales[i])
      if(!plato.vinculados.find(alimento => alimento.categoria == "PASTA")){
        guarnicion = "Pasta"
        mapaIntervalosSemanal.set('PASTA', mapaIntervalosSemanal.get('PASTA')-1)
      } 
    } else {
        // ARROCES
        //// console.log("queda arroz? " + mapaIntervalosSemanal.get('ARROCES'))
        if(mapaIntervalosSemanal.get('ARROCES') > 0){
          if(!plato.vinculados.find(alimento => alimento.categoria == "ARROCES")){
            guarnicion = "Arroz"
            mapaIntervalosSemanal.set('ARROCES', mapaIntervalosSemanal.get('ARROCES')-1)
          } 
        } else {
            //// console.log("queda patata? " + mapaIntervalosSemanal.get('PATATAS'))
            if(mapaIntervalosSemanal.get('PATATAS') > 0){
              guarnicion = "Patata"
              mapaIntervalosSemanal.set('PATATAS', mapaIntervalosSemanal.get('PATATAS')-1)
            }
          
        }
      }
    
    platosPrincipales[i] = {
      plato: plato,
      guarnicion: guarnicion
    }
    //// console.log("plato de " + plato.nombre + " / categoria: " + plato.categoria + " / guarnicacion: " + guarnicion)
  }
  //// console.log("queda por tomar: ", mapaIntervalosSemanal)
  

  // Cenas
  // Hay que cenar verduras pero comprobamos si quedan pescados o carnes blancas por asignar
  // Si es asi, buscamos recetas de carne o pescado que lleven entre sus ingredientes verduras
  let recetasCarneCena = new Array(mapaIntervalosSemanal.get('CARNE BLANCA'))
  let recetasPescadoCena = new Array(mapaIntervalosSemanal.get('PESCADO'))
  if(mapaIntervalosSemanal.get('CARNE BLANCA') > 0){
    var script = require('../assets/recetasCarneUnionConVerduras.json')
    let recetasCarne = await Receta.aggregate(script);
    //// console.log("id: ", platosPrincipales.map(p => p.plato?.idReceta))
    let recetasCarneNoUsadas = recetasCarne.filter(receta => {
      return platosPrincipales.map(p => p.plato.idReceta).includes(receta.idReceta)
    })
    recetasCarneCena = getMultipleRandom(recetasCarneNoUsadas, mapaIntervalosSemanal.get('CARNE BLANCA'))
  }
  if(mapaIntervalosSemanal.get('PESCADO') > 0){
    var script = require('../assets/recetasPescadoUnionConVerduras.json')
    let recetasPescado = await Receta.aggregate(script);
    //// console.log("id: ", platosPrincipales.map(p => p.plato?.idReceta))
    let recetasPescadoNoUsadas = recetasPescado.filter(receta => {
      return platosPrincipales.map(p => p.plato.idReceta).includes(receta.idReceta)
    })
    recetasPescadoCena = getMultipleRandom(recetasPescadoNoUsadas, mapaIntervalosSemanal.get('PESCADO'))
  }

  let cenas = new Array(7);
  // buscamos recetas de verduras para las cenas sobrantes
  let recetasCena = await Receta.find({"categoria": "VERDURAS"});
  // las barajamos
  recetasCena = getMultipleRandom(recetasCena, recetasCena.length)
  let arrayIntervalosVer = mapaIntervalosDiario.get('VERDURAS')
  for (let i = 0; i < cenas.length; i++) {
    if((recetasCarneCena.length > 0) && (platosPrincipales[i].plato.categoria != 'CARNE BLANCA')){
      cenas[i] = recetasCarneCena.pop();
      mapaIntervalosSemanal.set('CARNE BLANCA', mapaIntervalosSemanal.get('CARNE BLANCA')-1)
    } else if((recetasPescadoCena.length > 0) && (platosPrincipales[i].plato.categoria != 'PESCADO')){
      cenas[i] = recetasPescadoCena.pop();
      mapaIntervalosSemanal.set('PESCADO', mapaIntervalosSemanal.get('PESCADO')-1)
    } else {
      cenas[i] = recetasCena.pop();
      arrayIntervalosVer[i] = arrayIntervalosVer[i] - 1
    }
  }
  mapaIntervalosDiario.set('VERDURAS', arrayIntervalosVer)
  
  // Pasamos a las recetas simples (desayuno, almuerzo, cena)
  // Desayunos
  let desayunos = new Array(7);
  let recetasSimples = await RecetaSimple.find({});
  //// console.log(mapaIntervalosSemanal)
  //// console.log(mapaIntervalosDiario)
  // Elegir aletaoriamente
  desayunos = getMultipleRandom(recetasSimples, 7)
  //// console.log("desayunos", desayunos)
  let arrayIntervalosPan = mapaIntervalosDiario.get('PAN');
  let arrayIntervalosLacteos = mapaIntervalosDiario.get('PAN');
  for (let i = 0; i < desayunos.length; i++) {
    if(desayunos[i].categoria.includes('PAN')){
      arrayIntervalosPan[i] = arrayIntervalosPan[i] - 1
    } else if(desayunos[i].categoria.includes('PAN')){
      arrayIntervalosLacteos[i] = arrayIntervalosLacteos[i] - 1
    }
  }
  mapaIntervalosDiario.set('PAN', arrayIntervalosPan);
  mapaIntervalosDiario.set('LACTEOS', arrayIntervalosLacteos);
  //// console.log(mapaIntervalosDiario)

  // Almuerzos y meriendas
  let recetasSimplesLacteos = await RecetaSimple.find({$and: [{categoria: "LACTEOS"},{categoria: {$ne: "PAN"}}]});
  let recetasSimplesPan = await RecetaSimple.find({$and: [{categoria: "PAN"},{categoria: {$ne: "LACTEOS"}}]});
  let recetasSimplesAmbos = await RecetaSimple.find({$and: [{categoria: "PAN"},{categoria: "LACTEOS"}]});
  let recetasSimplesFruta = await RecetaSimple.find({categoria: "FRUTA"});
  let almuerzos = new Array(7);
  let meriendas = new Array(7);
  for (let i = 0; i < almuerzos.length; i++) {
    let randomPan = random(0, recetasSimplesPan.length-1)
    let randomLacteos = random(0, recetasSimplesLacteos.length-1)
    let randomAmbos = random(0, recetasSimplesAmbos.length-1)
    let randomFruta = random(0, recetasSimplesFruta.length-1)
    //// console.log("dia " + (i+1))
    if(arrayIntervalosPan[i] > 0 && recetasSimplesLacteos[i] > 0) {
      almuerzos[i] = recetasSimplesAmbos[randomAmbos]
      arrayIntervalosPan[i]--;
      arrayIntervalosLacteos[i]--;
      randomAmbos = random(0, recetasSimplesAmbos.length-1)
    } else if(arrayIntervalosPan[i]){
      almuerzos[i] = recetasSimplesPan[randomPan]
      randomPan = random(0, recetasSimplesPan.length-1)
      arrayIntervalosPan[i]--
    } else if(arrayIntervalosLacteos[i]){
      almuerzos[i] = recetasSimplesLacteos[randomLacteos]
      arrayIntervalosLacteos[i]--;
      randomLacteos = random(0, recetasSimplesLacteos.length-1)
    } else {
      almuerzos[i] = recetasSimplesFruta[randomFruta]
      randomFruta = random(0, recetasSimplesFruta.length-1)
    }
    //// console.log("almuerzo: " + almuerzos[i]?.nombre)
    //merienda
    
    
    if(arrayIntervalosPan[i] > 0 && recetasSimplesLacteos[i] > 0) {
      while(almuerzos[i].id == recetasSimplesAmbos[randomAmbos].id){
        randomAmbos = random(0, recetasSimplesAmbos.length-1)
      }
      meriendas[i] = recetasSimplesAmbos[randomAmbos]
      arrayIntervalosPan[i]--;
      arrayIntervalosLacteos[i]--;
    } else if(arrayIntervalosPan[i]){
      while(almuerzos[i].id == recetasSimplesPan[randomPan].id){
        randomPan = random(0, recetasSimplesPan.length-1)
      }
      meriendas[i] = recetasSimplesPan[randomPan]
      arrayIntervalosPan[i]--
    } else if(arrayIntervalosLacteos[i]){
      while(almuerzos[i].id == recetasSimplesLacteos[randomLacteos].id){
        randomLacteos = random(0, recetasSimplesLacteos.length-1)
      }
      meriendas[i] = recetasSimplesLacteos[randomLacteos]
      arrayIntervalosLacteos[i]--;
    } else {
      while(almuerzos[i].id == recetasSimplesFruta[randomFruta].id){
        randomFruta = random(0, recetasSimplesFruta.length-1)
      }
      meriendas[i] = recetasSimplesFruta[randomFruta]
    }
    //// console.log("mierda: " + meriendas[i]?.nombre)
    
  }

  

  // console.log(meriendas)

  let arrayPlanesDiarios = new Array(7)
  for (let i = 0; i < 7; i++) {
    const comida = {
      primerPlato: primerosPlatos[i],
      platoPrincipal: platosPrincipales[i]
    }
    // // console.log("comida", comida)
    const planDiario = {
      id: i,
      desayuno: desayunos[i],
      almuerzo: almuerzos[i],
      comida: comida,
      merienda: meriendas[i],
      cena: cenas[i]
    }
    arrayPlanesDiarios.push(planDiario)
    // // console.log("dia", planDiario)
  }

  let idPlan = (await Plan.countDocuments()) + 1;

  const plan = new Plan({
    id: idPlan,
    dieta: "REGULAR",
    planesDiarios: arrayPlanesDiarios
  })

  const planGuardado = await plan.save();

  let userId = req.body.usuario;
  const user = await User.findOneAndUpdate(userId, {$set:{planComida: idPlan}});

  return res
    .status(200)
    .json({ data: planGuardado, message: "Plan guardada" });
  
  // //// console.log(almuerzos, meriendas)

};


module.exports = planCtrl;


function random(min, max) { // min y max incluidos
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getCategoriasComplejasDiarias(piramide) {
  let idCategoriasComplejas = [2,3,4,6,8,11,12]
  // //// console.log(piramide.piramide)
  return piramide.piramide.filter(categoria => {
    return (idCategoriasComplejas.includes(categoria.idCategoria) && categoria.frecuencia == 'DIARIA') 
  })
}

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
