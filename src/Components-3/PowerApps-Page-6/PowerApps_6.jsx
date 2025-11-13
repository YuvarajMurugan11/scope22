import React from "react";
import "./PowerApps_6.css";
import laptopImg from "../../assets/powerappslapview.png"; // ✅ Correct path

const PowerApps_6 = () => {
  return (
    <section className="pa6-section">
      <div className="pa6-wrapper">
        <div className="pa6-content">
          <h1 className="pa6-title">Key aspects of Power Apps</h1>
          <p className="pa6-subtitle">
            Key aspects of Power Apps, Key aspects of Power Apps,
          </p>

          <div className="pa6-gradients">
            <div className="pa6-gradient-box" data-aos="fade-right"><h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>urn Ideas into Working Apps</h3></div>
            <div className="pa6-gradient-box" data-aos="fade-right"><h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Empower Business to Innovate</h3></div>
            <div className="pa6-gradient-box" data-aos="fade-right"><h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Connect to Everything, Securely</h3></div>
            <div className="pa6-gradient-box" data-aos="fade-right"><h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Integrate and Automate Workflows</h3></div>
          </div>
        </div>

        <div className="pa6-image-bg">
          <img
            src={laptopImg}
            alt="Power Apps Dashboard"
            className="pa6-laptop"
          />
        </div>
      </div>
    </section>
  );
};

export default PowerApps_6;
