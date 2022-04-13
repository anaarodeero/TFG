const { Schema, model } = require('mongoose')

const IngredienteSchema = new Schema({
    alimento: {type: Number, required: true},
    ingrediente: {type: String, required: true}
});

const RecetaSchema = new Schema({
    idReceta: {type: Number, required: true},
    categoria: {enum: ['ARROCES', 'PASTA', 'PESCADO', 'CARNE', 'VERDURAS']},
    nombre: {type: String, required: true},
    ingredientes: {type: [IngredienteSchema], required: true},
    dieta: {enum: ['REGULAR', 'VEGETARIANA', 'VEGANA']},
    preparacion: {type: [String], required: true}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Receta',RecetaSchema);
  
  
  
 