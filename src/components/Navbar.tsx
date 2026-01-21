import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeaderStyle } from '../contexts/HeaderContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  const { isTransparent } = useHeaderStyle();

  const location = useLocation();
  const currentPath = location.pathname;

  // Manual fallback for homepage if not explicitly set
  const isTransparentNav = isTransparent || (currentPath === '/' && !scrolled);
  const isDarkText = scrolled || !isTransparentNav;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Our Estates',
      path: '/estates',
      children: [
        { name: 'All Estates', path: '/estates' },
        { name: 'Airport Golf City', path: '/estates/airport-golf-city' },
        { name: 'Millennium City', path: '/estates/millennium-city' },
        { name: 'UHAS Florida City', path: '/estates/uhas-florida-city' },
        { name: 'Volta Safari City', path: '/estates/volta-safari-city' },
        { name: 'Leaders City', path: '/estates/leaders-city' },
      ]
    },
    { name: 'Listings', path: '/listings' },
    {
      name: 'Services',
      path: '/services',
      children: [
        { name: 'All Services', path: '/services' },
        { name: 'Land Sales & Registration', path: '/services/land-sales' },
        { name: 'Property Management', path: '/services/property-management' },
        { name: 'Brokerage', path: '/services/brokerage' },
        { name: 'Consultancy', path: '/services/consultancy' },
      ]
    },
    {
      name: 'Insights',
      path: '/insight',
      children: [
        { name: 'Insights & News', path: '/insight' },
        { name: 'Why Invest With Adonai?', path: '/why-invest' },
      ]
    },
    {
      name: 'About Us',
      path: '/about',
      children: [
        { name: 'Who We Are', path: '/about' },
        { name: 'Founder & CEO', path: '/about/ceo' },
        { name: 'Our Subsidiaries', path: '/subsidiaries' },
        { name: 'Gallery', path: '/gallery' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const handleMouseEnter = (name: string) => {
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (name: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === name ? null : name);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isDarkText ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50">
            <img
              src="/logo.jpg"
              alt="Adonai Estate"
              className={`h-10 md:h-12 w-auto rounded-full border-2 transition-colors ${isDarkText ? 'border-primary/10' : 'border-white/10'}`}
            />
            <div className="flex flex-col">
              <h1 className={`text-lg md:text-xl font-bold tracking-tight leading-none transition-colors ${isDarkText ? 'text-gray-900' : 'text-white'}`}>
                ADONAI
              </h1>
              <p className="text-[10px] md:text-xs text-gold tracking-widest uppercase font-semibold">Estate Limited</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.children && handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center gap-1">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-bold transition-colors hover:text-gold flex items-center gap-1 ${isActive && !link.children ? 'text-gold' : (isDarkText ? 'text-gray-900' : 'text-white/90')
                      }`
                    }
                    end={link.path === '/'}
                  >
                    {link.name}
                  </NavLink>
                  {link.children && (
                    <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''} ${isDarkText ? 'text-gray-600' : 'text-white/70'}`} />
                  )}
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 py-2"
                    >
                      {link.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm transition-colors hover:bg-slate-50 ${isActive ? 'text-gold font-bold bg-slate-50' : 'text-gray-700 hover:text-primary'
                            }`
                          }
                          onClick={handleMouseLeave}
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <a href="tel:+233599007786" className="btn btn-primary text-sm gap-2">
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden z-50 p-2 transition-colors ${isOpen
              ? 'opacity-0 pointer-events-none'
              : (isDarkText ? 'text-gray-900' : 'text-white')
              }`}
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer - Outside the nav to prevent layout/scroll inheritance issues */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden">
            {/* Backshadow overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col"
            >
              {/* Header with logo and close */}
              <div className="p-6 flex items-center justify-between border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                  <img src="/logo.jpg" alt="Logo" className="h-8 rounded-full" />
                  <span className="text-primary font-bold font-serif text-lg tracking-tight uppercase">Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-primary/5 p-2 rounded-xl text-primary hover:bg-primary/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name} className="space-y-1">
                    {!link.children ? (
                      <NavLink
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center px-4 py-3.5 rounded-2xl text-[17px] font-bold transition-all duration-200 ${isActive
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-primary hover:bg-primary/5 active:scale-95'
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    ) : (
                      <div className="space-y-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleMobileDropdown(link.name);
                          }}
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-[17px] font-bold transition-all duration-200 ${mobileActiveDropdown === link.name
                            ? 'bg-primary/5 text-primary'
                            : 'text-primary hover:bg-primary/5 active:scale-95'
                            }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${mobileActiveDropdown === link.name ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {mobileActiveDropdown === link.name && (
                          <div className="ml-4 pl-4 border-l-2 border-gold space-y-1 mt-1 pb-2">
                            {link.children.map((child) => (
                              <NavLink
                                key={child.name}
                                to={child.path}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsOpen(false);
                                }}
                                className={({ isActive }) =>
                                  `block px-4 py-3 rounded-xl text-sm font-bold transition-all touch-manipulation ${isActive
                                    ? 'text-gold bg-gold/5'
                                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                                  }`
                                }
                              >
                                {child.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Footer with Call CTA */}
              <div className="p-6 border-t border-gray-100 shrink-0">
                <a
                  href="tel:+233599007786"
                  className="w-full h-14 bg-primary text-white flex items-center justify-center gap-3 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 active:scale-95 transition-transform"
                >
                  <Phone size={20} fill="currentColor" />
                  <span>Call Us Today</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
