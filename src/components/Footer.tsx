import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Column */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <img src="/logo.jpg" alt="Adonai Estate" className="h-10 w-auto rounded-full border-2 border-gray-700" />
                        <div>
                            <h3 className="text-xl font-bold text-white leading-none">ADONAI</h3>
                            <p className="text-xs text-gold tracking-widest uppercase">Estate Limited</p>
                        </div>
                    </div>
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                        Helping solve Ghana's housing deficit realistically and inspire confidence in land and home ownership.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://web.facebook.com/AdonaiEstateLtd" className="p-2 bg-gray-800 rounded-full hover:bg-gold hover:text-white transition-colors text-gray-300">
                            <Facebook size={18} />
                        </a>
                        <a href="mailto:info@adonaiestateltd.com" className="p-2 bg-gray-800 rounded-full hover:bg-gold hover:text-white transition-colors text-gray-300">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                    <ul className="space-y-4">
                        {['Home', 'Our Estates', 'Insight', 'About Us', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                                    <ArrowRight size={12} className="text-gold" />
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
                    <ul className="space-y-4">
                        {[
                            { name: 'Land Sales & Registration', path: '/services/land-sales' },
                            { name: 'Consultancy', path: '/services/consultancy' },
                            { name: 'Property Management', path: '/services/property-management' },
                            { name: 'Brokerage', path: '/services/brokerage' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-400 text-sm">
                            <MapPin size={18} className="text-gold shrink-0 mt-1" />
                            <a href="https://www.google.com/maps/search/?api=1&query=Adonai+Estate+Limited,+Ho" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                Ho, Volta Region, Ghana
                            </a>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-sm">
                            <Phone size={18} className="text-gold shrink-0" />
                            <div className="flex flex-col">
                                <a href="tel:+233599007786" className="hover:text-white transition-colors">+233 599 007 786</a>
                                <a href="tel:+233362000350" className="hover:text-white transition-colors">+233 362 000 350</a>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 text-gray-400 text-sm">
                            <Mail size={18} className="text-gold shrink-0" />
                            <a href="mailto:info@adonaiestateltd.com" className="hover:text-white transition-colors">info@adonaiestateltd.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Adonai Estate Limited. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
