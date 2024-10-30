// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-400">
            We are a real estate platform helping you find your dream property. 
            Discover the best options in apartments, houses, and land.
          </p>
        </div>
        
        {/* Services Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Our Services</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Property Listings</li>
            <li>Real Estate Consultancy</li>
            <li>Property Management</li>
            <li>Valuation Services</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/apartment" className="hover:underline">Apartment</Link></li>
            <li><Link to="/land" className="hover:underline">Land/Plots</Link></li>
            <li><Link to="/individual-house" className="hover:underline">Individual House</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: contact@realestate.com</p>
          <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          <div className="flex space-x-4 mt-4">
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Real Estate Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
