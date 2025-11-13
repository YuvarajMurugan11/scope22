import React, { useEffect, useRef, useState } from "react";
import "./About_Us_Page7.css";
import St_Count from "../../assets/St_Count.png";

const statsData = [
  { value: 15, suffix: "+", label: "Years in Business" },
  // { value: 40, suffix: "+", label: "Employees" },
  { value: 50, suffix: "+", label: "Clients" },
  { value: 100, suffix: "+", label: "Projects" },
  { value: 15, suffix: "+", label: "Countries Served" },
];

const About_Us_Page7 = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [animateLabels, setAnimateLabels] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("animateFadeInLeft");

            // Trigger number counting only when visible
            startCounting();
            setAnimateLabels(true);
          } else {
            section.classList.remove("animateFadeInLeft");

            // Reset counts when scrolled out (so it can replay)
            resetCounts();
            setAnimateLabels(false);
          }
        });
      },
      { threshold: 0.3 } // 30% visible to trigger
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Function to handle counting animation
  const startCounting = () => {
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;

    statsData.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / steps;

      const counter = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, interval);
    });
  };

  // Reset counts when scrolled out
  const resetCounts = () => {
    setCounts(statsData.map(() => 0));
  };

  return (
    <div className="aboutUsPage7Container" ref={sectionRef}>
      {/* Left Side - Stats Grid */}
      <div className="aboutUsPage7LeftSideBlue">
        <div className="aboutUsPage7StatsGrid2x3">
          {statsData.map((stat, index) => (
            <div key={index} className="aboutUsPage7StatBlock">
              <div className="aboutUsPage7NumberWrapper">
                <div className="aboutUsPage7Number">
                  {counts[index]}
                  {stat.suffix}
                </div>
              </div>
              <div
                className={`aboutUsPage7Label ${
                  animateLabels ? "animate" : ""
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="aboutUsPage7RightSide">
        <div className="aboutUsPage7MapWrapper">
          <img
            src={St_Count}
            alt="Innovation Center Network Map"
            className="aboutUsPage7MapImage"
          />
        </div>
      </div>
    </div>
  );
};

export default About_Us_Page7;
