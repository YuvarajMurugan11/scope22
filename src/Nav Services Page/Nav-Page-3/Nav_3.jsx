import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Nav_3.css';
import arrows from '../../assets/arrows.png';
import leftLap from '../../assets/leftLap.png';
import rightLap from '../../assets/rightLap.png';
import arrowBg from '../../assets/arrowBg.png';
import milestoneImage1 from "../../assets/Microsoft-Dynamics-ico.png";
import milestoneImage2 from "../../assets/Dynamics-365-Business-Central-icon-logo.png";

const Nav_3 = () => {
  const [showLaptops, setShowLaptops] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowLaptops(true);
            setTimeout(() => setShowArrows(true), 1000);
          } else {
            setShowLaptops(false);
            setShowArrows(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="nav-container">
        {/* Left Laptop + Logo */}
        <div className="laptop-wrapper">
          <img
            src={milestoneImage1}
            alt="Logo 1"
            className={`logo logo-left ${showLaptops ? 'fade-in' : ''}`}
          />
          <img
            src={leftLap}
            alt="Left Laptop"
            className={`laptop left ${showLaptops ? 'slide-up' : ''}`}
          />
        </div>

        {/* Arrows */}
        <div className="arrow-wrapper">
          <img src={arrowBg} alt="Arrow Background" className="arrow-bg" />
          <img
            src={arrows}
            alt="Arrows"
            className={`arrows ${showArrows ? 'slide-in' : ''}`}
          />
        </div>

        {/* Right Laptop + Logo */}
        <div className="laptop-wrapper">
          <img
            src={milestoneImage2}
            alt="Logo 2"
            className={`logo logo-right ${showLaptops ? 'fade-in' : ''}`}
          />
          <img
            src={rightLap}
            alt="Right Laptop"
            className={`laptop right ${showLaptops ? 'slide-up' : ''}`}
          />
        </div>
      </div>

      {/* Bottom Content */}
      <div className="nav_3-con" data-aos="fade-up">
        <h3 style={{ marginLeft: "20px" }}>Why Upgrade?</h3>
        <ul style={{ listStyleType: "disc" }}>
          <li>Cloud Access – Use your ERP securely from anywhere, without servers or manual updates.</li>
          <li>Always Up to Date – Get new features and security improvements automatically.</li>
          <li>Seamless Integration – Connect easily with Outlook, Excel, Teams, and Power BI.</li>
          <li>Smart Insights – Access real-time data for faster, informed decisions.</li>
          <li>Cost Savings – Lower IT costs while improving flexibility and scalability.</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav_3;
