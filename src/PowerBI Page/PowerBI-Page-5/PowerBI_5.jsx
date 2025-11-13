import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./PowerBI_5.css";

const PowerBI_5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <h2 style={{ color: " rgb(255, 217, 0)", textAlign: "center" }}>
        Key aspects of Business Central 365
      </h2>

      <section className="pb5-section">
        <div className="pb5-content">
          {/* Title */}
          <h1 className="pb5-title" data-aos="fade-up">Data to Intelligent Decisions</h1>

          <p className="pb5-p1" data-aos="fade-up"></p>

          {/* Cards */}
          <div className="pb5-cards" data-aos="fade-up">
            
            <div className="pb5-card-item">
              <div className="pb5-legend-item">
                <span className="pb5-dot" data-aos="fade-up" style={{ marginLeft: "45px" }}></span>
                <h3 data-aos="fade-up">Simplified Data Analytics</h3>
              </div>
              <div className="pb5-card">
                <p className="pb5-text">
                  <p style={{ marginTop: "0px", textAlign: "left" }}>Easy drag-and-drop interface for quick report creation.</p><br />
                  <p style={{ marginTop: "-30px", textAlign: "left" }}>Build custom dashboards and visualize data effortlessly.</p><br />
                  <p style={{ marginTop: "-30px", textAlign: "left" }}>Empower teams to gain insights without IT dependency.</p>
                </p>
              </div>
            </div>

            <div className="pb5-card-item">
              <div className="pb5-legend-item">
                <span className="pb5-dot" data-aos="fade-up" style={{ marginLeft: "12px" }}></span>
                <h3 data-aos="fade-up">Intelligent & Connected Platform</h3>
              </div>
              <div className="pb5-card">
                <p className="pb5-text">
                  <p style={{ marginTop: "0px", textAlign: "left" }}>Seamlessly integrate data from Excel, Azure, SQL, Dynamics 365, and more.</p><br />
                  <p style={{ marginTop: "-30px", textAlign: "left" }}>Use built-in AI and natural language for smarter insights.</p><br />
                  <p style={{ marginTop: "-30px", textAlign: "left" }}>Uncover trends, automate analysis, and make data-driven decisions.</p>
                </p>
              </div>
            </div>

            <div className="pb5-card-item">
              <div className="pb5-legend-item">
                <span className="pb5-dot" data-aos="fade-up" style={{ marginLeft: "4px" }}></span>
                <h3 data-aos="fade-up">Continuous Innovation & Reliability</h3>
              </div>
              <div className="pb5-card">
                <p className="pb5-text">
                  <p style={{ marginTop: "0px", textAlign: "left" }}>Backed by Microsoft’s trusted ecosystem with regular updates and top-tier security.</p><br />
                  <p style={{ marginTop: "-30px", textAlign: "left" }}>Scalable and reliable for organizations of any size.</p><br />
                  <p style={{ marginTop: "-30px", textAlign: "left" }}>Continuously evolving to stay aligned with the latest technology advancements.</p>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pb5-bottom" data-aos="fade-up">
            <p className="pb5-desc">
              <h3>

Power BI empowers businesses to convert raw data into meaningful insights, enabling smarter decisions and driving measurable growth across the organization.</h3>
            </p>
            <button className="pb5-button">TARGET ACHIEVED ✓</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerBI_5;
