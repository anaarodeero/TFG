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
    categoria: req.body.categoria,
    nombre: req.body.nombre,
    ingredientes: req.body.ingredientes,
    dieta: req.body.dieta,
    preparacion: req.body.preparacio
  });

  const recetaGuardado = await receta.save();

  return res
    .status(200)
    .json({ token: recetaGuardado, message: "Receta guardada" });
};

recetaCtrl.getRecetaById = async (req, res, next) => {
  let id = req.query.id;
  const receta = await Receta.find({ id: Number(id) });
  if (receta[0]) res.json(receta[0]);
  else null;
};

module.exports = recetaCtrl;
