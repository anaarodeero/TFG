const { Schema, model } = require('mongoose')

const DistribucionCategoriaAlimentoSchema = new Schema({
    idCategoria: {type: Number, required: true},
    nombre: {type: String, required: true},
    frecuencia: {enum: [SEMANAL, DIARIA], required: true},
    limiteInferior: {type: Number, required: true},
    limiteSuperior: {type: Number, required: true},
    desayuno: {type: Boolean, required: true},
    almuerzo: {type: Boolean, required: true},
    comida: {type: Boolean, required: true},
    merienda: {type: Boolean, required: true},
    cena: {type: Boolean, required: true}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('DistribucionCategoriaAlimento',DistribucionCategoriaAlimentoSchema);
  
  
  
 