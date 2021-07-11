const { Schema, model } = require('mongoose')

const PlatoSchema = new Schema({
    alimentos:
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Plato',PlatoSchema);
  
  
  
 