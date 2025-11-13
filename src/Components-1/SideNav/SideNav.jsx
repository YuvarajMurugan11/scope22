import React from "react";
import "./SideNav.css";
import { Link } from "react-router-dom"; // ✅ React Router link
import logo from "../../assets/011.png";
import log from "../../assets/012.png";
import lo from "../../assets/016.png";
import l from "../../assets/015.png";

const SideNav = () => {
  return (
    <div>
      {/* Side Navigation */}
      <div className="sideNavBar">
       <div className="sideNav animated-button13">
          <Link  className="sideNavBarItem sideNavBarItemArticle"  to="/BC" >
         <img src={logo} alt="Write" className="sideNavBarItemIcon" />
            Microsoft Dynamics 365 Business Central
         </Link>
         <Link  className="sideNavBarItem sideNavBarItemInterview"  to="/Nav">
          <img src={log} alt="Interview" className="sideNavBarItemIcon" />
         Microsoft Dynamics NAV
          </Link>

         <Link className="sideNavBarItem sideNavBarItemScripter"  to="/PowerBI">
          <img src={lo} alt="Scripter" className="sideNavBarItemIcon" />
         Power BI
       </Link>

        <Link className="sideNavBarItem sideNavBarItemSuggested" to="/PowerBI">
          <img src={l} alt="Suggested" className="sideNavBarItemIcon" />
            SecureSign
        </Link>
       </div>
      </div>

      {/* Content */}
      <div className="sideNavContent"></div>
    </div>
  );
};

export default SideNav;
