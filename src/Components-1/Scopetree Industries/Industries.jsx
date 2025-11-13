import React from "react";
import "./Industries.css";

// Import images
import IMF from "../../assets/IMF.png";
import IEC from "../../assets/IEC.png";
import IR from "../../assets/IR.png";
import IHC from "../../assets/IHC.png";
import ILO from "../../assets/ILO.png";
import IFC from "../../assets/IFS.png";

const industries = [
  {
    title: "Manufacturing",
    description:
      "Drive efficiency and innovation with digital manufacturing solutions that connect production, inventory, and supply chain processes. Empower your operations with real-time insights and intelligent automation. ",
    image: IMF,
    link: "/manufacturing",
  },
  {
    title: "Engineering & Construction",
    description:
      "Transform project delivery with digital tools that enhance planning, resource management, and collaboration. From design to execution, gain visibility and control to deliver projects on time and within budget.",
    image: IEC,
    link: "/engineering-construction",
  },
  {
    title: "Retail ",
    description:
      "Reimagine customer experiences through connected retail solutions. Streamline inventory, sales, and analytics to create personalized shopping experiences and smarter business operations.",
    image: IR,
    link: "/retail",
  },
  {
    title: "Education",
    description:
      "Enable a smarter learning ecosystem through digital transformation. Simplify administration, enhance collaboration, and empower institutions to deliver engaging, data-driven learning experiences.",
    image: IHC,
    link: "/education",
  },
  {
    title: "Logistics",
    description:
      "Optimize your logistics network with real-time tracking, automated workflows, and data-driven insights. Deliver operational excellence, improve supply chain visibility, and boost customer satisfaction.",
    image: ILO,
    link: "/logistics",
  },
  {
    title: "Financial Services",
    description:
      "Enhance financial performance and compliance with intelligent digital solutions. Streamline processes, gain actionable insights, and deliver secure, seamless experiences across all financial operations.",
    image: IFC,
    link: "/financial-services",
  },
];

const Industries = () => {
  return (
    <div className="ind-sec">
      <h2 className="ind-title">Industries</h2>
      <div className="ind-grid">
        {industries.map((industry, index) => (
          <a href={industry.link} className="ind-card" key={index}>
            <img src={industry.image} alt={industry.title} className="ind-img" />
            <div className="ind-content">
              <h3 className="ind-name">{industry.title}</h3>
              <p className="ind-desc">{industry.description}</p>
            </div>

            {/* ➜ Arrow button */}
            {/* <div className="ind-arrow">
              <span className="arrow-symbol" style={{fontSize:"16px"}}> &#10095;</span>
            </div> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Industries;
