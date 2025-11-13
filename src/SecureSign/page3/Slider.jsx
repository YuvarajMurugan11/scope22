// import React, { useEffect, useRef, useState } from 'react';
// import './Slider.css';

// const slides = [
//   { text: 'Designed to simplify workflows and approvals.', bg: '#001c4b', color: '#ffffff' },
//   { text: 'Reduces costs by cutting down printing and storage.', bg: '#d9d9d9', color: '#000000' },
//   { text: 'Easy integration with existing business systems.', bg: '#001c4b', color: '#ffffff' },
//   { text: 'Designed for both small businesses and enterprises.', bg: '#d9d9d9', color: '#000000' },
//   { text: 'Your signature, anytime, anywhere.', bg: '#001c4b', color: '#ffffff' },
//   { text: 'Digital signing made simple, secure, and swift.', bg: '#d9d9d9', color: '#000000' },
// ];

// const slidesPerView = 4;
// const totalSlides = slides.length;

// // Map dots to startIndex for your custom ordering
// const dotToStartIndexMap = [5, 0, 1, 2, 3, 4];

// // Clone first slidesPerView slides for infinite effect
// const extendedSlides = [...slides, ...slides.slice(0, slidesPerView)];

// const Slider = () => {
//   const [startIndex, setStartIndex] = useState(5);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const intervalRef = useRef(null);

//   // Slide to next
//   const goToNext = () => {
//     setStartIndex((prev) => prev + 1);
//     setIsTransitioning(true);
//   };

//   // Handle infinite loop jump without animation
//   const handleTransitionEnd = () => {
//     if (startIndex >= totalSlides) {
//       setIsTransitioning(false);
//       setStartIndex(startIndex - totalSlides);
//     }
//   };

//   // On dot click
//   const centerSlideOnClick = (dotIndex) => {
//     const newStartIndex = dotToStartIndexMap[dotIndex];
//     setIsTransitioning(true);
//     setStartIndex(newStartIndex);
//     setIsPlaying(false);
//   };

//   // Autoplay effect
//   useEffect(() => {
//     if (isPlaying) {
//       intervalRef.current = setInterval(goToNext, 4000);
//     } else {
//       clearInterval(intervalRef.current);
//     }
//     return () => clearInterval(intervalRef.current);
//   }, [isPlaying]);

//   // Pause/resume autoplay on hover
//   const stopAutoPlay = () => clearInterval(intervalRef.current);
//   const startAutoPlay = () => {
//     stopAutoPlay();
//     if (isPlaying) intervalRef.current = setInterval(goToNext, 4000);
//   };

//   // Calculate transform with updated gap 5px and padding 40px total
//   const transformValue = `calc(-${startIndex} * (calc((100vw - 40px - 15px) / ${slidesPerView}) + 5px))`;

//   return (
//     <div>
//       <h2 style={{ textAlign: 'center' ,color:"#043da0ff"}}>Scopetree SecureSign is built for cross-industry and multi-departmental use.</h2>
//       <div
//         className="multi-slider-container full-width"
//         onMouseEnter={stopAutoPlay}
//         onMouseLeave={startAutoPlay}
//       >
//         <div
//           className="multi-slider-track"
//           style={{
//             transform: `translateX(${transformValue})`,
//             transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
//           }}
//           onTransitionEnd={handleTransitionEnd}
//         >
//           {extendedSlides.map((slide, index) => (
//             <div
//               className="multi-slide"
//               key={index}
//               style={{ backgroundColor: slide.bg, color: slide.color }}
//             >
//               {slide.text}
//             </div>
//           ))}
//         </div>

//         <div className="slider-controls">
//           <div className="slider-dots">
//             {slides.map((_, dotIndex) => {
//               const activeIndex = dotToStartIndexMap.indexOf(startIndex % totalSlides);
//               return (
//                 <span
//                   key={dotIndex}
//                   className={`dot ${dotIndex === activeIndex ? 'active' : ''}`}
//                   onClick={() => centerSlideOnClick(dotIndex)}
//                 />
//               );
//             })}
//           </div>

//           <button className="play-pause-btn" onClick={() => setIsPlaying((prev) => !prev)}>
//             {isPlaying ? '❚❚' : '▶'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

import React, { useEffect, useRef, useState } from 'react';

