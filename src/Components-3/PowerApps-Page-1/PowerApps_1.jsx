import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PowerApps_1.css";
import backgroundImg from "../../assets/powerapps-bg.jpg";
import logoImg from "../../assets/powerapps-logo.png"; // <-- add your logo here

const PowerApps_1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="PowerApps_1__container">
      <div
        className="PowerApps_1__hero"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="PowerApps_1__content">
          <div className="PowerApps_1__logoSection" data-aos="fade-up">
            <img
              src={logoImg}
              alt="Power Apps Logo"
              className="PowerApps_1__logo"
            />
          </div>

          <div className="PowerApps_1__text">
            <h1 className="PowerApps_1__heading1" data-aos="fade-up">
              Microsoft
            </h1>
            <h1 className="PowerApps_1__heading2" data-aos="fade-up">
              Power Apps
            </h1>
          </div>
        </div>
      </div>

      <div className="PowerApps_1__description">
        <p className="PowerApps_1__descriptionText" data-aos="fade-up">
          <span className="PowerApps_1__highlight">Power Apps is a low-code platform that enables users to quickly build custom business applications. It allows both developers and non-developers to connect to data, automate workflows, and create apps for web or mobile—simplifying processes and driving efficiency without the need for complex coding.
          </span>
        </p>
      </div>
    </div>
  );
};

export default PowerApps_1;
