import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Handshake, Search, Scale, FileCheck, Building, Users, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Brokerage = () => {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <Helmet>
                <title>Brokerage Services | Adonai Estate Limited</title>
                <meta name="description" content="Transparent real estate brokerage. We connect buyers and sellers with integrity, ensuring fair deals and smooth transactions." />
            </Helmet>

            <div className="container mx-auto px-4">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-20 text-center"
                >
                    <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Our Services</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Real Estate Brokerage</h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Bridging the gap between buyers and sellers with transparency and trust. We facilitate seamless property transactions across Ghana.
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            title: "For Sellers",
                            icon: Building,
                            desc: "Get the best market value for your property through our extensive marketing network.",
                            list: ["Property Valuation", "Targeted Marketing", "Vetting Buyers"]
                        },
                        {
                            title: "For Buyers",
                            icon: Search,
                            desc: "Find hidden gems and prime deals that match your exact specifications and budget.",
                            list: ["Property Search", "Price Negotiation", "Verification"]
                        },
                        {
                            title: "The Process",
                            icon: Scale,
                            desc: "We mange the entire transaction lifecycle to ensure fairness and legality.",
                            list: ["Offer Management", "Contract Review", "Closing Support"]
                        },
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all group">
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-gray-900">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                            <p className="text-gray-600 mb-6">{item.desc}</p>
                            <ul className="space-y-3">
                                {item.list.map((li, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                        <div className="w-1.5 h-1.5 bg-gold rounded-full"></div> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Banner Section */}
                <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/40 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Global Reach, Local Expertise</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            We don't just list properties; we market them. Our network extends beyond Ghana, connecting local properties with international investors in the diaspora.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur text-sm">
                                <Globe size={16} className="text-gold" /> International Network
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur text-sm">
                                <FileCheck size={16} className="text-gold" /> Verified Listings
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 bg-white text-slate-900 p-8 rounded-2xl max-w-sm w-full shadow-2xl">
                        <h3 className="text-xl font-bold mb-4">Looking to Sell?</h3>
                        <p className="text-gray-600 text-sm mb-6">List your property with us today and get it in front of serious buyers.</p>
                        <Link to="/contact" className="btn btn-primary w-full justify-center">List With Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brokerage;
