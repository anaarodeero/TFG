const user = require("../models/user");
const User = require("../models/user");
var jwt = require('jsonwebtoken');

const userCtrl = {};

userCtrl.getUsers = async (req, res, next) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.createUser = async (req, res, next) => {
  console.log("creamos");
  const user = new User({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    password: req.body.password,
    fecha_nacimiento: req.body.fecha_nacimiento,
    sexo: req.body.sexo,
    altura: req.body.altura,
    peso: req.body.peso,
    //objetivo: req.body.objetivo,
    alergias: req.body.alergias,
    dieta: req.body.dieta,
  });
  //comprobar que el correo que no exista
  const userEncontrado = await User.findOne({email: user.email});
  if(userEncontrado){
    return res.status(401).send("Este usuario ya existe");
  }

  const usuarioGuardado =   await user.save();

  const token = jwt.sign({ _id: usuarioGuardado._id }, "clave_secreta");
  return res.status(200).json({ token: token, message: "Registro exitoso" });

};

userCtrl.loginUser = async (req, res, next) => {
  console.log("logeamos");
  let email = req.body.email;
  let password = req.body.password;
  //comprobar que el correo que no exista
  const userEncontrado = await User.findOne({email: email});
  if(userEncontrado){
    if(userEncontrado.password != password){
      return res.status(401).send("La contraseña es incorrecta");
    }
  } else {
    return res.status(401).send("Este usuario no tiene cuenta");
  }

  const token = jwt.sign({ _id: userEncontrado._id }, "clave_secreta");
  return res.status(200).json({ token: token, message: "Registro exitoso" });

};

userCtrl.authenticate = async (req, res, next) => {
  console.log("aqui")
  // jwt.verify(req.body.token, "clave_secreta", 
  //   (data, err)=>{res.status(200).json({result: data})},
  //   (err)=>{console.log(err)}
  // );
  let token = req.body.token;
  if(token == '') token = "null";

    jwt.verify(token, "clave_secreta", function (err, data){
      if (err){
        res.status(200).send(false);
      } else {
        res.status(200).send(true);
      }
    });

  
  //jwt.sign({ _id: "4444" }, "clave_secreta");


};


userCtrl.getUserByEmail = async (req, res, next) => {
  let email = req.query.email;
  console.log("email", email)
  const user = await User.find({email: email});
  if(user[0]) res.json(user);
  else null;
};



userCtrl.getUser = async (req, res, next) => {
  let cookie = req.headers.authorization;
  let id = jwt.decode(cookie.split(" ")[1]);
  const user = await User.findById(id);
  if(user) res.json(user);
  else res.json({user: false});
};

userCtrl.editUser = async (req, res, next) => {
  let cookie = req.headers.authorization;
  let id = jwt.decode(cookie.split(" ")[1]);
  await User.findByIdAndUpdate(id, {$set: req.body}, {new: true});
  res.json({ status: "User Updated" });
};

userCtrl.deleteUser = async (req, res, next) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({ status: "User Deleted" });
};

module.exports = userCtrl;