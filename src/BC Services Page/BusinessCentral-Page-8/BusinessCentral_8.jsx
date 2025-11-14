import React from "react";
import "./BusinessCentral_8.css";

const BusinessCentral_8 = () => {
  const awards = [
    {
      year: "End-to-End Implementation",
      text: "Seamless end-to-end implementation of Microsoft Dynamics 365 Business Central — from planning and setup to training and go-live support."
    },
    {
      year: "Version Upgrades",
      text: "Smooth and secure version upgrades for Microsoft Dynamics 365 Business Central to keep your system current, optimized, and fully supported."
    },
    {
      year: "Data Migration ",
      text: "Seamless and secure migration of your existing data to Microsoft Dynamics 365 Business Central — ensuring accuracy, integrity, and business continuity."
    },
    {
      year: "Customization",
      text: "Personalized customization of Microsoft Dynamics 365 Business Central to enhance functionality and fit your business perfectly."
    },
    {
      year: "Integration",
      text: "Seamless integration of Microsoft Dynamics 365 Business Central with your existing systems to ensure smooth data flow and unified business operations."
    },
    {
      year: "Support",
      text: "Comprehensive annual support services to ensure your Microsoft Dynamics 365 Business Central operates smoothly with proactive maintenance, timely updates, and expert assistance."
    },
  ];

  return (
    <div className="BusinessCentral_8">
      
      <div className="BusinessCentral_8-header">
        <h2 className="BusinessCentral_8-title">
          Scopetree Dynamics 365 Business Central Services
        </h2>
        <p className="BusinessCentral_8-description">
          Scopetree delivers end-to-end Dynamics 365 Business Central solutions — 
          from implementation and customization to integration and ongoing support — 
          helping businesses streamline operations and drive digital efficiency.
        </p>
      </div>

      <div className="BusinessCentral_8-grid">
        {awards.map((award, index) => (
          <div key={index} className="BusinessCentral_8-card">
            <div className="BusinessCentral_8-year">
              <span className="BusinessCentral_8-yearText">{award.year}&nbsp;&nbsp;&nbsp;</span>
            </div>
            <p className="BusinessCentral_8-text">{award.text}</p>
          </div>
        ))}
      </div>

      {/* <div className="BusinessCentral_8-btnContainer">
        <button className="BusinessCentral_8-button">Contact Us</button>
      </div> */}
    </div>
  );
};

export default BusinessCentral_8;
