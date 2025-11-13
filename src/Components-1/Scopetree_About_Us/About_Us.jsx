import './About_Us.css'; 
import aboutImage from '../../assets/About_us.png'; 
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';

const StatItem = ({ target, label, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;

    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;

      timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, stepTime);
    } else {
      setCount(0);
    }

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <div className={`stat-item ${isVisible ? 'fade-up' : ''}`}>
      <h3 className="stat-item_h3">{count}+</h3>
      <p className="stat-item_p">{label}</p>
    </div>
  );
};

// ---- Main AboutUs Component ----
const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-container">
      <div className="about-text">
        <h2 className="about-text_heading">About Us</h2>
        <p className="about-text_Para">
          Scopetree Technologies LLP is a global technology services firm and a trusted
          technology partner since 2011.
        </p>
        <p className="about-text_Para">
          With over 15 years of experience in IT consulting and services, we specialize in
          delivering best-in-class enterprise solutions using Microsoft Technologies.
        </p>
        <p className="about-text_Para">
          We have served clients from more than 15 countries and have successfully completed
          100+ projects, empowering businesses to streamline operations and achieve their
          strategic goals.
        </p>

        {/* Stats Section */}
        <div
          className={`stats-container ${isVisible ? 'visible' : ''}`}
          ref={sectionRef}
        >
          <h2 className="stats-container_headline">
            From India's Smartest Minds To The World's Smartest System.
          </h2>

          <div className="stats-grid">
            <StatItem target={80} label={"Clients\nGlobally"} isVisible={isVisible} />
            <StatItem target={15} label={"Countries\nServed"} isVisible={isVisible} />
            <StatItem target={100} label={"Completed\nProjects"} isVisible={isVisible} />
            <StatItem target={15} label={"Years In\nBusiness"} isVisible={isVisible} />
          </div>

          <Link to="/about">
            <button className="About_learn-more">More about Scopetree</button>
          </Link>
        </div>
      </div>

      <div className="about-image">
        <img src={aboutImage} alt="Typing on laptop" className="about-image_Img" />
      </div>
    </div>
  );
};

export default AboutUs;
