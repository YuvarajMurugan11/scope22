import React from "react";
import "./Scopetree_Page2.css";
// import tv from "../../assets/tv.png";
// import music from "../../assets/music.png";
// import arcade from "../../assets/arcade.png";

const Scopetree_Page2 = () => {
  return (
    <div className="page2-wrapper">
      <div className="page2-item">
        {/* <img src={tv} alt="" className="page2-icon" /> */}
        <div className="page2-title" >Business Applications</div>
        <div className="page2-desc">Optimize workflows with Microsoft D365.Smarter tools, better decisions.</div>
      </div>

      <div className="page2-item">
        {/* <img src={music} alt="" className="page2-icon" /> */}
        <div className="page2-title">Web Development</div>
        <div className="page2-desc">Where design and technology create high-performance web experiences.</div>
      </div>

      <div className="page2-item">
        {/* <img src={arcade} alt="" className="page2-icon" /> */}
        <div className="page2-title" >Mobile Development</div>
        <div className="page2-desc">Deliver powerful mobile apps for every platform.Customers ideas on the go.</div>
      </div>
    </div>
  );
};

export default Scopetree_Page2;
