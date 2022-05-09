const { Schema, model } = require('mongoose')

const RecetaSimpleSchema = new Schema({
    id: {type: Number, required: true},
    nombre: {type: String, required: true},
    alimentos: {type: [Number], required: true},
    categoria: {type: [String], enum: ['LACTEOS', 'PESCADO', 'CARNE BLANCA', 'CARNE ROJA', 'HUEVO', 'LEGUMBRES', 
                'FRUTOS SECOS', 'VERDURAS', 'FRUTA', 'PAN', 'ARROCES', 'PATATAS', 'AZUCARES', 'ACEITE']},
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('RecetaSimple',RecetaSimpleSchema);