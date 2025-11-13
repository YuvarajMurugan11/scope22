import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "react-lottie-player";
import "./PowerApps_3.css";

const boxes = [
  { id: 1, title: "Accelerates App Developmen", content: "Low-code platforms enable rapid app development with minimal coding.<br/> <br/>Offer drag-and-drop interfaces and prebuilt templates for easy design.<br/><br/>Significantly reduce development time, turning weeks of work into just days." },
  { id: 2, title: "Empowers  to Innovate", content: "Enables non-developers to build apps easily with intuitive tools.<br/><br/>Bridges IT and business teams for seamless collaboration.<br/><br/>Simplifies development and accelerates innovation.<br/><br/>Solves business challenges without complex coding." },
  { id: 3, title: "Seamless Integration ", content: "Integrates with Microsoft tools like SharePoint, Excel, SQL, Dynamics 365, and Power BI.<br/><br/>Supports 500+ connectors for external and third-party apps.<br/><br/>Automates workflows and syncs data in real time.<br/><br/>Boosts collaboration, connectivity, and productivity." },
];

const PowerApps_3 = () => {
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
    <div className="powerapps3-container">
      <div className="powerapps3-title" data-aos="fade-up">Power Apps</div>

      <div className="powerapps3-boxes">
        {boxes.map((box) => {
          const isActive = activeBox === box.id;
          return (
            <div
              key={box.id}
              className={`powerapps3-box ${isActive ? "active" : ""}`}
              style={{
                left: getBoxPosition(box.id),
                zIndex: isActive ? 3 : 1,
              }}
            >
              <div className="powerapps3-box-title" data-aos="fade-up">{box.title}</div>
              <div className="powerapps3-box-content" data-aos="fade-up" style={{textAlign:"left"}}
                dangerouslySetInnerHTML={{ __html: box.content }}/>

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

      <div className="powerapps3-arrow-container">
        <button className="powerapps3-arrow-btn" onClick={handlePrev} style={{ fontSize: "16px", color: "white" }}>
          &#10094;
        </button>
        <button className="powerapps3-arrow-btn" onClick={handleNext} style={{ fontSize: "16px", color: "white" }}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default PowerApps_3;