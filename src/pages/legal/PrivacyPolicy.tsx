import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Share2, Lock, UserCircle2, ClipboardCheck, History, Hammer } from 'lucide-react';

const PrivacyPolicy = () => {
    const lastUpdated = "January 18, 2026";

    const sections = [
        {
            icon: ShieldCheck,
            title: "1. Data Protection Commitment",
            content: "Adonai Estate Limited is firmly committed to the privacy and security of our clients' data. We strictly adhere to the Data Protection Act, 2012 (Act 843) of the Republic of Ghana. This policy outlines our exhaustive practices regarding the collection, processing, and storage of personal information to ensure your rights as a data subject are fully protected."
        },
        {
            icon: Database,
            title: "2. Categories of Data Collected",
            content: "We collect three primary types of information: (a) Personal Identification Data: Name, residential address, digital address, email, and phone numbers. (b) Statutory Compliance Data: National ID details (Ghana Card) required for land registration and anti-money laundering (AML) compliance. (c) Technical Usage Data: Cookies, IP addresses, browser interaction data, and geolocation to optimize our service delivery."
        },
        {
            icon: ClipboardCheck,
            title: "3. Purposes of Processing",
            content: "Your data is processed only for lawful purposes, including: (i) Facilitating land acquisition, surveying, and registration. (ii) Verifying identity for legal indenture execution. (iii) Conducting due diligence and KYC (Know Your Customer) procedures. (iv) Responding to inquiries and site visit bookings. (v) Notifying you about changes to our estate developments or terms."
        },
        {
            icon: History,
            title: "4. Data Retention and Storage",
            content: "Adonai Estate Limited retains personal data only for as long as is necessary to fulfill the legal and commercial purposes for which it was collected. Real estate records (such as names on indentures) are retained indefinitely as per statutory land registration requirements in Ghana. All digital data is stored using industry-standard encryption on secure, firewalled servers."
        },
        {
            icon: Share2,
            title: "5. Third-Party Transfers",
            content: "We do not sell your personal data. We may share information only with: (a) Government agencies (Lands Commission, Office of the Administrator of Stool Lands) for property registration. (b) Legal counsel for indenture drafting. (c) Service providers (e.g., surveyors, IT partners) bound by confidentiality agreements. (d) Law enforcement if required by a valid court order."
        },
        {
            icon: Lock,
            title: "6. Security Measures",
            content: "We implement exhaustive technical and organizational security measures to prevent unauthorized access, accidental loss, destruction, or damage to your data. This includes multi-factor authentication for staff access, SSL encryption for all web traffic, and regular security audits."
        },
        {
            icon: UserCircle2,
            title: "7. Your Rights as a Data Subject",
            content: "Under Act 843, you have the right to request access to your data, demand corrections of inaccuracies, object to processing for direct marketing, and in certain circumstances, request the deletion of your data. To exercise these rights, please contact our Data Protection Officer (DPO)."
        },
        {
            icon: Hammer,
            title: "8. Enforcement and Compliance",
            content: "Failure to comply with these privacy standards is treated as a serious breach of our internal governance. Any concerns regarding data handling should be reported immediately. This policy is subject to periodic updates to reflect changes in Ghanaian data protection laws."
        }
    ];

    return (
        <>
            <SEO
                title="Exhaustive Privacy Policy"
                description="The detailed data protection policy for Adonai Estate Limited. Understanding how we safeguard your information in accordance with Ghana's Data Protection Act."
                pathname="/privacy-policy"
            />

            <div className="bg-slate-50 min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden"
                    >
                        {/* Legal Header */}
                        <div className="bg-slate-900 p-16 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <ShieldCheck className="mx-auto text-gold mb-8" size={60} />
                                <h1 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6">Privacy & Data Protocol</h1>
                                <p className="text-slate-400 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                                    Adhering to the <span className="text-gold font-bold">Data Protection Act, 2012 (Act 843)</span>. Protecting the identities and assets of our global investors.
                                </p>
                                <div className="mt-8 flex justify-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                                    <span>Version 2.0.1</span>
                                    <span className="text-slate-700">|</span>
                                    <span>Effective: {lastUpdated}</span>
                                </div>
                            </div>
                        </div>

                        {/* Legal Body */}
                        <div className="p-8 md:p-20">
                            <div className="grid grid-cols-1 gap-12">
                                {sections.map((section, idx) => (
                                    <div key={idx} className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-gold/20 transition-all duration-300">
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100">
                                                <section.icon size={28} />
                                            </div>
                                            <h3 className="text-2xl font-bold font-outfit text-slate-900">{section.title}</h3>
                                        </div>
                                        <p className="text-slate-600 leading-relaxed font-light text-lg">
                                            {section.content}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* DPO Contact */}
                            <div className="mt-20 pt-20 border-t border-slate-100">
                                <div className="flex flex-col md:flex-row gap-12 items-center">
                                    <div className="flex-1 space-y-4 text-center md:text-left">
                                        <h4 className="text-2xl font-bold text-slate-900">Data Protection Officer</h4>
                                        <p className="text-slate-500 font-light leading-relaxed">
                                            For all data-related inquiries, access requests, or to report a suspected data breach, please contact our DPO.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <a
                                            href="mailto:dpo@adonaiestateltd.com"
                                            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gold hover:text-primary transition-all shadow-xl shadow-primary/20"
                                        >
                                            Submit Privacy Request
                                        </a>
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

export default PrivacyPolicy;
