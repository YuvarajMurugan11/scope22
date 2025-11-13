import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PowerBI_2.css";
import dashboardImg from "../../assets/powerbi-dashboard.png";

const PowerBI_2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="powerbi2-container">
      {/* Left Section - Text */}
      <div className="powerbi2-text-section">
        <div className="powerbi2-heading" data-aos="fade-up">
          <span className="powerbi2-highlight-title">
            Always step forward and{" "}
            <span style={{ color: "#333" }}>make a difference for better services</span>
          </span>
        </div>

        <div className="powerbi2-description" data-aos="fade-up">
          Microsoft Power BI is a powerful business analytics solution that
          enables organizations to visualize data, share insights, and make
          data-driven decisions with confidence. It transforms complex
          information into interactive dashboards and reports, giving you a
          clear view of your business performance in real time.
        </div>

        <div className="powerbi2-subheading" data-aos="fade-up">
          <span className="powerbi2-highlight">With Power BI, businesses can:</span>
        </div>

        <ul className="powerbi2-list" data-aos="fade-up">
          <li className="powerbi2-list-item">
            Centralize data from diverse systems such as Excel, SQL Server,
            Dynamics 365, and other third-party applications.
          </li>
          <li className="powerbi2-list-item">
            Visualize performance using intuitive charts, dashboards, and KPIs
            that provide real-time insights.
          </li>
          <li className="powerbi2-list-item">
            Empower teams to explore data independently with self-service
            analytics, reducing dependency on IT teams.
          </li>
        </ul>
      </div>

      {/* Right Section - Image with floating animation */}
      <div className="powerbi2-image-section">
        <div className="powerbi2-image-overlay"></div>
        <div className="powerbi2-image-wrapper">
          <img
            src={dashboardImg}
            alt="Power BI Dashboard"
            className="powerbi2-image"
          />
        </div>
      </div>
    </div>
  );
};

export default PowerBI_2;
