import React from 'react';
import './page4.css'; // import CSS
import ranjith from '../../assets/img_6327.png';



const page4 = () => {
  return (
    <div className="secure-sign-container">
      <div className="image-section">
        <img src={ranjith} alt="SecureSign" />
      </div>
      <div className="text-section">
        <h2 className='page4_h2'>Advance features and workflow of SecureSign</h2>
        <ul>
          <li>Seamlessly integrates with ERP, Payroll, and core business systems.</li>
          <li>Secure digital signatures using PFX certificates and images.</li>
          <li>Automatically notifies customers and vendors via Email.</li>
          <li>Enhance compliance and security.</li>
          <li>One-click signing for instant approvals.</li>
          <li>Real-time tracking keeps you informed of document status.</li>
        </ul>
      </div>
    </div>
  );
};

export default page4;
