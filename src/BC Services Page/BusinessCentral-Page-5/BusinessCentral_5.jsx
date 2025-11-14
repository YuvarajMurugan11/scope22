// import React from "react";
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./BusinessCentral_5.css";
// import bgImage from "../../assets/bg-image.jpg"; // background import

const BusinessCentral_5 = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // whether animation should happen only once - while scrolling down
    })
  }, [])

  return (
    <div>
      <h2 style={{ color: "#035C75", textAlign: "center" }}>
        Key aspects of Business Central 365
      </h2>

      <section
        className="bc-section"
      // style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bc-content">
          {/* Title */}
          <h1 className="bc-title" data-aos="fade-up">Workflows and Automation</h1>

          <p className='bc-p1' data-aos="fade-up"></p>

          {/* Boxes with individual labels */}
          <div className="bc-cards" data-aos="fade-up">
            <div className="bc-card-item">
              <div className="bc-legend-item">
                <span className="bc-do " data-aos="fade-up"></span> <h3 data-aos="fade-up">Business Central Approval Workflows</h3>
              </div>
              <div className="bc-card"><p className='bc-p2' >
                <p style={{marginTop:"0px",textAlign:"left"}}>Set up and customize approval workflows using built-in or preconfigured templates.</p> <br />

                <p style={{marginTop:"-30px",textAlign:"left"}}>Automate approvals for actions like sales or purchase documents, price changes, and vendor/customer updates.</p><br />

                <p style={{marginTop:"-30px",textAlign:"left"}}>Extend workflow capabilities with Power Automate for advanced business scenarios.</p></p></div>
            </div>

            <div className="bc-card-item">
              <div className="bc-legend-item">
                <span className="bc-dot" data-aos="fade-up" style={{ marginLeft: "48px" }}></span> <h3 data-aos="fade-up" >Background processing</h3>
              </div>
              <div className="bc-card"><p className='bc-p3'><p style={{marginTop:"0px",textAlign:"left"}}>Use Job Queue to automate and schedule recurring tasks at defined intervals.</p> <br /> 
              <p style={{marginTop:"-30px",textAlign:"left"}}>Streamline reports, integrations, and data processing by automating routine tasks, reducing manual effort, and ensuring consistent, timely execution.</p>
               <br /> <p style={{marginTop:"-30px",textAlign:"left"}}>Stay focused on strategic work while receiving alerts for any task failures.</p> </p> </div>
            </div>

            <div className="bc-card-item">
              <div className="bc-legend-item">
                <span className="bc-dot" data-aos="fade-up" style={{ marginLeft: "43px" }}></span> <h3 data-aos="fade-up">Power Automate Workflows</h3>
              </div>
              <div className="bc-card"> <p className='bc-p4'><p style={{marginTop:"0px",textAlign:"left"}}>No-code/low-code solution for seamless business integration.</p> <br />

                <p style={{marginTop:"-30px",textAlign:"left"}}>Build automated or scheduled flows using multiple data sources to manage and update information across systems.</p> <br />

                <p style={{marginTop:"-30px",textAlign:"left"}}>Connect Business Central with services like Dataverse, Outlook, and Teams.</p></p> </div>
            </div>
          </div>

          {/* Bottom paragraph + button */}
          <div className="bc-bottom" data-aos="fade-up">
            <p className="bc-desc">
              <h3 >Workflows automate repetitive tasks, minimizing manual effort and speeding up processes. In Business Central,
                 you can create custom workflows and use tools like Job Queue to boost efficiency</h3>
            </p>
            <button className="bc-button">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessCentral_5;
