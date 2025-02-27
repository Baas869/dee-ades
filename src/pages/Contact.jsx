import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram,
  FaWhatsapp 
} from 'react-icons/fa';

function ContactPage() {
  return (
    <section id="contact" className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[rgba(40,58,90,0.9)] mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Info & Map in one card */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg 
              border-b-2 md:border-b-0 md:border-l-2"
            style={{ borderColor: 'rgba(40,58,90,0.9)' }}
          >
            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[rgba(40,58,90,0.9)] mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-700 mb-6">
                We would love to hear from you. Reach out using the details below.
              </p>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-[rgba(40,58,90,0.9)] mr-3" size={24} />
                <span className="text-gray-700">123 Main Street, City, Country</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-[rgba(40,58,90,0.9)] mr-3" size={24} />
                <span className="text-gray-700">contact@deeades.com</span>
              </div>
              <div className="flex items-center mb-6">
                <FaPhone className="text-[rgba(40,58,90,0.9)] mr-3" size={24} />
                <span className="text-gray-700">+123 456 7890</span>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="#hero" 
                  aria-label="Facebook"
                  className="text-[rgba(40,58,90,0.9)] hover:text-[rgba(40,58,90,1)] transition"
                >
                  <FaFacebook size={28} />
                </a>
                <a 
                  href="#hero" 
                  aria-label="Twitter"
                  className="text-[rgba(40,58,90,0.9)] hover:text-[rgba(40,58,90,1)] transition"
                >
                  <FaTwitter size={28} />
                </a>
                <a 
                  href="#hero" 
                  aria-label="Instagram"
                  className="text-[rgba(40,58,90,0.9)] hover:text-[rgba(40,58,90,1)] transition"
                >
                  <FaInstagram size={28} />
                </a>
                <a 
                  href="mailto:contact@deeades.com" 
                  aria-label="Email"
                  className="text-[rgba(40,58,90,0.9)] hover:text-[rgba(40,58,90,1)] transition"
                >
                  <FaEnvelope size={28} />
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  aria-label="WhatsApp"
                  className="text-[rgba(40,58,90,0.9)] hover:text-[rgba(40,58,90,1)] transition"
                >
                  <FaWhatsapp size={28} />
                </a>
              </div>
            </div>
            {/* Google Map */}
            <div>
              <iframe 
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.9499138485766!2d-122.08424968530535!3d37.4220659798259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0a9e4f88f29%3A0x88f7c4e57a8c3b0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614971025483!5m2!1sen!2sus" 
                className="w-full h-64 border-0 rounded-lg shadow-md"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          {/* Right Column: Contact Form */}
          <div
            className="bg-white p-8 rounded-lg shadow-lg 
              border-t-2 md:border-t-0 md:border-r-2"
            style={{ borderColor: 'rgba(40,58,90,0.9)' }}
          >
            <h3 className="text-2xl font-semibold text-[rgba(40,58,90,0.9)] mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[rgba(40,58,90,0.9)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[rgba(40,58,90,0.9)]"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-[rgba(40,58,90,0.9)]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgba(40,58,90,0.9)] text-white py-2 rounded-full font-semibold hover:bg-[rgba(40,58,90,1)] transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
