import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DynamicSales_1.css";
import logoImg from "../../assets/saleico.png"; // add your logo path here
// import backgroundImg from "../../assets/powerbi-bg.png"; // optional background

const DynamicSales_1 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="DynamicSales_1__container">
            <div
                className="DynamicSales_1__hero"
                // style={{ backgroundImage: `url(${backgroundImg})` }} // optional background
            >
                <div className="DynamicSales_1__content" data-aos="fade-up">
                    {/* Logo Section */}
                    <div className="DynamicSales_1__logoSection">
                        <img
                            src={logoImg}
                            alt="Dynamic Sales Logo"
                            className="DynamicSales_1__logo"
                        />
                    </div>

                    {/* Headings */}
                    <div className="DynamicSales_1__text">
                        <h1 className="DynamicSales_1__heading1">Microsoft</h1>
                        <h1 className="DynamicSales_1__heading2">Dynamic Sales</h1>
                    </div>
                </div>
            </div>

            <div className="DynamicSales_1__description">
                <p className="DynamicSales_1__descriptionText" data-aos="fade-up">
                    <span className="DynamicSales_1__highlight">
                        Upgrade from manual processes to a modern, intelligent CRM that grows with your business. With our fixed-cost Quick Start packages, you can get Dynamics 365 Sales up and running quickly — without heavy investment or lengthy setup.

                        Equip your sales team with powerful tools to manage leads, track opportunities, and build lasting customer relationships — all in one centralized platform.

                        Experience the efficiency of Dynamics 365 Sales from day one, and easily scale as your business expands and your sales processes evolve.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default DynamicSales_1;
