import React, { useEffect, useState, useRef } from "react";
import "./PowerApps_2.css";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import AOS from "aos";
import "aos/dist/aos.css";

const PowerApps_2 = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true, // whether animation should happen only once - while scrolling down
        })
    }, [])

    const [isVisible, setIsVisible] = useState(false); // track visibility
    const ref = useRef();

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    // Intersection Observer to detect scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true); // mount content once visible
                }
            },
            { threshold: 0.5 } // 50% visible
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [isVisible]);

    const data = [
        { name: "Element 1", value: 20 },
        { name: "Element 2", value: 20 },
        { name: "Element 3", value: 20 },
        { name: "Element 4", value: 20 },
        { name: "Element 5", value: 20 },
    ];

    const COLORS = ["#b86ef3", "#7a59c4", "#5c52a0", "#323c79", "pink"];

    return (
        <div
            ref={ref}
            className="powerapps2-container"
            data-aos={isVisible ? "fade-up" : ""}
        >
            {isVisible ? (
                <>
                    <h2 className="powerapps2-title">
                        Core Capabilities of Power Apps
                    </h2>

                    <div className="powerapps2-content">
                        <div className="powerapps2-text-section" data-aos="fade-up">
                            {/* <h3 className="powerapps2-title"></h3> */}
                            <p className="powerapps2-description">
                                <p className="powerapps2-description">Low-code platform for rapid custom app development without extensive coding.</p>
                               <p className="powerapps2-description"></p> Build once, run anywhere — apps work seamlessly on web, mobile, and tablet devices.
                                <br />
                                <p className="powerapps2-description"></p> Supports Canvas, Model-Driven, and Power Pages app types for flexible solutions.
                                <br />
                                <p className="powerapps2-description"></p> Integrates with Microsoft Dataverse for secure, centralized data management.
                                <br />
                                <p className="powerapps2-description"></p> Connects to 500+ data sources, including SharePoint, SQL, Dynamics 365, and Power BI.
                                <br />
                               <p className="powerapps2-description"></p> Features AI Copilot for conversational, intelligent app creation.
                                <br />
                               <p className="powerapps2-description"></p> Works with Power Automate to streamline and automate business workflows.
                                <br />
                               <p className="powerapps2-description"></p> Ideal for digitizing processes, improving efficiency, and boosting productivity.
                            </p>
                        </div>

                        <div className="powerapps2-chart-section">
                            <ResponsiveContainer width="99%" height={560}>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        dataKey="value"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={180}
                                        label={({ name, value }) => `${name} ${value}%`}
                                        stroke="none"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>

                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#1a093e",
                                            border: "none",
                                            borderRadius: "4px",
                                            padding: "4px 8px",
                                            height: "28px",
                                        }}
                                        itemStyle={{
                                            color: "#fff",
                                            fontSize: "0.8rem",
                                            lineHeight: "1",
                                        }}
                                        cursor={false}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </>
            ) : (
                <div style={{ minHeight: "700px" }}></div> // placeholder for layout
            )}
        </div>
    );
};

export default PowerApps_2;
