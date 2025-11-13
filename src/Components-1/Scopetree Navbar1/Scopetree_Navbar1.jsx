import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ React Router link
import "./Scopetree_Navbar1.css";
import logo from "../../assets/img_4911.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function ScopetreeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when a nav link is clicked (useful for mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <section className="st-navbar">
      <article className="st-navbar-container">
        {/* Hamburger for Mobile */}
        <button
          className="st-toggle-btn"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <aside className="st-logo-section">
          <Link to="/" onClick={handleLinkClick}>
            <img className="st-logo-image" src={logo} alt="ScopeTree logo" />
          </Link>
        </aside>

        {/* Navigation */}
        <ul className={`st-nav-list ${menuOpen ? "st-nav-active" : ""}`}>
          <li className="st-nav-item">
            <Link className="st-nav-link" to="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>

          <li className="st-nav-item">
            <Link className="st-nav-link" to="/about" onClick={handleLinkClick}>
              About Us
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="st-nav-item st-has-dropdown">
            <span className="st-nav-link">Services</span>
            <div className="st-dropdown st-mega-menu">
              <div className="st-dropdown-section">
                <ul className="st-dropdown-list">
                  <li className="st-dropdown-item">
                     <Link className="st-nav-link"   to="/BC" onClick={handleLinkClick}>
                      Microsoft Dynamics 365 Business Central
                    </Link>
                  </li>
                  <li className="st-dropdown-item">
                    {/* <a className="st-dropdown-link" href="">
                      Microsoft Dynamics NAV
                    </a> */}
                     <Link className="st-nav-link" to="/Nav" onClick={handleLinkClick}>
                        Microsoft Dynamics NAV
                    </Link>
                  </li>
                  
                  {/* <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Microsoft Dynamics 365 Sales
                    </a>
                  </li> */}
                  {/* <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Microsoft Dynamics CRM
                    </a>
                  </li> */}
                  <li className="st-dropdown-item">
                    {/* <a className="st-dropdown-link" href="">
                      Power BI
                    </a> */}
                    <Link className="st-nav-link" to="/PowerBI" onClick={handleLinkClick}>
                   Power BI
                    </Link>
                  </li>
                  

                  {/* <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Microsoft PowerApps
                    </a>
                  </li>
                  <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Website Development
                    </a>
                  </li>
                  <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Mobile App Development
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </li>

          {/* Products Dropdown */}
          <li className="st-nav-item st-has-dropdown">
            <span className="st-nav-link">Products</span>
            <div className="st-dropdown st-mega-menu">
              <div className="st-dropdown-section">
                <ul className="st-dropdown-list">
                  <li className="st-dropdown-item">
                    
                     <Link className="st-dropdown-link" to="/SecureSign" onClick={handleLinkClick}>
                        SecureSign
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* Industries Dropdown */}
          {/* <li className="st-nav-item st-has-dropdown">
            <span className="st-nav-link">Industries</span>
            <div className="st-dropdown st-mega-menu">
              <div className="st-dropdown-section">
                <ul className="st-dropdown-list">
                  <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Manufacturing
                    </a>
                  </li>
                  <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Engineering & Construction
                    </a>
                  </li>
                  <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Retail
                    </a>
                  </li>
                  <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Healthcare
                    </a>
                  </li>
                  <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Logistics
                    </a>
                  </li>
                  <li className="st-dropdown-item">
                    <a className="st-dropdown-link" href="">
                      Financial Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li> */}

          {/* <li className="st-nav-item">
            <a className="st-nav-link" href="">
              Careers
            </a>
          </li> */}
        </ul>

        {/* Contact Button */}
        <div className="st-right-section ">
             <Link to="/SecureSign" onClick={handleLinkClick}  style={{ color: "white", textDecoration: "none" ,height:"20px" }}  className="animated-button12" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* <a href="" style={{ color: "white", textDecoration: "none" }}>
              SecureSign
            </a> */}
               SecureSign
             </Link>
          
        </div>
      </article>
    </section>
  );
}
