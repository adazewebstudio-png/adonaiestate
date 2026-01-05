import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, BarChart3, Home, Key, UserCheck, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyManagement = () => {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <Helmet>
                <title>Property Management | Adonai Estate Limited</title>
                <meta name="description" content="Professional property management services. We handle maintenance, tenant relations, and asset protection for peace of mind." />
            </Helmet>

            <div className="container mx-auto px-4">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto mb-20 text-center"
                >
                    <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Our Services</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Property Management</h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Own the asset, skip the stress. We provide comprehensive management solutions that protect your property's value and ensure steady returns.
                    </p>
                </motion.div>

                {/* Main Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Care for Your Asset</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Whether you live abroad or simply don't have the time, managing a property can be a full-time job. From finding reliable tenants to handling midnight maintenance calls, the challenges are endless.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-10">
                            Adonai Estate acts as your professional steward. We treat your property as our own, ensuring it remains clean, secure, and profitable year-round.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Maintenance & Repairs", icon: Wrench, text: "Routine inspections and immediate fixes to prevent costly damage." },
                                { title: "Tenant Management", icon: UserCheck, text: "Screening, placement, and rent collection handled professionally." },
                                { title: "Security Oversight", icon: ShieldCheck, text: "Monitoring security personnel and systems for safety." },
                                { title: "Financial Reporting", icon: ClipboardCheck, text: "Transparent accounts of all income and expenses." },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 hover:border-gold/30 hover:bg-slate-50 transition-colors">
                                    <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sticky top-24">
                        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

                            <Home size={64} className="text-gold mb-8" />
                            <h3 className="text-2xl font-bold mb-4">Why Choose Professional Management?</h3>
                            <ul className="space-y-4 mb-10">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Key size={20} className="text-gold" /> Higher Tenant Retention
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Key size={20} className="text-gold" /> Minimized Vacancy Cycles
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Key size={20} className="text-gold" /> Legal Compliance Assurance
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <Key size={20} className="text-gold" /> Better Market Rates
                                </li>
                            </ul>

                            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
                                <p className="italic text-gray-300 text-sm mb-4">"Since Adonai took over management, my rental yields have improved and I no longer worry about maintenance issues."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-gold rounded-full"></div>
                                    <span className="font-bold text-sm">Satisfied Client</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-slate-50 border border-gray-200 rounded-[2rem] p-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Let us handle the heavy lifting</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Focus on your life while we focus on your property. Contact us today for a management proposal tailored to your asset.
                    </p>
                    <Link to="/contact" className="btn btn-primary px-8">Request Management Proposal</Link>
                </div>
            </div>
        </div>
    );
};

export default PropertyManagement;
