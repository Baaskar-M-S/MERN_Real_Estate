import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import background from '../Assets/Background.png';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:7000/request-otp", { email: formData.email }, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        setSuccess("OTP sent to your email!");
      } else {
        setError(response.data.message || "An unexpected error occurred.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:7000/verify-otp", { email: formData.email, otp: formData.otp }, {
        headers: { "Content-Type": "application/json" }
      });

      if (response.status === 200) {
        setSuccess("OTP verified successfully!");
        setTimeout(() => navigate('/'), 2000);
      } else {
        setError(response.data.message || "Invalid OTP.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
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
      <form onSubmit={handleRequestOtp} className="w-full max-w-md bg-white p-6 rounded-3xl  shadow-md">
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

        <button
          className="p-3 w-full rounded-lg bg-slate-500 uppercase text-white mt-4"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>

        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      </form>

      <form onSubmit={handleVerifyOtp} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mt-4">
        <h2 className="text-center text-3xl mb-4">Verify OTP</h2>

        <input
          className="border p-3 rounded-lg w-full mb-4"
          name="otp"
          placeholder="Enter OTP"
          type="text"
          value={formData.otp}
          onChange={handleChange}
          required
        />

        <button
          className="p-3 w-full rounded-lg bg-slate-500 uppercase text-white mt-4"
          type="submit"
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      </form>

      <div className="mt-4 text-center">
        <p>Don’t have an account?</p>
        <Link to="/registration" className="text-blue-500 hover:text-blue-700">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
