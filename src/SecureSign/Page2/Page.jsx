// Page.jsx
import React from 'react';
import './Page.css';

const AnimatedCard = ({ image, title, description, animation, cardClass }) => {
  return (
    <div className={`card ${animation} ${cardClass}`}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div
        className="card-content"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // color: 'white',
        }}
      >
        <h2 >{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div id="feat" style={{ paddingTop: '100px', marginTop: '-80px' }}>
      <h1 style={{ textAlign: 'center', marginTop: '30px' ,color:"#035C75"}}>Go Digital with SecureSign</h1>
      <div className="grid-container">
        <AnimatedCard
          image="src/assets/IMG_61.jpg"
          title="Security"
          description="Track the entire signing process with real-time updates and detailed logs. Gain full visibility into who signed, when, and from where—ensuring complete transparency and accountability. Built-in audit trails simplify compliance checks, while instant notifications keep stakeholders informed at every stage of the workflow."
          animation="slide-up"
          cardClass="group-a"
        />
        <AnimatedCard
          image="src/assets/IMG_65.jpg"
          title="Rapid Response"
          description="Sign documents in seconds, streamlining workflows and accelerating business processes. Enjoy secure, legally valid digital signatures that ensure compliance and trust. Empower your teams with faster approvals, reduced paperwork, and greater efficiency across the organization."
          animation="slide-up"
          cardClass="group-b"
        />
        <AnimatedCard
          image="src/assets/IMG_66.jpg"
          title="System Integration"
          description="Works directly within ERP, Payroll, and other Business Software. Streamline workflows, reduce duplicate data entry, ensure accurate reporting, improve inter-department collaboration, and enable real-time insights across your organization."
          animation="slide-up"
          cardClass="group-b"
        />
        <AnimatedCard
          image="src/assets/IMG_64.jpg"
          title="Reduce Paper Work"
          description="Go Digital to Save resources, cut down on paper, and speed up document handling. Reduce storage costs, minimize errors, improve collaboration across teams, enhance data security, and enable instant access to documents anytime, anywhere."
          animation="slide-up"
          cardClass="group-a"
        />
      </div>
    </div>
  );
};

export default Page;
