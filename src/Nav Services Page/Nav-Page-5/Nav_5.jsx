import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Nav_5.css";
import laptopImg from "../../assets/navlapview.png"; // ✅ Correct path

const Nav_5 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <section className="nav5-section">
      <div className="nav5-wrapper">
        <div className="nav5-content">
          <h1 className="nav5-title">What We Do in Microsoft Dynamics NAV</h1>
          <p className="nav5-subtitle">
           At Scopetree Technologies, we help businesses maintain, enhance, and transition from Dynamics NAV to Business Central with:
          </p>

          <div className="nav5-gradients">
            <div className="nav5-gradient-box" data-aos="fade-right">
              <h3 style={{ marginTop: "15px", paddingLeft: "20px", color: "white" }}>Upgrades & Migration</h3>
            </div>
            <div className="nav5-gradient-box" data-aos="fade-right">
              <h3 style={{ marginTop: "15px", paddingLeft: "20px", color: "white" }}>Customization</h3>
            </div>
            <div className="nav5-gradient-box" data-aos="fade-right">
              <h3 style={{ marginTop: "15px", paddingLeft: "20px", color: "white" }}>Integration</h3>
            </div>
            <div className="nav5-gradient-box" data-aos="fade-right">
              <h3 style={{ marginTop: "15px", paddingLeft: "20px", color: "white" }}>Support & Maintenance</h3>
            </div>
          </div>
        </div>

        <div className="nav5-image-bg">
          <img src={laptopImg} alt="Business Central Dashboard" className="nav5-laptop" />
        </div>
      </div>
    </section>
  );
};

export default Nav_5;
