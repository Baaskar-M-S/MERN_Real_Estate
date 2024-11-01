import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showToggle, setShowToggle] = useState(false); // State to control toggle
  const [currentUser, setCurrentUser] = useState(null); // State for the current user being edited

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter and sort states
  const [filterText, setFilterText] = useState('');
  const [roleFilter, setRoleFilter] = useState(''); // New state for Role
  const [sortMethod, setSortMethod] = useState('name');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/users");
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

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:7000/users/${userId}`);
      setData(data.filter((user) => user._id !== userId)); // Update UI after deletion
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  // Filter and Sort Logic
  const filteredData = data
    .filter(user => user.name.toLowerCase().includes(filterText.toLowerCase()) && 
                   user.role.toLowerCase().includes(roleFilter.toLowerCase())) // Include role filter
    .sort((a, b) => {
      if (sortMethod === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  // Pagination Logic
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

  const handleToggle = (user = null) => {
    setShowToggle(!showToggle);
    setCurrentUser(user);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="my-12 w-full">
      <h1 className="mb-8 text-3xl font-bold">Manage Users</h1>

      <div className="flex gap-4 mb-4">
        <button onClick={() => handleToggle()} className="text-white border px-6 py-3 bg-blue-500 hover:underline mb-4">Create New User +</button>
        <input 
          type="text" 
          placeholder="Filter by Name" 
          value={filterText} 
          onChange={(e) => setFilterText(e.target.value)} 
          className="border px-6 py-3"
        />
        <input 
          type="text" 
          placeholder="Filter by Role" 
          value={roleFilter} // Change this to use the new state
          onChange={(e) => setRoleFilter(e.target.value)} 
          className="border px-6 py-3"
        />
      </div>
      
      <div className="w-[1200px] overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-400">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="py-2 px-4 text-left text-gray-600">S.No</th>
              <th className="py-2 px-4 text-left text-gray-600">Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Mobile No</th>
              <th className="py-2 px-4 text-left text-gray-600">User-Type</th>
              <th className="py-2 px-4 text-left text-gray-600">Img</th>
              <th className="py-2 px-4 text-left text-gray-600">Created Time</th>
              <th className="py-2 px-4 text-left text-gray-600">Email</th>
              <th className="py-2 px-4 text-left text-gray-600">Role</th>
              <th className="py-2 px-4 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {error ? (
              <tr>
                <td colSpan="9" className="text-center py-4 text-red-500">
                  {error}
                </td>
              </tr>
            ) : currentItems.length === 0 ? (
              <tr>
                <td colSpan="9" className="text-center py-4 text-gray-500">
                  No users found
                </td>
              </tr>
            ) : (
              currentItems.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 text-gray-800">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                  <td className="py-2 px-4 text-gray-800">{user.name}</td>
                  <td className="py-2 px-4 text-gray-800">{user.mobileNumber}</td>
                  <td className="py-2 px-4 text-gray-800">{user.type}</td>
                  <td className="py-2 px-4 text-gray-800">
                    <img src={user.img} alt="User" className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="py-2 px-4 text-gray-800">{new Date(user.createdAt).toLocaleString()}</td>
                  <td className="py-2 px-4 text-gray-800">{user.email}</td>
                  <td className="py-2 px-4 text-gray-800">{user.role}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <button onClick={() => handleToggle(user)} className="text-blue-600 hover:underline">Edit</button>
                    <button onClick={() => deleteUser(user._id)} className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

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

      {/* Toggle for Create/Edit User */}
      {showToggle && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg z-60">
            <button 
              onClick={handleToggle} 
              className="mb-4 text-red-600 hover:underline"
            >
              Go Back
            </button>
            {currentUser ? <UserEdit user={currentUser} onClose={handleToggle} /> : <UserCreate onClose={handleToggle} />}
         
          </div>
        </div>
      )}
    </div>
  );
};

export default User;





export const UserEdit = ({ user, onClose }) => {
  const [name, setName] = useState(user.name);
  const [mobileNumber, setMobileNumber] = useState(user.mobileNumber);
  const [type, setType] = useState(user.type);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);
  const [img, setImg] = useState(user.img);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { name, mobileNumber, type, email, role, img };

    try {
      await axios.put(`http://localhost:7000/users/${user._id}`, updatedUser);
      onClose(); // Close the toggle after updating
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  useEffect(() => {
    setName(user.name);
    setMobileNumber(user.mobileNumber);
    setType(user.type);
    setEmail(user.email);
    setRole(user.role);
    setImg(user.img);
  }, [user]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="border p-2 mb-4"
        required
      />
      <input 
        type="text" 
        placeholder="Mobile Number" 
        value={mobileNumber} 
        onChange={(e) => setMobileNumber(e.target.value)} 
        className="border p-2 mb-4"
        required
      />
      <input 
        type="text" 
        placeholder="User Type" 
        value={type} 
        onChange={(e) => setType(e.target.value)} 
        className="border p-2 mb-4"
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="border p-2 mb-4"
        required
      />
      <input 
        type="text" 
        placeholder="Role" 
        value={role} 
        onChange={(e) => setRole(e.target.value)} 
        className="border p-2 mb-4"
        required
      />
      <input 
        type="text" 
        placeholder="Image URL" 
        value={img} 
        onChange={(e) => setImg(e.target.value)} 
        className="border p-2 mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Update User</button>
    </form>
  );
};

export const UserCreate = ({ onClose }) => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [type, setType] = useState(''); // Assuming you have a selection for user type
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Added password field
  const [role, setRole] = useState('Customer'); // Default to Customer
  const [companyName, setCompanyName] = useState(''); // Added companyName field
  const [img, setImg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, mobileNumber, type, email, password, role, companyName, img };

    try {
      await axios.post("http://localhost:7000/register", newUser);
      onClose(); // Close the toggle after creation
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="border p-2 mb-4"
        required
      />
      <input 
        type="text" 
        placeholder="Mobile Number" 
        value={mobileNumber} 
        onChange={(e) => setMobileNumber(e.target.value)} 
        className="border p-2 mb-4"
        required
      />
      <select 
        value={type} 
        onChange={(e) => setType(e.target.value)} 
        className="border p-2 mb-4"
        required
      >
        <option value="" disabled>Select User Type</option>
        <option value="owner">Owner</option>
        <option value="agent/agency">Agent/Agency</option>
        <option value="builder">Builder</option>
        <option value="promoter">Promoter</option>
      </select>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="border p-2 mb-4"
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="border p-2 mb-4"
        required
      />
      <input 
        type="text" 
        placeholder="Company Name" 
        value={companyName} 
        onChange={(e) => setCompanyName(e.target.value)} 
        className="border p-2 mb-4"
      />
      <input 
        type="text" 
        placeholder="Image URL" 
        value={img} 
        onChange={(e) => setImg(e.target.value)} 
        className="border p-2 mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Create User</button>
    </form>
  );
};
