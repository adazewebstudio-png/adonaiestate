import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ShieldAlert,
    ShieldCheck,
    UserX,
    TrendingUp,
    MessageCircle,
    MapPin,
    Calendar,
    ArrowRight,
    Info,
    Check,
    AlertTriangle,
    Award,
    Building2,
    Lock,
    Phone,
    FileText,
    ArrowUpRight,
    Quote,
    CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';
import ExecutiveContactModal from '../components/ExecutiveContactModal';

const WhyInvest = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as any }
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        },
        viewport: { once: true }
    };

    return (
        <div className="bg-[#FAF9F6] min-h-screen text-slate-900 font-inter overflow-x-hidden">
            <SEO
                title="Why Invest With Adonai? | Secure Land Ownership in Ghana"
                description="You deserve to own land without fear. Discover how Adonai Estate protects your investment with 100% litigation-free lands and verified systems."
                pathname="/why-invest"
            />

            {/* --- HERO: THE MANDATE OF FEARLESSNESS --- */}
            <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-slate-950 z-0">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src="/why_invest_hero_aerial.jpg"
                        alt="Adonai Estate Aerial View"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/40 border border-primary/20 rounded-full mb-8 backdrop-blur-md">
                            <Lock size={14} className="text-primary-light" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white underline decoration-primary decoration-2">Investment Protection</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-outfit font-bold text-white tracking-tight leading-[1.1] mb-8">
                            Why Invest <br />
                            <span className="text-gold italic">With Adonai?</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-slate-300 font-light max-w-2xl leading-relaxed italic">
                            "You Deserve to Own Land Without Fear."
                        </p>
                    </div>
                </div>

                {/* Visual architectural elements */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent z-20"></div>
            </section>

            {/* --- EMOTIONAL PIVOT: THE PROBLEM --- */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div {...fadeInUp} className="space-y-10">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight">
                                    The High Cost of <br />
                                    <span className="text-primary">Uncertainty</span>
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed font-light">
                                    You are not just looking to buy land. You are trying to secure your future, protect your money, and make a smart investment.
                                </p>
                            </div>

                            <div className="p-8 bg-red-50 border-l-4 border-primary rounded-r-2xl space-y-4">
                                <p className="font-bold text-primary flex items-center gap-2">
                                    <ShieldAlert size={20} /> But in Ghana today, buying land feels risky.
                                </p>
                                <p className="text-slate-700 font-light italic leading-relaxed">
                                    You hear stories of people buying land only to face court cases, losing their land to multiple sales, fighting land guards, and watching their hard-earned money disappear.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {['Anxious', 'Confused', 'Afraid', 'Unsure'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                                        <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                                <img src="/why_invest_supporting_leaders_city.jpg" alt="Leaders City - Adonai Estate Development" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute -bottom-12 -left-12 p-10 bg-slate-950 rounded-3xl shadow-2xl z-20 max-w-xs border border-white/10">
                                <p className="text-white font-light text-sm leading-relaxed">
                                    "Honestly, it is not fair that in 2026, a hardworking person should still be scared to buy land."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- EMPATHY SECTION: YOU ARE NOT THE PROBLEM --- */}
            <section className="py-32 bg-slate-50 relative">
                <div className="container mx-auto px-6 lg:px-12 text-center">
                    <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-8">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                            <Info size={40} />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight">
                            You Are Not the Problem. <br />
                            <span className="text-primary italic">The System Is.</span>
                        </h3>
                        <p className="text-xl text-slate-600 font-light leading-relaxed">
                            The market is full of unverified sellers, litigation lands, and broken promises. That puts your life savings, plans, and family’s future at risk.
                        </p>
                        <div className="h-px w-24 bg-primary/20 mx-auto"></div>
                    </motion.div>
                </div>
            </section>

            {/* --- THE ADONAI DIFFERENCE: THE AUTHORITY --- */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="bg-slate-950 rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white tracking-tight leading-none">
                                        This Is Where <br />
                                        <span className="text-gold">Adonai Comes In.</span>
                                    </h2>
                                    <p className="text-lg text-slate-400 font-light leading-relaxed">
                                        We are not here to confuse you. We are here to guide you safely. We have the experience, systems, and track record to protect you.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {[
                                        { title: "4,000+ Verified Assets", desc: "Litigation-free lands successfully delivered to families and investors." },
                                        { title: "Legacy of Trust", desc: "Led by Rev. Dr. Bright Adonai, Ghana’s 100 Most Influential People Award recipient." },
                                        { title: "Defensive Planning", desc: "Adonai Build Estates: modern gated communities designed to protect your investment." }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-950 transition-all">
                                                <Award size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-white mb-2">{stat.title}</h4>
                                                <p className="text-sm text-slate-500 font-light">{stat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-sm relative"
                            >
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gold rounded-full flex items-center justify-center text-slate-950 font-bold z-20">
                                    <Check size={24} />
                                </div>
                                <Quote className="text-gold/20 mb-8 w-16 h-16" />
                                <p className="text-3xl font-outfit font-bold text-white leading-tight mb-10 italic">
                                    "We do not just sell land. We <span className="text-gold underline decoration-gold/20 decoration-8 underline-offset-8">secure your future</span>."
                                </p>
                                <a
                                    href="https://wa.me/233599007786?text=Hi%20Adonai%20Estate,%20I%20am%20ready%20to%20start%20my%20secure%20land%20investment%20plan."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-6 bg-white text-slate-950 text-xs uppercase font-black tracking-[0.3em] rounded-2xl flex items-center justify-center gap-4 hover:bg-gold transition-colors group"
                                >
                                    Start Your Secure Plan <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- OUR SIMPLE SAFE PLAN --- */}
            <section className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
                        <span className="text-primary font-bold text-xs uppercase tracking-[0.5em]">The Blueprint</span>
                        <h2 className="text-4xl md:text-6xl font-outfit font-bold text-slate-900 tracking-tight">Our Simple, Safe Plan</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                id: "01",
                                title: "Talk to Us",
                                desc: "We understand your goal, your budget, and your timeline first.",
                                details: "Deep consultation before any transaction."
                            },
                            {
                                id: "02",
                                title: "Choose Verified",
                                desc: "Legally verified, properly documented, and litigation-free properties.",
                                details: "Surveyed & demarcated."
                            },
                            {
                                id: "03",
                                title: "Secure Your Plot",
                                desc: "Secure your asset within a gated Adonai Estate for total protection.",
                                details: "Controlled development."
                            },
                            {
                                id: "04",
                                title: "Relax. You're Safe.",
                                desc: "Ongoing support from purchase to allocation and beyond.",
                                details: "Future-proofed legacy."
                            }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-gold transition-all duration-500 h-full relative"
                            >
                                <div className="flex justify-between items-start mb-6 gap-4">
                                    <h4 className="text-2xl font-outfit font-bold text-slate-900 group-hover:text-primary transition-colors pr-2">{step.title}</h4>
                                    <span className="text-4xl font-black text-slate-100 group-hover:text-gold/20 transition-colors uppercase leading-none">{step.id}</span>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">{step.desc}</p>
                                <div className="pt-6 border-t border-slate-50">
                                    <div className="flex items-center gap-3 text-[10px] font-black tracking-widest text-primary uppercase">
                                        <ShieldCheck size={14} /> {step.details}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CRISIS VS PEACE: THE COMPARISON --- */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 bg-slate-100 rounded-[3rem] overflow-hidden">
                        {/* The Risk */}
                        <div className="p-12 lg:p-24 space-y-12">
                            <div className="space-y-4">
                                <span className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
                                    <AlertTriangle size={14} /> The Risk of Inaction
                                </span>
                                <h3 className="text-3xl font-outfit font-bold text-slate-900">What happens if you do nothing?</h3>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    'Losing your life savings to frauds',
                                    'Entering long, expensive court battles',
                                    'Facing demolitions or land disputes',
                                    'Living with constant fear and uncertainty'
                                ].map((risk, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-500 font-light">
                                        <UserX size={20} className="text-red-400 shrink-0 mt-1" />
                                        <span>{risk}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="p-6 bg-white rounded-2xl shadow-sm italic text-sm text-slate-600 border border-slate-200">
                                "A single wrong land decision can destroy years of hard work."
                            </div>
                        </div>

                        {/* The Outcome */}
                        <div className="p-12 lg:p-24 bg-primary text-white space-y-12 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-slate-950 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            <div className="relative z-10 space-y-4">
                                <span className="text-xs font-bold text-gold uppercase tracking-widest flex items-center gap-2">
                                    <CheckCircle2 size={14} /> The Adonai Lifestyle
                                </span>
                                <h3 className="text-3xl font-outfit font-bold text-white">Land Ownership Without Fear</h3>
                            </div>
                            <ul className="relative z-10 space-y-6">
                                {[
                                    'Having documents you can 100% trust',
                                    'Inside a protected, gated community',
                                    'Automatic property value appreciation',
                                    'Sleeping well knowing your investment is safe'
                                ].map((outcome, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/80 font-light">
                                        <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0 mt-1">
                                            <Check size={14} />
                                        </div>
                                        <span>{outcome}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="relative z-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl italic text-sm text-white border border-white/10">
                                "This is not just land ownership. This is peace of mind."
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CALL: TAKE THE NEXT STEP --- */}
            <section className="py-40 bg-slate-950 relative overflow-hidden">
                {/* Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[25vw] font-black text-white/[0.02] tracking-tighter select-none pointer-events-none">
                    SECURE FUTURE
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
                    <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-5xl md:text-8xl font-outfit font-bold text-white tracking-tight leading-[1.1]">
                            Build Your Legacy <br />
                            <span className="text-primary italic">Without Fear.</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                            With Adonai, you are not just buying land. You are buying certainty, safety, and a secured future.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                            {[
                                {
                                    name: "Free Consultation",
                                    icon: MessageCircle,
                                    link: "https://wa.me/233599007786?text=Hi%20Adonai%20Estate,%20I%20would%20like%20to%20have%20a%20free%20consultation%20about%20your%20lands."
                                },
                                {
                                    name: "Book a Site Visit",
                                    icon: MapPin,
                                    link: "https://wa.me/233599007786?text=Hi%20Adonai%20Estate,%20I%20would%20like%20to%20book%20a%20site%20visit."
                                },
                                {
                                    name: "Talk to Advisor",
                                    icon: Phone,
                                    link: "tel:+233599007786"
                                }
                            ].map((cta, i) => (
                                <a
                                    key={i}
                                    href={cta.link}
                                    target={cta.link.startsWith('http') ? "_blank" : undefined}
                                    rel={cta.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                    className={`group p-8 rounded-3xl border transition-all duration-500 flex flex-col items-center gap-6 ${i === 1
                                        ? 'bg-primary border-primary hover:bg-white text-white hover:text-slate-950 shadow-2xl shadow-primary/20'
                                        : 'bg-white/5 border-white/10 hover:bg-white hover:text-slate-950 text-white'
                                        }`}
                                >
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${i === 1 ? 'bg-white/20 text-white group-hover:bg-primary/5 group-hover:text-primary' : 'bg-white/10 text-white group-hover:bg-primary/5 group-hover:text-primary'
                                        }`}>
                                        <cta.icon size={28} />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.3em]">{cta.name}</span>
                                </a>
                            ))}
                        </div>

                        <p className="pt-10 text-slate-600 text-[10px] uppercase font-bold tracking-widest">
                            You do not have to figure this out alone.
                        </p>
                    </motion.div>
                </div>
            </section>

            <ExecutiveContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
};

export default WhyInvest;
