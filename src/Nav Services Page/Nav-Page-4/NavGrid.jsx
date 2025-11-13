import React, { useEffect, useRef, useState } from "react";
import Nav_4 from "./Nav_4";
import "./NavGrid.css";

const NavGrid = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the Nav_4 section is LESS than 50% visible -> shrink
          if (entry.intersectionRatio < 0.5) {
            setIsShrunk(true);
          } else {
            setIsShrunk(false);
          }
        });
      },
      {
        threshold: [0, 0.5, 1],
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-grid-container" ref={sectionRef}>
      <div className="nav-grid-box box1">
        <div className={isShrunk ? "nav_4-wrapper shrink" : "nav_4-wrapper"}>
          <Nav_4 />
        </div>
      </div>
      <div className="nav-grid-box box2"></div>
      <div className="nav-grid-box box3"></div>
      <div className="nav-grid-box box4"></div>
    </div>
  );
};

export default NavGrid;
