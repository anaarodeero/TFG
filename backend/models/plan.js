const { Schema, model } = require('mongoose')

const IngredienteSchema = new Schema({
    alimento: {type: Number, required: true},
    ingrediente: {type: String, required: true}
});

const RecetaSchema = new Schema({
    idReceta: {type: Number, required: true},
    categoria: {type: String, enum: ['ARROCES', 'PASTA', 'PESCADO', 'CARNE BLANCA', 'CARNE ROJA', 'VERDURAS', 'LEGUMBRES']},
    nombre: {type: String, required: true},
    ingredientes: {type: [IngredienteSchema], required: true},
    dieta: {type: String, enum: ['REGULAR', 'VEGETARIANA', 'VEGANA']},
    preparacion: {type: [String], required: true}
}, {
    timestamps: true,
    versionKey: false
});

const RecetaSimpleSchema = new Schema({
    id: {type: Number, required: true},
    nombre: {type: String, required: true},
    alimentos: {type: [Number], required: true},
    categoria: {type: [String], enum: ['LACTEOS', 'PESCADO', 'CARNE BLANCA', 'CARNE ROJA', 'HUEVO', 'LEGUMBRES', 'CEREALES',
                'FRUTOS SECOS', 'VERDURAS', 'FRUTA', 'PAN', 'ARROCES', 'PATATAS', 'AZUCARES', 'ACEITE']},
}, {
    timestamps: true,
    versionKey: false
});
 
const PlatoPrincipalSchema = new Schema({
    plato: RecetaSchema,
    guarnicion: {type: String}
}, {
    timestamps: true,
    versionKey: false
});

const ComidaSchema = new Schema({
    primerPlato: RecetaSchema,
    platoPrincipal: PlatoPrincipalSchema
}, {
    timestamps: true,
    versionKey: false
});

const PlanDiarioSchema = new Schema({
    id: {type: Number, required: true},
    desayuno: RecetaSimpleSchema,
    almuerzo: RecetaSimpleSchema,
    comida: ComidaSchema,
    merienda: RecetaSimpleSchema,
    cena: RecetaSchema
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
  
  