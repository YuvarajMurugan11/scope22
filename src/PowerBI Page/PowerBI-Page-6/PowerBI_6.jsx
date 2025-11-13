import React from "react";
import "./PowerBI_6.css";
import laptopImg from "../../assets/your-laptop-image1.png"; // ✅ Correct path

const PowerBI_6 = () => {
  return (
    <section className="pb6-section">
      <div className="pb6-wrapper">
        <div className="pb6-content">
          <h1 className="pb6-title">Key aspects of Power BI</h1>
          <p className="pb6-subtitle">
            Key aspects of Power BI, Key aspects of Power BI,
          </p>

          <div className="pb6-gradients">
            <div className="pb6-gradient-box" data-aos="fade-right"><h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Turn Insights into Action</h3> </div>
            <div className="pb6-gradient-box" data-aos="fade-right"><h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Transform Information into Impact</h3> </div>
            <div className="pb6-gradient-box" data-aos="fade-right"><h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Empower Every Decision with Data</h3> </div>
            <div className="pb6-gradient-box" data-aos="fade-right"><h3 style={{marginTop:"15px",paddingLeft:"20px",color:"white"}}>Discover Trends, Drive Growth</h3> </div>
          </div>
        </div>

        <div className="pb6-image-bg">
          <img
            src={laptopImg}
            alt="Power BI Dashboard"
            className="pb6-laptop"
          />
        </div>
      </div>
    </section>
  );
};

export default PowerBI_6;
