const Plan = require("../models/plan");
const PlanDiario = require("../models/plan");
const Piramide = require("../models/piramide");
const Receta = require("../models/receta");

var jwt = require("jsonwebtoken");
const recetaController = require('./recetaController');
const piramideController = require('./piramideController');
const RecetaSimple = require("../models/recetaSimple");

const planCtrl = {};

planCtrl.getMyPlan = async (req, res, next) => {
  let id = req.query.idPlan;
  const plan = await Plan.find({ idPlan: Number(id) });
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
    //Vemos el intervalo de la categoria
    let intervalo;
    if(categoria.limiteInferior == categoria.limiteSuperior){
      intervalo = categoria.limiteInferior
    } else {
      intervalo = random(categoria.limiteInferior, categoria.limiteSuperior)
    }
    if(categoria.frecuencia == 'SEMANAL'){
      mapaIntervalosSemanal.set(categoria.nombre, intervalo)
    } else if(categoria.frecuencia == 'DIARIA'){
      let array = new Array(7)
      array.fill(intervalo)
      mapaIntervalosDiario.set(categoria.nombre, array)
    }
  })


  // comenzamos con las comidas principales, ya que es algo fijo.
  // primeros platos ensaladas, cremas o sopas
  var script = require('../assets/primerPlatoComidaRegular.json')
  let recetas = await Receta.find(script);
  console.log("recetas: ", recetas.length)
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

  console.log("queda por tomar de ARROZ: ", mapaIntervalosSemanal.get('ARROZ INTEGRAL'))
  console.log("queda por tomar de PASTA: ", mapaIntervalosSemanal.get('PASTA INTEGRAL'))

  // Vemos los platos principales
  let platosPrincipales = new Array(7);
  // Cogemos los 3 platos de comidas fijas, arroz, pasta y legumbres
  let recetasArroz = await Receta.find({"categoria": "ARROZ INTEGRAL"});
  // Cogemos una aleatoria
  let recetaArroz = recetasArroz[random(0, recetasArroz.length-1)]
  // Repetimos con la pasta y legumbres
  let recetasPasta = await Receta.find({"categoria": "PASTA INTEGRAL"});
  let recetaPasta = recetasPasta[random(0, recetasPasta.length-1)]
  // console.log("pasta: ", recetaPasta)
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
  console.log(recetasCarnePescado)

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
  console.log("queda por tomar: ", mapaIntervalosSemanal)
  for (let i = 0; i < platosPrincipales.length; i++) {
    let plato = platosPrincipales[i];
    platosPrincipales[i] = {
      plato: plato,
      guarnicion: ""
    }
    if(!(plato.categoria == 'CARNE BLANCA' || plato.categoria == 'PESCADO')) continue;
    let guarnicion = "";
    
    // PASTA
    console.log("queda pasta? " + mapaIntervalosSemanal.get('PASTA INTEGRAL'))
    if(mapaIntervalosSemanal.get('PASTA INTEGRAL') > 0){
      // console.log(" aver", platosPrincipales[i])
      if(!plato.vinculados.find(alimento => alimento.categoria == "PASTA")){
        guarnicion = "PASTA"
        mapaIntervalosSemanal.set('PASTA INTEGRAL', mapaIntervalosSemanal.get('PASTA INTEGRAL')-1)
      } 
    } else {
        // ARROZ
        console.log("queda arroz? " + mapaIntervalosSemanal.get('ARROZ INTEGRAL'))
        if(mapaIntervalosSemanal.get('ARROZ INTEGRAL') > 0){
          if(!plato.vinculados.find(alimento => alimento.categoria == "ARROZ")){
            guarnicion = "ARROZ"
            mapaIntervalosSemanal.set('ARROZ INTEGRAL', mapaIntervalosSemanal.get('ARROZ INTEGRAL')-1)
          } 
        } else {
            console.log("queda patata? " + mapaIntervalosSemanal.get('PATATAS'))
            if(mapaIntervalosSemanal.get('PATATAS') > 0){
              guarnicion = "PATATA"
              mapaIntervalosSemanal.set('PATATAS', mapaIntervalosSemanal.get('PATATAS')-1)
            }
          
        }
      }
    
    platosPrincipales[i] = {
      plato: plato,
      guarnicion: guarnicion
    }
    console.log("plato de " + plato.nombre + " / categoria: " + plato.categoria + " / guarnicacion: " + guarnicion)
  }
  console.log("queda por tomar: ", mapaIntervalosSemanal)


  // Cenas
  // Hay que cenar verduras pero comprobamos si quedan pescados o carnes blancas por asignar
  // Si es asi, buscamos recetas de carne o pescado que lleven entre sus ingredientes verduras
  let recetasCarneCena = new Array(mapaIntervalosSemanal.get('CARNE BLANCA'))
  let recetasPescadoCena = new Array(mapaIntervalosSemanal.get('PESCADO'))
  if(mapaIntervalosSemanal.get('CARNE BLANCA') > 0){
    var script = require('../assets/recetasCarneUnionConVerduras.json')
    let recetasCarne = await Receta.aggregate(script);
    console.log("id: ", platosPrincipales.map(p => p.plato?.idReceta))
    let recetasCarneNoUsadas = recetasCarne.filter(receta => {
      return platosPrincipales.map(p => p.plato.idReceta).includes(receta.idReceta)
    })
    recetasCarneCena = getMultipleRandom(recetasCarneNoUsadas, mapaIntervalosSemanal.get('CARNE BLANCA'))
  }
  if(mapaIntervalosSemanal.get('PESCADO') > 0){
    var script = require('../assets/recetasPescadoUnionConVerduras.json')
    let recetasPescado = await Receta.aggregate(script);
    console.log("id: ", platosPrincipales.map(p => p.plato?.idReceta))
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
  console.log(mapaIntervalosSemanal)
  console.log(mapaIntervalosDiario)
  // Elegir aletaoriamente
  desayunos = getMultipleRandom(recetasSimples, 7)
  console.log("desayunos", desayunos)
  let arrayIntervalosPan = mapaIntervalosDiario.get('PAN INTEGRAL');
  let arrayIntervalosLacteos = mapaIntervalosDiario.get('PAN INTEGRAL');
  for (let i = 0; i < desayunos.length; i++) {
    if(desayunos[i].categoria.includes('PAN INTEGRAL')){
      arrayIntervalosPan[i] = arrayIntervalosPan[i] - 1
    } else if(desayunos[i].categoria.includes('PAN INTEGRAL')){
      arrayIntervalosLacteos[i] = arrayIntervalosLacteos[i] - 1
    }
  }
  mapaIntervalosDiario.set('PAN INTEGRAL', arrayIntervalosPan);
  mapaIntervalosDiario.set('LACTEOS', arrayIntervalosLacteos);
  console.log(mapaIntervalosDiario)

  // Almuerzos y meriendas
  let recetasSimplesLacteos = await RecetaSimple.find({$and: [{categoria: "LACTEOS"},{categoria: {$ne: "PAN INTEGRAL"}}]});
  let recetasSimplesPan = await RecetaSimple.find({$and: [{categoria: "PAN INTEGRAL"},{categoria: {$ne: "LACTEOS"}}]});
  let recetasSimplesAmbos = await RecetaSimple.find({$and: [{categoria: "PAN INTEGRAL"},{categoria: "LACTEOS"}]});
  let recetasSimplesFruta = await RecetaSimple.find({categoria: "FRUTA"});
  let almuerzos = new Array(7);
  let meriendas = new Array(7);
  for (let i = 0; i < almuerzos.length; i++) {
    let randomPan = random(0, recetasSimplesPan.length)
    let randomLacteos = random(0, recetasSimplesLacteos.length)
    let randomAmbos = random(0, recetasSimplesAmbos.length)
    let randomFruta = random(0, recetasSimplesFruta.length)
    console.log("dia " + (i+1))
    if(arrayIntervalosPan[i] > 0 && recetasSimplesLacteos[i] > 0) {
      almuerzos[i] = recetasSimplesAmbos[randomAmbos]
      arrayIntervalosPan[i]--;
      arrayIntervalosLacteos[i]--;
      randomAmbos = random(0, recetasSimplesAmbos.length)
    } else if(arrayIntervalosPan[i]){
      almuerzos[i] = recetasSimplesPan[randomPan]
      randomPan = random(0, recetasSimplesPan.length)
      arrayIntervalosPan[i]--
    } else if(arrayIntervalosLacteos[i]){
      almuerzos[i] = recetasSimplesLacteos[randomLacteos]
      arrayIntervalosLacteos[i]--;
      randomLacteos = random(0, recetasSimplesLacteos.length)
    } else {
      almuerzos[i] = recetasSimplesFruta[randomFruta]
      randomFruta = random(0, recetasSimplesFruta.length)
    }
    console.log("almuerzo: " + almuerzos[i]?.nombre)
    //merienda
    
    
    if(arrayIntervalosPan[i] > 0 && recetasSimplesLacteos[i] > 0) {
      meriendas[i] = recetasSimplesAmbos[randomAmbos]
      arrayIntervalosPan[i]--;
      arrayIntervalosLacteos[i]--;
    } else if(arrayIntervalosPan[i]){
      meriendas[i] = recetasSimplesPan[randomPan]
      arrayIntervalosPan[i]--
    } else if(arrayIntervalosLacteos[i]){
      meriendas[i] = recetasSimplesLacteos[randomPan]
      arrayIntervalosLacteos[i]--;
    } else {
      meriendas[i] = recetasSimplesFruta[randomFruta]
    }
    console.log("mierda: " + meriendas[i]?.nombre)
    
  }
  
  
  // console.log(almuerzos, meriendas)

};


