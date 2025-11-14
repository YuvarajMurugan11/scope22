import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BusinessCentral_1.css";
import logoImg from "../../assets/bcico.png"; // Logo
import img1 from "../../assets/bc1c.png"; // Box images
import img2 from "../../assets/bc1a.png";
import img3 from "../../assets/bc1g.png";

const BusinessCentral_1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="BusinessCentral_1__container">
      {/* Hero Section */}
      <div className="BusinessCentral_1__hero">
        <div className="BusinessCentral_1__logoAndText" data-aos="fade-up">
          <img
            src={logoImg}
            alt="Business Central Logo"
            className="BusinessCentral_1__logo"
          />
          <div className="BusinessCentral_1__textLogo">
            <h2 className="BusinessCentral_1__heading1">
              Microsoft Dynamics 365
            </h2>
            <h1 className="BusinessCentral_1__heading2">
              Business Central
            </h1>
          </div>
        </div>

        {/* Three Floating Boxes */}
        <div className="BusinessCentral_1__threeBoxes" data-aos="fade-up">
          <div className="BusinessCentral_1__box">
            <img src={img1} alt="Box Image 1" />
            <h3 style={{ color: "#fff", marginTop: "-10px", paddingLeft: "15px" }}>
              Connect Your Business
            </h3>
            <p
              style={{
                color: "#fff",
                marginTop: "-1px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              Bring all departments finance, sales, service, and operations onto
              one integrated platform.
            </p>
          </div>
          <div className="BusinessCentral_1__box">
            <img
              src={img2}
              alt="Box Image 2"
              style={{ marginTop: "5px" }}
            />
            <h3
              style={{
                color: "#fff",
                marginTop: "0px",
                paddingLeft: "15px",
              }}
            >
              Automate and Simplify
            </h3>
            <p
              style={{
                color: "#fff",
                marginTop: "-1px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              Enhance productivity with AI driven suggestions and smart task
              management.
            </p>
          </div>
          <div className="BusinessCentral_1__box">
            <img
              src={img3}
              alt="Box Image 3"
              style={{
                width: "150px",
                marginLeft: "60px",
                marginTop: "22px",
              }}
            />
            <h3
              style={{
                color: "#fff",
                marginTop: "0px",
                paddingLeft: "15px",
              }}
            >
              Grow with Confidence
            </h3>
            <p
              style={{
                color: "#fff",
                marginTop: "-1px",
                paddingLeft: "15px",
                paddingRight: "15px",
              }}
            >
              Scale easily as your business expands with flexible cloud
              deployment.
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="BusinessCentral_1__description" data-aos="fade-up">
        <p className="BusinessCentral_1__descriptionText">
          {/* <span className="BusinessCentral_1__highlight">
            Streamline your processes, make smarter decisions, and accelerate
            growth with Dynamics 365 Business Central—a comprehensive business
            management solution designed for small to medium-sized businesses.
          </span> */}
        </p>
      </div>
    </div>
  );
};

export default BusinessCentral_1;
