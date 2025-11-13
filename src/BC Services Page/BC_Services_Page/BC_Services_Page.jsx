import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BusinessCentral_1 from '../BusinessCentral-Page-1/BusinessCentral_1';
import BusinessCentral_2 from '../BusinessCentral-Page-2/BusinessCentral_2';
import BusinessCentral_3 from '../BusinessCentral-Page-3/BusinessCentral_3';
import BusinessCentral_4 from '../BusinessCentral-Page-4/BusinessCentral_4';
import BusinessCentral_5 from '../BusinessCentral-Page-5/BusinessCentral_5';
import BusinessCentral_6 from '../BusinessCentral-Page-6/BusinessCentral_6';
import BusinessCentral_7 from '../BusinessCentral-Page-7/BusinessCentral_7';

const Componets_Page1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <BusinessCentral_1 />
      <BusinessCentral_2 />
      <BusinessCentral_3 />
      <BusinessCentral_4 />
      <BusinessCentral_5 />
      <div data-aos="fade-up">
        <BusinessCentral_7 />
      </div>
      <div data-aos="fade-up">
        <BusinessCentral_6 />
      </div>
    </>
  );
};

export default Componets_Page1;
