import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, FileCheck, Map, ShieldCheck, ArrowRight, Wallet, BadgeCheck, Mail, Phone, MapPin, FileText, Users, Scale, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandSales = () => {
    const processSteps = [
        { icon: Map, title: "Selection", text: "Browse our estates and choose your preferred plot location." },
        { icon: Wallet, title: "Payment", text: "Choose a flexible payment plan that suits your budget." },
        { icon: FileCheck, title: "Documentation", text: "We prepare your indentures and site plans instantly." },
        { icon: ShieldCheck, title: "Ownership", text: "Receive valid documents and take full possession." }
    ];

    const guarantees = [
        "100% Litigation-Free Guarantee",
        "Fast Documentation Process",
        "Properly Demarcated Plots",
        "Underground Drainage Ready",
        "Road Network Infrastructure",
        "Title Registration Support"
    ];

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Land Sales & Registration | Adonai Estate Limited</title>
                <meta name="description" content="Secure litigation-free land with clear documentation. We handle the entire registration process for your peace of mind." />
            </Helmet>

            {/* Premium Hero Section */}
            <section className="relative bg-primary pt-32 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-gold font-bold text-sm uppercase tracking-wider mb-6">
                            <MapPin size={16} />
                            Our Core Service
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif leading-tight">
                            Land Sales &<br />
                            <span className="text-gold">Registration</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                            In a market often plagued by uncertainty, Adonai Estate guarantees peace of mind. We provide <span className="text-gold font-bold">100% litigation-free land</span> and handle the complex documentation process for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/listings" className="btn bg-gold text-primary hover:bg-white hover:text-primary font-bold px-10 py-4 shadow-2xl shadow-gold/30">
                                View Listings
                            </Link>
                            <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="btn bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white hover:text-primary font-bold px-10 py-4">
                                Talk to an Agent
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 bg-slate-50 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {["Litigation-Free", "Fast Processing", "Flexible Payments", "Secure Ownership"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-700 font-bold text-sm md:text-base">
                                <BadgeCheck className="text-gold" size={20} />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Why Choose Us</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-serif">
                                Secure Your Legacy<br />
                                <span className="text-primary">With Confidence</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Buying land is one of the most significant investments you will make. It represents security, wealth, and a legacy for future generations. However, the process can be daunting without the right partner.
                                </p>
                                <p>
                                    At Adonai Estate, we have demystified land ownership. Our lands are meticulously vetted, free from litigation, and correctly demarcated. When you buy from us, you aren't just buying a plot—you are buying <span className="font-bold text-gray-900">certainty</span>.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {guarantees.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-gray-100 hover:border-gold/30 hover:bg-white transition-all"
                                    >
                                        <CheckCircle2 className="text-gold shrink-0" size={20} />
                                        <span className="font-semibold text-gray-800 text-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gold/10 rounded-[3rem] rotate-3"></div>
                            <div className="relative bg-primary rounded-[3rem] p-10 md:p-14 min-h-[500px] flex flex-col justify-center overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

                                <div className="relative z-10">
                                    <Map size={64} className="text-gold mb-8" />
                                    <h3 className="text-3xl font-bold text-white mb-4 font-serif">Prime Locations</h3>
                                    <p className="text-gray-300 text-lg mb-8">Strategic plots in the Volta Region and beyond, ready for development or investment.</p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-white/80">
                                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                                            <span>Ho & Surrounding Areas</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/80">
                                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                                            <span>Accra & Greater Region</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-white/80">
                                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                                            <span>Expanding Nationwide</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Process Section */}
                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">How It Works</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">The Acquisition Process</h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Simple, transparent, and designed with your peace of mind in focus.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative"
                                >
                                    {index < 3 && <div className="hidden lg:block absolute top-12 right-0 w-full h-[2px] bg-gradient-to-r from-gold/50 to-transparent -mr-4 z-0"></div>}
                                    <div className="relative z-10 bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all text-center h-full group">
                                        <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <step.icon size={36} />
                                        </div>
                                        <div className="text-gold font-bold text-sm mb-2">Step {index + 1}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif">
                            Ready to Own Your Plot?
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Don't wait for land to appreciate. <span className="text-gold font-bold">Buy land and wait.</span> Explore our current available estates in the Volta Region.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/estates" className="btn bg-gold text-primary hover:bg-white hover:text-primary font-bold px-10 py-4 shadow-2xl shadow-gold/30">
                                View Available Estates <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="btn bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white hover:text-primary font-bold px-10 py-4 flex items-center justify-center gap-2">
                                <MessageCircle size={18} /> WhatsApp
                            </a>
                            <a href="mailto:richardadaaze@gmail.com" className="btn bg-transparent text-white border border-white/30 hover:bg-white hover:text-primary font-bold px-10 py-4 flex items-center justify-center gap-2">
                                <Mail size={18} /> Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandSales;
