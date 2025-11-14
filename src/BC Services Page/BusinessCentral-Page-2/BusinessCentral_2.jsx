import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BusinessCentral_2.css";
import businessCentralLogo from "../../assets/bc2nd.png"; // your logo image
// import bgImage from "../../assets/businesscentral_bg.jpg";

const BusinessCentral_2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animation should happen only once
    });
  }, []);

  return (
    <div
      className="business-central-container"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Left Section - Text */}
      <div className="business-central-logo" data-aos="fade-up">
        <img
          src={businessCentralLogo}
          alt="Microsoft Dynamics 365 Business Central logo"
          className="logo-icon floating"
        />
      </div>

      {/* Right Section - Image with floating animation */}
      <div className="business-central-text" data-aos="fade-up">
        <h2 className="bc2-h2">Run your entire business with a single solution</h2>
        <p className="business-central-paragraph">
          Experience a consistent and seamless user experience with Microsoft
          Dynamics 365 Business Central, whether deployed in the cloud,
          on-premises, or through a hybrid setup. The platform ensures
          flexibility, security, and smooth performance across all environments,
          allowing your team to work efficiently from anywhere.
          <br />
          <br />
          Stay connected on the go with Business Central’s mobile access for
          Windows, Android, and iOS devices. Its intuitive, responsive design
          lets you manage sales, finances, and operations anytime, ensuring
          real-time collaboration, faster decisions, and uninterrupted
          productivity wherever business takes you.
        </p>
      </div>
    </div>
  );
};

export default BusinessCentral_2;
