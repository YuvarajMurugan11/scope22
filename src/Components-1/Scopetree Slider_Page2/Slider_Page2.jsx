import React, { useState, useEffect } from "react";
import "./Slider_Page2.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const slides = [
  {
    title: "Scopetree the complete support System for your Business",
    description:
      "Run your entire business on Microsoft Business Central with our unified cloud software, seamlessly integrated with Power BI for real-time insights and Power Apps for customized business solutions. Break down silos, optimize operations, and empower your teams to drive efficiency and growth.",
    subheading: "The Minds Driving Innovation",
    highlight: "Experts who understand your business and your goals, ensuring tailored solutions.",
  },
  {
    title: "Scopetree the complete support System for your Business",
    description:
      "Run your entire business on Microsoft Business Central with our unified cloud software, seamlessly integrated with Power BI for real-time insights and Power Apps for customized business solutions. Break down silos, optimize operations, and empower your teams to drive efficiency and growth.",
    subheading: "The Minds Driving Innovation",
    highlight:
      "Our team is proficient in Agile and Waterfall frameworks, ensuring flexibility to match your processes.",
  },
  {
    title: "Scopetree the complete support System for your Business",
    description:
      "Run your entire business on Microsoft Business Central with our unified cloud software, seamlessly integrated with Power BI for real-time insights and Power Apps for customized business solutions. Break down silos, optimize operations, and empower your teams to drive efficiency and growth.",
    subheading: "The Minds Driving Innovation",
    highlight:
      "From finance to manufacturing, we work with top ISVs to serve diverse business needs.",
  },
];

export default function Slider_Page2() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === slides.length - 1 ? 0 : current + 1);

  const prevSlide = () =>
    setCurrent(current === 0 ? slides.length - 1 : current - 1);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  // Re-trigger fade-up for subheading and highlight only
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".carousel-subheading, .carousel-highlight"
    );

    elements.forEach((el) => {
      el.style.animation = "none";
      el.offsetHeight; // trigger reflow
      el.style.animation = ""; // restart animation
    });
  }, [current]);

  return (
    <div className="carousel-wrapper">
     
      <h1 className="carousel-title">{slides[current].title}</h1>
      <p className="carousel-desc">{slides[current].description}</p>
      <h2 className="carousel-subheading">
        <b>{slides[current].subheading}</b>
      </h2>
      <p className="carousel-highlight">{slides[current].highlight}</p>

      <button onClick={prevSlide} className="carousel-arrow left">
        &#10094;
      </button>
      <button onClick={nextSlide} className="carousel-arrow right">
        &#10095;
      </button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`carousel_dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
