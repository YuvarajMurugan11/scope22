import React from "react";
import "./PowerBI_7.css";
import powerBIImage from "../../assets/powerbi_7.png"; // use your image path

const PowerBI_7 = () => {
  return (
    <div className="powerbi7-containerP">
      <h1 className="powerbi7-title">
        Transform your data into decisions with one unified analytics platform
      </h1>

      <div className="powerbi7-container">
        {/* Left side image */}
        <div className="powerbi7-left">
          <img
            src={powerBIImage}
            alt="Power BI Dashboard"
            className="powerbi7-image floating"
          />
        </div>

        {/* Right side content */}
        <div className="powerbi7-right">
          <p className="powerbi7-description">
            Power BI is a powerful business analytics tool developed by
            Microsoft that enables organizations to connect to a wide range of
            data sources, transform raw data into meaningful insights, and
            create visually compelling, interactive reports and dashboards. It
            helps businesses make data-driven decisions by presenting complex
            information in an easy-to-understand format.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PowerBI_7;
