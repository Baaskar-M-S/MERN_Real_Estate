import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import background from '../Assets/Background.png';
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    companyName: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:7000/register", formData, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.status === 201) { // Check for success status
        setSuccess("User registered successfully!");
        setTimeout(() => navigate('/login'), 2000); // Redirect after success
      } else {
        setError(response.data.message || "An unexpected error occurred.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
     className="h-screen bg-blue-100 flex flex-col gap-5 justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-3xl mb-4">Sign Up</h2>

        <select
          className="border p-3 rounded-lg w-full mb-4"
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select your type</option>
          <option value="owner">Owner</option>
          <option value="agent">Agent/Agency</option>
          <option value="builder">Builder</option>
          <option value="promoter">Promoter</option>
        </select>

        <input
          className="border p-3 rounded-lg w-full mb-4"
          name="name"
          placeholder="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="border p-3 rounded-lg w-full mb-4"
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          className="border p-3 rounded-lg w-full mb-4"
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          className="border p-3 rounded-lg w-full mb-4"
          name="mobileNumber"
          placeholder="Mobile Number"
          type="tel"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />

        <input
          className="border p-3 rounded-lg w-full mb-4"
          name="companyName"
          placeholder="Company Name"
          type="text"
          value={formData.companyName}
          onChange={handleChange}
          required
        />

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <button
          className="p-3 w-full rounded-lg bg-slate-500 uppercase text-white mt-4"
          type="submit"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

     
        <div className="mt-4 text-center">
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
