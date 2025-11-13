import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie-player";
import "./DynamicSales_3.css";

const boxes = [
  { id: 1, title: "Fast & Affordable Implementation", content: "Start your CRM journey quickly with our fixed-cost Quick Start packages.<br/> <br/>We help you deploy Dynamics 365 Sales with minimal setup time, so you can move from spreadsheets to a powerful, cloud-based CRM — without high upfront costs or long delays." },
  { id: 2, title: "Empower Your Sales Team", content: "Give your sales team the tools they need to build stronger relationships, track opportunities, and close deals faster.<br/><br/>Dynamics 365 Sales brings all your sales data, communication, and reporting together in one platform — boosting productivity and collaboration." },
  { id: 3, title: "Scalable for Growth", content: "Experience the benefits of Dynamics 365 Sales from day one, and easily scale as your business evolves. <br/><br/>Whether you’re a small business or an expanding enterprise, the solution grows with you — supporting your changing sales goals and business processes." },
];

const DynamicSales_3 = () => {
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
    <div className="dynamicsales3-container">
      <div className="dynamicsales3-title" data-aos="fade-up">Sales</div>

      <div className="dynamicsales3-boxes">
        {boxes.map((box) => {
          const isActive = activeBox === box.id;
          return (
            <div
              key={box.id}
              className={`dynamicsales3-box ${isActive ? "active" : ""}`}
              style={{
                left: getBoxPosition(box.id),
                zIndex: isActive ? 3 : 1,
              }}
            >
              <div className="dynamicsales3-box-title" data-aos="fade-up">{box.title}</div>
              <div
                className="dynamicsales3-box-content"
                data-aos="fade-up"
                style={{ textAlign: "left" }}
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

      <div className="dynamicsales3-arrow-container">
        <button className="dynamicsales3-arrow-btn" onClick={handlePrev} style={{ fontSize: "16px", color: "white" }}>
          &#10094;
        </button>
        <button className="dynamicsales3-arrow-btn" onClick={handleNext} style={{ fontSize: "16px", color: "white" }}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default DynamicSales_3;