import React, { useState, useEffect } from 'react';
import heroBg1 from '../assets/hero-bg-1.jpg';
import heroBg2 from '../assets/hero-bg-2.jpg';
import heroBg3 from '../assets/hero-bg-3.jpg';
import heroBg4 from '../assets/hero-bg-4.jpg';

const slides = [
  {
    image: heroBg1,
    title: 'Welcome to DeeADEs',
    description: 'Discover our wonderful and affordable jalabias!',
    buttonText: 'Get Started',
  },
  {
    image: heroBg2,
    title: 'Savor the Tradition',
    description: 'Delight in the authentic flavor of our signature jalabias, crafted with time-honored recipes and passion.',
    buttonText: 'Shop Now',
  },
  {
    image: heroBg3,
    title: 'Taste the Legacy',
    description: 'Every bite celebrates heritage and brings families together in pure delight.',
    buttonText: 'Discover More',
  },
  {
    image: heroBg4,
    title: 'Luxury Within Reach',
    description: 'Indulge in premium quality jalabias that blend exquisite taste with unbeatable value.',
    buttonText: 'Order Now',
  },  
];

const animations = [
  'animate-slide-in-left',
  'animate-slide-in-right',
  'animate-squeeze',
  'animate-zoom-in',
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);

  // Cycle slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // Clear previous slide after the 2-second animation finishes
  useEffect(() => {
    if (prevSlide !== null) {
      const timeout = setTimeout(() => {
        setPrevSlide(null);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [prevSlide]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Render the previous slide (if any) with a fade-out */}
      {prevSlide !== null && (
        <div
          className="absolute inset-0 bg-cover bg-center fade-out"
          style={{ backgroundImage: `url(${slides[prevSlide].image})` }}
        ></div>
      )}
      {/* Render the current slide with a custom animation */}
      <div
        className={`absolute inset-0 bg-cover bg-center ${animations[currentSlide % animations.length]}`}
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      ></div>

      {/* Transparent black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Write-Up Content centered with matching animation */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
        <div
          key={currentSlide}
          className={`${animations[currentSlide % animations.length]} transition-opacity duration-2000`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 container">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-2xl mb-8 container">
            {slides[currentSlide].description}
          </p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            {slides[currentSlide].buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
