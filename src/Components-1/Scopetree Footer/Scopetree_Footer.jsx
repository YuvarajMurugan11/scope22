// src/components/Footer/ScopetreeFooter.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Scopetree_Footer.css";
import logo from "../../assets/img_4911.png";

export default function ScopetreeFooter() {
  return (
    <footer className="st-footer">
      <div className="st-footer-container">
        {/* Logo + About */}
        <div className="st-footer-section">
          <img src={logo} alt="ScopeTree Logo" className="st-footer-logo" />
          
        </div>

        {/* Quick Links */}
        <div className="st-footer-section"  style={{marginLeft:"60px"}}>
          <h4 className="heading">Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/BC">SecureSign</Link></li>
            
          </ul>
        </div>

        <div className="st-footer-section third">
          <h4 className="heading">Services</h4>
          <ul>
            <li><Link to="/BC">Microsoft Dynamics 365 Business Central</Link></li>
            <li><Link to="/">Microsoft Dynamics NAV</Link></li>
            <li><Link to="/PowerBI">Power BI</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="st-footer-section" style={{marginRight:"-100px"}}>
          <h4 className="heading">Contact</h4>
          <p>Email: info@scopetree.com</p>
          <p>Phone: +91 1234567890</p>
          <p>Location: Chennai</p>
        </div>
      </div>

      <div className="st-footer-bottom">
        <p>© {new Date().getFullYear()} ScopeTree Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
