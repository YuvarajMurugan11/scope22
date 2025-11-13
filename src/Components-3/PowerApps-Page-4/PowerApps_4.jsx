import React, { useRef, useEffect, useState } from 'react';
import './PowerApps_4.css';
// Ensure this path is correct for your project structure!
import powerAppsImage from '../../assets/acc.webp'; 

const PowerApps_4 = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // --- Configuration ---
  const numSections = 3; // The number of content slides after the initial view.

  // --- Scroll Logic ---
  const handleScroll = () => {
    if (containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Total scrollable area is the component's height minus one viewport height.
      const totalScrollableHeight = containerRef.current.scrollHeight - windowHeight;
      const scrollPosition = scrollY - containerTop;

      // Normalize the scroll position to a 0-1 range.
      let progress = scrollPosition / totalScrollableHeight;

      // Clamp the progress between 0 and 1.
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // --- Calculation for Horizontal Movement ---
  
  // Total distance the wide image needs to move (e.g., from 0vw to -100vw for 3 sections)
  const totalImageTranslationVW = (numSections - 1) * 50; 
  // Total distance the wide content slider needs to move (e.g., from 0vw to -150vw for 3 sections)
  const totalContentTranslationVW = numSections * 50; 

  const imageTranslateX = scrollProgress * -totalImageTranslationVW + 'vw'; 
  const contentTranslateX = scrollProgress * -totalContentTranslationVW + 'vw'; 

  // --- Content Data ---
  const contentSections = [
    { 
        title: 'Grow your career at the heart of change', 
        subtitle: 'It\'s your time to shine. Bring your ingenuity, curiosity and big ideas.', 
        link: 'Join us >' 
    },
    { 
        title: 'Accelerate Your Digital Future', 
        subtitle: 'Harness the power of AI, Cloud, and Data to reshape your enterprise.', 
        link: 'Explore Services >' 
    },
    { 
        title: 'Sustainable Innovation', 
        subtitle: 'Drive business value while leading the way to a greener tomorrow.', 
        link: 'Learn More >' 
    }
  ];

  return (
    <div className="scroll-container-wrapper" ref={containerRef}>
      <div className="scroll-fixed-content">
        {/* === Left Side: Image Container === */}
        <div className="image-panel" style={{ transform: `translateX(${imageTranslateX})` }}>
            <img 
                src={powerAppsImage} 
                alt="Diverse team working together" 
                className="full-cover-image"
                // Image width calculated to fit all slides (e.g., 50vw * 3 = 150vw)
                style={{ width: `${50 * numSections}vw` }} 
            />
        </div>

        {/* === Right Side: Content Container === */}
        <div className="content-panel">
            {/* Static intro text placed above the slider */}
            <div className="intro-text">CAREERS</div> 

            <div 
                className="content-slider" 
                style={{ 
                    transform: `translateX(${contentTranslateX})`,
                    // Slider width must accommodate all sections (e.g., 50vw * 3 = 150vw)
                    width: `${50 * numSections}vw` 
                }}
            >
                {/* Map through sections, each taking 50vw width */}
                {contentSections.map((section, index) => (
                    <div className="content-section" key={index}>
                        <div className="section-inner">
                            <h2>{section.title}</h2>
                            <p>{section.subtitle}</p>
                            <a href="#" className="join-link">{section.link}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PowerApps_4;


