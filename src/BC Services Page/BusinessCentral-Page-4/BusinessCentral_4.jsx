import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie-player";
import "./BusinessCentral_4.css";

const boxes = [
  {
    id: 1,
    title: "Technical and Operational Advantages",
    content: [
      "Microsoft continuously deploys new features, security updates, and improvements without downtime or complex upgrades.",
      "Provides enterprise-grade security, encryption, and compliance certifications that are costly to build independently."
    ],
  },
  {
    id: 2,
    title: "Business Intelligence and Analytics",
    content: [
      "Built-in Power BI integration enables advanced analytics and reporting without extra software.",
      "Dashboard views and automated alerts help managers make quick, informed decisions based on live data."
    ],
  },
  {
    id: 3,
    title: "Cost Efficiency and Predictability",
    content: [
      "Eliminates large upfront hardware investments and reduces IT infrastructure costs.",
      "Subscription pricing ensures predictable monthly costs.",
      "Automatic updates, maintenance, and security patches are included without extra charges."
    ],
  },
];

const BusinessCentral_4 = () => {
  const [activeBox, setActiveBox] = useState(2);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleNext = () => {
    setActiveBox((prev) => (prev === boxes.length ? 1 : prev + 1));
  };

  const handlePrev = () => {
    setActiveBox((prev) => (prev === 1 ? boxes.length : prev - 1));
  };

  const getBoxPosition = (boxId) => {
    if (boxId === activeBox) return "33.33%"; // center
    if (boxId === ((activeBox % 3) + 1)) return "66.66%"; // right
    if (boxId === (activeBox === 1 ? 3 : activeBox - 1)) return "0%"; // left
    return `${(boxId - 1) * 33.33}%`;
  };

  return (
    <div className="businesscentral4-container">
      {/* Title */}
      <div className="sales-title" data-aos="fade-up">
        <div className="sales-title-heading">Advantages on Cloud ERP</div>
      </div>

      {/* Boxes */}
      <div className="sales-boxes">
        {boxes.map((box) => {
          const isActive = activeBox === box.id;
          return (
            <div
              key={box.id}
              className={`sales-box ${isActive ? "active" : ""}`}
              style={{
                left: getBoxPosition(box.id),
                zIndex: isActive ? 3 : 1,
              }}
            >
              <div className="sales-box-title" data-aos="fade-up">
                {box.title}
              </div>

              <div className="sales-box-content" data-aos="fade-up">
                {box.content.map((point, index) => (
                  <div key={index} className="sales-point">{point}</div>
                ))}
              </div>

              {isActive && (
                <Lottie
                  loop={false}
                  play
                  animationData={undefined}
                  path="/animations/dynamic-cube.json"
                  style={{
                    width: 100,
                    height: 100,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    zIndex: 5,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="arrow-container">
        <button
          className="arrow-btn"
          onClick={handlePrev}
          style={{ fontSize: "16px" }}
        >
          &#10094;
        </button>
        <button
          className="arrow-btn"
          onClick={handleNext}
          style={{ fontSize: "16px" }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default BusinessCentral_4;
