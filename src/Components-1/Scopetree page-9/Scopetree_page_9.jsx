import React from "react";
import "./Scopetree_page_9.css";
import powerbiImg from "../../assets/need more info.png"; 

const Scopetree_page_9 = () => {
  return (
    <div className="scopetree9-wrapper">
      <div className="scopetree9-left">
        <img src={powerbiImg} alt="Microsoft PowerBI" className="scopetree9-img" />
      </div>

      <div className="scopetree9-right">
        <div className="scopetree9-heading">
          Need more information about our services?
        </div>

        <a href="/contact" className="scopetree9-link" >
          Contact Us <span style={{ fontSize: '18px', fontWeight: '100' }}> &#10095;</span>
        </a>
      </div>
    </div>
  );
};

export default Scopetree_page_9;
