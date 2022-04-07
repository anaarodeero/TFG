const { Schema, model } = require('mongoose')

const IngredienteSchema = new Schema({
    alimento: {type: Number, required: true},
    ingrediente: {type: String, required: true}
});

const PlatoSchema = new Schema({
    idPlato: {type: Number, required: true},
    categoria: {enum: [ARROCES, PASTA, PESCADO, CARNE, VERDURAS], required: true},
    nombre: {type: String, required: true},
    ingredientes: {type: [IngredienteSchema], required: true},
    dieta: {enum: [REGULAR, VEGETARIANA, VEGANA], required: true},
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Plato',PlatoSchema);
  
  
  
 