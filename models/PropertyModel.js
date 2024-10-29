const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({

  propertyName: { type: String },
  ownerName: { type: String},
  propertyType: { type: String},
  price: { type: Number },
  unitSizes: { type: String },
  perSqFt:{type:String},
  no_of_units:{type:String},
  location: { type: String },
  _approved: { type: Boolean },
  unitSizes: { type: [Number] },
  projectName: { type: String },
  about: { type: String },
  advantages: { type: String },
  img:{
    type:String
  }

}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);
