import React from 'react';
import HeroImg from '../assets/cta-bg.jpg';

function AboutPage() {
  return (
    <section id="about" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImg})` }}
      ></div>
      {/* Overlay with rgba(40, 58, 90, 0.9) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(40, 58, 90, 0.9)' }}
      ></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">About Dee Ades'</h1>
        <p className="text-lg md:text-2xl text-white max-w-2xl mb-8">
          We specialize in selling nice, fitting, and affordable jalabias that blend timeless elegance with modern style. Our collection is crafted to make you look and feel your best for any occasion, all at a price you'll love.
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Order Now
        </button>
      </div>
    </section>
  );
}

export default AboutPage;
