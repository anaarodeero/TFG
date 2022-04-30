const RecetaSimple = require("../models/recetaSimple");
var jwt = require("jsonwebtoken");

const recetaSimplesCtrl = {};

recetaSimplesCtrl.getNumeroRecetas = async (req, res, next) => {
  const tam = await RecetaSimple.count();
  res.json(tam);
  // const recetasSimples = await Receta.find();
  // console.log("num: ", recetasSimples)
  // res.json(recetasSimples);
};

recetaSimplesCtrl.getRecetas = async (req, res, next) => {
  const recetasSimples = await RecetaSimple.find();
  console.log("buscando", recetasSimples)
  res.json(recetasSimples);
};

recetaSimplesCtrl.createReceta = async (req, res, next) => {
  console.log("crear", req.body);
  let idReceta = (await RecetaSimple.countDocuments()) + 1;
  console.log("nuevo id: ", idReceta);
  const recetaSimple = new RecetaSimple({
    id: idReceta,
    categorias:req.body.categorias,
    nombre: req.body.nombre,
    alimentos: req.body.alimentos,
  });
  console.log("recetaSimples", recetaSimple);

  const recetaSimpleGuardado = await recetaSimple.save();

  return res
    .status(200)
    .json({ token: recetaSimpleGuardado, message: "Receta guardada" });
};

recetaSimplesCtrl.getRecetaById = async (req, res, next) => {
  let id = req.query.id;
  console.log("id: ", id);
  const recetaSimples = await RecetaSimple.find({ id: Number(id) });
  console.log("econtrado: ", recetaSimples);
  if (recetaSimples[0]) res.json(recetaSimples[0]);
  else null;
};

module.exports = recetaSimplesCtrl;
