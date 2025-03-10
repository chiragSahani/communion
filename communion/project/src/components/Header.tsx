import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2 text-indigo-600">
          <Users size={24} />
          <span className="text-xl font-bold">Communion</span>
        </NavLink>
        
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-indigo-600 transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `hover:text-indigo-600 transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-indigo-600 transition-colors ${isActive ? 'text-indigo-600' : 'text-gray-600'}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;