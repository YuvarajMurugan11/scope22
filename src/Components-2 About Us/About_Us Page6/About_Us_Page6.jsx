import React, { useEffect, useRef } from "react";
import "./About_Us_Page6.css";
import Achivement from "../../assets/Achivement.png";

const About_Us_Page6 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("animateSlideInRightToLeft");
          } else {
            section.classList.remove("animateSlideInRightToLeft");
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% visible
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="aboutUsPage6Container" ref={sectionRef}>
      {/* Left Side - Image */}
      <div className="aboutUsPage6LeftSide">
        <h2 className="aboutUsPage6Heading"></h2>
        <div className="aboutUsPage6MapWrapper">
          <img
            src={Achivement}
            alt="Achievement Map"
            className="aboutUsPage6MapImage"
          />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="aboutUsPage6RightSide">
        <h3 className="aboutUsPage6SubHeading">Our Journey</h3>
        <p className="aboutUsPage6Description">
          Scopetree, founded in 2011, has been empowering businesses through
          technology by delivering innovative solutions that streamline
          operations, enhance productivity, and drive sustainable growth. With a
          proven track record of over 100 successful projects for 50+ clients
          across 15+ countries, we specialize in Microsoft enterprise solutions,
          web development, and mobile app development, catering to diverse
          industries with tailored, results-driven approaches.
          <br />
          <br />
          In 2025, Scopetree launched SecureSign, our proprietary digital
          signature solution that integrates seamlessly with ERP platforms and
          web applications. SecureSign enables businesses to manage document
          approvals and authentication securely, efficiently, and in compliance
          with global standards, further strengthening our commitment to
          delivering cutting-edge technology solutions.
        </p>
      </div>
    </div>
  );
};

export default About_Us_Page6;
