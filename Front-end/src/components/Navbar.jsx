import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center text-white">
      <div className="text-lg font-bold">KWC Student Portal</div>

      <div className="flex space-x-4">
        <Link to="/student-form" className="hover:text-gray-300">
          Student Form
        </Link>
        <Link to="/" className="hover:text-gray-300">
          Student Directory
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
