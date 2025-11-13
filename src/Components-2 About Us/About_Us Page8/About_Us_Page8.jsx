import React, { useEffect, useRef } from "react";
import "./About_Us_Page8.css";
import why_Sco from "../../assets/why_Sco.png";

const About_Us_Page8 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("animateFadeInRight");
          } else {
            // Remove class when scrolled away (so animation can replay on re-entry)
            section.classList.remove("animateFadeInRight");
          }
        });
      },
      { threshold: 0.3 } // 30% visible before triggering
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="aboutUsPage8Container" ref={sectionRef}>
      <div className="aboutUsPage8LeftSide">
        <div className="aboutUsPage8MapWrapper">
          <img
            src={why_Sco}
            alt="Innovation Center Network Map"
            className="aboutUsPage8MapImage"
          />
        </div>
      </div>

      <div className="aboutUsPage8RightSide">
        <h3 className="aboutUsPage8SubHeading">Why Scopetree ?</h3>
        <p className="aboutUsPage8Description">
        <ul className="aboutUsPage8Description_ul">
          <li className="aboutUsPage8Description_li" > Streamline processes through a single, consistent user experience across all departments.</li>
          <li className="aboutUsPage8Description_li"> Rapidly deploy and update various versions of your ERP system to meet evolving business needs.</li>
          <li className="aboutUsPage8Description_li"> Ensure easy compatibility with third-party applications for smooth performance.</li>
          <li className="aboutUsPage8Description_li">Customize the ERP interface to match your business processes, improving user interaction.</li>
          <li className="aboutUsPage8Description_li">Save up to 95% in costs by streamlining ERP setup and ongoing management.</li>
        </ul>
        </p>
      </div>
    </div>
  );
};

export default About_Us_Page8;
 
         
         
          
          