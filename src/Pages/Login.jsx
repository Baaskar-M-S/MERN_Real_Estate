import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import background from '../Assets/Background.png';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', captcha: '' });
  const [error, setError] = useState('');
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [success, setSuccess] = useState('');
  const CAPTCHA_CODE = "035480"; // Set default captcha value

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoadingRequest(true);

    // Check captcha before making the login request
    if (formData.captcha !== CAPTCHA_CODE) {
      setError("Invalid captcha.");
      setLoadingRequest(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:7000/login", 
        { email: formData.email, password: formData.password }, 
        {
          headers: { "Content-Type": "application/json" }
        }
      );

      if (response.status === 200) {
        setSuccess("Login successful!");

        // Fetch user details to get the user ID
        const userResponse = await axios.get(`http://localhost:7000/user/${formData.email}`, {
          headers: { "Content-Type": "application/json" }
        });
        const userId = userResponse.data.id;
        localStorage.setItem("userId", userId); // Store in local storage
        navigate(`/user/dashboard/${userId}`);
        // const userId = userResponse.data.id; // Extract the user ID from the response
        // setTimeout(() => navigate(`/user/dashboard/${userId}`), 2000);
      } else {
        setError(response.data.message || "An unexpected error occurred.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoadingRequest(false);
    }
  };

  return (
    <div 
      className="h-[800px] bg-blue-100 flex flex-col gap-5 justify-center items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-6 rounded-3xl shadow-md">
        <h2 className="text-center text-3xl mb-4">Login</h2>

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
          name="captcha"
          placeholder="Enter Captcha"
          type="text"
          value={formData.captcha}
          onChange={handleChange}
          required
        />
        <p className="text-center text-gray-600 mb-2">Captcha: {CAPTCHA_CODE}</p>

        <button
          className="p-3 w-full rounded-lg bg-slate-500 uppercase text-white mt-4"
          type="submit"
          disabled={loadingRequest}
        >
          {loadingRequest ? "Logging in..." : "Login"}
        </button>

        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      </form>

      <div className="mt-4 text-center">
        <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700">
          Forgot Password?
        </Link>
        <p className="mt-4">Don’t have an account?</p>
        <Link to="/registration" className="text-blue-500 hover:text-blue-700">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
