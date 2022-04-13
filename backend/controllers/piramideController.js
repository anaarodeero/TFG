const Piramide = require("../models/piramide");
var jwt = require('jsonwebtoken');

const piramideCtrl = {};

piramideCtrl.getPiramides = async (req, res, next) => {
  const piramides = await Piramide.find();
  res.json(piramides);
};


piramideCtrl.getPiramideById = async (req, res, next) => {
  let id = req.query.id;
  console.log("id", id)
  const piramide = await Piramide.find({id: id});
  if(piramide[0]) res.json(piramide[0]);
  else null;
};


module.exports = piramideCtrl;