import React from "react";
import "./Services.css";
import MDBC from "../../assets/MDBC.PNG";
import MDN from "../../assets/MDN.jpg";
// import MDS from "../../assets/MDS.jpg";
// import MDCRAM from "../../assets/MDCRAM.jpg";
import MPBI from "../../assets/MPBI.jpg";
import MDA from "../../assets/MDA.jpg";
// import WD from "../../assets/WD.png";
// import MAD from "../../assets/MAD.png";
import { Link } from "react-router-dom"; // ✅ React Router link

const technologies = [
  {
    title: "Microsoft Dynamics 365 Business Central",
    description:
      "Streamline your operations with an all-in-one ERP solution for smarter, connected business management.",
    image: MDBC,
    link: "/BC",
  },
  {
    title: "Microsoft Dynamics NAV",
    description:
      "Empower your business with a proven, flexible ERP system tailored to your operational needs.",
    image: MDN,
    link: "/Nav",
  },
  // {
  //   title: "Microsoft Dynamics 365 Sales",
  //   description:
  //     "Scopetree can assist you with Microsoft Dynamics 365 services, offering clear guidance and direction on strategic.",
  //   image:MDS,
  //   link: "https://www.microsoft.com/en-in/",
  // },
  // {
  //   title: "Microsoft Dynamics CRM",
  //   description:
  //     "Scopetree can assist you with Microsoft Dynamics 365 services, offering clear guidance and direction on strategic.",
  //   image:MDCRAM,
  //   link: "https://www.microsoft.com/en-in/",
  // },
  {
    title: "Power BI",
    description:
      "Transform your data into actionable insights with powerful, interactive dashboards and analytics.",
    image: MPBI,
    link:"/PowerBI",
  },
  {
    title: "Microsoft PowerApps",
    description:
      "Build custom apps quickly to automate processes and enhance productivity across your organization.",
    image:MDA,
    link: "https://www.microsoft.com/en-in/",
  },
  // {
  //   title: "Website Development",
  //   description:
  //     "Scopetree can assist you with Microsoft Dynamics 365 services, offering clear guidance and direction on strategic.",
  //   image:WD,
  //   link: "https://www.microsoft.com/en-in/",
  // },
  // {
  //   title: "Mobile App Development",
  //   description:
  //     "Scopetree can assist you with Microsoft Dynamics 365 services, offering clear guidance and direction on strategic.",
  //   image: MAD,
  //   link: "https://www.figma.com/design/YcIkWAnycF3yDtfRb47uO5/Untitled?node-id=0-1&p=f&t=YevKQVqVMAReRsVC-0",
  // },
];

const Services = () => {
  return (
    <section className="technologies">
      <h1 className="technologies_heading">Technologies We Serve</h1>
      <p id="service">
       Scopetree can assist you with Microsoft Dynamics 365 services, offering clear guidance and direction on strategic, operational, and technical aspects to optimize your business processes.
      </p>

      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-image-container">
              <img src={tech.image} alt={tech.title} className="tech-image" />
            </div>
            <div className="tech-content">
              <h3 className="tech-content_heading">{tech.title}</h3>
              <p className="tech-content_para">{tech.description}</p>
              <Link 
                to={tech.link}
                className="learn-more-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
               </Link>
      
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
