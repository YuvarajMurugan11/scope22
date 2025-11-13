import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Slider.css';
import OfficeIconsGrid from '../OfficeIconsGrid/OfficeIconsGrid';
import SecureSign_shadow from '../../assets/SecureSign_shadow.png';

const slides = [
  {
    title: 'Your Partner in Digital Transformation',
    description:
      'Empower your business with innovative Microsoft digital solutions to drive productivity, scalability, and customer satisfaction.',
    button: true,
    buttonText: 'Contact Now',
    buttonLink: '/contact', // 👈 link for Contact Now
    gradientClass: 'slide1',
  },
  {
    title: 'SecureSign – Sign Smarter, Sign Securely',
    description:
      'Sign and share documents anytime with secure, legally valid digital signatures.',
    button: false,
    showLearnMore: true,
    learnMoreLink: '/securesign', // 👈 link for Learn More
    gradientClass: 'slide2',
    image: SecureSign_shadow,
  },
  {
    title: 'Empowering Your Digital Transformation',
    description:
      'We design and develop sleek, scalable web and mobile apps that drive results and elevate your digital presence.',
    button: true,
    buttonText: 'Contact Now',
    buttonLink: '/contact', // 👈 another example link
    gradientClass: 'slide3',
    images: [
      'src/assets/mobile_dev.png',
      'src/assets/web_dev.png',
    ],
  },
];

export default function Slider() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedSlides, setAnimatedSlides] = useState([]);

  const toggleAutoplay = () => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    if (isPlaying) swiper.autoplay.stop();
    else swiper.autoplay.start();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="slider-wrapper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={-1}
        speed={1200}
        slidesPerView={1}
        loop
        autoplay={{ delay: 7000 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        onTransitionEnd={(swiper) => {
          const currentSlide = swiper.slides[swiper.activeIndex];
          const slideIndex = swiper.realIndex;

          if (!animatedSlides.includes(slideIndex)) {
            currentSlide
              .querySelectorAll('.slide2-image, .slide3-image')
              .forEach((img) => {
                img.classList.add('animated');
              });
            setAnimatedSlides((prev) => [...prev, slideIndex]);
          }
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`slide-container ${slide.gradientClass}`}>
              <div className="slide-content">
                <h2 className="slide-content_heading">{slide.title}</h2>
                <p className="slide-content_Para">{slide.description}</p>

                {slide.button && (
                  <a
                    href={slide.buttonLink}
                    className="slide-content_button"
                  >
                    {slide.buttonText || 'Learn More'}
                  </a>
                )}

                {slide.showLearnMore && (
                  <a
                    href={slide.learnMoreLink}
                    className="slide-content_button learn-more-btn"
                  >
                    Learn More
                  </a>
                )}
              </div>

              {/* Slide 1 Icons */}
              {slide.gradientClass === 'slide1' && (
                <div className="slide-icons-right">
                  <OfficeIconsGrid />
                </div>
              )}

              {/* Slide 2 single image */}
              {slide.image && (
                <div className="slide-image-right">
                  <img
                    src={slide.image}
                    alt="Slide Illustration"
                    className="slide2-image"
                  />
                </div>
              )}

              {/* Slide 3 multiple images */}
              {slide.images && (
                <div className="slide-images-right">
                  {slide.images.map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={`Slide 3 Image ${i + 1}`}
                      className="slide3-image"
                    />
                  ))}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Controls */}
      <div className="custom-controls">
        <button
          onClick={toggleAutoplay}
          className="control-button control-button-playbutton"
          style={{ fontSize: '20px', borderRadius: '50%' }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <button
          onClick={() => swiperRef.current.slidePrev(1200)}
          className="control-button"
          style={{ fontSize: '18px', fontWeight: '100' }}
        >
          &#10094;
        </button>

        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot1 ${i === activeIndex ? 'active' : ''}`}
            onClick={() => swiperRef.current.slideToLoop(i, 1200)}
          />
        ))}

        <button
          onClick={() => swiperRef.current.slideNext(1200)}
          className="control-button"
          style={{ fontSize: '18px', fontWeight: '100' }}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
