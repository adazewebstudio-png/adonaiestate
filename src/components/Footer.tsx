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

                    {/* Accreditations */}
                    <div className="mt-8">
                        <span className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-3 block">Member of:</span>
                        <div className="flex items-center gap-3">
                            <a href="http://gredaghana.org/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg h-12 w-auto flex items-center justify-center hover:scale-105 transition-transform">
                                <img src="/images/partners/greda-logo.jpg" alt="GREDA Member" className="h-full w-auto object-contain" />
                            </a>
                            <a href="https://vrared.org" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-lg h-12 w-auto flex items-center justify-center hover:scale-105 transition-transform">
                                <img src="/images/partners/vrared-logo.jpg" alt="VRARED Member" className="h-full w-auto object-contain" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                    <ul className="space-y-4">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Our Estates', path: '/estates' },
                            { name: 'Listings', path: '/listings' },
                            { name: 'Sell Your Land', path: '/sell-land' },
                            { name: 'Insight', path: '/insight' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Contact', path: '/contact' }
                        ].map((item) => (
                            <li key={item.name}>
                                <Link to={item.path} className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-2">
                                    <ArrowRight size={12} className="text-gold" />
                                    {item.name}
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
                                <a href="tel:+233248629946" className="hover:text-white transition-colors">+233 24 862 9946</a>
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

            <div className="border-t border-gray-800 pt-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-center md:text-left">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} Adonai Estate Limited. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs">
                            Built by <a href="https://adazewebstudio.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors font-bold">Adaze Web Studio</a>
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
                        <Link to="/privacy-policy" className="text-gray-500 hover:text-gold text-xs transition-colors whitespace-nowrap">Privacy Policy</Link>
                        <Link to="/terms-of-use" className="text-gray-500 hover:text-gold text-xs transition-colors whitespace-nowrap">Terms of Use</Link>
                        <Link to="/cookie-policy" className="text-gray-500 hover:text-gold text-xs transition-colors whitespace-nowrap">Cookie Policy</Link>
                        <Link to="/aml-kyc-policy" className="text-gray-500 hover:text-gold text-xs transition-colors whitespace-nowrap">AML & KYC Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
