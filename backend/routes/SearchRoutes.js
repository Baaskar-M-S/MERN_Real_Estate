
import express from 'express';
import Property from '../models/propertyModel.js';

const router = express.Router();

// Search properties
router.get('/search', async (req, res) => {
  const { type, subType, place, sale, rent, minPrice, maxPrice, limit = 10, page = 1 } = req.query;

  try {
    // Create the filter object dynamically based on provided filters
    let filter = {};

    if (type) filter.type = type;
    if (subType) filter.subType = subType;
    if (place) filter.place = place;
    if (sale) filter.sale = sale === 'true'; // Convert to boolean
    if (rent) filter.rent = rent === 'true'; // Convert to boolean

    // Apply price range filter if provided
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // Find properties that match the filter criteria, with pagination
    const properties = await Property.find(filter)
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

    res.status(200).json(properties);
  } catch (error) {
    console.error("Error fetching properties:", error);
    res.status(500).json({ message: "Error fetching properties" });
  }
});

export default router;
