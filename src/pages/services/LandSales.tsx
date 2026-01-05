import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, FileCheck, Map, ShieldCheck, ArrowRight, Wallet, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandSales = () => {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <Helmet>
                <title>Land Sales & Registration | Adonai Estate Limited</title>
                <meta name="description" content="Secure litigation-free land with clear documentation. We handle the entire registration process for your peace of mind." />
            </Helmet>

            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-20 text-center"
                >
                    <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Our Services</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Land Sales & Registration</h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        In a market often plagued by uncertainty, Adonai Estate guarantees peace of mind. We provide 100% litigation-free land and handle the complex documentation process for you.
                    </p>
                </motion.div>

                {/* Main Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure Your Legacy</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Buying land is one of the most significant investments you will make. It represents security, wealth, and a legacy for future generations. However, the process can be daunting without the right partner.
                            </p>
                            <p>
                                At Adonai Estate, we have demystified land ownership. Our lands are meticulously vetted, free from litigation, and correctly demarcated. When you buy from us, you aren't just buying a plot; you are buying certainty.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Litigation-Free Guarantee",
                                "Fast Documentation",
                                "Well-Demarcated Plots",
                                "Serviced with Utilities"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-gray-100">
                                    <BadgeCheck className="text-gold shrink-0" size={20} />
                                    <span className="font-semibold text-gray-800 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold/10 rounded-[3rem] rotate-3"></div>
                        <div className="relative bg-slate-900 rounded-[3rem] p-8 min-h-[400px] flex items-center justify-center overflow-hidden">
                            {/* Abstract visual */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/20 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

                            <div className="text-center relative z-10">
                                <Map size={80} className="text-white mx-auto mb-6 opacity-80" />
                                <h3 className="text-2xl font-bold text-white mb-2">Prime Locations</h3>
                                <p className="text-gray-400">Volta Region & Beyond</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Process */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Acquisition Process</h2>
                        <p className="text-gray-500">How we make land ownership simple for you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Map, title: "1. Selection", text: "Browse our available estates and choose your preferred plot location." },
                            { icon: Wallet, title: "2. Payment", text: "Choose a flexible payment plan that suits your budget." },
                            { icon: FileCheck, title: "3. Documentation", text: "We prepare and process your indentures and site plans instantly." },
                            { icon: ShieldCheck, title: "4. Ownership", text: "Receive your valid documents and take full possession of your land." }
                        ].map((step, index) => (
                            <div key={index} className="relative">
                                {index < 3 && <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-gray-100 -mr-1/2 z-0"></div>}
                                <div className="relative z-10 bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all text-center h-full">
                                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary border-4 border-white shadow-sm">
                                        <step.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-primary text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Own Your Plot?</h2>
                        <p className="text-gray-300 mb-10 text-lg">
                            Don't wait for land to appreciate. Buy land and wait. Explore our current available estates in the Volta Region.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/estates" className="btn bg-gold text-primary border-none hover:bg-white hover:text-primary font-bold px-8">
                                View Available Estates
                            </Link>
                            <Link to="/contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary px-8">
                                Talk to an Agent
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandSales;
