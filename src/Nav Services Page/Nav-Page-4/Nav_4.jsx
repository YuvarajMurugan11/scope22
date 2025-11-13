// import React, { useEffect, useState, useRef } from "react";
// import "./Nav_4.css";
// import milestoneImage1 from "../../assets/business-central-ico.webp"; // import your image
// import milestoneImage2 from "../../assets/Microsoft-Dynamics-ico.png"; // import your image
// import milestoneImage3 from "../../assets/Microsoft-Dynamics-365-ico.png"; // import your image
// import milestoneImage4 from "../../assets/navision-software-ico.png"; // import your image

// const milestones = [
//   { year: 1983, text: "Personal Computing and Consulting was founded in Denmark", offset: 80 },
//   { year: 1985, text: "PC&C launch PCPlus accounting software", offset: 48 },
//   { year: 1987, text: "Upgraded version of PCPlus named Navigator is released in Denmark", offset: 80 },
//   { year: 1990, text: "Navigator renamed to Navision. Version 3.0 released", offset: 45 },
//   { year: 1995, text: "Renamed to Navision Software A/S", offset: 60 },
//   { year: 2000, text: "Navision Software A/S merges with Damgaard A/S", offset: 45 },
//   { year: 2002, text: "Navision acquired by Microsoft", offset: 45 },
//   { year: 2005, text: "Navision 4.0 released", offset: 45 },
//   { year: 2007, text: "Navision 5.0 released", offset: 45 },
//   { year: 2008, text: "Renamed to Dynamics NAV NAV 2009 released", offset: 45 },
//   { year: 2010, text: "NAV 2009 R2 released", offset: 45 },
//   { year: 2012, text: "NAV 2013 released", offset: 45 },
//   { year: 2014, text: "NAV 2015 released", offset: 45 },
//   { year: 2016, text: "NAV 2016 released", offset: 45 },
//   { year: 2017, text: "NAV 2017 released", offset: 45 },
//   { year: 2018, text: "Microsoft Dynamics 365 Business Central released", offset: 45 },
// ];

// const Nav_4 = () => {
//   const [visibleSteps, setVisibleSteps] = useState(0);
//   const timelineRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           const timer = setInterval(() => {
//             setVisibleSteps((prev) => (prev < milestones.length ? prev + 1 : prev));
//           }, 200);

//           observer.unobserve(timelineRef.current);
//           return () => clearInterval(timer);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (timelineRef.current) {
//       observer.observe(timelineRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div className="nav_4-container">
//       <h2 className="nav_4-title">The Journey of Navision to Business Central</h2>

//       <div className="nav_4-timeline" ref={timelineRef}>
//         {/* Timeline line grows dynamically */}
//         <div
//           className="nav_4-line"
//           style={{
//             width: `${(visibleSteps / (milestones.length - 1)) * 93.8}%`,
//             transition: "width 0.2s ease",
//           }}
//         />

//         {milestones.map((item, index) => {
//           const positionClass = index % 2 === 0 ? "nav_4-top" : "nav_4-bottom";
//           const isVisible = index < visibleSteps;

//           return (
//             <div
//               key={index}
//               className={`nav_4-event ${positionClass} ${isVisible ? "nav_4-show" : ""}`}
//               style={{
//                 left: `${(index / (milestones.length - 1)) * 95}%`,
//                 transform: isVisible
//                   ? `translateY(${positionClass === "nav_4-top" ? -item.offset + "px" : item.offset + "px"}) scale(1)`
//                   : `translateY(0px) scale(0.5)`,
//               }}
//             >
//               {positionClass === "nav_4-top" && (
//                 <>
//                   <div className="nav_4-year">{item.year}</div>
//                   <div className="nav_4-text">{item.text}</div>
//                   <div className="nav_4-connector" />
//                   <div className="nav_4-dot" />
//                 </>
//               )}

