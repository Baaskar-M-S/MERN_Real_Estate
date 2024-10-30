// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { name: 'Home', path: '/' ,css:"text-white hover:bg-gray-700 px-3 py-2 rounded"},
    { name: 'Apartment', path: '/apartments' ,css:"text-white hover:bg-gray-700 px-3 py-2 rounded"},
    { name: 'Land/Plots', path: '/land-plots' ,css:"text-white hover:bg-gray-700 px-3 py-2 rounded"},
    { name: 'Individual House', path: '/individual-house',css:"text-white hover:bg-gray-700 px-3 py-2 rounded" },
    { name: 'Ongoing Project', path: '/ongoing-projects' ,css:"text-white hover:bg-gray-700 px-3 py-2 rounded"},
    { name: 'Login', path: '/login' ,css:"text-white bg-blue-700 px-3 py-2 rounded" },
    { name: 'Post Your Property', path: '/login' ,css:"text-white bg-blue-700 px-3 py-2 rounded"},
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">Real Estate</div>
        <ul className="flex space-x-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={item.css}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
