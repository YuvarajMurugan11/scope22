import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Nav_1.css";

import logoImg from "../../assets/navico.png"; // your logo

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
        <div className="Nav_1__content">

          {/* Membership Box (Left) */}
          <div className="Nav_1__membershipBox" data-aos="fade-up">
            <h4 className="Nav_1__membershipTitle">
              BECOME A POWER BI MEMBER
            </h4>
            <p className="Nav_1__membershipText">
              <em>
                Join Power BI community for exclusive tutorials, events, and
                extended support for your dashboards.
              </em>
            </p>
            <button className="Nav_1__createButton">
              CREATE ACCOUNT
            </button>
          </div>

          {/* Logo + Headings (Right) */}
          <div className="Nav_1__logoAndText" data-aos="fade-up">
            <img src={logoImg} alt="NAV Logo" className="Nav_1__logo" />
            <div className="Nav_1__textLogo">
              <h2 className="Nav_1__heading1">Microsoft</h2>
              <h1 className="Nav_1__heading2">Dynamic NAV</h1>
            </div>
          </div>

        </div>
      </div>

      {/* Description */}
      <div className="Nav_1__description" data-aos="fade-up">
        <p className="Nav_1__descriptionText">
          <span className="Nav_1__highlight">
            Microsoft Dynamics NAV has been officially replaced by Microsoft Dynamics 365 Business Central as the preferred solution for small and medium-sized businesses. While Dynamics NAV was a widely used on-premise ERP solution, Microsoft has phased it out in favor of Business Central, which offers similar functionality but with enhanced features, a modern cloud-based architecture, and better integration with other Microsoft services. 

            Scopetree can provide comprehensive NAV support and assist in migrating from NAV to Dynamics 365 Business Central, ensuring a seamless transition to a more advanced, cloud-based ERP solution.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Nav_1;
