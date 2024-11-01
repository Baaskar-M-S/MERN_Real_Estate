const express = require("express");
const router = express.Router();
const Apartment = require("../models/ApartmentModel");

// Create Apartment
router.post("/apartment", async (req, res) => {
  try {
    const apartment = new Apartment(req.body);
    const savedApartment = await apartment.save();
    res.status(201).json(savedApartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Apartments
router.get("/apartments", async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.status(200).json(apartments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Apartment by ID
router.get("/apartment/:id", async (req, res) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) return res.status(404).json({ message: "Apartment not found" });
    res.status(200).json(apartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Apartment
router.put("/apartment/:id", async (req, res) => {
  try {
    const updatedApartment = await Apartment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedApartment) return res.status(404).json({ message: "Apartment not found" });
    res.status(200).json(updatedApartment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Apartment
router.delete("/apartment/:id", async (req, res) => {
  try {
    const deletedApartment = await Apartment.findByIdAndDelete(req.params.id);
    if (!deletedApartment) return res.status(404).json({ message: "Apartment not found" });
    res.status(200).json({ message: "Apartment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const Villa = require("../models/VillaModel");

// Create Villa
router.post("/villa", async (req, res) => {
  try {
    const villa = new Villa(req.body);
    const savedVilla = await villa.save();
    res.status(201).json(savedVilla);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Villas
router.get("/villas", async (req, res) => {
  try {
    const villas = await Villa.find();
    res.status(200).json(villas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Villa by ID
router.get("/villa/:id", async (req, res) => {
  try {
    const villa = await Villa.findById(req.params.id);
    if (!villa) return res.status(404).json({ message: "Villa not found" });
    res.status(200).json(villa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Villa
router.put("/villa/:id", async (req, res) => {
  try {
    const updatedVilla = await Villa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVilla) return res.status(404).json({ message: "Villa not found" });
    res.status(200).json(updatedVilla);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Villa
router.delete("/villa/:id", async (req, res) => {
  try {
    const deletedVilla = await Villa.findByIdAndDelete(req.params.id);
    if (!deletedVilla) return res.status(404).json({ message: "Villa not found" });
    res.status(200).json({ message: "Villa deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const ResidentialLand = require("../models/LandModel");

// Create Residential Land
router.post("/land", async (req, res) => {
  try {
    const land = new ResidentialLand(req.body);
    const savedLand = await land.save();
    res.status(201).json(savedLand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Residential Lands
router.get("/lands", async (req, res) => {
  try {
    const lands = await ResidentialLand.find();
    res.status(200).json(lands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Residential Land by ID
router.get("/land/:id", async (req, res) => {
  try {
    const land = await ResidentialLand.findById(req.params.id);
    if (!land) return res.status(404).json({ message: "Land not found" });
    res.status(200).json(land);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Residential Land
router.put("/land/:id", async (req, res) => {
  try {
    const updatedLand = await ResidentialLand.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLand) return res.status(404).json({ message: "Land not found" });
    res.status(200).json(updatedLand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Residential Land
router.delete("/land/:id", async (req, res) => {
  try {
    const deletedLand = await ResidentialLand.findByIdAndDelete(req.params.id);
    if (!deletedLand) return res.status(404).json({ message: "Land not found" });
    res.status(200).json({ message: "Land deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



const CommercialProperty = require("../models/CommercialModel");

// Create Commercial Property
router.post("/commercial", async (req, res) => {
  try {
    const commercial = new CommercialProperty(req.body);
    const savedCommercial = await commercial.save();
    res.status(201).json(savedCommercial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get All Commercial Properties
router.get("/commercials", async (req, res) => {
  try {
    const commercials = await CommercialProperty.find();
    res.status(200).json(commercials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Single Commercial Property by ID
router.get("/commercial/:id", async (req, res) => {
  try {
    const commercial = await CommercialProperty.findById(req.params.id);
    if (!commercial) return res.status(404).json({ message: "Commercial property not found" });
    res.status(200).json(commercial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update Commercial Property
router.put("/commercial/:id", async (req, res) => {
  try {
    const updatedCommercial = await CommercialProperty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCommercial) return res.status(404).json({ message: "Commercial property not found" });
    res.status(200).json(updatedCommercial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Commercial Property
router.delete("/commercial/:id", async (req, res) => {
  try {
    const deletedCommercial = await CommercialProperty.findByIdAndDelete(req.params.id);
    if (!deletedCommercial) return res.status(404).json({ message: "Commercial property not found" });
    res.status(200).json({ message: "Commercial property deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
