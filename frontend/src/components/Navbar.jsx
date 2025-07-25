import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">MyApp</Link>
      </h1>
      <ul className="flex gap-6 items-center">
        <li>
          <Link className="hover:text-gray-200" to="/">Home</Link>
        </li>
        <li>
          <Link className="hover:text-gray-200" to="/about">About</Link>
        </li>
        <li>
          <Link className="hover:text-gray-200" to="/contact">Contact</Link>
        </li>
        <li>
          <Link className="hover:text-gray-200" to="/login">Login</Link>
        </li>
        <li>
          <Link className="hover:text-gray-200" to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
