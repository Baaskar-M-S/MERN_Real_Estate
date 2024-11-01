import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <motion.h1 
        className="text-9xl font-bold text-red-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>

      <motion.h2 
        className="text-4xl font-semibold text-gray-800 mt-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops!
      </motion.h2>

      <motion.p 
        className="text-2xl text-gray-600 mt-3 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        That page doesn't exist or is unavailable.
      </motion.p>

      <motion.button 
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        onClick={() => navigate('/')}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1}}
      >
        Go Back to Home
      </motion.button>
    </div>
  );
}

export default NotFoundPage;
