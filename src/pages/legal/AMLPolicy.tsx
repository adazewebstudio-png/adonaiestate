import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Search, Landmark, Scale, AlertTriangle, FileCheck2, UserX } from 'lucide-react';

const AMLPolicy = () => {
    const lastUpdated = "January 18, 2026";

    const sections = [
        {
            icon: Scale,
            title: "1. Regulatory Framework",
            content: "Adonai Estate Limited operates in strict compliance with the Anti-Money Laundering Act, 2020 (Act 1044) and the guidelines issued by the Financial Intelligence Centre (FIC) of Ghana. As a designated non-financial business and profession (DNFBP), we have an exhaustive commitment to preventing our real estate assets from being used for money laundering or terrorist financing."
        },
        {
            icon: UserCheck,
            title: "2. KYC (Know Your Customer) Protocols",
            content: "Prior to any land transaction or execution of an indenture, we perform exhaustive KYC procedures. Every purchaser is required to provide: (a) A valid Government-issued ID (National ID card/Ghana Card). (b) Proof of residence or digital address. (c) For corporate entities: certificate of incorporation, beneficial ownership details, and board resolutions."
        },
        {
            icon: Search,
            title: "3. Source of Funds Verification",
            content: "Adonai Estate Limited reserves the right to request information regarding the 'Source of Funds' (SoF) for high-value transactions. We do not accept physical cash payments above the statutory threshold set by the FIC. Payments must be made via traceable banking channels, bank drafts, or authorized electronic transfers."
        },
        {
            icon: UserX,
            title: "4. Politically Exposed Persons (PEPs)",
            content: "In accordance with Act 1044, transactions involving Politically Exposed Persons (both domestic and foreign) are subject to Enhanced Due Diligence (EDD). This includes senior government officials, judicial personnel, and senior executives of state-owned corporations."
        },
        {
            icon: ShieldCheck,
            title: "5. Reporting Obligations",
            content: "Adonai Estate Limited is legally mandated to report suspicious transactions (STRs) and cash transactions (CTRs) that exceed established limits to the Financial Intelligence Centre. We maintain detailed records of all transactions for a minimum of ten (10) years."
        },
        {
            icon: AlertTriangle,
            title: "6. Right to Terminate",
            content: "We reserve the absolute right to terminate any business relationship or refuse a property sale if a client fails to provide required KYC documentation or if we have reasonable grounds to suspect illegal activity. In such cases, Adonai shall not be liable for any breach of contract claims."
        }
    ];

    return (
        <>
            <SEO
                title="AML & KYC Compliance"
                description="Our exhaustive Anti-Money Laundering (AML) and Know Your Customer (KYC) compliance framework. Protecting our estates and the integrity of your investment."
                pathname="/aml-kyc-policy"
            />

            <div className="bg-slate-50 min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden"
                    >
                        {/* Legal Header */}
                        <div className="bg-slate-950 p-16 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <Landmark size={400} className="absolute -right-20 -top-20 text-white rotate-12" />
                            </div>
                            <div className="relative z-10">
                                <ShieldCheck size={60} className="text-gold mx-auto mb-8" />
                                <h1 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6 uppercase tracking-tight">AML & KYC Policy</h1>
                                <p className="text-slate-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                                    Adhering to the <span className="text-white font-bold underline decoration-gold">Anti-Money Laundering Act, 2020 (Act 1044)</span>. Maintaining the highest level of fiscal integrity in Ghanaian real estate.
                                </p>
                                <div className="mt-8 pt-8 border-t border-white/10 text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">
                                    Compliance Integrity Check: {lastUpdated}
                                </div>
                            </div>
                        </div>

                        {/* Legal Body */}
                        <div className="p-8 md:p-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {sections.map((section, idx) => (
                                    <div key={idx} className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-gold/30 transition-all duration-500">
                                        <div className="flex items-center gap-5 mb-6">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm border border-slate-100">
                                                <section.icon size={22} />
                                            </div>
                                            <h3 className="text-xl font-bold font-outfit text-slate-900">{section.title}</h3>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed font-light">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Compliance Confirmation */}
                            <div className="mt-16 p-10 bg-primary/5 rounded-[2.5rem] border border-primary/10">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
                                        <FileCheck2 size={28} />
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-2xl font-bold text-slate-900">Compliance Acknowledgement</h4>
                                        <p className="text-slate-600 font-light leading-relaxed italic">
                                            "Adonai Estate Limited remains committed to a zero-tolerance approach toward money laundering. We cooperate fully with the Financial Intelligence Centre and the Ghana Revenue Authority to ensure transparency in all land acquisitions."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default AMLPolicy;
