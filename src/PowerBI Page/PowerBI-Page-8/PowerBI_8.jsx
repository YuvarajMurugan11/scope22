import React from "react";
import "./PowerBI_8.css";

const PowerBI_8 = () => {
  const services = [
    {
      title: "Implementation & Deployment",
      text: "Scopetree ensures a seamless Power BI implementation, integrating it with your existing systems and aligning it with your business goals for maximum efficiency."
    },
    {
      title: "Data Strategy & Consulting",
      text: "We help you define a clear data strategy to unlock the full potential of Power BI and drive data-driven decision-making across your organization."
    },
    {
      title: "Custom Dashboard Development",
      text: "Our experts create interactive, user-friendly Power BI dashboards and reports that deliver real-time insights tailored to your business needs."
    },
    {
      title: "Optimization & Support",
      text: "We provide continuous optimization and annual support to keep your Power BI environment secure, updated, and performing at its best."
    },
    {
      title: "Training & Enablement",
      text: "Scopetree offers hands-on user training to empower your team with the skills to leverage Power BI effectively for self-service analytics and reporting."
    },
    {
      title: "Data Integration & Automation",
      text: "We help you connect Power BI with multiple data sources and automate data refreshes, ensuring real-time, accurate insights across your business systems."
    },
  ];

  return (
    <div className="PowerBI_8">
      <div className="PowerBI_8-header">
        <h2 className="PowerBI_8-titleHeading">Scopetree Power BI Services</h2>
        <p className="PowerBI_8-description">
          Scopetree empowers organizations with tailored Microsoft Power BI solutions — 
          from data integration and dashboard design to analytics automation and ongoing support.
        </p>
      </div>

      <div className="PowerBI_8-grid">
        {services.map((service, index) => (
          <div key={index} className="PowerBI_8-card">
            <div className="PowerBI_8-label">
              <span className="PowerBI_8-labelText">{service.title}&nbsp;&nbsp;&nbsp;</span>
            </div>
            <p className="PowerBI_8-text">{service.text}</p>
          </div>
        ))}
      </div>

      {/* <div className="PowerBI_8-btnContainer">
        <button className="PowerBI_8-button">Contact Us</button>
      </div> */}
    </div>
  );
};

export default PowerBI_8;
