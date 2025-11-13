import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PowerBI_1.css";

import backgroundImg from "../../assets/powerbi-bg.png";
import logo from "../../assets/powerbiico.png";

const PowerBI_1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="PowerBI_1__container">
      <div
        className="PowerBI_1__hero"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="PowerBI_1__content" data-aos="fade-up">

          {/* Membership Box (Left) */}
          <div className="PowerBI_1__membershipBox">
            <h4 className="PowerBI_1__membershipTitle">
              BECOME A POWER BI MEMBER
            </h4>
            <p className="PowerBI_1__membershipText">
              <em>
                Join Power BI community for exclusive tutorials, events, and
                extended support for your dashboards.
              </em>
            </p>
            <button className="PowerBI_1__createButton">
              CREATE ACCOUNT
            </button>
          </div>

          {/* Logo + Headings (Right) */}
          <div className="PowerBI_1__logoAndText">
            <img src={logo} alt="Power BI Logo" className="PowerBI_1__logo" />
            <div className="PowerBI_1__textLogo">
              <h2 className="PowerBI_1__heading1">Microsoft</h2>
              <h1 className="PowerBI_1__heading2">Power BI</h1>
            </div>
          </div>

        </div>
      </div>

      {/* Description */}
      <div className="PowerBI_1__description" data-aos="fade-up">
        <p className="PowerBI_1__descriptionText">
          <span className="PowerBI_1__highlight">
            Microsoft Power BI is a powerful and flexible business intelligence tool 
            that provides a wide range of features to help organizations turn raw data 
            into meaningful insights. Its key benefits enable businesses to make data-driven 
            decisions and improve their approach to analytics.
          </span>
        </p>
      </div>
    </div>
  );
};

export default PowerBI_1;
