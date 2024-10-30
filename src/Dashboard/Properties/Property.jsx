import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Property = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter and sort states
  const [filterText, setFilterText] = useState('');
  const [sortMethod, setSortMethod] = useState('propertyName');

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true); // Start loading
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

  // Filter and Sort Logic
  const filteredData = data
    .filter(property => property.propertyName.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => {
      if (sortMethod === 'propertyName') return a.propertyName.localeCompare(b.propertyName);
      if (sortMethod === 'price') return a.price - b.price;
      return 0;
    });                                                                                           

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  // Show loading or error message
  if (loading) return <div>Loading...</div>;

  return (
    <div className=" w-full my-12">
      <h1 className="mb-8 text-3xl font-bold">Manage Your Properties</h1>
      <Link to='/property/create' className="text-blue-600 hover:underline mb-4 block">Create New Property +</Link>
      
      <div className="flex gap-4 mb-4">
        <input 
          type="text" 
          placeholder="Filter by Property Name" 
          value={filterText} 
          onChange={(e) => setFilterText(e.target.value)} 
          className="border p-2"
        />
        <select value={sortMethod} onChange={(e) => setSortMethod(e.target.value)} className="border p-2">
          <option value="propertyName">Sort by Property Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="lg:w-[1180px] min-w-full bg-white border border-gray-400">
          <thead>
            <tr className="w-full bg-gray-100 border-b">
              <th className="py-2 px-4 text-left text-gray-600">S.No</th>
              <th className="py-2 px-4 text-left text-gray-600">Property Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Owner Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Price</th>
              <th className="py-2 px-4 text-left text-gray-600">Size (sq.ft)</th>
              <th className="py-2 px-4 text-left text-gray-600">Rate per sq.ft</th>
              <th className="py-2 px-4 text-left text-gray-600">Total Land Area</th>
              <th className="py-2 px-4 text-left text-gray-600">CMDA/DTCP Approved</th>
              <th className="py-2 px-4 text-left text-gray-600">Unit Sizes</th>
              <th className="py-2 px-4 text-left text-gray-600">Project Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Property Type</th>
              <th className="py-2 px-4 text-left text-gray-600">About</th>
              <th className="py-2 px-4 text-left text-gray-600">Location</th>
              <th className="py-2 px-4 text-left text-gray-600">Advantages</th>
              <th className="py-2 px-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filteredData.length > 0 ? (
              currentItems.map((property, index) => (
                <tr key={property._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 text-gray-800">{indexOfFirstItem + index + 1}</td>
                  <td className="py-2 px-4 text-gray-800">{property.propertyName}</td>
                  <td className="py-2 px-4 text-gray-800">{property.ownerName}</td>
                  <td className="py-2 px-4 text-gray-800">${property.price}</td>
                  <td className="py-2 px-4 text-gray-800">{property.unitSizes.join(', ')}</td>
                  <td className="py-2 px-4 text-gray-800">${property.ratePerSqFt}</td>
                  <td className="py-2 px-4 text-gray-800">{property.totalLandArea} sq.ft</td>
                  <td className="py-2 px-4 text-gray-800">{property.approved ? "Yes" : "No"}</td>
                  <td className="py-2 px-4 text-gray-800">{property.unitSizes.join(', ')}</td>
                  <td className="py-2 px-4 text-gray-800">{property.projectName}</td>
                  <td className="py-2 px-4 text-gray-800">{property.propertyType}</td>
                  <td className="py-2 px-4 text-gray-800">{property.about}</td>
                  <td className="py-2 px-4 text-gray-800">{property.location}</td>
                  <td className="py-2 px-4 text-gray-800">{property.advantages}</td>
                  <td className="py-2 px-4 flex flex-col gap-5">
                    <Link to={`edit/${property._id}`} className="text-blue-600 hover:underline">
                      Edit
                    </Link>
                    <Link to={`delete/${property._id}`}
       
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))
            ) 
            : (
              <tr>
                <td colSpan="15" className="text-center my-12 py-4 text-gray-600">
                  {error ? error : "No properties available."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={handlePreviousPage} 
          disabled={currentPage === 1} 
          className={`p-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
        >
          Previous
        </button>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button 
              key={index + 1} 
              onClick={() => handlePageClick(index + 1)} 
              className={`p-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            >
              {index + 1}
              </button>
          ))}
        </div>

            <button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages} 
            className={`p-2 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          >
            Next
          </button>
        </div>
      </div>
  
  );
};

export default Property;
