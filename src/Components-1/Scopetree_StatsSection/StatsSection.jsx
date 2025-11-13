// import React, { useState, useEffect, useRef } from 'react';
// import './StatsSection.css';
// import scopetree from '../../assets/st_logo.png';

// const StatItem = ({ target, label, isVisible }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!isVisible) return; // Start counting only when visible

//     let start = 0;
//     const duration = 2000; // total duration of animation (in ms)
//     const stepTime = 20; // update interval
//     const totalSteps = duration / stepTime;
//     const increment = target / totalSteps;

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//         start = target;
//         clearInterval(timer);
//       }
//       setCount(Math.floor(start));
//     }, stepTime);

//     return () => clearInterval(timer);
//   }, [target, isVisible]);

//   return (
//     <div className="stat-item">
//       <h3 className="stat-item_h3">{count}+</h3>
//       <p className="stat-item_p">{label}</p>
//     </div>
//   );
// };

// const StatsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // Run once
//         }
//       },
//       { threshold: 0.3 } // Trigger when 30% is visible
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       className={`stats-container ${isVisible ? 'visible' : ''}`}
//       ref={sectionRef}
//     >
//       <img
//         src={scopetree}
//         alt="Scopetree Logo"
//         className="stats-container_logo"
//       />
//       <h2 className="stats-container_headline">
//         FROM INDIA’S SMARTEST MINDS TO THE WORLD’S SMARTEST SYSTEMS.
//       </h2>

//       <div className="stats-grid">
//         <StatItem target={80} label={"Clients\nGlobally"} isVisible={isVisible} />
//         <StatItem target={100} label={"Completed\nProjects"} isVisible={isVisible} />
//         <StatItem target={15} label={"Years In\nBusiness"} isVisible={isVisible} />
//       </div>

//       <button className="cta-button">More about Scopetree</button>
//     </div>
//   );
// };

// export default StatsSection;

// //  &#10095;