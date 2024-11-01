import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserManageListing = () => {
  const userId = localStorage.getItem("userId");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditToggleOpen, setIsEditToggleOpen] = useState(false);
  const [editProperty, setEditProperty] = useState(null); // To hold property details for editing

  // Fetch properties from the server
  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:7000/properties");
        setData(response.data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch property data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  // Handle property deletion
  const handleDelete = async (propertyId) => {
    try {
      await axios.delete(`http://localhost:7000/property/${propertyId}`);
      setData(data.filter((property) => property._id !== propertyId)); // Update UI after deletion
    } catch (error) {
      console.error("Failed to delete property:", error);
    }
  };

  // Handle toggling the edit modal
  const handleToggleEdit = (property) => {
    setEditProperty(property);
    setIsEditToggleOpen(!isEditToggleOpen);
  };

  // Loading state
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center shadow-lg p-4">
        <h1 className="font-bold text-3xl">Manage Listing</h1>
        <div className="flex items-center gap-3 text-gray-700">
          <Link to={"/"}>Home</Link>
          <span>{"/"}</span>
          <Link to={"/user/dashboard"}>Dashboard</Link>
          <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
            + Submit Property
          </button>
        </div>
      </div>
      
      <h1 className='text-center text-2xl my-3'>THIS ARE THE PROPERTY YOU HAVE LISTED</h1>
      
      <div className="overflow-x-auto">
        <table className="lg:w-[1080px] min-w-full bg-white border border-gray-400">
          <thead>
            <tr className="w-full bg-gray-100 border-b">
              <th className="py-2 px-4 text-left text-gray-600">S.No</th>
              <th className="py-2 px-4 text-left text-gray-600">Property Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Owner Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Price</th>
              <th className="py-2 px-4 text-left text-gray-600">Location</th>
              <th className="py-2 px-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.length > 0 ? (
              data.map((property, index) => (
                <tr key={property._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 text-gray-800">{index + 1}</td>
                  <td className="py-2 px-4 text-gray-800">{property.propertyName}</td>
                  <td className="py-2 px-4 text-gray-800">{property.ownerName}</td>
                  <td className="py-2 px-4 text-gray-800">${property.price}</td>
                  <td className="py-2 px-4 text-gray-800">{property.location}</td>
                  <td className="py-2 px-4 flex flex-col gap-2">
                    <button onClick={() => handleToggleEdit(property)} className="text-blue-600 hover:underline">Edit</button>
                    <button onClick={() => handleDelete(property._id)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center my-12 py-4 text-gray-600">
                  {error ? error : "No properties available."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Property Modal */}
      {isEditToggleOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg z-60">
            <button onClick={() => setIsEditToggleOpen(false)} className="mb-4 text-red-600 hover:underline">Close</button>
            {/* Here you would render your edit form component */}
            {editProperty && <EditPropertyForm property={editProperty} onClose={() => setIsEditToggleOpen(false)} />}
          </div>
        </div>
      )}
    </div>
  );
};

// Placeholder for EditPropertyForm component
const EditPropertyForm = ({ property, onClose }) => {
  // Implement your form logic here
  return (
    <form>
      {/* Form fields for editing the property */}
      <h2>Edit Property: {property.propertyName}</h2>
      <button type="button" onClick={onClose}>Save Changes</button>
    </form>
  );
};

export default UserManageListing;
