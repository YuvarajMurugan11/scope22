import React, { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './BusinessCentral_3.css';
import FM from "../../assets/FM.png";
import OM from "../../assets/OM.png";
import PM from "../../assets/PM.png";
import RA from "../../assets/RA.png";
import SCM from "../../assets/SCM.png";
import SSM from "../../assets/SSM.png";

const tabData = [
  {
    id: 'financial',
    title: 'Financial Management',
    image: FM,
    content: [
      { bold: 'Accounts Receivable and Payable', text: '– Manages customer invoices, vendor bills, and payment tracking to maintain accurate financial records.' },
      { bold: 'Bank Reconciliation', text: '– Matches and verifies company bank transactions with internal financial records for accuracy.' },
      { bold: 'Fixed Asset Management', text: '– Tracks and manages company assets, including acquisition, depreciation, and disposal.' },
      { bold: 'Month/Year End Closing', text: '– Ensures all financial transactions are recorded and finalized to generate accurate period-end reports.' },
    ],
  },
  {
    id: 'supply',
    title: 'Sales & Service',
    image: SSM,
    content: [
      { bold: 'Quote Generation', text: '– Allows users to create and manage sales quotes that can be easily converted into orders or invoices.' },
      { bold: 'Contact Management', text: '– Helps track and maintain detailed information about customers, vendors, and prospects for better relationship management.' },
      { bold: 'Sales Invoicing', text: '– Automates the creation and posting of sales invoices to record customer transactions efficiently.' },
      { bold: 'Payment Processing', text: '– Manages customer payments and applies them to invoices, ensuring accurate cash flow and account reconciliation.' },
    ],
  },
  {
    id: 'sales',
    title: 'Project Management',
    image: PM,
    content: [
      { bold: 'Capacity Planning', text: '– Helps allocate and schedule resources effectively based on workload and project demands.' },
      { bold: 'Budgets and Estimates', text: '– Enables setting project budgets and cost estimates to monitor financial performance against actuals.' },
      { bold: 'Job and Process Costing', text: '– Tracks project costs and profitability by recording labor, material, and resource expenses.' },
      { bold: 'Resource Management', text: '– Manages and optimizes the use of people, equipment, and materials across projects.' },
    ],
  },
  {
    id: 'project',
    title: 'Supply Chain Management',
    image: SCM,
    content: [
      { bold: 'Inventory and Purchasing Control', text: '– Manages stock levels, purchase orders, and item availability to ensure efficient inventory operations.' },
      { bold: 'Shipment and Distribution', text: '– Handles the movement of goods from warehouses to customers, ensuring timely and accurate deliveries.' },
      { bold: 'Returns and Cancellations', text: '– Manages product returns and order cancellations to maintain accurate inventory and customer satisfaction.' },
      { bold: 'Procurement and Vendor Management', text: '– Oversees supplier relationships, purchase agreements, and procurement processes for cost-effective sourcing.' },
    ],
  },
  {
    id: 'security',
    title: 'Operations Management',
    image: OM,
    content: [
      { bold: 'Forecasting', text: '– Predicts future demand to plan production and inventory effectively.' },
      { bold: 'Production Planning', text: '– Organizes and schedules manufacturing activities to optimize resource use and meet delivery timelines.' },
      { bold: 'Manufacturing Capacity', text: '– Monitors and manages production capabilities to balance workloads and avoid bottlenecks.' },
      { bold: 'Warehouse Management', text: '– Controls storage, picking, and movement of goods to ensure accurate inventory and efficient order fulfillment.' },
    ],
  },
  {
    id: 'customization',
    title: 'Reporting & Analytics',
    image: RA,
    content: [
      { bold: 'Customer Insights', text: '– Provides detailed analysis of customer behavior and trends to support better decision-making.' },
      { bold: 'Self-Serve Reports', text: '– Allows users to create and access reports independently without IT assistance.' },
      { bold: 'Interactive Dashboards', text: '– Displays real-time data visually for easy tracking of key business metrics.' },
      { bold: 'Built-in Intelligence', text: '– Easily design unique reports specific to your business needs and automate their distribution to key stakeholders.' },
    ],
  },
];

const ListItem = ({ bold, text }) => (
  <li className="BC3-li">
    <strong className="BC3-li-strong">{bold}</strong> {text}
  </li>
);

const BusinessCentral_3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const [animateContent, setAnimateContent] = useState(false);
  const activeContent = tabData.find(tab => tab.id === activeTab);
  const [gliderStyle, setGliderStyle] = useState({ left: '0px', width: '0px' });
  const tabsRef = useRef([]);
  const tabsContainerRef = useRef(null);

  const setGliderPosition = (index) => {
    const targetElement = tabsRef.current[index];
    if (targetElement) {
      setGliderStyle({
        width: `${targetElement.offsetWidth}px`,
        left: `${targetElement.offsetLeft}px`,
      });
    }
  };

  useEffect(() => {
    const initialIndex = tabData.findIndex(tab => tab.id === activeTab);
    setGliderPosition(initialIndex);
    const handleResize = () => setGliderPosition(tabData.findIndex(tab => tab.id === activeTab));
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  const TabButton = ({ tab, index }) => {
    const isActive = tab.id === activeTab;
    const handleMouseEnter = () => {
      if (!isActive) {
        setAnimateContent(true);
        setTimeout(() => setAnimateContent(false), 700);
        setActiveTab(tab.id);
        setGliderPosition(index);
      }
    };

    return (
      <button
        ref={el => tabsRef.current[index] = el}
        onMouseEnter={handleMouseEnter}
        className={`BC3-tab-btn ${isActive ? 'active' : ''}`}
      >
        {tab.title}
      </button>
    );
  };

  const handleMouseLeave = () => {
    const currentIndex = tabData.findIndex(tab => tab.id === activeTab);
    setGliderPosition(currentIndex);
  };

  return (
    <div className="BC3-main">
      <div className="BC3-container">
        <div className="BC3-header" data-aos="fade-up">
          <h1>Dynamics 365 Business Central – Core Capabilities</h1>
        </div>

        <div className="BC3-tabs" ref={tabsContainerRef} onMouseLeave={handleMouseLeave}>
          <div
            className="BC3-glider"
            style={{
              width: gliderStyle.width,
              transform: `translateX(${gliderStyle.left})`
            }}
          ></div>
          {tabData.map((tab, index) => (
            <TabButton key={tab.id} tab={tab} index={index} />
          ))}
        </div>

        <div className="BC3-content">
          <div className="BC3-grid">
            {/* IMAGE with fade-up animation */}
            <div className={`BC3-img-wrap ${animateContent ? 'fade-up' : ''}`}>
              <div className="BC3-img">
                <img
                  src={activeContent.image}
                  alt={`${activeContent.title} Feature Preview`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x300/F1F5F9/475569?text=Image+Not+Found';
                  }}
                />
              </div>
            </div>

            {/* TEXT with fade-up animation */}
            <div className={`BC3-text ${animateContent ? 'fade-up' : ''}`}>
              <h2 className="BC3-subtitle">{activeContent.title}</h2>
              <ul>
                {activeContent.content.map((item, index) => (
                  <ListItem key={index} bold={item.bold} text={item.text} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCentral_3;
