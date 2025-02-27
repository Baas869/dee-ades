import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import DeeAdesLogo from '../assets/dee_ades_logo-removebg-preview.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  const handleMenuOpen = () => setIsMobileMenuOpen(true);
  const handleMenuClose = () => setIsMobileMenuOpen(false);

  // Use absolute paths for HashLink (starting with "/")
  const navLinks = [
    { href: '/#hero', label: 'Home', id: 'hero' },
    { href: '/#about', label: 'About', id: 'about' },
    { href: '/#products', label: 'Features', id: 'products' },
    { href: '/#contact', label: 'Contact', id: 'contact' },
  ];

  const linkClasses = (id) =>
    `transition-all duration-200 px-3 py-1 rounded-full ${
      activeLink === id
        ? 'bg-white text-purple-600'
        : 'text-white hover:bg-white hover:text-purple-600'
    }`;

  return (
    <>
      <header
        className="sticky top-0 z-50 text-white p-4 py-1"
        style={{ backgroundColor: 'rgba(40, 58, 90, 0.9)' }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <HashLink smooth to="/#hero" onClick={() => setActiveLink('hero')}>
              <img
                src={DeeAdesLogo}
                alt="Logo"
                className="h-16 w-auto transition-transform transform hover:scale-110"
              />
            </HashLink>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <HashLink
                    smooth
                    to={link.href}
                    className={linkClasses(link.id)}
                    onClick={() => setActiveLink(link.id)}
                  >
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={handleMenuOpen} aria-label="Open mobile menu">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
        style={{ backgroundColor: 'rgba(40, 58, 90, 0.9)' }}
      >
        <div className="p-4 flex justify-end">
          <button onClick={handleMenuClose} aria-label="Close mobile menu">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-8">
          <ul className="flex flex-col space-y-6 pl-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <HashLink
                  smooth
                  to={link.href}
                  className={linkClasses(link.id)}
                  onClick={() => {
                    setActiveLink(link.id);
                    handleMenuClose();
                  }}
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
