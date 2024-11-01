const mongoose = require("mongoose");
//villa = individual house same schema
const villaSchema = new mongoose.Schema({
  bedrooms: Number,
  bathrooms: Number,
  additionalRooms: Number,
  balconies: Number,
  totalFloors: Number,
  furnishedStatus: String,
  parkingOption: String,
  boundaryWall: Boolean,
  roadWidth: Number,
  propertyType: {
    type: String,
    enum: ["Residential"],
    required: true,
  },
  subType: {
    type: String,
    required: true,
    enum: ["Independent House/Villa"],
  },
  Img1: String,
  Img2: String,
  Img3: String,
  location: {
    type: String,
    required: true,
  },
  landmark: String,
  streetName: String,
  size: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    enum: [
      "Sq.Ft",
      "Sq.Yards",
      "Sq.Meter",
      "Acres",
      "Cents",
      "Grounds",
      "Hectares",
    ],
    required: true,
  },
  price: {
    amount: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      enum: ["Crore", "Lakh", "Thousand", "Custom"],
      required: true,
    },
    negotiable: {
      type: Boolean,
      default: false,
    },
  },
  saleType: String,
  propertyStatus: String,
  availableFrom: Date,
  ageOfProperty: Number,
  suitableTimeToCall: String,
  description: String,
  verificationNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Villa", villaSchema);
