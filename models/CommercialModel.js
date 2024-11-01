const mongoose = require("mongoose");



const commercialPropertySchema = new mongoose.Schema({
    propertyType: {
      type: String,
      enum: ['Commercial'],
      required: true
    },
    subType: {
      type: String,
      required: true,
      enum: [
        'Commercial Land', 'Commercial Shops', 'Commercial Showrooms',
        'Commercial Office/Space', 'Retail Showroom/Shop', 'Commercial Building',
        'Office Complex', 'Warehouse', 'Space in Retail Mall',
        'Office in IT Park', 'Office in Business Park', 'Storage',
        'Business Centre', 'Manufacturing', 'Guest House/Banquet Hall',
        'Industrial Land', 'Agricultural/Farm Land', 'Hotel/Resort', 'Super Market'
      ]
    },
    Img1:{
        type:String
    },
    Img2:{
        type:String
    },
    Img3:{
        type:String
    },
    location: {
      type: String,
      required: true
    },
    landmark: String,
    streetName: String,
    size: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      enum: [
        'Sq.Ft', 'Sq.Yards', 'Sq.Meter', 'Acres', 'Marla', 'Cents',
        'Bigha', 'Kottah', 'Kanal', 'Grounds', 'Ares', 'Biswa',
        'Guntha', 'Aankadam', 'Hectares', 'Rood', 'Chataks', 'Perch'
      ],
      required: true
    },
    plotLength: Number,
    plotBreadth: Number,
    roadWidth: Number,
    boundaryWall: Boolean,
    totalFloorsAllowed: Number,
    price: {
      amount: {
        type: Number,
        required: true
      },
      unit: {
        type: String,
        enum: ['Crore', 'Lakh', 'Thousand', 'Custom'],
        required: true
      },
      negotiable: {
        type: Boolean,
        default: false
      }
    },
    propertyFacing: String,
    furnishedStatus: String,
    saleType: String,
    propertyStatus: String,
    availableFrom: Date,
    ageOfProperty: Number,
    parkingOption: String,
    suitableTimeToCall: String,
    description: String,
    verificationNumber: {
      type: Number,
      required: true
    }
  });
  
  module.exports = mongoose.model('CommercialProperty', commercialPropertySchema);