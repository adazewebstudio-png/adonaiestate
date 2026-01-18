import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Cookie, Info, Settings2, MousePointerClick, ShieldCheck, BarChart3, Target, CheckCircle2 } from 'lucide-react';

const CookiePolicy = () => {
    const lastUpdated = "January 18, 2026";

    const cookieTypes = [
        {
            icon: ShieldCheck,
            title: "Strictly Necessary Cookies",
            desc: "These cookies are essential for the core functionality of the Site. They enable basic features like page navigation, secure area access, and property booking session management. The Site cannot function properly without these cookies.",
            status: "Always Active"
        },
        {
            icon: BarChart3,
            title: "Performance & Analytics Cookies",
            desc: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are most popular and see how visitors move around the site (e.g., interests in Leaders City vs. Millennium City).",
            status: "Functional"
        },
        {
            icon: Target,
            title: "Targeting & Marketing Cookies",
            desc: "These may be set through our site by our advertising partners. They are used to build a profile of your interests and show you relevant adverts for Adonai Estate products on other sites. They do not store directly personal information but are based on uniquely identifying your browser.",
            status: "Optional"
        }
    ];

    return (
        <>
            <SEO
                title="Comprehensive Cookie Policy"
                description="Our exhaustive disclosure on the use of cookies and tracking technologies. Learn how we optimize your experience while respecting your privacy boundaries."
                pathname="/cookie-policy"
            />

            <div className="bg-slate-50 min-h-screen pt-32 pb-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden"
                    >
                        {/* Legal Header */}
                        <div className="bg-gold p-16 text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/5 pointer-events-none">
                                <Cookie size={400} className="absolute -left-20 -bottom-20 text-primary/10 rotate-12" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-primary/10">
                                    <Cookie size={40} className="text-primary" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-outfit font-black text-primary mb-6">Cookie Policy</h1>
                                <p className="text-primary/70 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                                    Transparent disclosure of tracking technologies and user-consent protocols at Adonai Estate Limited.
                                </p>
                                <div className="mt-8 pt-8 border-t border-primary/10 text-primary/60 text-xs font-bold uppercase tracking-[0.3em]">
                                    Compliance Version: {lastUpdated}
                                </div>
                            </div>
                        </div>

                        {/* Legal Body */}
                        <div className="p-8 md:p-20">
                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <Info className="text-primary" size={28} />
                                    <h2 className="text-3xl font-bold font-outfit text-slate-900">What are Cookies?</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light text-xl">
                                    Cookies are small text files that are placed on your device by websites that you visit. They are widely used in the digital real estate industry to make websites work, or work more efficiently, as well as to provide business and marketing information to the owners of the site. At Adonai, we use them mainly to understand user preferences and protect our digital environment.
                                </p>
                            </section>

                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-10">
                                    <Settings2 className="text-primary" size={28} />
                                    <h2 className="text-3xl font-bold font-outfit text-slate-900">Types of Cookies We Use</h2>
                                </div>
                                <div className="grid grid-cols-1 gap-8">
                                    {cookieTypes.map((type, idx) => (
                                        <div key={idx} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group overflow-hidden">
                                            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                    <type.icon size={28} />
                                                </div>
                                                <div className="flex-1 space-y-4">
                                                    <div className="flex flex-wrap items-center gap-4">
                                                        <h3 className="text-2xl font-bold font-outfit text-slate-900">{type.title}</h3>
                                                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">{type.status}</span>
                                                    </div>
                                                    <p className="text-slate-600 leading-relaxed font-light text-lg">
                                                        {type.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="mb-20">
                                <div className="flex items-center gap-4 mb-8">
                                    <MousePointerClick className="text-primary" size={28} />
                                    <h2 className="text-3xl font-bold font-outfit text-slate-900">How to Manage Your Cookies</h2>
                                </div>
                                <p className="text-slate-600 leading-relaxed font-light text-xl mb-10">
                                    You have the legal right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "Browser Settings (Chrome, Safari, Edge)",
                                        "Third-Party Opt-Out Tools",
                                        "Site-Specific Consent Banner",
                                        "Ad Preference Managers"
                                    ].map((method, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-white">
                                            <CheckCircle2 className="text-gold" size={20} />
                                            <span className="text-slate-700 font-medium">{method}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="p-12 bg-primary rounded-[2.5rem] text-center text-white relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
                                <p className="text-blue-100/70 font-light mb-6">Need more information about our data practices?</p>
                                <a href="/privacy-policy" className="inline-flex items-center gap-2 text-gold font-bold hover:text-white transition-colors text-lg underline decoration-gold/30 underline-offset-8">
                                    Review our Full Privacy Protocol
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default CookiePolicy;
