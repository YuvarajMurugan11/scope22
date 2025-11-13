import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./PowerApps_5.css";

const PowerApps_5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <h2 style={{ color: "#8D2E82", textAlign: "center" }}>
        Key aspects of Business Central 365
      </h2>

      <section className="pa5-section">
        <div className="pa5-content">
          {/* Title */}
          <h1 className="pa5-title" data-aos="fade-up">Next-Gen Platforms for Business Transformation</h1>

          {/* Cards */}
          <div className="pa5-cards" data-aos="fade-up">
            
            {/* Card 1 */}
            <div className="pa5-card-item">
              <div className="pa5-legend-item">
                <span className="pa5-dot" data-aos="fade-up" style={{ marginLeft: "45px" }}></span>
                <h3 data-aos="fade-up">Optimized App Development</h3>
              </div>
              <div className="pa5-card">
                <div className="pa5-text">
                  <p>Power Apps’ easy-to-use platform lets anyone build custom apps without coding. </p>
                  <p>Its drag-and-drop design helps teams automate tasks and digitize processes quickly and efficiently.</p>
                  {/* <p>Empower teams to gain insights without IT dependency.</p> */}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pa5-card-item">
              <div className="pa5-legend-item">
                <span className="pa5-dot" data-aos="fade-up" style={{ marginLeft: "12px" }}></span>
                <h3 data-aos="fade-up">Intelligent & Connected Data</h3>
              </div>
              <div className="pa5-card">
                <div className="pa5-text">
                  <p>Connect data from over 1,000 sources, including Microsoft 365, Azure, SQL, and Dynamics 365.</p>
                  <p>Using Microsoft Dataverse, Power Apps securely unifies your data to eliminate silos and power business apps.</p>
                  {/* <p>Uncover trends, automate analysis, and make data-driven decisions.</p> */}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pa5-card-item">
              <div className="pa5-legend-item">
                <span className="pa5-dot" data-aos="fade-up" style={{ marginLeft: "4px" }}></span>
                <h3 data-aos="fade-up">Innovation & Reliability</h3>
              </div>
              <div className="pa5-card">
                <div className="pa5-text">
                  <p>Backed by Microsoft’s ecosystem, Power Apps offers  updates, strong security, and reliable performance.</p>
                  <p>Its scalability and integration with Power Automate business processes efficient, secure, and future-ready.</p>
                  {/* <p>Continuously evolving to stay aligned with the latest technology advancements.</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pa5-bottom" data-aos="fade-up">
            <div className="pa5-desc">
              <h3>
                Power Apps empowers businesses to transform manual processes into automated workflows,
                enhancing productivity and driving innovation across teams.
              </h3>
            </div>
            <button className="pa5-button" data-aos="zoom-in">TARGET ACHIEVED ✓</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PowerApps_5;
