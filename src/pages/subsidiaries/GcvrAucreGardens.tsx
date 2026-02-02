import React, { useState } from 'react';
import SEO from '../../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, X, Calendar } from 'lucide-react';

const GcvrAucreGardens = () => {
    const [showContactModal, setShowContactModal] = useState(false);

    return (
        <>
            <SEO
                title="GCVR/AUCRE GARDENS | Scenic Restaurant & Event Centre"
                description="GCVR/AUCRE GARDENS is a scenic garden restaurant and event centre located beside Adonai University (AUCRE). Perfect for dining and social gatherings."
                pathname="/subsidiaries/gcvr-aucre-gardens"
                image="/images/gcvr/gcvr_exterior_day.jpg"
            />

            <div className="pt-32 pb-20 bg-[#fafafa] min-h-screen">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        {/* Logo / Hero Image Area */}
                        <div className="w-48 h-48 mx-auto mb-10 overflow-hidden rounded-full border-4 border-gold shadow-2xl bg-white p-2">
                            <img src="/gcvr_aucre_logo.jpg" alt="GCVR/AUCRE GARDENS Logo" className="w-full h-full object-cover rounded-full" />
                        </div>

                        {/* Status Badge */}
                        <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-green-200">
                            Now Operating
                        </span>

                        {/* Title & Headline */}
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">GCVR/AUCRE GARDENS</h1>
                        <p className="text-xl md:text-2xl text-gold font-medium mb-8">Dining • Events • Relaxation</p>

                        {/* Main Description */}
                        <div className="max-w-3xl mx-auto mb-16 space-y-6">
                            <p className="text-xl text-gray-600 leading-relaxed">
                                <strong>GCVR/AUCRE GARDENS</strong> is Ho's premier garden lifestyle destination. Nestled right beside the Adonai University College of Research and Entrepreneurship (AUCRE), we offer a serene escape from the city bustle without leaving town.
                            </p>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Whether you are looking for a quiet spot for lunch, a vibrant atmosphere for evening drinks, or a spacious venue for your special events, our open-air garden setting provides the perfect backdrop. We combine nature's tranquility with culinary excellence.
                            </p>
                        </div>

                        {/* Detailed Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-6 text-2xl">🌱</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Scenic Ambiance</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Relax in our beautifully landscaped gardens. The open-air design ensures fresh air and a connection to nature, making every casual outing feel like a retreat.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 text-2xl">🍲</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Exquisite Dining</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    From local Ghanaian favorites to continental dishes, our kitchen serves up flavor. Pair your meal with our wide selection of drinks from our fully stocked bar.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 text-2xl">🎉</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Events & Entertainment</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We host live football matches on big screens, wedding receptions, and birthday parties. The spacious layout is perfect for social gatherings of any size.
                                </p>
                            </div>
                        </div>

                        {/* Image Gallery Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 font-serif">A Glimpse of the Experience</h2>
                            <p className="text-gray-500">Day or night, the vibe is always right.</p>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/gcvr/gcvr_exterior_day.jpg" alt="GCVR Exterior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/gcvr/gcvr_night_vibes.jpg" alt="Night Vibes" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/gcvr/gcvr_dining.jpg" alt="Dining Experience" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/gcvr/gcvr_pathway.jpg" alt="Garden Pathway" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/gcvr/gcvr_night_football.jpg" alt="Live Match Nights" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group relative">
                                <img src="/images/gcvr/gcvr_delivery.jpg" alt="Delivery Service" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end h-full">
                                    <p className="text-white font-bold text-sm">Can't make it here?</p>
                                    <p className="text-gold font-bold text-lg">Order via Hubtel App</p>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 border border-gray-100 shadow-lg mb-12">
                            <h3 className="text-gray-900 font-bold mb-2 flex justify-center items-center gap-2">
                                <span className="text-gold">📍</span> Location
                            </h3>
                            <p className="text-gray-600">
                                Beside Adonai University College of Research and Entrepreneurship (AUCRE), Ho.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setShowContactModal(true)}
                                className="btn btn-primary px-10 py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                            >
                                <Calendar size={18} />
                                Book a Table / Event
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contact Modal */}
            <AnimatePresence>
                {showContactModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm"
                        onClick={() => setShowContactModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] p-8 max-w-sm w-full shadow-2xl relative"
                        >
                            <button
                                onClick={() => setShowContactModal(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                                    <Calendar size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Book Your Spot</h3>
                                <p className="text-gray-500 mt-2">Reach out to us directly to confirm your reservation.</p>
                            </div>

                            <div className="space-y-4">
                                <a
                                    href="tel:+233599739942"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-gold hover:bg-gold/5 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 group-hover:text-gold">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Call Us</p>
                                        <p className="text-gray-900 font-bold">+233 59 973 9942</p>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/233596352462"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-all group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#25D366] shadow-sm flex items-center justify-center text-white">
                                        <MessageSquare size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-green-600/70 uppercase tracking-wider">WhatsApp</p>
                                        <p className="text-gray-900 font-bold">+233 59 635 2462</p>
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default GcvrAucreGardens;
