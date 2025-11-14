import React, { useEffect, useState, useRef } from "react";
import "./Nav_4.css";

import milestoneImage1 from "../../assets/business-central-ico.webp";
import milestoneImage2 from "../../assets/Microsoft-Dynamics-ico.png";
import milestoneImage3 from "../../assets/Microsoft-Dynamics-365-ico.png";
import milestoneImage4 from "../../assets/navision-software-ico.png";

const milestones = [
  { year: 1983, text: "Personal Computing and Consulting was founded in Denmark", offset: 80 },
  { year: 1985, text: "PC&C launch PCPlus accounting software", offset: 48 },
  { year: 1987, text: "Upgraded version of PCPlus named Navigator is released in Denmark", offset: 80 },
  { year: 1990, text: "Navigator renamed to Navision. Version 3.0 released", offset: 45 },
  { year: 1995, text: "Renamed to Navision Software A/S", offset: 60 },
  { year: 2000, text: "Navision Software A/S merges with Damgaard A/S", offset: 45 },
  { year: 2002, text: "Navision acquired by Microsoft", offset: 45 },
  { year: 2005, text: "Navision 4.0 released", offset: 45 },
  { year: 2007, text: "Navision 5.0 released", offset: 45 },
  { year: 2008, text: "Renamed to Dynamics NAV NAV 2009 released", offset: 45 },
  { year: 2010, text: "NAV 2009 R2 released", offset: 45 },
  { year: 2012, text: "NAV 2013 released", offset: 45 },
  { year: 2014, text: "NAV 2015 released", offset: 45 },
  { year: 2016, text: "NAV 2016 released", offset: 45 },
  { year: 2017, text: "NAV 2017 released", offset: 45 },
  { year: 2018, text: "Microsoft Dynamics 365 Business Central released", offset: 45 },
];

const versionTimeline = [
  { year: 2018, versions: ["Version 13.x"], offset: 50 },
  { year: 2019, versions: ["Version 14.x", "Version 15.x"], offset: 37 },
  { year: 2020, versions: ["Version 16.x", "Version 17.x"], offset: 67 },
  { year: 2021, versions: ["Version 18.x", "Version 19.x"], offset: 37 },
  { year: 2022, versions: ["Version 20.x", "Version 21.x"], offset: 67 },
  { year: 2023, versions: ["Version 22.x", "Version 23.x"], offset: 37 },
  { year: 2024, versions: ["Version 24.x", "Version 25.x"], offset: 67 },
  { year: 2025, versions: ["Version 26.x", "Version 27.x"], offset: 35 },
  { year: 2026, versions: ["Version 28.x", "Version 29.x"], offset: 67, future: true },
  { year: 2027, versions: ["Version 30.x", "Version 31.x"], offset: 37, future: true },
  { year: 2028, versions: ["Version 32.x", "Version 33.x"], offset: 67, future: true },
  { year: 2029, versions: ["Version 34.x", "Version 35.x"], offset: 37, future: true },
  { year: 2030, versions: ["Version 36.x", "Version 37.x"], offset: 67, future: true },
];

const customPositions = [-3, 4, 11, 18, 25, 32, 39, 46, 55, 62, 69, 76, 83]; 