planCtrl.createPlan = async (req, res, next) => {
  console.log("crear");
  let idPlan = (await Plan.countDocuments()) + 1;
  console.log("nuevo id: ", idPlan);

  let dieta = req.body.dieta;
  console.log("dieta: ", dieta)
  // Obtener mi piramide de las categorias segun mi dieta
  let piramide = await Piramide.find({ dieta: dieta });
  // Recorrer primero las categorias complejas (para comidas y cenas)
  console.log("piramide: ", getCategoriasComplejasDiarias(piramide[0]))
  getCategoriasComplejasDiarias(piramide[0]).forEach(async (categoria) => {
    //Vemos el intervalo de la categoria
    let intervalo;
    if(categoria.limiteInferior == categoria.limiteSuperior){
      intervalo = categoria.limiteInferior
    } else {
      intervalo = random(categoria.limiteInferior, categoria.limiteSuperior)
    }
    // Elijo aleatoriamente (intervalo) recetas de esta categoria
    let recetas = await Receta.find({ categoria: categoria.nombre });
    let idsRandom = [];
    let recetasElegidas = [];
    for (let i = 0; i < intervalo; i++) {
      let idRecetaRandom = random(0, recetas.length)
      if(idsRandom.includes(idRecetaRandom)){
        i--;
      } else {
        idsRandom.push(idRecetaRandom)
        recetasElegidas.push(recetas[idRecetaRandom])
      }
    }

    // Reparto en que dias de la semana
    // Elijo un dia al azar de la semana
    // L 0, M 1, X 2, J 3, V 4, S 5, D 6
    let dia = random(0, 6)
    // reparto los demas dejando un hueco
    let diasElegidos = []
    // diasElegidos.push(dia)
    for (let i = 0; i < intervalo; i++) {
      diasElegidos.push(dia)
      dia = (dia + 2) % 7;
    }

    let planDiarios = []
    for (let i = 0; i < 7; i++) {
      let plan = {
        id: i+1,
        desayuno: [],
        almuerzo: [],
        comida: [],
        merienda: [],
        cena: []
      }
      planDiarios[i] = plan;
    }

    // Colocamos las recetas en esos dias
    diasElegidos.forEach(dia => {
      planDiarios[dia].comida = recetasElegidas.pop();
    });

  });



  // const planDiario = new PlanDiario({
  //   idPlan: idPlan,
  //   categoria: req.body.categoria.value,
  //   nombre: req.body.nombre,
  //   ingredientes: req.body.ingredientes,
  //   dieta: req.body.dieta.value,
  //   preparacion: req.body.preparacion
  // });

  // const plan = new Plan({
  //   idPlan: idPlan,
  //   categoria: req.body.categoria.value,
  //   nombre: req.body.nombre,
  //   ingredientes: req.body.ingredientes,
  //   dieta: req.body.dieta.value,
  //   preparacion: req.body.preparacion
  // });
  // console.log("plan", plan);

  // const planGuardado = await plan.save();

  // return res
  //   .status(200)
  //   .json({ token: planGuardado, message: "Plan guardada" });
};

module.exports = planCtrl;


function random(min, max) { // min y max incluidos
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getCategoriasComplejasDiarias(piramide) {
  let idCategoriasComplejas = [2,3,4,6,8,11,12]
  // console.log(piramide.piramide)
  return piramide.piramide.filter(categoria => {
    return (idCategoriasComplejas.includes(categoria.idCategoria) && categoria.frecuencia == 'DIARIA') 
  })
}

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
