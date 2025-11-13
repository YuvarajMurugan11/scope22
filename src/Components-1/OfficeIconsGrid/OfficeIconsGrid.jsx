import React, { useState, useEffect } from "react";
import "./OfficeIconsGrid.css";

const icons = [
  { name: "Microsoft Dynamics 365 Business Central", src: "src/assets/011.png", url: "#", size: 110 },
  { name: "Microsoft Dynamics NAV", src: "src/assets/012.png", url: "#", size: 120 },
  { name: "Microsoft Dynamics CRM", src: "src/assets/013.png", url: "#", size: 110 },
  { name: "Microsoft Dynamics 365 Sales", src: "src/assets/014.png", url: "#", size: 110 },
  { name: "Microsoft PowerApps", src: "src/assets/015.png", url: "#", size: 150 },
  { name: "Power BI", src: "src/assets/016.png", url: "#", size: 105 },
];

// Custom fade-in order
const fadeOrder = [
  "Microsoft Dynamics 365 Business Central",
  "Microsoft PowerApps",
  "Microsoft Dynamics CRM",
  "Microsoft Dynamics 365 Sales",
  "Microsoft Dynamics NAV",
  "Power BI",
];

const OfficeIconsGrid = () => {
  const [visibleIcons, setVisibleIcons] = useState([]);

  useEffect(() => {
    fadeOrder.forEach((name, i) => {
      setTimeout(() => {
        setVisibleIcons((prev) => [...prev, name]);
      }, i * 500 + Math.random() * 200);
    });
  }, []);

  return (
    <div className="office-icons__container office-icons__fade-wrapper">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.url}
          className={`office-icons__item office-icons__item--${index} ${
            visibleIcons.includes(item.name) ? "office-icons__item--visible" : ""
          }`}
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
          }}
        >
          <img src={item.src} alt={item.name} className="office-icons__image" />
        </a>
      ))}
    </div>
  );
};

export default OfficeIconsGrid;
