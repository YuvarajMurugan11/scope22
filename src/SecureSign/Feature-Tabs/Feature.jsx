import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import './Feature.css';
import Email from "../../assets/emailicon.png";

const Feature = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate('contact');
  };

  const [activeTab, setActiveTab] = useState("integration");
  const tabsRef = useRef({});
  const sliderRef = useRef(null);

  const cards = {
    integration: {
      title: "Real-Time Tracking & Notifications",
      text: "No more chasing updates through emails or phone calls. SecureSign delivers instant notifications whenever a document is signed, pending, or approved. A real-time audit trail records every action with precise timestamps, ensuring complete transparency and accountability. This simplifies compliance audits and keeps decision-makers informed at every stage of the workflow."
    },
    signatures: {
      title: "Productivity & Sustainability",
      text: "SecureSign streamlines workflows by replacing manual, paper-based processes with fully digital solutions. The result is faster document approvals, reduced operational overhead, and eco-friendly practices that cut down on waste. With greater speed and efficiency, your teams can focus on what matters most while contributing to a sustainable future."
    },
    tracking: {
      title: "Secure Digital Signatures",
      text: "Security and compliance are at the core of SecureSign. Using PFX certificate-based digital signatures, every document is legally valid, authentic, and fully protected against tampering. With one-click approvals, users enjoy a fast and simple signing experience, while advanced encryption ensures data integrity and adherence to regulatory standards. This guarantees that your sensitive business documents remain secure, compliant, and trustworthy at all times."
    },
    productivity: {
      title: "Seamless Integration",
      text: "SecureSign is designed to work seamlessly with your existing systems. Whether it’s ERP, payroll, HRMS, or other core business applications, it integrates smoothly without disrupting ongoing operations. This allows your teams to continue working in familiar environments while leveraging the power of secure digital signing. The result is faster adoption, minimal training requirements, and a fully connected workflow across departments."
    }
  };

  useEffect(() => {
    const activeButton = tabsRef.current[activeTab];
    const slider = sliderRef.current;

    if (activeButton && slider) {
      slider.style.width = `${activeButton.offsetWidth}px`;
      slider.style.left = `${activeButton.offsetLeft}px`;
    }
  }, [activeTab]);

  const [active, setActive] = useState('email');
  const [showPopup, setShowPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  return (
    <>
      <div className="feature-container">
        <div className="feature-tabs">
          <div className="feature-slider1" ref={sliderRef}></div>

          <button
            ref={el => (tabsRef.current["integration"] = el)}
            className={activeTab === "integration" ? "feature-active" : ""}
            onMouseEnter={() => setActiveTab("integration")}
          >
            Real-Time Tracking & Notifications
          </button>
          <feature-vertical-line></feature-vertical-line>

          <button
            ref={el => (tabsRef.current["signatures"] = el)}
            className={activeTab === "signatures" ? "feature-active" : ""}
            onMouseEnter={() => setActiveTab("signatures")}
          >
            Productivity & Sustainability
          </button>
          <feature-vertical-line></feature-vertical-line>

          <button
            ref={el => (tabsRef.current["tracking"] = el)}
            className={activeTab === "tracking" ? "feature-active" : ""}
            onMouseEnter={() => setActiveTab("tracking")}
          >
            Secure Digital Signatures
          </button>
          <feature-vertical-line></feature-vertical-line>

          <button
            ref={el => (tabsRef.current["productivity"] = el)}
            className={activeTab === "productivity" ? "feature-active" : ""}
            onMouseEnter={() => setActiveTab("productivity")}
          >
            Seamless Integration
          </button>
        </div>

        <div className="feature-card-box">
          <div key={activeTab} className="feature-card1 feature-slide-in">
            <hr width={50} />
            <h3 style={{ color: "white" }}>{cards[activeTab].title}</h3>
            <p className='feature-feat_p'>{cards[activeTab].text}</p>
          </div>
        </div>

        <div className="feature-icon-toggle-container"  >

          {/* Email Icon */}
          <div
            className="feature-call-icon-wrapper"
            onMouseEnter={() => setShowEmailPopup(true)}
            onMouseLeave={() => setShowEmailPopup(false)}
          >
            <div>
              <img
                src={Email}
                alt="img"
                style={{ paddingLeft: "2px" }}
                size={20}
                className={`feature-icon-box ${active === 'email' ? 'feature-active' : ''}`}
              />
            </div>

            {showEmailPopup && (
              <div
                className="feature-popup-box1 show"
                onClick={handleDemoClick}
                style={{ cursor: 'pointer' }}
              >
                <div
                  className="feature-popup-content feature-popup-border"
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200%', marginLeft: "-90px", marginTop: "-18px", width: "150px" }}
                >
                  <span style={{ color: '#333', fontSize: '14px', textDecoration: 'underline', marginTop: "-26px", marginLeft: "-30px", width: "130px" }}>
                    Book a Demo
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Phone Icon */}
          <div
            className="feature-call-icon-wrapper"
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
          >
            <div className={`feature-icon-box ${active === 'phone' ? 'feature-active' : ''}`}>
              <FaPhone size={20} style={{ transform: "scaleX(-1)" }} />
            </div>
            {showPopup && (
              <div className="feature-popup-box1 show">
                <div className="feature-popup-content feature-popup-border">
                  <div className="feature-popup-item">
                    <FaEnvelope className="feature-popup-icon" />
                    <span className="feature-popup-text">sales@scopetree.co.in</span>
                  </div>
                  <div className="feature-popup-item" style={{ paddingTop: "5px" }}>
                    <FaPhoneAlt className="feature-popup-icon" />
                    <span className="feature-popup-text">+91 9445956284</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </>
  );
};

export default Feature;

