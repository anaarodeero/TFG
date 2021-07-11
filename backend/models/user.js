const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    fecha_nacimiento: {type: Date, required: true},
    sexo: {type: String, enum: ['Mujer', 'Hombre'], required: true},
    altura: {type: Number, required: true},
    peso: {type: Number, required: true},
    //objetivo: {type: String, enum: ['Ganar', 'Perder', "Mantener"], required: true},
    alergias: {type: [String]},
    alergias: {type: [String], required: true}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User',UserSchema);
  
  
  
 