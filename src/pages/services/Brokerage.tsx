import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Handshake, Search, Scale, FileCheck, Building, Users, Phone, Globe, Mail, MessageCircle, CheckCircle2, ArrowRight, Building2, BadgeCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, AGENT_INFO } from '../../constants/contact';

const Brokerage = () => {
    const services = [
        {
            title: "For Sellers",
            icon: Building,
            desc: "Get the best market value for your property through our extensive marketing network and professional presentation.",
            list: ["Property Valuation", "Professional Photography", "Targeted Marketing", "Buyer Vetting"]
        },
        {
            title: "For Buyers",
            icon: Search,
            desc: "Find hidden gems and prime deals that match your exact specifications, budget, and investment goals.",
            list: ["Property Search", "Price Negotiation", "Document Verification", "Site Visits"]
        },
        {
            title: "The Process",
            icon: Scale,
            desc: "We manage the entire transaction lifecycle to ensure fairness, legality, and smooth closing.",
            list: ["Offer Management", "Contract Review", "Legal Support", "Closing Assistance"]
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Brokerage Services | Adonai Estate Limited"
                description="Transparent real estate brokerage. We connect buyers and sellers with integrity, ensuring fair deals and smooth transactions."
                pathname="/services/brokerage"
            />

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
                            <Handshake size={16} />
                            Trusted Partnership
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif leading-tight">
                            Real Estate<br />
                            <span className="text-gold">Brokerage</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                            Bridging the gap between buyers and sellers with <span className="text-gold font-bold">transparency and trust</span>. We facilitate seamless property transactions across Ghana.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={`https://wa.me/${AGENT_INFO.phone.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn bg-gold text-primary hover:bg-white hover:text-primary font-bold px-10 py-4 shadow-2xl shadow-gold/30">
                                List Your Property
                            </a>
                            <Link to="/listings" className="btn bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white hover:text-primary font-bold px-10 py-4">
                                Browse Listings
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 bg-slate-50 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {["Verified Listings", "Fair Pricing", "Diaspora Network", "Swift Closings"].map((item, i) => (
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
                        <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Our Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">How We Help You</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">Whether you're buying or selling, we've got you covered with end-to-end support.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
                        {services.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all group"
                            >
                                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                    <item.icon size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">{item.title}</h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">{item.desc}</p>
                                <ul className="space-y-3">
                                    {item.list.map((li, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                            <CheckCircle2 size={16} className="text-gold shrink-0" />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Reach Banner */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-5 bg-cover bg-center"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">International Reach</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif">
                                Global Reach,<br />
                                Local Expertise
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-10">
                                We don't just list properties; we market them. Our network extends beyond Ghana, connecting local properties with international investors in the diaspora. Your property gets the exposure it deserves.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-10">
                                <div className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-xl backdrop-blur text-white text-sm font-medium">
                                    <Globe size={18} className="text-gold" />
                                    International Network
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-xl backdrop-blur text-white text-sm font-medium">
                                    <FileCheck size={18} className="text-gold" />
                                    Verified Listings
                                </div>
                                <div className="flex items-center gap-2 bg-white/10 px-5 py-3 rounded-xl backdrop-blur text-white text-sm font-medium">
                                    <TrendingUp size={18} className="text-gold" />
                                    Best Market Rates
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a href={`https://wa.me/${AGENT_INFO.phone.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn bg-gold text-primary hover:bg-white hover:text-primary font-bold px-8 py-4">
                                    <MessageCircle size={18} className="mr-2" /> WhatsApp
                                </a>
                                <a href={`mailto:${AGENT_INFO.email}`} className="btn bg-transparent border border-white/30 text-white hover:bg-white hover:text-primary font-bold px-8 py-4 flex items-center gap-2">
                                    <Mail size={18} /> Email Us
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white text-gray-900 p-10 rounded-[2.5rem] shadow-2xl"
                        >
                            <h3 className="text-2xl font-bold mb-4 font-serif">Looking to Sell?</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">List your property with us today and get it in front of serious, verified buyers across Ghana and beyond.</p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Free Property Valuation</h4>
                                        <p className="text-sm text-gray-500">Know your property's worth</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Access to Buyer Network</h4>
                                        <p className="text-sm text-gray-500">Local and diaspora investors</p>
                                    </div>
                                </div>
                            </div>

                            <a href={`https://wa.me/${AGENT_INFO.phone.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full justify-center py-4">
                                Contact Agent <ArrowRight size={18} className="ml-2" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brokerage;
