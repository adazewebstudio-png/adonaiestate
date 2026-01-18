import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, LineChart, Building, PieChart, TrendingUp, Lightbulb, Mail, MessageCircle, MapPin, FileCheck, BadgeCheck, Briefcase, Target, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Consultancy = () => {
    const services = [
        {
            icon: LineChart,
            title: "Investment Analysis",
            desc: "We analyze market trends, location potential, and ROI projections to ensure your real estate investment yields maximum returns over time.",
            features: ["Market Research", "ROI Forecasting", "Risk Assessment"],
            color: "primary"
        },
        {
            icon: Building,
            title: "Development Advisory",
            desc: "Planning a commercial or residential project? We offer strategic guidance on land use, zoning regulations, and project feasibility.",
            features: ["Feasibility Studies", "Zoning & Permits", "Project Planning"],
            color: "gold"
        },
        {
            icon: Users,
            title: "Acquisition Support",
            desc: "Navigate the complexities of buying land with confidence. We provide legal and procedural support to ensure a scam-free transaction.",
            features: ["Due Diligence", "Negotiation", "Legal Review"],
            color: "primary"
        },
    ];

    const reasons = [
        { icon: PieChart, title: "Data Driven", text: "Decisions based on real market data, not guesswork." },
        { icon: Lightbulb, title: "Tailored Strategy", text: "Solutions customized to your specific budget and goals." },
        { icon: TrendingUp, title: "Long-term Vision", text: "We look at future value, not just current price." },
        { icon: Shield, title: "Risk Mitigation", text: "Protect your investment from common pitfalls." },
    ];

    const clientTypes = [
        { title: "First-time Buyers", desc: "Looking for safety and guidance in their first property purchase." },
        { title: "Diaspora Investors", desc: "Needing a trusted representative on the ground in Ghana." },
        { title: "Corporate Bodies", desc: "Seeking large-scale land banking opportunities." },
        { title: "Property Developers", desc: "Requiring market insights for project viability." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Real Estate Consultancy | Adonai Estate Limited</title>
                <meta name="description" content="Expert real estate advisory services. We guide you through acquisition, development planning, and investment strategies." />
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
                            <Briefcase size={16} />
                            Expert Advisory
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif leading-tight">
                            Real Estate<br />
                            <span className="text-gold">Consultancy</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                            In a dynamic market, <span className="text-gold font-bold">information is power</span>. We provide the expert insights you need to make profitable, risk-free real estate decisions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="btn bg-gold text-primary hover:bg-white hover:text-primary font-bold px-10 py-4 shadow-2xl shadow-gold/30">
                                Book Consultation
                            </a>
                            <a href="mailto:richardadaaze@gmail.com" className="btn bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white hover:text-primary font-bold px-10 py-4">
                                Send Inquiry
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 bg-slate-50 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {["Expert Advisors", "Data-Driven Insights", "Tailored Solutions", "10+ Years Experience"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-700 font-bold text-sm md:text-base">
                                <BadgeCheck className="text-gold" size={20} />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">What We Offer</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Our Advisory Services</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Comprehensive guidance at every stage of your real estate journey.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                        {services.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors ${item.color === 'gold' ? 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                    <item.icon size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-8">{item.desc}</p>
                                <ul className="space-y-3">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <CheckCircle2 size={16} className="text-gold shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Consult Us */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Why Choose Us</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif">
                                Why You Need<br />
                                Expert Advice
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-10">
                                The real estate landscape can be complex. Mistakes in documentation, valuation, or location selection can be costly. Our consultancy service is designed to be your <span className="text-gold font-bold">shield and compass</span>.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="btn bg-gold text-primary hover:bg-white hover:text-primary font-bold px-8 py-4 shadow-lg shadow-gold/30">
                                    <MessageCircle size={18} className="mr-2" /> Talk to a Consultant
                                </a>
                                <a href="mailto:richardadaaze@gmail.com" className="btn bg-transparent border border-white/30 text-white hover:bg-white hover:text-primary font-bold px-8 py-4 flex items-center gap-2">
                                    <Mail size={18} /> Send Email
                                </a>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {reasons.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors"
                                >
                                    <item.icon className="text-gold mb-5" size={36} />
                                    <h4 className="font-bold text-xl text-white mb-3 font-serif">{item.title}</h4>
                                    <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who Is This For */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Ideal Clients</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Who Is This For?</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Our consultancy services are designed for a diverse range of clients.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {clientTypes.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-50 p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all text-center"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                    <Target size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-10 py-4 shadow-lg shadow-primary/20">
                            Schedule a Free Consultation <ArrowRight size={18} className="ml-2" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Consultancy;
