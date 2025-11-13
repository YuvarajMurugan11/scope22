import React from 'react';
import './Footer.css';
import { FaYoutube, FaLinkedin } from 'react-icons/fa';
import scopetree from '../../assets/IMG_4911.PNG'
import SecureSign from '../../assets/SecureSign.png'
import { Link, useNavigate } from 'react-router-dom'; // ✅ import useNavigate

const Footer = () => {
  const navigate = useNavigate(); // ✅ move this INSIDE the component

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFeatureClick = () => {
    if (window.location.pathname === '/') {
      const element = document.getElementById('feat');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('feat');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={scopetree} alt="Scopetree Logo" className="footer-logo" />
        <br />
        <br />
        <h1 >Switch From Paper To Digital with Scopetree SecureSign!</h1>
        <hr className="footer-divider" />
        <div className="footer-columns">
          <div className="footer-column anchor">
            <h4>Company</h4>
            <ul>
              <li>
                <a onClick={scrollToTop} style={{ cursor: 'pointer' }}>
                  Home
                </a>
              </li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <a onClick={handleFeatureClick} style={{ cursor: 'pointer' }}>
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column ">
            <h4>Contact</h4>
            <div className="left">
              <p>Email: sales@scopetree.com</p>
              <p>Phone: +91 9445956284</p>
              <div className="social-icons1">
                <a href="https://www.linkedin.com/company/scopetree/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} color="#0e76a8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className='bottom-right'>
          <div>
            <img 
              src={SecureSign}
              style={{ height: "66px", width: "60px" }}
              alt="logo"
            />
          </div>
          <div>
            <div className='s1'><b>SecureSign</b></div>
            <div className='s2'>Powered By Scopetree</div>
          </div>
        </div>
        <div>
          <p className='footEnd'>© 2025 Scopetree Technologies LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import React from "react";
// import "./Footer.css";
// import { FaLinkedin } from "react-icons/fa";
// import scopetree from "../../assets/IMG_4911.PNG";
// import SecureSign from "../../assets/SecureSign.png";
// import { Link, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
 
// const Footer = () => {
//   const navigate = useNavigate();
 
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
 
//   const handleFeatureClick = () => {
//     if (window.location.pathname === "/") {
//       const element = document.getElementById("feat");
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       navigate("/");
//       setTimeout(() => {
//         const element = document.getElementById("feat");
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }, 100);
//     }
//   };
 
//   return (
// <motion.footer
//       className="footer"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       viewport={{ once: false, amount: 0.3 }}
// >
// <div className="footer-top">
// <img src={scopetree} alt="Scopetree Logo" className="footer-logo" />
// <h2>Switch From Paper To Digital with Scopetree SecureSign!</h2>
// <hr className="footer-divider" />
// <div className="footer-columns">
// <div className="footer-column anchor">
// <h4>Company</h4>
// <ul>
// <li>
// <a onClick={scrollToTop} style={{ cursor: "pointer" }}>
//                   Home
// </a>
// </li>
// <li>
// <Link to="/contact">Contact</Link>
// </li>
// <li>
// <a onClick={handleFeatureClick} style={{ cursor: "pointer" }}>
//                   Features
// </a>
// </li>
// </ul>
// </div>
// <div className="footer-column ">
// <h4>Contact</h4>
// <div className="left">
// <p>Email: sales@scopetree.com</p>
// <p>Phone: +91 9445956284</p>
// <div className="social-icons1">
// <a
//                   href="https://www.linkedin.com/company/scopetree/"
//                   target="_blank"
//                   rel="noopener noreferrer"
// >
// <FaLinkedin size={24} color="#0e76a8" />
// </a>
// </div>
// </div>
// </div>
// </div>
// </div>
 
//       <div className="footer-bottom">
// <div className="bottom-right">
// <div>
// <img
//               src={SecureSign}
//               style={{ height: "66px", width: "60px" }}
//               alt="logo"
//             />
// </div>
// <div>
// <div className="s1">
// <b>SecureSign</b>
// </div>
// <div className="s2">Powered By Scopetree</div>
// </div>
// </div>
// <div>
// <p className="footEnd">© 2025 Scopetree Technologies LLP. All rights reserved.</p>
// </div>
// </div>
// </motion.footer>
//   );
// };
 
// export default Footer;