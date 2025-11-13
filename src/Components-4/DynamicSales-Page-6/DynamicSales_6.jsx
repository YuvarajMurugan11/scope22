import React from "react";
import "./DynamicSales_6.css";
import laptopImg from "../../assets/sales.png"; // ✅ Correct path

const DynamicSales_6 = () => {
  return (
    <section className="ds6-section">
     <div>

 <div className="ds6-wrapper">
        <div className="ds6-content">
          <h1 className="ds6-title">Key aspects of D365 Sales</h1>
          <p className="ds6-subtitle">
            Streamline sales, gain insights, and boost productivity with intelligent, connected tools.
          </p>

          <div className="ds6-gradients">
            <div className="ds6-gradient-box" data-aos="fade-right">
              <h3 style={{ marginTop: "15px", paddingLeft: "20px", color: "white" }}>
                Streamlined Sales Processes
              </h3>
            </div>
            <div className="ds6-gradient-box" data-aos="fade-right">
              <h3 style={{ marginTop: "15px", paddingLeft: "20px", color: "white" }}>
                Intelligent Insights & Collaboration
              </h3>
            </div>
            {/* <div className="ds6-gradient-box" data-aos="fade-right">
              <h3 style={{ marginTop: "15px", paddingLeft: "20px", color: "white" }}>
                Connect to Everything, Securely
              </h3>
            </div>
            <div className="ds6-gradient-box" data-aos="fade-right">
              <h3 style={{ marginTop: "15px", paddingLeft: "20px", color: "white" }}>
                Integrate and Automate Workflows
              </h3>
            </div> */}
          </div>
        </div>

        <div className="ds6-image-bg">
          <img
            src={laptopImg}
            alt="Dynamic Sales Dashboard"
            className="ds6-laptop"
          />
        </div>
      </div>
                {/* <p className="ds6-p"> Dynamics 365 Sales helps organizations manage the entire sales process efficiently with automation, AI insights, and seamless integration across Microsoft tools, enabling teams to build stronger customer relationships and close deals faster.</p> */}
     </div>
    </section>
  );
};

export default DynamicSales_6;
