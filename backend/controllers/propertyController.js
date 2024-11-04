import asyncHandler from "../middlewares/asyncHandler.js"; // Use import for asyncHandler
import Property from "../models/propertyModel.js"; // Use import for Property model

// Get all properties (admin only)
const getAllProperties = asyncHandler(async (req, res) => {
  const properties = await Property.find({});
  res.json(properties);
});

// Get a single property by ID
const getPropertyById = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (property) {
    res.json(property);
  } else {
    res.status(404);
    throw new Error("Property not found");
  }
});

// Update a property by ID (admin only)
const updatePropertyById = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (!property) {
    res.status(404);
    throw new Error("Property not found");
  }

  // Update fields based on provided request body
  const updatedData = {
    location: req.body.location,
    price: req.body.price,
    saleOrRent: req.body.saleOrRent,
    // Add additional fields as needed
  };

  // Only update fields that are provided
  Object.keys(updatedData).forEach(key => {
    if (updatedData[key] !== undefined) {
      property[key] = updatedData[key];
    }
  });

  const updatedProperty = await property.save();
  res.json({
    message: "Property updated successfully",
    updatedProperty,
  });
});

// Delete a property by ID (admin only)
const deletePropertyById = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id);

  if (property) {
    await property.remove(); // Use the instance method remove
    res.json({ message: "Property removed" });
  } else {
    res.status(404);
    throw new Error("Property not found");
  }
});

// Create a new property
const createProperty = asyncHandler(async (req, res) => {
  const { propertyType, subType, location, price, saleOrRent } = req.body; // Ensure you're getting the correct fields

  const property = new Property({
    propertyType,
    subType,
    location,
    price,
    saleOrRent,
    // Add additional fields if necessary
  });

  const savedProperty = await property.save();
  res.status(201).json(savedProperty);
});

// Export the controller methods
export {
  getAllProperties,
  getPropertyById,
  updatePropertyById,
  deletePropertyById,
  createProperty,
};
