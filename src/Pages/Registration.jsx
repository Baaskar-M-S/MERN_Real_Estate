import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import background from '../Assets/Background.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [type, setType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [img, setImg] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, mobileNumber, type, email, password, companyName, img };
    
    setLoading(true); // Start loading

    try {
      const response = await axios.post("http://localhost:7000/register", newUser);
      
      if (response.status === 201) {
        setSuccess("User registered successfully!");
        setTimeout(() => navigate('/login'), 2000); // Redirect after success
      } else {
        setError(response.data.message || "An unexpected error occurred.");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false); // Stop loading
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
     
     
     
     <h1 className="text-4xl font-semibold">Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md bg-white p-6 rounded-lg shadow-md">
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
