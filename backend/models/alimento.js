const { Schema, model } = require('mongoose')

const AlimentoSchema = new Schema({
    idAlimento: {type: Number, required: true},
    nombre: {type: String, required: true},
    estado: {type: String, required: true},
    cal: {type: Number, required: true},
    pr: {type: Number, required: true},
    gr: {type: Number, required: true},
    hc: {type: Number, required: true},
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Alimento',AlimentoSchema);
  
  
  
 