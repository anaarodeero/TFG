const Alimento = require("../models/alimento");
var jwt = require('jsonwebtoken');

const alimentoCtrl = {};

alimentoCtrl.getNumeroAlimentos = async (req, res, next) => {
  const tam = await Alimento.count();
  res.json(tam);
  // const alimentos = await Alimento.find();
  // console.log("num: ", alimentos)
  // res.json(alimentos);
};

alimentoCtrl.getAlimentos = async (req, res, next) => {
  const alimentos = await Alimento.find();
  res.json(alimentos);
};

alimentoCtrl.createAlimento = async (req, res, next) => {
  console.log("crear", req.body)
  let idAlimento = await Alimento.countDocuments() + 1
  console.log("nuevo id: ", idAlimento)
  const alimento = new Alimento({
    idAlimento: idAlimento,
    nombre: req.body.nombre,
    estado: req.body.estado,
    cal: req.body.cal,
    pr: req.body.pr,
    gr: req.body.gr,
    hc: req.body.hc
  });

  const alimentoGuardado = await alimento.save();

  return res.status(200).json({ token: alimentoGuardado, message: "Alimento guardado" });

};

// alimentoCtrl.loginAlimento = async (req, res, next) => {
//   console.log("logeamos");
//   let email = req.body.email;
//   let password = req.body.password;
//   //comprobar que el correo que no exista
//   const alimentoEncontrado = await Alimento.findOne({email: email});
//   if(alimentoEncontrado){
//     if(alimentoEncontrado.password != password){
//       return res.status(401).send("La contraseña es incorrecta");
//     }
//   } else {
//     return res.status(404).send("Este usuario no tiene cuenta");
//   }

//   const token = jwt.sign({ _id: alimentoEncontrado._id }, "clave_secreta");
//   return res.status(200).json({ token: token, message: "Registro exitoso" });

// };

// alimentoCtrl.authenticate = async (req, res, next) => {
//   let token = req.body.token;
//   if(token == '') token = "null";

//     jwt.verify(token, "clave_secreta", function (err, data){
//       if (err){
//         res.status(200).send(false);
//       } else {
//         res.status(200).send(true);
//       }
//     });

  
//   //jwt.sign({ _id: "4444" }, "clave_secreta");


// };


alimentoCtrl.getAlimentoById = async (req, res, next) => {
  let id = req.query.id;
  const alimento = await Alimento.find({id: Number(id)});
  if(alimento[0]) res.json(alimento[0]);
  else null;
};



// alimentoCtrl.getAlimento = async (req, res, next) => {
//   let cookie = req.headers.authorization;
//   let id = jwt.decode(cookie.split(" ")[1]);
//   const alimento = await Alimento.findById(id);
//   if(alimento) res.json(alimento);
//   else res.json({alimento: false});
// };

// alimentoCtrl.editAlimento = async (req, res, next) => {
//   let cookie = req.headers.authorization;
//   let id = jwt.decode(cookie.split(" ")[1]);
//   await Alimento.findByIdAndUpdate(id, {$set: req.body}, {new: true});
//   res.json({ status: "Alimento Updated" });
// };

// alimentoCtrl.deleteAlimento = async (req, res, next) => {
//   await Alimento.findByIdAndRemove(req.params.id);
//   res.json({ status: "Alimento Deleted" });
// };

module.exports = alimentoCtrl;