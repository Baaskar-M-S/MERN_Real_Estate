const mongoose = require("mongoose");

const apartmentSchema = new mongoose.Schema({
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  additionalRooms: {
    type: Number,
    required: false,
  },
  balconies: {
    type: Number,
    required: false,
  },
  propertyOnFloor: {
    type: Number,
    required: true,
  },
  totalFloors: {
    type: Number,
    required: true,
  },
  furnishedStatus: {
    type: String,
    required: true,
  },
  parkingOption: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    enum: ["Residential"],
    required: true,
  },
  subType: {
    type: String,
    enum: ["Apartment"],
    required: true,
  },
  Img1: {
    type: String,
    required: false,
  },
  Img2: {
    type: String,
    required: false,
  },
  Img3: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: false,
  },
  streetName: {
    type: String,
    required: false,
  },
  size: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    enum: ["Sq.Ft", "Sq.Yards", "Sq.Meter", "Acres", "Cents", "Grounds", "Hectares"],
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
      required: true,
      default: false,
    },
  },
  saleType: {
    type: String,
    required: true,
  },
  propertyStatus: {
    type: String,
    required: true,
  },
  availableFrom: {
    type: Date,
    required: true,
  },
  ageOfProperty: {
    type: Number,
    required: true,
  },
  suitableTimeToCall: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  verificationNumber: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Apartment", apartmentSchema);
