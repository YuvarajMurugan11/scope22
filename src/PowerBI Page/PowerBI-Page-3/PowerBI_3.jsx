import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie-player";
import "./PowerBI_3.css";

const boxes = [
  { 
    id: 1, 
    title: "Unified Data & Real-Time Insights", 
    content: "Connects to all your data sources in one place.<br /> <br />Delivers real-time dashboards and insights.<br /> <br />Enables faster, data-driven decisions." 
  },
  { id: 2, title: "Collaboration & Accessibility", content: "Enables seamless collaboration through Power BI Service and Mobile App.<br /> <br />Securely share dashboards and reports across teams.<br /> <br />Access and interact with data anytime, anywhere." },
  { id: 3, title: "Scalability, Security & Cost Efficiency", content: "Built on Microsoft Azure for security, scalability, and reliability.<br /><br />Adapts easily to growing data and user needs.<br /><br />Delivers powerful analytics at a cost-effective price." },
];

const PowerBI_3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeBox, setActiveBox] = useState(2);

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
    <div className="pb3-container">
      <div className="pb3-title" data-aos="fade-up">
        Significant Business Advantages of Power BI
      </div>

      <div className="pb3-boxes">
        {boxes.map((box) => {
          const isActive = activeBox === box.id;
          return (
            <div
              key={box.id}
              className={`pb3-box ${isActive ? "active" : ""}`}
              style={{
                left: getBoxPosition(box.id),
                zIndex: isActive ? 3 : 1,
              }}
            >
              <div className="pb3-box-title" data-aos="fade-up">
                {box.title}
              </div>

              {/* ✅ Render HTML safely */}
              <div
                className="pb3-box-content"
                data-aos="fade-up" style={{textAlign:"left"}}
                dangerouslySetInnerHTML={{ __html: box.content }}
              />

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
      <div className="pb3-arrows">
        <button
          className="pb3-btn"
          onClick={handlePrev}
          style={{ fontSize: "16px" }}
        >
          &#10094;
        </button>
        <button
          className="pb3-btn"
          onClick={handleNext}
          style={{ fontSize: "16px" }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default PowerBI_3;
