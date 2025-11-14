import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PowerBI_1.css";

import logo from "../../assets/powerbiico.png"; // Logo
import img1 from "../../assets/pbii1.png"; // Box images
import img2 from "../../assets/pbii2.png";
import img3 from "../../assets/pbii3.png";

const PowerBI_1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="PowerBI_1__container">
      {/* Hero Section */}
      <div className="PowerBI_1__hero">
        <div className="PowerBI_1__logoAndText" data-aos="fade-up">
          <img src={logo} alt="Power BI Logo" className="PowerBI_1__logo" />
          <div className="PowerBI_1__textLogo">
            <h2 className="PowerBI_1__heading1">Microsoft</h2>
            <h1 className="PowerBI_1__heading2">Power BI</h1>
          </div>
        </div>
      </div>

      {/* Three Floating Boxes */}
      <div className="PowerBI_1__threeBoxes" data-aos="fade-up">
        <div className="PowerBI_1__box">
          <img src={img1} alt="Box Image 1" />
          <h3 style={{ color: "#fff", marginTop: "0px", paddingLeft: "15px" }}>
            Visualize Your Data
          </h3>
          <p style={{ color: "#fff", marginTop: "-1px", paddingLeft: "15px", paddingRight: "15px" }}>
            Transform raw data into interactive, easy to understand dashboards.
          </p>
        </div>
        <div className="PowerBI_1__box">
          <img src={img2} alt="Box Image 2" />
          <h3 style={{ color: "#fff", marginTop: "0px", paddingLeft: "15px" }}>
           Connect and Analyze
          </h3>
          <p style={{ color: "#fff", marginTop: "-1px", paddingLeft: "15px", paddingRight: "15px" }}>
           Combine data models to create a single, unified view of your organization.
          </p>
        </div>
        <div className="PowerBI_1__box">
          <img src={img3} alt="Box Image 3" />
          <h3 style={{ color: "#fff", marginTop: "0px", paddingLeft: "15px" }}>
            Share and Collaborate
          </h3>
          <p style={{ color: "#fff", marginTop: "-1px", paddingLeft: "15px", paddingRight: "15px" }}>
           Keep stakeholders aligned with up-to-date insights and automatic refreshes.
          </p>
        </div>
      </div>

      {/* Description Section */}
      {/* <div className="PowerBI_1__description" data-aos="fade-up">
        <p className="PowerBI_1__descriptionText">
          <span className="PowerBI_1__highlight">
            Microsoft Power BI is a powerful and flexible business intelligence tool 
            that provides a wide range of features to help organizations turn raw data 
            into meaningful insights. Its key benefits enable businesses to make data-driven 
            decisions and improve their approach to analytics.
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default PowerBI_1;
