import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      id="contact"
      className="text-white py-8"
      style={{ backgroundColor: 'rgba(40, 58, 90, 0.9)' }}
    >
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2025 DeeADEs. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#hero" aria-label="Facebook" className="hover:text-gray-300 transition">
            <FaFacebook size={28} />
          </a>
          <a href="#hero" aria-label="Twitter" className="hover:text-gray-300 transition">
            <FaTwitter size={28} />
          </a>
          <a href="#hero" aria-label="Instagram" className="hover:text-gray-300 transition">
            <FaInstagram size={28} />
          </a>
          <a href="mailto:contact@deeades.com" aria-label="Email" className="hover:text-gray-300 transition">
            <FaEnvelope size={28} />
          </a>
          <a href="#hero" aria-label="WhatsApp" className="hover:text-gray-300 transition">
            <FaWhatsapp size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
