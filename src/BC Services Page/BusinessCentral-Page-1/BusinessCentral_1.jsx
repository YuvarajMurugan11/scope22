import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BusinessCentral_1.css";
import logoImg from "../../assets/bcico.png"; // <-- your logo

const BusinessCentral_1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="BusinessCentral_1__container">
      <div className="BusinessCentral_1__hero">
        <div className="BusinessCentral_1__content" data-aos="fade-up">

          {/* Membership Box (Left Section) */}
          <div className="BusinessCentral_1__membershipBox">
            <h4 className="BusinessCentral_1__membershipTitle">
              BECOME A HUBLOTISTA MEMBER
            </h4>
            <p className="BusinessCentral_1__membershipText">
              <em>
                Register your Hublot, join Hublotista for exclusive events, and
                get an extra year of warranty.
              </em>
            </p>
            <button className="BusinessCentral_1__createButton">
              CREATE ACCOUNT
            </button>
          </div>

          {/* Logo and Text (Center) */}
          <div className="BusinessCentral_1__logoAndText">
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

        </div>
      </div>

      {/* Optional Description Below */}
      <div className="BusinessCentral_1__description" data-aos="fade-up">
        <p className="BusinessCentral_1__descriptionText">
          <span className="BusinessCentral_1__highlight">
            Streamline your processes, make smarter decisions, and accelerate
            growth with Dynamics 365 Business Central—a comprehensive business
            management solution designed for small to medium-sized businesses.
          </span>
        </p>
      </div>
    </div>
  );
};

export default BusinessCentral_1;
