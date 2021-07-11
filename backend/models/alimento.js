const { Schema, model } = require('mongoose')

const AlimentoSchema = new Schema({
    
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Alimento',AlimentoSchema);
  
  
  
 