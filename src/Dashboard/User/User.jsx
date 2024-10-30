import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const User = () => {
  const [data, setData] = useState([]); // Empty array to ensure table structure always shows
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10;

  // Filter and sort states
  const [filterText, setFilterText] = useState('');
  const [sortMethod, setSortMethod] = useState('username');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/users"); // Update with your API endpoint
        setData(response.data);
      } catch (error) {
        setError("Failed to fetch user data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filter and Sort Logic
  const filteredData = data
    .filter(user => user.username?.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => {
      if (sortMethod === 'username') return a.username?.localeCompare(b.username);
      if (sortMethod === 'email') return a.email?.localeCompare(b.email);
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

  return (
    <>
      <div className=" my-12 w-full">
        <h1 className="mb-8 text-3xl font-bold">Manage Users</h1>
        <Link to='/registration' className="text-blue-600 hover:underline mb-4 block">Create New User +</Link>
        
        <div className="flex gap-4 mb-4">
          <input 
            type="text" 
            placeholder="Filter by Username" 
            value={filterText} 
            onChange={(e) => setFilterText(e.target.value)} 
            className="border p-2"
          />
          <select value={sortMethod} onChange={(e) => setSortMethod(e.target.value)} className="border p-2">
            <option value="username">Sort by Username</option>
            <option value="email">Sort by Email</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="lg:w-[1180px] min-w-full bg-white border border-gray-400">
            <thead>
              <tr className="w-full bg-gray-100 border-b">
                <th className="py-2 px-4 text-left text-gray-600">S.No</th>
                <th className="py-2 px-4 text-left text-gray-600">Username</th>
                <th className="py-2 px-4 text-left text-gray-600">Email</th>
                <th className="py-2 px-4 text-left text-gray-600">Role</th>
                <th className="py-2 px-4 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">Loading...</td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-red-500">{error}</td>
                </tr>
              ) : currentItems.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">No users found</td>
                </tr>
              ) : (
                currentItems.map((user, index) => (
                  <tr key={user._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 text-gray-800">{indexOfFirstItem + index + 1}</td>
                    <td className="py-2 px-4 text-gray-800">{user.username}</td>
                    <td className="py-2 px-4 text-gray-800">{user.email}</td>
                    <td className="py-2 px-4 text-gray-800">{user.role}</td>
                    <td className="py-2 px-4 flex flex-col gap-5">
                      <Link to={`/manage/users/edit/${user._id}`} className="text-blue-600 hover:underline">Edit</Link>
                      <button 
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
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
    </>
  );
};

export default User;
