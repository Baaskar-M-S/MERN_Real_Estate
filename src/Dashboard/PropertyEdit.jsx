import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PropertyEdit = () => {
  const { id } = useParams(); // Assuming the property ID is passed as a route param
  const [formData, setFormData] = useState({
    propertyName: '',
    ownerName: '',
    propertyType: '',
    price: '',
    unitSizes: '',
    perSqFt: '',
    no_of_units: '',
    location: '',
    approved: false,
    projectName: '',
    about: '',
    advantages: '',
    img: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch existing property data on component mount
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/property/${id}`);
        setFormData(response.data);
        setError(null);
      } catch (error) {
        setError("Error fetching property data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'approved' ? e.target.checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:7000/property/${id}`, formData);
      alert("Property updated successfully");
    } catch (error) {
      console.error("Error updating property", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Edit Property</h1>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Property Name", name: "propertyName" },
          { label: "Owner Name", name: "ownerName" },
          { label: "Property Type", name: "propertyType" },
          { label: "Price", name: "price", type: "number" },
          { label: "Unit Sizes", name: "unitSizes" },
          { label: "Rate per sq.ft", name: "perSqFt" },
          { label: "Number of Units", name: "no_of_units" },
          { label: "Location", name: "location" },
          { label: "Project Name", name: "projectName" },
          { label: "About Property", name: "about" },
          { label: "Advantages", name: "advantages" }
        ].map(field => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700 mb-1">{field.label}</label>
            <input
              type={field.type || "text"}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}
        
        {/* Approval Toggle */}
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 mr-2">CMDA/DTCP Approved:</label>
          <input
            type="checkbox"
            name="approved"
            checked={formData.approved}
            onChange={handleChange}
            className="toggle-checkbox"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Image URL</label>
          <input
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Update Property
        </button>
      </form>
    </div>
  );
};

export default PropertyEdit;
