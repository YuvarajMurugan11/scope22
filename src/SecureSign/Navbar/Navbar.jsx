// Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import SecureSign from '../../assets/SecureSign.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="navbar">
        <div className="nav-left">
          <div className="img1">
            <img
              src={SecureSign}
              style={{ height: "66px", width: "60px" }}
              alt="logo"
            />
          </div>
          <div className="securesign">
            <div className="s1"><b>SecureSign</b></div>
            <div className="s2">Powered By Scopetree</div>
          </div>
        </div>

        {/* Hamburger menu icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={handleHomeClick}>Home</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          {/* <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link> */}
          {/* <Link to="/features" onClick={() => setMenuOpen(false)}>Features</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



// import React, { useState } from "react";
// import "./Navbar.css";
// import SecureSign from "../../assets/SecureSign.png";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
 
// const Navbar = () => {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
 
//   const handleHomeClick = () => {
//     if (location.pathname === "/") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//     setMenuOpen(false);
//   };
 
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
 
//   return (
// <motion.nav
//       className="nav"
//       initial={{ y: -50, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
// >
// <div className="navbar">
// <div className="nav-left">
// <div className="img1">
// <img
//               src={SecureSign}
//               style={{ height: "66px", width: "60px" }}
//               alt="logo"
//             />
// </div>
// <div className="securesign">
// <div className="s1">
// <b>SecureSign</b>
// </div>
// <div className="s2">Powered By Scopetree</div>
// </div>
// </div>
 
//         {/* Hamburger menu icon */}
// <div className="hamburger" onClick={toggleMenu}>
// <div className={`bar ${menuOpen ? "open" : ""}`}></div>
// <div className={`bar ${menuOpen ? "open" : ""}`}></div>
// <div className={`bar ${menuOpen ? "open" : ""}`}></div>
// </div>
 
//         {/* Navigation Links */}
// <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
// <Link to="/" onClick={handleHomeClick}>
//             Home
// </Link>
// <Link to="/contact" onClick={() => setMenuOpen(false)}>
//             Contact
// </Link>
// </div>
// </div>
// </motion.nav>
//   );
// };
 
// export default Navbar;