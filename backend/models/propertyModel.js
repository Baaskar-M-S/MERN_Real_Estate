import mongoose from "mongoose"; 

const propertySchema = new mongoose.Schema({
  propertyType: {
    type: String,
    enum: ["Residential", "Commercial"],
    required: true,
  },
  subType: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const residentialSubTypes = [
          "Apartment",
          "Independent House/Villa",
          "Residential Land",
        ];
        const commercialSubTypes = [
          "Commercial Land",
          "Commercial Shops",
          "Commercial Showrooms",
          "Commercial Office/Space",
          "Retail Showroom/Shop",
          "Commercial Building",
          "Office Complex",
          "Warehouse",
          "Space in Retail Mall",
          "Office in IT Park",
          "Office in Business Park",
          "Storage",
          "Business Centre",
          "Manufacturing",
          "Guest House/Banquet Hall",
          "Industrial Land",
          "Agricultural/Farm Land",
          "Hotel/Resort",
          "Super Market",
        ];

        // Ensure this.propertyType is set before validating subType
        if (!this.propertyType) return false; 

        return this.propertyType === "Residential"
          ? residentialSubTypes.includes(value)
          : commercialSubTypes.includes(value);
      },
      message: (props) =>
        `${props.value} is not a valid subType for ${props.parent.propertyType}`,
    },
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
      "Marla",
      "Bigha",
      "Kottah",
      "Kanal",
      "Ares",
      "Biswa",
      "Guntha",
      "Aankadam",
      "Rood",
      "Chataks",
      "Perch",
    ],
    required: true,
  },
  // New field for sale or rent
  sale: {
    type: Boolean, 
  },
  rent:{
    type:Boolean,
  },
  // Additional Residential fields
  bedrooms: {
    type: Number,
    required: function () {
      return this.propertyType === "Residential";
    },
  },
  bathrooms: {
    type: Number,
    required: function () {
      return this.propertyType === "Residential";
    },
  },
  additionalRooms: Number,
  balconies: Number,
  totalFloors: Number,
  furnishedStatus: String,
  parkingOption: String,
  boundaryWall: Boolean,
  roadWidth: Number,

  // Additional Commercial fields
  plotLength: Number,
  plotBreadth: Number,
  totalFloorsAllowed: Number,

  price: {
    amount: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      enum: ["Crore", "Lakh", "Thousand", "Custom"],
    },
    negotiable: {
      type: Boolean,
      default: false,
    },
  },
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

const Property = mongoose.model("Property", propertySchema);
export default Property; 