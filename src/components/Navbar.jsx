import React, { useState } from "react";
import "../App.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLinkClick = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <h1 className="text-[#542cac]">
          dApp
        </h1>
        <ul className={click ? "active" : "nav-menu"}>
          <li>
            <Link  to="/" onClick={handleLinkClick}>
              Airdrop
            </Link>
          </li>
          <li>
            <Link to="/signMessage" onClick={handleLinkClick}>
              Sign Message
            </Link>
          </li>
          <li>
            <Link to="/sendTokens" onClick={handleLinkClick}>
              Send Tokens
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={20} style={{ color: "#333" }} /> : <FaBars size={20} style={{ color: "#333" }} />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;