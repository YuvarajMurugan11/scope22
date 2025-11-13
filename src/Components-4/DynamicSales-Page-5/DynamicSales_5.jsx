import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./DynamicSales_5.css";

const DynamicSales_5 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div>
            <h2 style={{ color: "#27abfd", textAlign: "center" }}>
                Key aspects of Dynamic Sales
            </h2>

            <section className="ds5-section">
                <div className="ds5-content">
                    {/* Title */}
                    <h1 className="ds5-title" data-aos="fade-up">
                        What Makes Dynamics 365 Sales Powerful
                    </h1>

                    {/* Cards */}
                    <div className="ds5-cards" data-aos="fade-up">

                        {/* Card 1 */}
                        <div className="ds5-card-item">
                            <div className="ds5-legend-item">
                                <span className="ds5-dot" data-aos="fade-up" style={{ marginLeft: "45px" }}></span>
                                <h3 data-aos="fade-up">Streamline and Simplify Sales</h3>
                            </div>
                            <div className="ds5-card">
                                <div className="ds5-text">
                                    <p>Empower your sales team with tools that make selling easier and smarter.</p>
                                    <p>From lead capture to opportunity management, automate your workflows and eliminate manual follow-ups. Keep every deal on track with smart reminders and guided processes that ensure nothing falls through the cracks.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="ds5-card-item">
                            <div className="ds5-legend-item">
                                <span className="ds5-dot" data-aos="fade-up" style={{ marginLeft: "12px" }}></span>
                                <h3 data-aos="fade-up">Sell Smarter with AI and Insights</h3>
                            </div>
                            <div className="ds5-card">
                                <div className="ds5-text">
                                    <p>Make data your competitive advantage. Gain real-time visibility into your sales pipeline with interactive dashboards and reports.</p>
                                    <p>Leverage AI-driven forecasting to identify top opportunities, predict revenue trends, and make confident, informed decisions that drive growth.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="ds5-card-item">
                            <div className="ds5-legend-item">
                                <span className="ds5-dot" data-aos="fade-up" style={{ marginLeft: "4px" }}></span>
                                <h3 data-aos="fade-up">Stay Connected Anywhere</h3>
                            </div>
                            <div className="ds5-card">
                                <div className="ds5-text">
                                    <p>Work seamlessly across Microsoft tools you already use — Outlook, Teams, Excel, and Power BI — to keep collaboration effortless.</p>
                                    <p>Whether in the office or on the move, access all customer and sales data securely from any device, empowering remote and field teams to stay productive anywhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="ds5-bottom" data-aos="fade-up">
                        <div className="ds5-desc">
                            <h3>
                                Its intelligent automation, real-time insights, and seamless Microsoft integration empower teams to sell smarter and drive growth.
                            </h3>
                        </div>
                        <button className="ds5-button" data-aos="zoom-in">TARGET ACHIEVED ✓</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DynamicSales_5;