const Nav_4 = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [timelineInBox, setTimelineInBox] = useState(false);
  const [showBoxes, setShowBoxes] = useState(false);
  const [visibleVersions, setVisibleVersions] = useState(0);
  const timelineRef = useRef();
  const versionRef = useRef();

  // Top Timeline Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setInterval(() => {
            setVisibleSteps((prev) => {
              if (prev < milestones.length) return prev + 1;
              clearInterval(timer);
              setAnimationComplete(true);
              // Start bottom timeline immediately after top finishes
              setTimelineInBox(true);
              setShowBoxes(true);
              return prev;
            });
          }, 200);
          observer.unobserve(timelineRef.current);
        }
      },
      { threshold: 0.5 }
    );

    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  // Version Timeline Effect
  useEffect(() => {
    if (!showBoxes) return;
    const timer = setInterval(() => {
      setVisibleVersions((prev) => {
        if (prev < versionTimeline.length) return prev + 1;
        clearInterval(timer);
        return prev;
      });
    }, 200);
    return () => clearInterval(timer);
  }, [showBoxes]);

  const renderVersionTimeline = () => {
    const total = versionTimeline.length;
    const futureStartIndex = versionTimeline.findIndex((v) => v.future);
    const futureEndIndex = versionTimeline.length - 1;
    const startLeft = customPositions[futureStartIndex];
    const endLeft = customPositions[futureEndIndex];
    const boxWidth = endLeft - startLeft + 10;

    return (
      <div ref={versionRef} className="version-timeline">
        <div
          className="version-line"
          style={{
            width: `${(visibleVersions / (total - 1)) * 95}%`,
            transition: "width 0.2s ease",
          }}
        >
          {visibleVersions === total && (
            <>
              <div className="version-label-top">Microsoft</div>
              <div className="version-label-bottom">Investment Continues..</div>
            </>
          )}
        </div>

        <div
          className={`future-box-wrapper ${visibleVersions >= futureStartIndex ? "show" : ""}`}
          style={{
            left: `${startLeft}%`,
            width: `${boxWidth}%`,
          }}
        >
          <div className="future-label">Microsoft Future Updates</div>
        </div>

        {versionTimeline.map((item, i) => {
          const isVisible = i < visibleVersions;
          const positionClass = i % 2 === 0 ? "top" : "bottom";
          const offset = item.offset || 60;

          return (
            <div
              key={i}
              className={`version-event ${positionClass} ${isVisible ? "show" : ""}`}
              style={{
                left: `${customPositions[i]}%`,
                transform: isVisible
                  ? `translateY(${positionClass === "top" ? -offset + 1 + "px" : offset + 2 + "px"}) scale(1)`
                  : `translateY(0px) scale(0.5)`,
              }}
            >
              {positionClass === "top" ? (
                <>
                  <div className="version-year">{item.year}</div>
                  <div className="version-text">
                    {item.versions.map((v, idx) => (
                      <div key={idx}>{v}</div>
                    ))}
                  </div>
                  <div className="version-connector" />
                  <div className="version-dot" />
                </>
              ) : (
                <>
                  <div className="version-dot" />
                  <div className="version-connector" />
                  <div className="version-year">{item.year}</div>
                  <div className="version-text">
                    {item.versions.map((v, idx) => (
                      <div key={idx}>{v}</div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  const renderTimeline = (insideBox = false) => {
    const total = milestones.length;
    return (
      <div ref={timelineRef} className={`nav_4-timeline ${insideBox ? "nav_4-in-box" : ""}`}>
        <div
          className="nav_4-line"
          style={{
            width: `${(visibleSteps / (total - 1)) * 95}%`,
            transition: "width 0.2s ease",
          }}
        />
        {milestones.map((item, index) => {
          const positionClass = index % 2 === 0 ? "nav_4-top" : "nav_4-bottom";
          const isVisible = index < visibleSteps;

          return (
            <div
              key={index}
              className={`nav_4-event ${positionClass} ${isVisible ? "nav_4-show" : ""}`}
              style={{
                left: `${(index / (total - 1)) * 95}%`,
                transform: isVisible
                  ? `translateY(${positionClass === "nav_4-top" ? -item.offset + 40 + "px" : item.offset + 39 + "px"}) scale(1)`
                  : `translateY(0px) scale(0.5)`,
              }}
            >
              {positionClass === "nav_4-top" ? (
                <>
                  <div className="nav_4-year">{item.year}</div>
                  <div className="nav_4-text">{item.text}</div>
                  <div className="nav_4-connector" />
                  <div className="nav_4-dot" />
                </>
              ) : (
                <>
                  <div className="nav_4-dot" />
                  <div className="nav_4-connector" />
                  <div className="nav_4-year">{item.year}</div>
                  <div className="nav_4-text">{item.text}</div>
                </>
              )}

              {item.year === 2018 && <img src={milestoneImage1} alt="Business Central" className="nav_4-image1" />}
              {item.year === 2008 && <img src={milestoneImage2} alt="Microsoft-Dynamics" className="nav_4-image2" />}
              {item.year === 2002 && <img src={milestoneImage3} alt="Microsoft-Dynamics-365" className="nav_4-image3" />}
              {item.year === 1995 && <img src={milestoneImage4} alt="Navision" className="nav_4-image4" />}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="nav_4-container">
      <h2 className="nav_4-title">The Journey of Navision to Business Central</h2>

      {!timelineInBox && renderTimeline(false)}

      {animationComplete && (
        <div className="nav_4-grid">
          <div className={`nav_4-box wide-box ${showBoxes ? "show-box" : ""}`}>
            {timelineInBox && renderTimeline(true)}
          </div>

          <div className={`nav_4-box version-box ${showBoxes ? "show-box" : ""}`}>
            {renderVersionTimeline()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav_4;