//               {positionClass === "nav_4-bottom" && (
//                 <>
//                   <div className="nav_4-dot" />
//                   <div className="nav_4-connector" />
//                   <div className="nav_4-year">{item.year}</div>
//                   <div className="nav_4-text">{item.text}</div>
//                 </>
//               )}
//               {item.year === 2018 && (
//                 <img
//                   src={milestoneImage1}
//                   alt="Business Central"
//                   className="nav_4-image1"
//                 />
//               )}
//               {item.year === 2008 && (
//                 <img
//                   src={milestoneImage2}
//                   alt="Microsoft-Dynamics-ico"
//                   className="nav_4-image2"
//                 />
//               )}
//               {item.year === 2002 && (
//                 <img
//                   src={milestoneImage3}
//                   alt="Microsoft-Dynamics-365-ico"
//                   className="nav_4-image3"
//                 />
//               )}
//                {item.year === 1995 && (
//                 <img
//                   src={milestoneImage4}
//                   alt="navision-software-ico"
//                   className="nav_4-image4"
//                 />
//               )}
//             </div>
//           );
//         })}
//       </div>

//       {/* <div className="nav_4-logos">
//         <div className="nav_4-logo nav_4-navision">Navision</div>
//         <div className="nav_4-logo nav_4-microsoft">Microsoft Dynamics</div>
//         <div className="nav_4-logo nav_4-bcentral">Business Central</div>
//       </div> */}
//     </div>
//   );
// };

// export default Nav_4;
// .nav_4-container {
//   background: linear-gradient(to right, #cbe5f3, #e5f2f8);
//   padding: 40px;
//   /* border-radius: 10px; */
//   font-family: "Segoe UI", sans-serif;
//   overflow: hidden;
//   height: 600px;
//   /* border: red 2px solid; */
// }

// .nav_4-title {
//   text-align: center;
//   font-size: 30px;
//   font-weight: 600;
//   /* margin-top: -10px; */
//   /* margin-bottom: 60px; */
//   color: #1a3c6e;
//   /* border: red 2px solid; */
// }

// .nav_4-timeline {
//   position: relative;
//   width: 100%;
//   height: 450px;
//   margin: auto;
//   margin-top: 50px;
//   /* border: red 2px solid; */
// }

// .nav_4-line {
//   position: absolute;
//   top: 50%;
//   left: 0;
//   height: 4px;
//   background-color: #0078d4;
//   z-index: 1;
// }

// /* Milestone container */
// .nav_4-event {
//   position: absolute;
//   top: 39%;
//   width: 170px;
//   margin-left: -50px;
//   text-align: center;
//   opacity: 0;
//   transition: transform 0.5s ease, opacity 0.5s ease;
//   transform-origin: center;
//   /* border: red 2px solid; */
// }

// .nav_4-show {
//   opacity: 1;
// }

// /* Dots */
// .nav_4-dot {
//   width: 12px;
//   height: 12px;
//   background-color: #0078d4;
//   border-radius: 50%;
//   margin: 0 auto;
//   position: relative;
//   z-index: 2;
// }

// /* Connector line */
// .nav_4-connector {
//   width: 2px;
//   height: 0;
//   background-color: #0078d4;
//   margin: 0 auto;
//   transition: height 0.5s ease;
//   /* border: red 2px solid; */
// }

// .nav_4-show .nav_4-connector {
//   height: 40px;
// }

// /* Text styling */
// .nav_4-year {
//   font-weight: bold;
//   color: #004578;
//   margin-bottom: 6px;
// }

// .nav_4-text {
//   font-size: 12px;
//   color: #333;
//   word-wrap: break-word;
//   margin: auto;
// }

// /* Logos section */
// /* .nav_4-logos {
//   display: flex;
//   justify-content: center;
//   gap: 40px;
//   margin-top: 60px;
// } */

// /* .nav_4-logo {
//   padding: 15px 25px;
//   border: 3px solid #0078d4;
//   border-radius: 8px;
//   background: white;
//   font-weight: 600;
//   color: #0078d4;
//   transition: transform 0.3s ease;
// } */

// /* .nav_4-logo:hover {
//   transform: scale(1.05);
// }

// .nav_4-navision {
//   border-color: #0084d9;
// }

// .nav_4-microsoft {
//   border-color: #0078d4;
// }

// .nav_4-bcentral {
//   border-color: #00a65a;
// } */



// .nav_4-image1 {
//   display: block;
//   margin-top: 8px;
//   margin-left: 60px;
//   max-width: 60px; 
//   height: auto;
//   /* border: red 2px solid; */
// }

