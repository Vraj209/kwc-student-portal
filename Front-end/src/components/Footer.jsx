import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Logo */}
        <div className="text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-0">KWC Student Portal</div>

        {/* Contact Information */}
        <div className="text-sm">
          <div>Address: 333 Speedsville Rd, Cambridge, ON N3H 4R6</div>
          <div>Phone numbers:</div>
          <ul className="list-disc pl-5">
            <li>Maharshi Bhai: (289)-(923)-9809</li>
            <li>Bhargav Bhai: (548)-(333)-0687</li>
            <li>Vraj: (437)-(559)-0209</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
