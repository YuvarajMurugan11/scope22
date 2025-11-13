import React from "react";
import "./PowerBI_4.css";
import { motion } from "framer-motion";

const PowerBI_4 = () => {
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
        </ul>

        <p className="PowerBI_4-text">
          Lorem ipsum odor amet, consectetur adipiscing elit. Mollis parturient
          justo; commodo ultrices fusce magnis nascetur. Dictum gravida elit
          phasellus varius donec tempus.
        </p>
      </div>

      {/* RIGHT SIDE — Animated Chart */}
      <div className="PowerBI_4-right">
        <div className="PowerBI_4-chart-container">
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
            <text x="25" y="325" fontSize="10" fill="#333">0</text>
            <text x="15" y="260" fontSize="10" fill="#333">100</text>
            <text x="15" y="200" fontSize="10" fill="#333">200</text>
            <text x="15" y="140" fontSize="10" fill="#333">300</text>
            <text x="15" y="80" fontSize="10" fill="#333">400</text>

            {/* --- X Axis Labels --- */}
            <text x="80" y="340" fontSize="12" fill="#333">Jan</text>
            <text x="160" y="340" fontSize="12" fill="#333">Feb</text>
            <text x="240" y="340" fontSize="12" fill="#333">Mar</text>
            <text x="320" y="340" fontSize="12" fill="#333">Apr</text>
            <text x="400" y="340" fontSize="12" fill="#333">May</text>

            {/* --- ANIMATED LINES --- */}
            <motion.path
              d="M40 300 L120 240 L200 250 L280 180 L360 160 L440 100"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M40 320 L120 260 L200 200 L280 220 L360 180 L440 150"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.3, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.path
              d="M40 310 L120 280 L200 250 L280 260 L360 200 L440 120"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PowerBI_4;