// .nav_4-image2 {
//   display: block;
//   margin-top: -9px;
//   margin-left: 20px;
//   max-width: 140px; 
//   height: auto;
//   /* border: red 2px solid; */
// }
// .nav_4-image3 {
//   display: block;
//   margin-top: -150px;
//   /* margin-left: 10px; */
//   max-width: 170px; 
//   height: auto;
//   /* border: red 2px solid; */
// }
// .nav_4-image4 {
//   display: block;
//   margin-top: -210px;
//   /* margin-left: px; */
//   max-width: 170px; 
//   height: auto;
//   /* border: red 2px solid; */
// }



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

const Nav_4 = () => {
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [timelineInBox, setTimelineInBox] = useState(false);
  const [showBoxes, setShowBoxes] = useState(false);
  const timelineRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setInterval(() => {
            setVisibleSteps((prev) => {
              if (prev < milestones.length) return prev + 1;
              clearInterval(timer);
              setAnimationComplete(true);

              setTimeout(() => {
                setTimelineInBox(true);
                setTimeout(() => setShowBoxes(true), 500);
              }, 1000);

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

  const renderTimeline = (insideBox = false) => {
    const totalMilestones = milestones.length;
    const horizontalSpacing = insideBox ? 85 : 95; // smaller spacing inside Box 1

    return (
      <div
        ref={timelineRef}
        className={`nav_4-timeline ${insideBox ? "nav_4-in-box" : "nav_4-outside-box"} ${
          timelineInBox ? "nav_4-move-into-box" : ""
        }`}
      >
        <div
          className="nav_4-line"
          style={{
            width: `${(visibleSteps / (totalMilestones - 1)) * (horizontalSpacing - 1)}%`,
            transition: "width 0.2s ease",
          }}
        />

        {milestones.map((item, index) => {
          const positionClass = index % 2 === 0 ? "nav_4-top" : "nav_4-bottom";
          const isVisible = index < visibleSteps;

          const eventOffset = insideBox ? 30 : item.offset; // smaller offset inside Box 1

          return (
            <div
              key={index}
              className={`nav_4-event ${positionClass} ${isVisible ? "nav_4-show" : ""}`}
              style={{
                left: `${(index / (totalMilestones - 1)) * horizontalSpacing}%`,
                transform: isVisible
                  ? `translateY(${positionClass === "nav_4-top" ? -eventOffset + "px" : eventOffset + "px"}) scale(1)`
                  : `translateY(0px) scale(0.5)`,
              }}
            >
              {positionClass === "nav_4-top" && (
                <>
                  {item.year === 1995 && <img src={milestoneImage4} alt="navision-software-ico" className="nav_4-logo" />}
                  {item.year === 2002 && <img src={milestoneImage3} alt="Microsoft-Dynamics-365-ico" className="nav_4-logo" />}
                  <div className="nav_4-year">{item.year}</div>
                  <div className="nav_4-text">{item.text}</div>
                  <div className="nav_4-connector" />
                  <div className="nav_4-dot" />
                </>
              )}
              {positionClass === "nav_4-bottom" && (
                <>
                  <div className="nav_4-dot" />
                  <div className="nav_4-connector" />
                  <div className="nav_4-year">{item.year}</div>
                  <div className="nav_4-text">{item.text}</div>
                  {item.year === 2008 && <img src={milestoneImage2} alt="Microsoft-Dynamics-ico" className="nav_4-logo" />}
                  {item.year === 2018 && <img src={milestoneImage1} alt="Business Central" className="nav_4-logo" />}
                </>
              )}
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
          <div className={`nav_4-box box1 ${showBoxes ? "show-box" : ""}`}>
            {timelineInBox && renderTimeline(true)}
          </div>
          <div className={`nav_4-box box2 ${showBoxes ? "show-box" : ""}`}>Box 2</div>
          <div className={`nav_4-box box3 ${showBoxes ? "show-box" : ""}`}>Box 3</div>
          <div className={`nav_4-box box4 ${showBoxes ? "show-box" : ""}`}>Box 4</div>
        </div>
      )}
    </div>
  );
};

export default Nav_4;
