import React from "react";
import "./DynamicSales_2.css";
import dashboardImage from "../../assets/SSM.png"; // replace with actual image path

const DynamicSales_2 = () => {
  return (
    <div className="DynamicSales_2-container">
      <h2 className="DynamicSales_2-title">Why Choose Dynamics 365 Sales?</h2>

      <div className="DynamicSales_2-contentWrapper">
        {/* Left Side Content */}
        <div className="DynamicSales_2-content">
          <p className="DynamicSales_2-text">
            Dynamics 365 Sales is a comprehensive, cloud-based CRM designed to
            streamline the entire sales process — from lead generation to deal
            closure.
          </p>
          <p className="DynamicSales_2-text">
            It provides your sales team with the insights, tools, and automation
            they need to build stronger relationships and make data-driven
            decisions.
          </p>
          <p className="DynamicSales_2-text">
            With an intuitive interface and seamless integration with Microsoft
            365, it simplifies communication, improves visibility, and
            accelerates growth.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="DynamicSales_2-imageSection">
          <img
            src={dashboardImage}
            alt="Dynamics 365 Sales Dashboard"
            className="DynamicSales_2-image"
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicSales_2;
