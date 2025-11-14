import React, { useRef, useEffect } from "react";
import "./PowerBI_4.css";
import { motion, useAnimation, useInView } from "framer-motion";

const PowerBI_4 = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true }); // Trigger only once
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const barVariants = {
    hidden: { height: 0, y: 300 },
    visible: (i) => ({
      height: i.height,
      y: 300 - i.height,
      transition: { duration: 1, ease: "easeOut", delay: i.delay },
    }),
  };

  const data = [
    { label: "Jan", value: 120, color: "#3b82f6", delay: 0 },
    { label: "Feb", value: 180, color: "#ef4444", delay: 0.2 },
    { label: "Mar", value: 150, color: "#60a5fa", delay: 0.4 },
    { label: "Apr", value: 220, color: "#f59e0b", delay: 0.6 },
    { label: "May", value: 260, color: "#10b981", delay: 0.8 },
  ];

  return (
    <div className="PowerBI_4-container">
      {/* LEFT SIDE */}
      <div className="PowerBI_4-left">
        <h1 className="PowerBI_4-title">Key Components of Power BI</h1>

        <ul className="PowerBI_4-list">
          <li>
            <span className="PowerBI_4-dot PowerBI_4-dot-red"></span>
            <div>
              <strong>Power BI Desktop:</strong>
              <p>
                Connects to multiple data sources, cleans and models data, and
                creates interactive reports for publishing.
              </p>
            </div>
          </li>
          <li>
            <span className="PowerBI_4-dot PowerBI_4-dot-pink"></span>
            <div>
              <strong>Power BI Service (Online):</strong>
              <p>
                Cloud platform for publishing, sharing, and collaborating on
                reports with real-time data and secure access.
              </p>
            </div>
          </li>
          <li>
            <span className="PowerBI_4-dot PowerBI_4-dot-purple"></span>
            <div>
              <strong>Power BI Mobile App:</strong>
              <p>
                Mobile access to reports and dashboards anytime, ensuring
                insights on the go.
              </p>
            </div>
          </li>
          <li>
            <span className="PowerBI_4-dot PowerBI_4-dot-purple"></span>
            <div>
              <strong>Power BI Gateway:</strong>
              <p>
                Enables secure data transfer between on-premises data sources
                and the Power BI Service, ensuring reports stay up-to-date with
                real-time information.
              </p>
            </div>
          </li>
          <li>
            <span className="PowerBI_4-dot PowerBI_4-dot-purple"></span>
            <div>
              <strong>Power BI Embedded:</strong>
              <p>
                Allows developers to integrate Power BI reports and dashboards
                into custom applications, providing analytics capabilities
                within other software.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE — Animated Bar Chart */}
      <div className="PowerBI_4-right">
        <div className="PowerBI_4-chart-container" ref={chartRef}>
          <svg viewBox="0 0 550 350" className="PowerBI_4-svg">
            {/* --- GRID LINES --- */}
            {[50, 100, 150, 200, 250, 300].map((y, index) => (
              <line
                key={index}
                x1="40"
                y1={y}
                x2="520"
                y2={y}
                stroke="#ddd"
                strokeWidth="1"
                opacity="0.5"
              />
            ))}

            {/* --- Y AXIS --- */}
            <line x1="40" y1="30" x2="40" y2="320" stroke="#555" strokeWidth="2" />
            {/* --- X AXIS --- */}
            <line x1="40" y1="320" x2="520" y2="320" stroke="#555" strokeWidth="2" />

            {/* --- AXIS LABELS --- */}
            <text x="25" y="325" fontSize="10" fill="#333">
              0
            </text>
            <text x="15" y="260" fontSize="10" fill="#333">
              100
            </text>
            <text x="15" y="200" fontSize="10" fill="#333">
              200
            </text>
            <text x="15" y="140" fontSize="10" fill="#333">
              300
            </text>
            <text x="15" y="80" fontSize="10" fill="#333">
              400
            </text>

            {/* --- ANIMATED BARS --- */}
            {data.map((bar, index) => (
              <motion.rect
                key={index}
                x={80 + index * 80}
                width="40"
                fill={bar.color}
                custom={{ height: bar.value, delay: bar.delay }}
                variants={barVariants}
                initial="hidden"
                animate={controls}
              />
            ))}

            {/* --- X Axis Labels --- */}
            {data.map((bar, index) => (
              <text
                key={index}
                x={90 + index * 80}
                y="340"
                fontSize="12"
                fill="#333"
              >
                {bar.label}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PowerBI_4;
