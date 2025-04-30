import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleLinkClick = () => setClick(false);

  return (

      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <h1 className="text-[#542cac] text-2xl font-bold">dApp</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link to="/" onClick={handleLinkClick} className="text-gray-500 hover:text-[#542cac] font-medium">
              Airdrop
            </Link>
          </li>
          <li>
            <Link to="/signMessage" onClick={handleLinkClick} className="text-gray-500 hover:text-[#542cac] font-medium">
              Sign Message
            </Link>
          </li>
          <li>
            <Link to="/sendTokens" onClick={handleLinkClick} className="text-gray-500 hover:text-[#542cac] font-medium">
              Send Tokens
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50" onClick={handleClick}>
          {click ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={`md:hidden fixed top-0 right-0 h-screen w-[70%] bg-white/30 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
            click ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <Link to="/" onClick={handleLinkClick} className="text-xl text-[#542cac] font-semibold">
              Airdrop
            </Link>
          </li>
          <li>
            <Link to="/signMessage" onClick={handleLinkClick} className="text-xl text-[#542cac] font-semibold">
              Sign Message
            </Link>
          </li>
          <li>
            <Link to="/sendTokens" onClick={handleLinkClick} className="text-xl text-[#542cac] font-semibold">
              Send Tokens
            </Link>
          </li>
        </ul>
      </div>

  );
}

export default Navbar;
