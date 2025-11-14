import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Nav_1.css";

import logoImg from "../../assets/navico.png"; // Logo
import img1 from "../../assets/ni1.png"; // Box images (same as BC page)
import img2 from "../../assets/ni2.png";
import img3 from "../../assets/ni3.png";

const Nav_1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="Nav_1__container">
      {/* Hero Section */}
      <div className="Nav_1__hero">
        <div className="Nav_1__logoAndText" data-aos="fade-up">
          <img src={logoImg} alt="NAV Logo" className="Nav_1__logo" />
          <div className="Nav_1__textLogo">
            <h2 className="Nav_1__heading1">Microsoft Dynamics NAV</h2>
            <h1 className="Nav_1__heading2">NAV</h1>
          </div>
        </div>

        {/* Three Floating Boxes */}
        <div className="Nav_1__threeBoxes" data-aos="fade-up">
          <div className="Nav_1__box">
            <img
              src={img1}
              alt="Box Image 1"
              style={{ marginTop: "10px", width: "160px" }}
            />
            <h3 style={{ color: "#fff", marginTop: "0px", marginLeft:"-59px" }}>
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
              Bring all departments finance, sales, service, and operations onto one integrated platform.
            </p>
          </div>
          <div className="Nav_1__box">
            <img
              src={img2}
              alt="Box Image 2"
              style={{ width: "160px" }}
            />
            <h3 style={{ color: "#fff", marginTop: "0px", marginLeft:"-54px" }}>
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
              Enhance productivity with AI driven suggestions and smart task management.
            </p>
          </div>
          <div className="Nav_1__box">
            <img
              src={img3}
              alt="Box Image 3"
              style={{ marginTop: "0px", width: "160px"}}
            />
            <h3 style={{ color: "#fff", marginTop: "0px", marginLeft:"-59px" }}>
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
              Scale easily as your business expands with flexible cloud deployment.
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      {/* <div className="Nav_1__description" data-aos="fade-up">
        <p className="Nav_1__descriptionText">
          <span className="Nav_1__highlight">
            Microsoft Dynamics NAV has been officially replaced by Microsoft Dynamics 365 Business Central as the preferred solution for small and medium-sized businesses. While Dynamics NAV was a widely used on-premise ERP solution, Microsoft has phased it out in favor of Business Central, which offers similar functionality but with enhanced features, a modern cloud-based architecture, and better integration with other Microsoft services. 

            Scopetree can provide comprehensive NAV support and assist in migrating from NAV to Dynamics 365 Business Central, ensuring a seamless transition to a more advanced, cloud-based ERP solution.
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default Nav_1;
