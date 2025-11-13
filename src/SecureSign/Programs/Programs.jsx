// Programs.js
import React from 'react';
import './Programs.css';
import { useNavigate } from 'react-router-dom';
import AutoPlay from '../AutoPlay/AutoPlay';

const Programs = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
        navigate('/SecureSign/contact'); // relative navigation to /SecureSign/contact
  };

  return (
    <div className="pg-hero" id="nav">
      {/* Left Column */}
      <div className="pg-col-left" data-aos="fade-right">
        <AutoPlay />
      </div>

      {/* Right Column */}
      <div className="pg-col-right" data-aos="fade-left">
        <h1 className="pg-title">Transforming Signatures... Empowering Business</h1>

        <p className="pg-text">
          SecureSign – A venture of Scopetree Technologies – transforms the way businesses handle digital signatures,
          whether on ERP, CRM, Payroll, or any web or mobile applications. SecureSign provides a secure, scalable,
          and legally valid signing experience powered by PFX-based certificates.
        </p>

        <p className="pg-text">
          Designed for today’s enterprises, SecureSign enhances efficiency, enforces compliance,
          and safeguards every document with tamper-proof assurance.
        </p>

        {/* Button */}
        <div className="pg-demo-wrap" data-aos="zoom-in" data-aos-delay="200">
          <button className="pg-btn" onClick={handleDemoClick}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
