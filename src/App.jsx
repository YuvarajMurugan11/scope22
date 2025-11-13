// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Components
// import Scopretree_Navbar1 from './Components-1/Scopetree Navbar1/Scopetree_Navbar1';
// import Scopetree_Page2 from './Components-1/Scopetree_Page2/Scopetree_Page2';
// import Slider from './Components-1/Scopetree Slider/Slider';
// // import SideNav from './Components-1/SideNav/SideNav';
// import AboutUs from './Components-1/Scopetree_About_Us/About_Us';
// import Services from './Components-1/Scopetree Services/Services';
// // import StatsSection from './Components-1/Scopetree_StatsSection/StatsSection';
// import Scopetree_ProductSection from './Components-1/Scopetree ProductSection/Scopetree_ProductSection';
// import Slider_Page2 from './Components-1/Scopetree Slider_Page2/Slider_Page2';
// import Industries from './Components-1/Scopetree Industries/Industries';
// import Scopetree_page_9 from './Components-1/Scopetree page-9/Scopetree_page_9';
// import ScrollToTop from './ScrollToTop';
// import ScopetreeFooter from './Components-1/Scopetree Footer/Scopetree_Footer';
// // About Us Page
// import About_Us_Page from './Components-2 About Us/About_Us page/About_Us_Page';

// // ✅ Business Central Page
// import Componets_Page1 from './BC Services Page/BC_Services_Page/BC_Services_Page';

// // ✅ Power BI Page
// import PowerBI_page from './PowerBI Page/PowerBI_Page/PowerBI_page';

// import Nav_Services_Page from './Nav Services Page/Nav_Services_Page/Nav_Services_Page';

// import SecureSign_Page from './SecureSign/SecureSign_Page/SecureSign_Page';

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">
//         {/* Automatically scrolls to top on every route change */}
//         <ScrollToTop />

//         {/* Navbar Always Visible */}
//         <Scopretree_Navbar1 />

//         {/* Define Routes */}
//         <Routes>
//           {/* Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 {/* <SideNav /> */}
//                 <Slider />
//                 <Scopetree_Page2 />
//                 <AboutUs />
//                 <Services />
                
//                 {/* <StatsSection /> */}
//                 <Scopetree_ProductSection />
//                 <Industries />
//                 <Slider_Page2 />
//                 <Scopetree_page_9 />
//               </>
//             }
//           />

//           {/* About Us Page */}
//           <Route path="/about" element={<About_Us_Page />} />

//           {/* ✅ Business Central Page */}
//           <Route path="/BC" element={<Componets_Page1 />} />

//           {/* ✅ Power BI Page */}
//           <Route path="/PowerBI" element={<PowerBI_page />} />

//           <Route path="/Nav" element={<Nav_Services_Page/>} />

//           <Route path="/SecureSign/*" element={<SecureSign_Page />} />

          

//         </Routes>
//            <ScopetreeFooter />
//       </div>
   
//     </Router>
//   );
// };

// export default App;







// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Scopretree_Navbar1 from './Components-1/Scopetree Navbar1/Scopetree_Navbar1';
import Scopetree_Page2 from './Components-1/Scopetree_Page2/Scopetree_Page2';
import Slider from './Components-1/Scopetree Slider/Slider';
import AboutUs from './Components-1/Scopetree_About_Us/About_Us';
import Services from './Components-1/Scopetree Services/Services';
import Scopetree_ProductSection from './Components-1/Scopetree ProductSection/Scopetree_ProductSection';
import Slider_Page2 from './Components-1/Scopetree Slider_Page2/Slider_Page2';
import Industries from './Components-1/Scopetree Industries/Industries';
import Scopetree_page_9 from './Components-1/Scopetree page-9/Scopetree_page_9';
import ScrollToTop from './ScrollToTop';
import ScopetreeFooter from './Components-1/Scopetree Footer/Scopetree_Footer';

// About Us Page
import About_Us_Page from './Components-2 About Us/About_Us page/About_Us_Page';

// ✅ Business Central Page
import Componets_Page1 from './BC Services Page/BC_Services_Page/BC_Services_Page';

// ✅ Power BI Page
import PowerBI_page from './PowerBI Page/PowerBI_Page/PowerBI_page';

// ✅ Nav Services Page
import Nav_Services_Page from './Nav Services Page/Nav_Services_Page/Nav_Services_Page';

// ✅ SecureSign Page
import SecureSign_Page from './SecureSign/SecureSign_Page/SecureSign_Page';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <Scopretree_Navbar1 />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Scopetree_Page2 />
                <AboutUs />
                <Services />
                <Scopetree_ProductSection />
                <Industries />
                <Slider_Page2 />
                <Scopetree_page_9 />
              </>
            }
          />

          {/* About Us Page */}
          <Route path="/about" element={<About_Us_Page />} />

          {/* Business Central Page */}
          <Route path="/BC" element={<Componets_Page1 />} />

          {/* Power BI Page */}
          <Route path="/PowerBI" element={<PowerBI_page />} />

          {/* Nav Services Page */}
          <Route path="/Nav" element={<Nav_Services_Page />} />

          {/* ✅ SecureSign nested routes */}
          <Route path="/SecureSign/*" element={<SecureSign_Page />} />
        </Routes>

        <ScopetreeFooter />
      </div>
    </Router>
  );
};

export default App;
