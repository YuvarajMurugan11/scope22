import React, { useState } from "react";
import "./Scopetree_ProductSection.css";
import { Link } from "react-router-dom"; // ✅ React Router link
import Auto from '../../assets/ST Home Page_1.mp4';

export default function Scopetree_ProductSection() {
  const [videoEnded, setVideoEnded] = useState(false);


  // Close menu when a nav link is clicked (useful for mobile)
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <section className="product-section">
      <div>
        <h2 className="section-header">Our Product</h2>
      </div>

      <div className="product-hero">
        <video
          className="background-video"
          autoPlay
          muted
          playsInline
          onEnded={() => setVideoEnded(true)}
        >
          <source src={Auto} type="video/mp4" />
          Your browser does not support the video.
        </video>

        {videoEnded && (
          <div className="product-overlay fade-up">
            <h1 className="product-title">The Smarter Way to Secure Your Signatures.</h1>
            <p className="product-subtitle1">SecureSign</p>
            <p className="product-subtitle2">A product by Scopetree </p>
            {/* <button className="discover-button">DISCOVER NOW</button> */}
            <Link to="/SecureSign" className="discover-button"   onClick={handleLinkClick}  style={{ textDecoration: "none" }}>
             Learn More
             </Link>
          </div>
        )}
      </div>
    </section>
  );
}
