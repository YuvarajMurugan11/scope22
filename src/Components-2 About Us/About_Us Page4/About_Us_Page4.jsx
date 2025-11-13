import React, { useEffect, useRef } from "react";
import "./About_Us_Page4.css";
import IFC from "../../assets/About_Ind.png";

import ABI_1 from "../../assets/abi_1.png";  
import ABI_2 from "../../assets/abi_2.png"; 
import abi_5 from "../../assets/abi_5.png"; 
import abi_3 from "../../assets/abi_3.png"; 
import abi_4 from "../../assets/abi_4.png"; 
import abi_6 from "../../assets/abi_6.png"; 

const industries = [
  { name: "Manufacturing", img: ABI_1, size: 90 },
  { name: "Engineering & Construction", img: ABI_2, size: 150 },
  { name: "Retail", img: abi_5, size: 80 },
  { name: "Education", img: abi_3, size: 90 },
  { name: "Logistics", img:abi_4, size: 90 },
  { name: "Financial Services", img: abi_6, size: 95 },
];

const About_Us_Page4 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="AboutUs4Container fade-right" ref={sectionRef}>
      {/* Left Side - Image */}
      <div className="AboutUs4Left">
        <div className="AboutUs4MapWrapper">
          <img
            src={IFC}
            alt="Innovation Center Network Map"
            className="AboutUs4MapImage"
          />
        </div>
      </div>

      {/* Right Side - Industries */}
      <div className="AboutUs4Right">
        <h2 className="AboutUs4SubHeading">Industries</h2>
        <div className="AboutUs4IndustryGrid">
          {industries.map((ind, index) => (
            <div key={index} className="AboutUs4IndustryBox">
              <span className="AboutUs4IndustryName">{ind.name}</span>
              <img
                src={ind.img}
                alt={ind.name}
                className={`AboutUs4IndustryIcon ${
                  ind.name === "Engineering & Construction" ? "EngineeringIcon" : ""
                }`}
                style={{ width: `${ind.size}px`, height: `${ind.size}px`, borderRadius:"none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About_Us_Page4;
