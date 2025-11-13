import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Nav_2.css";
import myVideo from "../../assets/background-video.mp4";

const Nav_2 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // 🔁 Auto play video in loop when in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) => console.log("Autoplay blocked:", err));
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 } // Play when at least 50% visible
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="Nav_2">
      <div className="Nav_2__video">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          loop
          disablePictureInPicture
          controls={false}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional custom play button */}
        <div className={`Nav_2__button ${isPlaying ? "Nav_2__button--hide" : ""}`}>
          ▶
        </div>
      </div>

      <div className="Nav_2__content" data-aos="fade-up">
        <h3>Upgrade from Dynamics NAV to Business Central</h3>
        <p>
          Transform your legacy ERP into a modern, intelligent, and cloud-powered
          solution with Microsoft Dynamics 365 Business Central.
        </p>
        <p>
          At Scopetree Technologies, we ensure a smooth transition with expert
          planning, data migration, testing, and support — helping you unlock the
          full potential of Business Central.
        </p>
      </div>
    </div>
  );
};

export default Nav_2;
