import React from "react";
import "./BusinessCentral_7.css";

// Import your icons (replace paths with your actual files)
import ConstructionIcon from "../../assets/construction.png";
import FinanceIcon from "../../assets/finance.png";
import EducationIcon from "../../assets/education.png";
import LogisticIcon from "../../assets/logistic.png";
import ManufacturingIcon from "../../assets/manufacturing.png";
import RetailIcon from "../../assets/retail.png";

const BusinessCentral_7 = () => {
  const boxes = [
    {
      icon: ConstructionIcon,
      title: "Construction & Engineering",
      description:
        "Simplify project costing, coordinate subcontractors, and manage engineering workflows efficiently.",
    },
    {
      icon: FinanceIcon,
      title: "Finance & Service",
      description:
        "Automate billing, track profitability, and streamline financial management with integrated tools.",
    },
    {
      icon: EducationIcon,
      title: "Education",
      description:
        "Manage admissions, student records, billing, and operational reporting for educational institutions.",
    },
    {
      icon: LogisticIcon,
      title: "Logistic",
      description:
        "Enhance supply chain visibility, optimize routes, and track inventory across multiple locations.",
    },
    {
      icon: ManufacturingIcon,
      title: "Manufacturing",
      description:
        "Gain control over production, material planning, and job costing to improve efficiency.",
    },
    {
      icon: RetailIcon,
      title: "Retail",
      description:
        "Manage inventory, pricing, and multi-location operations while integrating with online platforms.",
    },
  ];

  return (
    <div className="BusinessCentral_7">
      {boxes.map((box, index) => (
        <div key={index} className="BusinessCentral_7-box">
          <img src={box.icon} alt={box.title} className="BusinessCentral_7-icon" />
          <h3 className="BusinessCentral_7-title">{box.title}</h3>
          <p className="BusinessCentral_7-description">{box.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BusinessCentral_7;
