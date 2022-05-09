const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    planComida: {type: Number}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User',UserSchema);
  
  
  
 