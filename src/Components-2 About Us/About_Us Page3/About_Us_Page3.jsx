import React, { useRef, useState, useEffect } from "react";
import "./About_Us_Page3.css";
import Auto from "../../assets/World Map Final.mp4";

const About_Us_Page3 = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  // Fade-in on scroll
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("animateFadeInLeft");
          } else {
            section.classList.remove("animateFadeInLeft");
          }
        });
      },
      { threshold: 0.3 } // 30% visible
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (hasEnded) {
      videoRef.current.currentTime = 0;
      setHasEnded(false);
    }

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoEnd = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    setHasEnded(true);
  };

  return (
    <div className="about-page3-container" ref={sectionRef}>
      {/* Left Side */}
      <div className="about-page3-left">
        <h4 className="about-page3-title">
         Global presence
        </h4>
        <p className="about-page3-text">
         Scopetree partners with businesses worldwide, delivering innovative technology solutions and driving digital transformation across 15+ countries. Our global expertise combined with local insight enables us to understand diverse business environments and deliver consistent, high-quality results. From Asia to the Middle East, Europe, and North America, Scopetree continues to empower organizations to innovate, grow, and succeed in the digital era.</p>
      </div>

      {/* Right Side Video */}
      <div className="about-page3-right">
        <video
          ref={videoRef}
          className="about-page3-video"
          src={Auto}
          onEnded={handleVideoEnd}
        />
        <button
          onClick={togglePlay}
          className={`video-btn ${isPlaying ? "pause-btn" : "play-btn"}`}
        >
          {isPlaying ? "⏸" : "▶"}
        </button>
      </div>
    </div>
  );
};

export default About_Us_Page3;
