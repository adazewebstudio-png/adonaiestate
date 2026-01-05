import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, LineChart, Building, PieChart, TrendingUp, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const Consultancy = () => {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <Helmet>
                <title>Real Estate Consultancy | Adonai Estate Limited</title>
                <meta name="description" content="Expert real estate advisory services. We guide you through acquisition, development planning, and investment strategies." />
            </Helmet>

            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-20 text-center"
                >
                    <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Our Services</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Real Estate Consultancy</h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        In a dynamic market, information is power. We provide the expert insights you need to make profitable, risk-free real estate decisions.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
                            <LineChart size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Investment Analysis</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We analyze market trends, location potential, and ROI projections to ensure your real estate investment yields maximum returns over time.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-gray-700 font-medium"><CheckCircle2 size={16} className="text-blue-500" /> Market Research</li>
                            <li className="flex items-center gap-2 text-sm text-gray-700 font-medium"><CheckCircle2 size={16} className="text-blue-500" /> ROI Forecasting</li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8 text-green-600">
                            <Building size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Advisory</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Planning a commercial or residential project? We offer strategic guidance on land use, zoning regulations, and project feasibility.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-gray-700 font-medium"><CheckCircle2 size={16} className="text-green-500" /> Feasibility Studies</li>
                            <li className="flex items-center gap-2 text-sm text-gray-700 font-medium"><CheckCircle2 size={16} className="text-green-500" /> Zoning & Permits</li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-8 text-yellow-600">
                            <Users size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Acquisition Support</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Navigate the complexities of buying land with confidence. We provide legal and procedural support to ensure a scam-free transaction.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm text-gray-700 font-medium"><CheckCircle2 size={16} className="text-yellow-600" /> Due Diligence</li>
                            <li className="flex items-center gap-2 text-sm text-gray-700 font-medium"><CheckCircle2 size={16} className="text-yellow-600" /> Negotiation</li>
                        </ul>
                    </div>
                </div>

                {/* Why Consult Us */}
                <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden mb-24">
                    {/* Background accents */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why You Need Expert Advice</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                The real estate landscape can be complex. Mistakes in documentation, valuation, or location selection can be costly. Our consultancy service is designed to be your shield and compass.
                            </p>
                            <Link to="/contact" className="btn bg-white text-slate-900 border-none hover:bg-gold hover:text-white font-bold px-8">
                                Schedule a Meeting
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <PieChart className="text-gold mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">Data Driven</h4>
                                <p className="text-sm text-gray-400">Decisions based on real market data, not guesswork.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <Lightbulb className="text-gold mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">Tailored Strategy</h4>
                                <p className="text-sm text-gray-400">Solutions customized to your specific budget and goals.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <TrendingUp className="text-gold mb-4" size={32} />
                                <h4 className="font-bold text-lg mb-2">Long-term Vision</h4>
                                <p className="text-sm text-gray-400">We look at future value, not just current price.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ or Text Block */}
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Who is this for?</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Our consultancy services are ideal for <span className="font-bold text-gray-900">first-time buyers</span> looking for safety, <span className="font-bold text-gray-900">diaspora investors</span> needing a trusted representative on the ground, and <span className="font-bold text-gray-900">corporate bodies</span> seeking large-scale land banking opportunities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Consultancy;