import './Slider.css';
 
// Updated slides array with gradient for 1,3,5

const slides = [

  { text: 'Designed to simplify workflows and approvals.', bg: 'linear-gradient(to bottom, #035C75, #000000)', color: '#ffffff' },

  { text: 'Reduces costs by cutting down printing and storage.', bg: '#78788023', color: '#000000' },

  { text: 'Easy integration with existing business systems.', bg: 'linear-gradient(to bottom, #035C75, #000000)', color: '#ffffff' },

  { text: 'Designed for both small businesses and enterprises.', bg: '#78788023', color: '#000000' },

  { text: 'Your signature, anytime, anywhere.', bg: 'linear-gradient(to bottom, #035C75, #000000)', color: '#ffffff' },

  { text: 'Digital signing made simple, secure, and swift.', bg: '#78788023', color: '#000000' },

];
 
const slidesPerView = 4;

const totalSlides = slides.length;
 
// Map dots to startIndex for custom ordering

const dotToStartIndexMap = [5, 0, 1, 2, 3, 4];
 
// Clone first slidesPerView slides for infinite effect

const extendedSlides = [...slides, ...slides.slice(0, slidesPerView)];
 
const Slider = () => {

  const [startIndex, setStartIndex] = useState(5);

  const [isPlaying, setIsPlaying] = useState(true);

  const [isTransitioning, setIsTransitioning] = useState(true);

  const intervalRef = useRef(null);
 
  // Slide to next

  const goToNext = () => {

    setStartIndex((prev) => prev + 1);

    setIsTransitioning(true);

  };
 
  // Handle infinite loop jump without animation

  const handleTransitionEnd = () => {

    if (startIndex >= totalSlides) {

      setIsTransitioning(false);

      setStartIndex(startIndex - totalSlides);

    }

  };
 
  // On dot click

  const centerSlideOnClick = (dotIndex) => {

    const newStartIndex = dotToStartIndexMap[dotIndex];

    setIsTransitioning(true);

    setStartIndex(newStartIndex);

    setIsPlaying(false);

  };
 
  // Autoplay effect

  useEffect(() => {

    if (isPlaying) {

      intervalRef.current = setInterval(goToNext, 4000);

    } else {

      clearInterval(intervalRef.current);

    }

    return () => clearInterval(intervalRef.current);

  }, [isPlaying]);
 
  // Pause/resume autoplay on hover

  const stopAutoPlay = () => clearInterval(intervalRef.current);

  const startAutoPlay = () => {

    stopAutoPlay();

    if (isPlaying) intervalRef.current = setInterval(goToNext, 4000);

  };
 
  // Calculate transform with updated gap 5px and padding 40px total

  const transformValue = `calc(-${startIndex} * (calc((100vw - 40px - 15px) / ${slidesPerView}) + 5px))`;
 
  return (
<div>
<h1 style={{ textAlign: 'center', color: "#035C75", marginBottom: '30px' }}>

        Scopetree SecureSign is built for cross-industry and multi-departmental use.
</h1>
 
      <div

        className="multi-slider-container full-width"

        onMouseEnter={stopAutoPlay}

        onMouseLeave={startAutoPlay}
>
<div

          className="multi-slider-track"

          style={{

            transform: `translateX(${transformValue})`,

            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',

          }}

          onTransitionEnd={handleTransitionEnd}
>

          {extendedSlides.map((slide, index) => (
<div

              className="multi-slide"

              key={index}

              style={{

                background: slide.bg,  // updated from backgroundColor

                color: slide.color,

              }}
>

              {slide.text}
</div>

          ))}
</div>
 
        <div className="slider-controls">
<div className="slider-dots">

            {slides.map((_, dotIndex) => {

              const activeIndex = dotToStartIndexMap.indexOf(startIndex % totalSlides);

              return (
<span

                  key={dotIndex}

                  className={`dot ${dotIndex === activeIndex ? 'active' : ''}`}

                  onClick={() => centerSlideOnClick(dotIndex)}

                />

              );

            })}
</div>
 
          <button className="play-pause-btn" onClick={() => setIsPlaying((prev) => !prev)}>

            {isPlaying ? '❚❚' : '▶'}
</button>
</div>
</div>
</div>

  );

};
 
export default Slider;

 