const Receta = require("../models/receta");
var jwt = require("jsonwebtoken");

const recetaCtrl = {};

recetaCtrl.getNumeroRecetas = async (req, res, next) => {
  const tam = await Receta.count();
  res.json(tam);
  // const recetas = await Receta.find();
  // console.log("num: ", recetas)
  // res.json(recetas);
};

recetaCtrl.getRecetas = async (req, res, next) => {
  const recetas = await Receta.find();
  res.json(recetas);
};

recetaCtrl.createReceta = async (req, res, next) => {
  console.log("crear", req.body);
  let idReceta = (await Receta.countDocuments()) + 1;
  console.log("nuevo id: ", idReceta);
  const receta = new Receta({
    idReceta: idReceta,
    categoria: req.body.categoria.value,
    nombre: req.body.nombre,
    ingredientes: req.body.ingredientes,
    dieta: req.body.dieta.value,
    preparacion: req.body.preparacion
  });
  console.log("receta", receta);

  const recetaGuardado = await receta.save();

  return res
    .status(200)
    .json({ token: recetaGuardado, message: "Receta guardada" });
};

recetaCtrl.getRecetaById = async (req, res, next) => {
  let id = req.query.idReceta;
  const receta = await Receta.find({ idReceta: Number(id) });
  if (receta[0]) res.json(receta[0]);
  else null;
};

recetaCtrl.getRecetasByCategoria = async (req, res, next) => {
  let categoria = req.query.categoria;
  const recetas = await Receta.find({ categoria: categoria });
  if (recetas) res.json(recetas);
  else null;
};


module.exports = recetaCtrl;
