import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);

  const location = useLocation();
  // Determine if we should use dark text (white background)
  const transparentNavPaths = ['/', '/contact', '/estates', '/insight', '/why-invest', '/subsidiaries'];
  const isTransparentNav = transparentNavPaths.includes(location.pathname);
  const isDarkText = scrolled || !isTransparentNav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
        { name: 'UHAS Florida City', path: '/estates/uhas-florida-city' },
        { name: 'Volta Safari City', path: '/estates/volta-safari-city' },
        { name: 'Leaders City', path: '/estates/leaders-city' },
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
        { name: 'Our Subsidiaries', path: '/subsidiaries' },
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
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src="/logo.jpg"
            alt="Adonai Estate"
            className={`h-10 md:h-12 w-auto rounded-full border-2 transition-colors ${isDarkText ? 'border-primary/10' : 'border-white/10'}`}
          />
          <div className="hidden md:block">
            <h1 className={`text-xl font-bold tracking-tight leading-none transition-colors ${isDarkText ? 'text-gray-900' : 'text-white'}`}>
              ADONAI
            </h1>
            <p className="text-xs text-gold tracking-widest uppercase">Estate Limited</p>
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
          className={`lg:hidden z-50 p-2 ${isDarkText && !isOpen ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center space-y-8 lg:hidden"
            >
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col items-center w-full">
                  {!link.children ? (
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `text-2xl font-bold transition-colors ${isActive ? 'text-gold' : 'text-white'}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ) : (
                    <div className="flex flex-col items-center w-full">
                      <button
                        onClick={() => toggleMobileDropdown(link.name)}
                        className={`text-2xl font-bold transition-colors flex items-center gap-2 ${mobileActiveDropdown === link.name ? 'text-gold' : 'text-white'}`}
                      >
                        {link.name}
                        <ChevronDown size={20} className={`transition-transform duration-200 ${mobileActiveDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {mobileActiveDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col items-center gap-4 mt-4 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <NavLink
                                key={child.name}
                                to={child.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                  `text-lg font-medium transition-colors ${isActive ? 'text-gold' : 'text-gray-400'}`
                                }
                              >
                                {child.name}
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
              <a href="tel:+233599007786" className="btn btn-primary text-lg gap-2 mt-4">
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
