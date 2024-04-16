import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto px-4">
        <p className="text-center">Know more about us</p>
        <nav className="text-center">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "font-bold text-yellow-400"
                : "text-white hover:text-yellow-400"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
