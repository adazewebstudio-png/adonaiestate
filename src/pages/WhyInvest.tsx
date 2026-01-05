import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Map, Anchor, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyInvest = () => {
    return (
        <>
            <Helmet>
                <title>Why Invest With Adonai | Adonai Estate Limited</title>
                <meta name="description" content="Discover the benefits of investing with Adonai Estate Limited: Litigation-free lands, high appreciation value, and strategic locations." />
            </Helmet>

            <div className="bg-slate-50 min-h-screen">
                {/* Hero Section */}
                <div className="relative bg-primary pt-32 pb-32 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Secure Your Future</span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Why Invest with Adonai?</h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                Secure your future with the most trusted name in Volta Region real estate. We offer more than just land; we offer peace of mind.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="glass-card p-10 hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 rounded-3xl">
                            <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                <TrendingUp className="text-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">High Appreciation Value</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Our estates are strategically located in rapidly developing areas of Ho and Sogakope. With major infrastructure developments nearby (UHAS, Airport), your property value is guaranteed to appreciate significantly over time, yielding high returns on investment.
                            </p>
                        </div>

                        <div className="glass-card p-10 hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 rounded-3xl">
                            <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                <ShieldCheck className="text-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Litigation Free</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We guarantee 100% litigation-free lands. Our lands are properly registered and titled. We perform thorough due diligence before putting any land on the market, giving you absolute peace of mind and eliminating the common land stress in Ghana.
                            </p>
                        </div>

                        <div className="glass-card p-10 hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 rounded-3xl">
                            <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                <Map className="text-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Prime Locations</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                From the serene riverside of Sogakope (Volta Safari City) to the bustling heart of Ho (Airport Golf City), our sites are meticulously chosen for accessibility, beautiful scenery, and proximity to essential amenities like schools, hospitals, and markets.
                            </p>
                        </div>


                        <div className="glass-card p-10 hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 rounded-3xl">
                            <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                <Anchor className="text-gold" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Stable & Secure</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We provide well-planned, gated communities with security in mind. Our estates feature planned road networks and utility provisions, offering a safe and organized environment for you and your family to thrive.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyInvest;
