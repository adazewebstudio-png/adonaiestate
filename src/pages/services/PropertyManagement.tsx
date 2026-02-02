import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, BarChart3, Home, Key, UserCheck, ClipboardCheck, Mail, MessageCircle, CheckCircle2, Building2, Clock, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, AGENT_INFO } from '../../constants/contact';

const PropertyManagement = () => {
    const services = [
        { title: "Maintenance & Repairs", icon: Wrench, text: "Routine inspections and immediate fixes to prevent costly damage. We keep your property in pristine condition." },
        { title: "Tenant Management", icon: UserCheck, text: "Professional screening, placement, and rent collection. We find reliable tenants and handle all communications." },
        { title: "Security Oversight", icon: ShieldCheck, text: "24/7 monitoring of security personnel and systems. Your property is protected around the clock." },
        { title: "Financial Reporting", icon: ClipboardCheck, text: "Transparent, detailed accounts of all income and expenses. Know exactly how your investment performs." },
    ];

    const benefits = [
        "Higher Tenant Retention",
        "Minimized Vacancy Cycles",
        "Legal Compliance Assurance",
        "Better Market Rental Rates",
        "Stress-Free Ownership",
        "Regular Property Inspections"
    ];

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Property Management | Adonai Estate Limited"
                description="Professional property management services. We handle maintenance, tenant relations, and asset protection for peace of mind."
                pathname="/services/property-management"
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
                            <Building2 size={16} />
                            Professional Service
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif leading-tight">
                            Property<br />
                            <span className="text-gold">Management</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
                            Own the asset, skip the stress. We provide <span className="text-gold font-bold">comprehensive management solutions</span> that protect your property's value and ensure steady returns.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={`https://wa.me/${AGENT_INFO.phone.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn bg-gold text-primary hover:bg-white hover:text-primary font-bold px-10 py-4 shadow-2xl shadow-gold/30">
                                Get a Free Consultation
                            </a>
                            <a href={`mailto:${AGENT_INFO.email}`} className="btn bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white hover:text-primary font-bold px-10 py-4">
                                Request Proposal
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="py-12 bg-slate-50 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        {["24/7 Support", "Transparent Reporting", "Vetted Tenants", "Full Maintenance"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-700 font-bold text-sm md:text-base">
                                <CheckCircle2 className="text-gold" size={20} />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">What We Offer</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-serif">
                                Comprehensive Care<br />
                                <span className="text-primary">For Your Asset</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
                                <p>
                                    Whether you live abroad or simply don't have the time, managing a property can be a full-time job. From finding reliable tenants to handling midnight maintenance calls, the challenges are endless.
                                </p>
                                <p>
                                    Adonai Estate acts as your professional steward. We treat your property as our own, ensuring it remains <span className="font-bold text-gray-900">clean, secure, and profitable</span> year-round.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {services.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex gap-5 p-5 rounded-2xl border border-gray-100 hover:border-gold/30 hover:bg-slate-50 hover:shadow-lg transition-all group"
                                    >
                                        <div className="shrink-0 w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <item.icon size={28} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1 font-serif">{item.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="sticky top-32"
                        >
                            <div className="bg-primary rounded-[3rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

                                <div className="relative z-10">
                                    <Home size={56} className="text-gold mb-8" />
                                    <h3 className="text-2xl font-bold mb-6 font-serif text-white">Why Professional Management?</h3>

                                    <ul className="space-y-4 mb-10">
                                        {benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                                <Key size={18} className="text-gold shrink-0" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                                        <p className="italic text-gray-300 text-sm mb-4 leading-relaxed">"Since Adonai took over management, my rental yields have improved and I no longer worry about maintenance issues."</p>
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-primary font-bold">K</div>
                                            <div>
                                                <span className="font-bold text-sm block">Kwame A.</span>
                                                <span className="text-xs text-gray-400">Diaspora Investor</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 md:p-16 text-center shadow-xl border border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Let Us Handle the Heavy Lifting</h2>
                        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                            Focus on your life while we focus on your property. Contact us today for a <span className="font-bold text-primary">management proposal tailored to your asset</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href={`https://wa.me/${AGENT_INFO.phone.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-10 py-4 shadow-lg shadow-primary/20">
                                <MessageCircle size={18} className="mr-2" /> Talk to an Agent
                            </a>
                            <a href={`mailto:${AGENT_INFO.email}`} className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 flex items-center justify-center gap-2">
                                <Mail size={18} /> Send Email
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PropertyManagement;
