
// import React from "react";
// import { Routes, Route } from "react-router-dom";


// import SecureSign_Page1 from "../SecureSign Page1/SecureSign_Page1";
// import Feature from "../Feature-Tabs/Feature";
// import Page from "../Page2/Page";
// import Slider from "../page3/Slider";
// import Contact from "../Contact-Page/Contact/Contact";
// import Page4 from "../page4/Page4";

// const SecureSign_Page = () => {
//   return (
//     <>
//       <Routes>
        
//         <Route
//           path="/"
//           element={
//             <>
                 
//                   <SecureSign_Page1/>
//                   <Feature/>
//                   <Page />
//                   <Slider />
//                   <Page4 />
                 
//             </>
//           }
//         />

      
//         <Route path="/contact" element={<Contact />} />
         
//       </Routes>
//     </>
//   );
// };

// export default SecureSign_Page;




// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Programs from "../Programs/Programs";
// import Feature from "../Feature-Tabs/Feature";
// import Page from "../Page2/Page";
// import Slider from "../page3/Slider";
// import Contact from "../Contact-Page/Contact/Contact";
// import Page4 from "../page4/Page4";

// const SecureSign_Page = () => {
//   return (
//     <Routes>
//       {/* ✅ Use index instead of "/" for default nested route */}
//       <Route
//         index
//         element={
//           <>
//             <Programs />
//             <Feature />
//             <Page />
//             <Slider />
//             <Page4 />
//           </>
//         }
//       />

//       {/* Contact Page */}
//       <Route path="contact" element={<Contact />} />
//     </Routes>
//   );
// };

// export default SecureSign_Page;










// SecureSign_Page.js
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Programs from "../Programs/Programs";
import Feature from "../Feature-Tabs/Feature";
import Page from "../Page2/Page";
import Slider from "../page3/Slider";
import Contact from "../Contact-Page/Contact/Contact";
import Page4 from "../page4/Page4";

const SecureSign_Page = () => {
  // ✅ Initialize AOS (prevents invisible animations)
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Routes>
        {/* ✅ Default route (when you visit /SecureSign) */}
        <Route
          index
          element={
            <>
              <Programs />
              <Feature />
              <Page />
              <Slider />
              <Page4 />
            </>
          }
        />

        {/* ✅ Contact page route (when you visit /SecureSign/contact) */}
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default SecureSign_Page;
