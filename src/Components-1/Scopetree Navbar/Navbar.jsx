// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from "../../assets/IMG_4911.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [menuClosing, setMenuClosing] = useState(false);

//   const toggleMenu = () => {
//     if (menuOpen) {
//       setMenuClosing(true);
//       setTimeout(() => {
//         setMenuOpen(false);
//         setMenuClosing(false);
//       }, 1400);
//     } else {
//       setMenuOpen(true);
//     }
//   };

//   return (
//     <div className="navbar-wrapper">
//       <nav className="navbar">
//         <div className="navbar-left">
//           <button
//             className={`navbar-menu-button ${menuOpen ? "open" : ""}`}
//             onClick={toggleMenu}
//           >
//             <div className="navbar-icon">
//               <span className="navbar-line"></span>
//               <span className="navbar-line"></span>
//             </div>
//             <span className="navbar-menu-text">
//               {menuOpen ? "CLOSE" : "MENU"}
//             </span>
//           </button>
//         </div>

//         <div className="navbar-logo">
//           <img className="navbar-logo-img" src={logo} alt="Logo" />
//         </div>

//         <div className="navbar-right">
//           <a href="#" className="navbar-contact">
//             CONTACT
//           </a>
//         </div>
//       </nav>

//       {(menuOpen || menuClosing) && (
//         <div
//           className={`navbar-overlay ${menuOpen ? "open" : ""}`}
//           onClick={toggleMenu}
//         ></div>
//       )}

//       {(menuOpen || menuClosing) && (
//         <div
//           className={`navbar-side-menu ${menuOpen ? "open" : ""} ${
//             menuClosing ? "closing" : ""
//           }`}
//         >
//           <div className="navbar-side-links">
//             <a href="#" className="navbar-link">HOME</a>
//             <a href="#" className="navbar-link">ABOUT US</a>
//             <a href="#" className="navbar-link">SERVICES</a>
//             <a href="#" className="navbar-link">PRODUCTS</a>
//             <a href="#" className="navbar-link">INDUSTRIES</a>
//             <a href="#" className="navbar-link">CAREERS</a>
//             <a href="#" className="navbar-link">CONTACT</a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
