const { Schema, model } = require('mongoose')



const PlanDiarioSchema = new Schema({
    idCategoria: {type: Number, required: true},
    desayuno: [String],
    desayuno: [String],
    desayuno: [String],
    desayuno: [String],
    desayuno: [String],
    frecuencia: {enum: ['SEMANAL', 'DIARIA']},
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

const PlanSchema = new Schema({
    id: {type: Number, required: true},
    nombre: {type: String, required: true},
    piramide: [DistribucionCategoriaAlimentoSchema]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Plan',PlanSchema);
  
  
  
 