const { Schema, model } = require('mongoose')
const RecetaSimple = require('./recetaSimple.js');
const RecetaSchema = require('./receta.js');


const PlanDiarioSchema = new Schema({
    id: {type: Number, required: true},
    desayuno: [{type: Schema.Types.ObjectId, ref: 'RecetaSimple'}],
    almuerzo: [{type: Schema.Types.ObjectId, ref: 'RecetaSimple'}],
    comida: [{type: Schema.Types.ObjectId, ref: 'Receta'}],
    merienda: [{type: Schema.Types.ObjectId, ref: 'RecetaSimple'}],
    cena: [{type: Schema.Types.ObjectId, ref: 'Receta'}]
}, {
    timestamps: true,
    versionKey: false
});

const PlanSchema = new Schema({
    id: {type: Number, required: true},
    dieta: {type: String, enum: ['REGULAR', 'VEGETARIANA', 'VEGANA']},
    planesDiarios: [PlanDiarioSchema]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Plan',PlanSchema);
module.exports = model('PlanDiario',PlanDiarioSchema);
  
  
  
 