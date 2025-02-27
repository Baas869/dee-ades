import React, { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
import NairaIcon from '../assets/svg/Naira';
import productsData from '../apis/ProductData';

function FeaturedJalabias() {
  // Show only 10 products initially.
  const [visibleCount, setVisibleCount] = useState(10);
  const [modalImage, setModalImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Create an array of unique categories, including an "All" option
  const categories = ["All", ...Array.from(new Set(productsData.map(product => product.category)))];

  // Filter products based on the active category
  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter(product => product.category === activeCategory);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount(filteredProducts.length);
  };

  const showLess = () => {
    setVisibleCount(10);
  };

  return (
    <section id="products" className="pb-4 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-4 text-blue-900">Featured Jalabias</h3>
        {/* Mini Navbar for Categories */}
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(10); // Reset the visible count when changing category
              }}
              className={`mx-2 px-4 py-2 rounded-full transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-[rgba(40,58,90,0.9)] text-white"
                  : "bg-white text-[rgba(40,58,90,0.9)] border border-[rgba(40,58,90,0.9)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Image at the top */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover mb-4 transition-transform duration-300 hover:scale-105"
              />
              {/* Product Details */}
              <div className="flex flex-col h-full">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h4>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center text-gray-600 mb-2">
                  <NairaIcon size={28} className="mr-1" />
                  <span>{product.price}</span>
                </div>
                {/* Buttons below the price */}
                <div className="flex justify-between items-center mt-2">
                  <button
                    onClick={() => setModalImage(product.image)}
                    className="text-gray-800 hover:text-gray-600 transition"
                    aria-label="View Image"
                  >
                    <FaEye size={32} />
                  </button>
                  <button
                    className="bg-[rgba(40,58,90,0.9)] text-white px-4 py-2 rounded-full font-semibold hover:bg-[rgba(40,58,90,1)] transition"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Toggle Button */}
        {filteredProducts.length > 10 && (
          <div className="flex justify-center mt-8">
            {visibleCount === filteredProducts.length ? (
              <button
                onClick={showLess}
                className="border border-blue-900 bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Show Less
              </button>
            ) : (
              <button
                onClick={showMore}
                className="border border-blue-900 bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                See More...
              </button>
            )}
          </div>
        )}
      </div>
      {/* Modal for full view image */}
      {modalImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative">
            <img src={modalImage} alt="Full view" className="max-w-full max-h-screen" />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-0 right-0 m-4 text-white hover:text-gray-300 transition"
              aria-label="Close Image"
            >
              <FaTimes size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedJalabias;
