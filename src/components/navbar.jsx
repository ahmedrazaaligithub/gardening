import { Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 bg-gray-800 text-white">
      <div></div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/service">Service</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/feedback">Feedback</Link>
      </div>
      <div>
        <Menu color="#ffffff" />{" "}
      </div>
    </div>
  );
};

export default Navbar;
