// import React from "react";
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./BusinessCentral_6.css";
import laptopImg from "../../assets/your-laptop-image.png"; // ✅ Correct path

const BusinessCentral_6 = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration
        once: true, // whether animation should happen only once - while scrolling down
      })
    }, [])

  return (
    <section className="bc6-section">
      <div className="bc6-wrapper">
        <div className="bc6-content">
          <h1 className="bc6-title">Key aspects of Business Central 365</h1>
          <p className="bc6-subtitle">
            Key aspects of Business Central 365, Key aspects of Business Central 365,
          </p>

          <div className="bc6-gradients">
            <div className="bc6-gradient-box" data-aos="fade-right"> <h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Unified Business Management</h3> </div>
            <div className="bc6-gradient-box" data-aos="fade-right"> <h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Seamless Integration</h3> </div>
            <div className="bc6-gradient-box" data-aos="fade-right"> <h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Cloud Flexibility & Security</h3> </div>
            <div className="bc6-gradient-box" data-aos="fade-right"> <h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Intelligent & Adaptable Platform</h3> </div>
          </div>
        </div>

        <div className="bc6-image-bg">
          <img src={laptopImg} alt="Business Central Dashboard" className="bc6-laptop" />
        </div>
      </div>
    </section>
  );
};

export default BusinessCentral_6;
