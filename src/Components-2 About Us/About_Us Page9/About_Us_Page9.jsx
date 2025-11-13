import React from "react";
import "./About_Us_Page9.css";

// 🔥 Import your icon images manually here:
import icon1 from "../../assets/ABMS_1.PNG";
import icon2 from "../../assets/ABMS_2.PNG";
import icon3 from "../../assets//ABMS_3.PNG";
import icon4 from "../../assets//ABMS_4.PNG";
import icon5 from "../../assets//ABMS_5.PNG";
import icon6 from "../../assets//ABMS_6.PNG";
import icon7 from "../../assets/ABMS_7.PNG";
import icon8 from "../../assets//ABMS_8.PNG";
import icon9 from "../../assets//ABMS_9.PNG";
import icon10 from "../../assets/ABMS_10.PNG";
import icon11 from "../../assets//ABMS_11.PNG";
import icon12 from "../../assets//ABMS_12.PNG";


const data = [
  { icon: icon1, text: "Migrated over 70 companies from other ERPs to BC" },
  { icon: icon2, text: "Emirates NBD Bank Host to Host Integration" },
  { icon: icon3, text: "Poultry Software Integration" },
  { icon: icon4, text: "Fee Management module for a School" },
  { icon: icon5, text: "CIT Bank Payment Integration" },
  { icon: icon6, text: "Amazon Shipping & Payment Data Integration" },
  { icon: icon7, text: "E-Way Bill & E-Invoice Features" },
  { icon: icon8, text: "Automatic Courier Booking & Tracking" },
  { icon: icon9, text: "Third Party WMS Integration" },
  { icon: icon10, text: "Power BI Dashboards" },
  { icon: icon11, text: "Post-Dated Cheque (PDC) Implementation" },
  { icon: icon12, text: "Magento & E-commerce Integration" }
];

const About_Us_Page9 = () => {
  return (
    <div className="About_Us_Page9_Wrapper">
      <div className="About_Us_Page9_Title">Significant Achievements</div>

      <div className="About_Us_Page9_SliderWrapper">
        <div className="About_Us_Page9_SliderTrack">
          {data.concat(data).map((item, index) => (
            <div className="About_Us_Page9_Item" key={index}>
              <img src={item.icon} alt="" className="About_Us_Page9_Icon" />
              <div className="About_Us_Page9_Text">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About_Us_Page9;
