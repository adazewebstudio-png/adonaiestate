import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Scale, ShieldAlert, FileCheck, Gavel, Landmark, AlertTriangle, Copyright, HelpCircle } from 'lucide-react';

const TermsOfUse = () => {
    const lastUpdated = "January 18, 2026";

    const sections = [
        {
            icon: ShieldAlert,
            title: "1. Acceptance of Terms",
            content: "By accessing, browsing, or using the Adonai Estate Limited website (the 'Site') and its associated services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and comply with all applicable laws and regulations of the Republic of Ghana. This constitutes a legally binding agreement between you and Adonai Estate Limited. If you do not agree, you must immediately cease use of the Site."
        },
        {
            icon: FileCheck,
            title: "2. Real Estate Information Disclaimer",
            content: "All information, including property prices, land sizes, locations, and availability, provided on this site is for marketing and general informational purposes only. While Adonai Estate Limited makes every effort to ensure the accuracy of the data, real estate listings are subject to change without notice. These listings do not constitute a formal 'offer' in the legal sense. A binding contract for sale is only formed when a formal Purchase Agreement or Indenture is executed by both parties and the relevant deposit or full payment is received."
        },
        {
            icon: AlertTriangle,
            title: "3. Site Visits and Consultations",
            content: "Booking a site visit through this website does not guarantee property reservation. Site visits are conducted at the user's own risk. Adonai Estate Limited shall not be held liable for any injuries, losses, or damages occurring during physical inspections of the properties, except where such loss is caused by our gross negligence. We reserve the right to reschedule or cancel site visits at our discretion."
        },
        {
            icon: Copyright,
            title: "4. Intellectual Property Rights",
            content: "All content on this Site, including but not limited to the Adonai Estate Limited logo, text, graphics, images, site layouts, architectural renders, and videos, is the exclusive property of Adonai Estate Limited and is protected by Ghanaian copyright, trademark, and other intellectual property laws. Unauthorized reproduction, distribution, or use of these materials without express written consent from our Board of Directors is strictly prohibited and will be prosecuted."
        },
        {
            icon: Gavel,
            title: "5. Limitation of Liability",
            content: "To the maximum extent permitted by law, Adonai Estate Limited, its directors, employees, or agents shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or investment value, arising out of your use or inability to use the Site. We do not warrant that the site will be error-free, secure, or uninterrupted."
        },
        {
            icon: Landmark,
            title: "6. Indemnification",
            content: "You agree to indemnify and hold harmless Adonai Estate Limited from any claims, damages, liabilities, and expenses (including legal fees) arising from your breach of these Terms, your misuse of the Site, or your violation of any third-party rights while using our services."
        },
        {
            icon: ShieldAlert,
            title: "7. Modifications to Service",
            content: "Adonai Estate Limited reserves the right to modify, suspend, or discontinue any aspect of the Site or property listings at any time without notice. We shall not be liable to you or any third party for such modifications."
        },
        {
            icon: Scale,
            title: "8. Dispute Resolution & Governing Law",
            content: "These Terms are governed by the laws of the Republic of Ghana. Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be referred to and finally resolved by arbitration in Ghana, in accordance with the Alternative Dispute Resolution Act, 2010 (Act 798)."
        }
    ];

    return (
        <>
            <SEO
                title="Comprehensive Terms of Use"
                description="The exhaustive legal terms and conditions governing the relationship between Adonai Estate Limited and its digital users. Protecting your investment and our integrity."
                pathname="/terms-of-use"
            />

            <div className="bg-slate-50 min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden"
                    >
                        {/* Legal Header */}
                        <div className="bg-primary p-16 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <Scale size={400} className="absolute -right-20 -top-20 text-white rotate-12" />
                            </div>
                            <div className="relative z-10">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-gold font-bold text-xs uppercase tracking-widest mb-6">
                                    Legal Framework
                                </span>
                                <h1 className="text-4xl md:text-6xl font-outfit font-black text-white mb-6">Terms of Use</h1>
                                <p className="text-blue-100/70 font-light max-w-2xl mx-auto italic">
                                    "Establishing the standard for transparency and legal integrity in Ghanaian Real Estate."
                                </p>
                                <div className="mt-8 pt-8 border-t border-white/10 text-white/50 text-xs font-medium uppercase tracking-widest">
                                    Revised Integrity Version: {lastUpdated}
                                </div>
                            </div>
                        </div>

                        {/* Legal Body */}
                        <div className="p-8 md:p-20">
                            <div className="prose prose-slate max-w-none">
                                <p className="text-lg text-slate-500 font-light leading-relaxed mb-16 border-b border-slate-100 pb-12">
                                    This agreement governs the use of Adonai Estate Limited's digital assets and services. It is designed to protect both the investor and the corporation by establishing clear boundaries, responsibilities, and legal expectations. By continuing to use this platform, you affirmatively consent to the following exhaustive terms.
                                </p>

                                <div className="grid grid-cols-1 gap-16">
                                    {sections.map((section, idx) => (
                                        <div key={idx} className="group flex flex-col md:flex-row gap-8 items-start">
                                            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex-shrink-0 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                                                <section.icon size={28} />
                                            </div>
                                            <div className="space-y-4">
                                                <h3 className="text-2xl font-bold font-outfit text-slate-900">{section.title}</h3>
                                                <p className="text-slate-600 leading-relaxed font-light text-lg">
                                                    {section.content}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Urgent Contact Section */}
                                <div className="mt-24 p-12 bg-slate-900 rounded-[2rem] text-center relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px]"></div>
                                    <HelpCircle className="mx-auto text-gold mb-6" size={40} />
                                    <h3 className="text-2xl font-bold text-white mb-4">Legal Queries?</h3>
                                    <p className="text-slate-400 mb-8 max-w-lg mx-auto font-light">
                                        For formal legal inquiries, contract clarifications, or copyright permissions, please reach out to our legal department directly.
                                    </p>
                                    <a
                                        href="mailto:legal@adonaiestateltd.com"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-gold hover:text-primary transition-all shadow-xl shadow-primary/20"
                                    >
                                        Contact Legal Counsel
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default TermsOfUse;
