import React, { useEffect, useRef } from "react";
import "./About_Us_Page5.css";

const AboutUsPage5 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const target = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.add("animateFadeInLeft");
        } else {
          target.classList.remove("animateFadeInLeft");
        }
      },
      { threshold: 0.3 } // Trigger when 30% is visible
    );

    observer.observe(target);

    return () => observer.unobserve(target);
  }, []);

  return (
    <div ref={sectionRef} className="aboutUsPage5Container">
      
      <div className="aboutUsPage5LeftTextContainer">
        <h2 className="aboutUsPage5LeftTextContainer_h2">
       Service Offerings
        </h2>
        <p className="aboutUsPage5LeftTextContainer_p">
         We specialize in delivering end-to-end digital transformation through Microsoft Dynamics 365 Business Central, Power BI, Power Apps, and Dynamics NAV. From implementation and customization to data migration, integration, and ongoing support, we help businesses enhance productivity and drive measurable growth.
        </p>
      </div>

      <div className="aboutUsPage5RightSide">
        <div className="aboutUsPage5Grid">
          <div className="aboutUsPage5TextBox">End to End Implementation</div>
          <div className="aboutUsPage5TextBox">Development & Customization</div>
          <div className="aboutUsPage5TextBox">Third Party Software Integration</div>
          <div className="aboutUsPage5TextBox">Data Migration & Upgrade</div>
          <div className="aboutUsPage5TextBox">Business Process Consulting</div>
          <div className="aboutUsPage5TextBox">Data Visualization</div>
          <div className="aboutUsPage5TextBox">Application Support and Maintenence</div>
          <div className="aboutUsPage5TextBox">Automate <br />Workflows</div>
        </div>
      </div>

    </div>
  );
};

export default AboutUsPage5;
