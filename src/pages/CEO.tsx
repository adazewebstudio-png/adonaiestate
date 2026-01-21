import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Send,
    Award,
    ShieldCheck,
    Globe,
    Building2,
    BookOpen,
    GraduationCap,
    Quote,
    CheckCircle2,
    ArrowUpRight,
    Star,
    Shield,
    FileText
} from 'lucide-react';
import SEO from '../components/SEO';
import ExecutiveContactModal from '../components/ExecutiveContactModal';

import { useEffect } from 'react';
import { useHeaderStyle } from '../contexts/HeaderContext';

const CEO = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const { setIsTransparent } = useHeaderStyle();

    useEffect(() => {
        setIsTransparent(false);
        return () => setIsTransparent(false);
    }, [setIsTransparent]);

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rev. Dr. Bright Adonai",
        "jobTitle": "Founder & CEO",
        "worksFor": {
            "@type": "Organization",
            "name": "Adonai Estate Limited"
        },
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Adonai University College of Research and Entrepreneurship",
            "roleName": "Founder & Rector"
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" as any }
    };

    return (
        <div className="bg-[#FAF9F6] min-h-screen text-slate-900 font-inter overflow-x-hidden">
            <SEO
                title="Founder & CEO"
                description="The visionary leadership of Rev. Dr. Bright Adonai, Founder & CEO of Adonai Estate Limited."
                pathname="/about/ceo"
                image="/ceo_bright_adonai_optimized.jpg"
                schema={personSchema}
            />

            {/* --- ELITE HERO: IMMERSIVE & ARCHITECTURAL --- */}
            <header className="relative min-h-screen flex items-center pt-24 overflow-hidden">
                {/* Background Text Overlay */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full select-none pointer-events-none opacity-[0.02] font-black text-[20vw] leading-none whitespace-nowrap">
                    EXECUTIVE LEADERSHIP
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Portrait Aspect */}
                        <div className="w-full lg:w-1/2 relative lg:h-[80vh] flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.5, ease: "anticipate" }}
                                className="relative w-full max-w-lg aspect-[4/5] z-20"
                            >
                                {/* Decorative Frames */}
                                <div className="absolute -inset-6 border border-primary/10 rounded-[2rem] rotate-3 -z-10"></div>
                                <div className="absolute -inset-6 border border-gold/20 rounded-[2rem] -rotate-3 -z-10"></div>

                                <div className="w-full h-full rounded-[1.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-8 border-white">
                                    <img
                                        src="/ceo_bright_adonai_optimized.jpg"
                                        alt="Rev. Dr. Bright Adonai"
                                        className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-1000"
                                    />
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1, duration: 1 }}
                                    className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden md:block"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                                            <Star size={24} fill="white" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Founder</p>
                                            <p className="text-sm font-bold font-outfit">Adonai Estate Ltd.</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Text Aspect */}
                        <div className="w-full lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="h-[2px] w-12 bg-primary"></span>
                                    <span className="text-primary font-bold text-xs uppercase tracking-[0.6em]">Visionary Leader</span>
                                </div>
                                <h1 className="text-6xl md:text-8xl lg:text-[110px] font-outfit font-bold text-primary leading-[0.85] mb-10 tracking-tighter">
                                    Rev. Dr. <br /> Bright Adonai
                                </h1>
                                <p className="text-2xl md:text-3xl font-outfit font-medium text-slate-700 mb-2 border-l-4 border-gold pl-8 leading-snug">
                                    Founder & Chief Executive Officer, <br className="hidden md:block" /> Adonai Estate Limited
                                </p>
                                <p className="text-lg font-outfit font-bold text-gold mb-8 pl-9 uppercase tracking-widest">
                                    Author | Real Estate Entrepreneur | Business Strategist
                                </p>
                                <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 max-w-xl">
                                    A highly respected real estate entrepreneur, business strategist, and author whose leadership has positioned Adonai Estate Limited as a benchmark of trust and innovation.
                                </p>
                                <div className="flex flex-wrap gap-6">
                                    <button
                                        onClick={() => setIsContactModalOpen(true)}
                                        className="px-10 py-5 bg-slate-950 text-white rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-primary transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3"
                                    >
                                        Inquire With CEO Office <ArrowUpRight size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            {/* --- CORE PILLARS SECTION: GRID LAYOUT --- */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Authorship */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="group">
                            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-gold transition-all duration-500 h-full">
                                <BookOpen className="text-gold mb-8 group-hover:scale-110 transition-transform" size={40} />
                                <h3 className="text-2xl font-outfit font-bold mb-6">World Class Authorship</h3>
                                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                                    Author of <strong className="text-slate-900 font-bold italic underline decoration-gold/30">Building Generational Wealth through Real Estate Investment</strong> and <strong className="text-slate-900 font-bold italic underline decoration-gold/30">Business Sustainability Training for SMEs</strong>.
                                </p>
                                <p className="text-sm text-primary font-bold">Codifying years of hands-on property development experience.</p>
                            </div>
                        </motion.div>

                        {/* Credentials */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="group">
                            <div className="p-10 rounded-3xl bg-slate-950 text-white border border-slate-800 hover:border-primary transition-all duration-500 h-full relative overflow-hidden">
                                <GraduationCap className="text-gold mb-8 group-hover:scale-110 transition-transform" size={40} />
                                <h3 className="text-2xl font-outfit font-bold mb-6 text-white">Academic Authority</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-sm font-medium text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                                        PhD Business Administration
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                                        MPhil in Finance
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                                        Chartered Marketer (CIM-UK)
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium text-white">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                                        Masters of Laws (LLM) Candidate
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                            </div>
                        </motion.div>

                        {/* Ministerial Foundation */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.6 }} className="group">
                            <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-gold transition-all duration-500 h-full">
                                <Star className="text-gold mb-8 group-hover:scale-110 transition-transform" size={40} />
                                <h3 className="text-2xl font-outfit font-bold mb-6">Moral Integrity</h3>
                                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                                    As a <strong className="text-primary font-bold">Reverend Minister</strong>, his leadership is shaped by integrity, accountability, and stewardship as non-negotiable values.
                                </p>
                                <p className="text-sm text-primary font-bold italic">"Building trust before structures is our primary mandate."</p>
                            </div>
                        </motion.div>

                        {/* Research & University Founding */}
                        <motion.div {...fadeInUp} transition={{ delay: 0.8 }} className="group lg:col-span-3">
                            <div className="p-10 rounded-[3rem] bg-gold/5 border border-gold/10 hover:border-gold/30 transition-all duration-500 flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-20 h-20 bg-gold rounded-[2rem] flex items-center justify-center text-slate-900 group-hover:rotate-12 transition-transform shadow-xl">
                                    <Globe size={40} />
                                </div>
                                <div className="space-y-4 text-center md:text-left">
                                    <h3 className="text-2xl font-outfit font-bold text-slate-900">Education & Institutional Impact</h3>
                                    <p className="text-xl text-slate-700 leading-relaxed font-light">
                                        As the <strong className="text-slate-900 font-bold">Founder and Rector</strong> of the <span className="text-primary font-bold">Adonai University College of Research and Entrepreneurship (AUCRE)</span>, Rev. Dr. Bright Adonai is committed to shaping the next generation of African researchers and business leaders through structured, practical academic excellence.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- DYNAMIC NARRATIVE SECTION: SYSTEMIC EXCELLENCE --- */}
            <section className="py-24 relative overflow-hidden bg-[#0A0A0A] text-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div {...fadeInUp}>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full mb-8 border border-white/10">
                                <Shield className="text-gold" size={16} />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Compliance & Systems</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-outfit font-bold text-white mb-10 leading-tight">
                                A CEO Built on Discipline, <br />
                                <span className="text-primary">Systems, and Results</span>
                            </h2>
                            <p className="text-xl text-white leading-relaxed mb-12 font-light">
                                Rev. Dr. Bright Adonai defines leadership through structure and execution. Under his governance, every project adheres to a strict operational mandate:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    'Strict Verification Systems',
                                    'Sound Document Process',
                                    'Transparent Engagement',
                                    'Strategic Acquisition',
                                    'Long-term Investment',
                                    'Ethical Stewardship'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group">
                                        <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-950 transition-all">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-sm font-medium text-white/90">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="p-12 lg:p-20 bg-primary/10 rounded-[4rem] border border-primary/20 relative group">
                                <Quote className="absolute -top-10 -left-10 text-primary/20 w-32 h-32" />
                                <p className="text-3xl md:text-5xl font-outfit font-bold italic leading-tight text-white mb-10 relative z-10">
                                    "As Founder and CEO, his mission is clear: to make land and property ownership safe, transparent, and profitable."
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-10 bg-gold"></div>
                                    <span className="text-gold font-bold uppercase tracking-[0.3em] text-xs">Mission Statement</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- INDUSTRY IMPACT: THE ASSOCIATION --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-center">
                        <motion.div {...fadeInUp} className="w-full lg:w-1/2">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/3] group">
                                <img src="/our_approach.jpg" alt="Impact" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                                <div className="absolute bottom-10 left-10 text-white">
                                    <p className="text-xs font-black uppercase tracking-[0.4em] mb-2 opacity-70">Impact Narrative</p>
                                    <h4 className="text-2xl font-outfit font-bold text-white">Leading Regional Transformation</h4>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div {...fadeInUp} className="w-full lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight leading-tight">Building Trust, Not Just Selling Land</h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light">
                                Rev. Dr. Adonai is the Founder of the <strong className="text-primary font-bold underline underline-offset-8">Volta Regional Association of Real Estate Developers</strong>, an initiative created to promote standards and ethical practices in the real estate sector.
                            </p>
                            <div className="p-8 bg-slate-50 border-l-4 border-primary rounded-r-2xl">
                                <p className="text-2xl font-outfit font-bold text-slate-800 italic">
                                    "To clean up the industry, protect buyers, and raise the bar for property development in Ghana."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- RECOGNITION: HALL OF FAME --- */}
            <section className="py-32 bg-[#0A0A0C] relative overflow-hidden">
                {/* Visual Flourish: Artistic Ambient Light */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-y-1/2"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                        <motion.div {...fadeInUp}>
                            <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                                <Award className="text-gold" size={16} />
                                <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em]">Distinguished Honors</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-outfit font-bold text-white tracking-tight leading-none">
                                Performance <span className="text-gold italic">Recognition</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
                                Validating a career built on results, ethical leadership, and extensive industry transformation.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
                        {[
                            { title: "Ghana’s Most Respected CEO", sub: "Volta Regional Category", icon: Award, year: "2023" },
                            { title: "Global Well-Respected CEO", sub: "Entrepreneur of the Year", icon: Globe, year: "2024" },
                            { title: "Real Estate Company of the Year", sub: "Institutional Leadership", icon: Building2, year: "2024" },
                            { title: "Corporate Ghana Hall of Fame", sub: "Lifetime Excellence", icon: ShieldCheck, year: "Inductee" },
                            { title: "Ghana’s 100 Most Influential", sub: "National Impact Ranking", icon: Star, year: "Top 100" }
                        ].map((award, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className={`relative group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-gold/50 transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(212,175,55,0.1)] flex flex-col justify-between h-full ${i === 3 ? 'lg:col-span-1' : ''}`}
                            >
                                <div className="absolute top-0 right-0 p-8">
                                    <span className="text-[10px] font-black tracking-widest text-white/10 group-hover:text-gold/40 transition-colors uppercase">{award.year}</span>
                                </div>

                                <div>
                                    <div className="w-16 h-16 bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 rounded-2xl flex items-center justify-center text-gold mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-lg shadow-gold/5">
                                        <award.icon size={30} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-2xl font-outfit font-bold text-white mb-4 leading-tight group-hover:text-gold transition-colors duration-500">
                                        {award.title}
                                    </h4>
                                    <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors duration-500">
                                        {award.sub}
                                    </p>
                                </div>

                                <div className="mt-12 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    <div className="h-px flex-1 bg-gold/20"></div>
                                    <div className="w-1 h-1 rounded-full bg-gold"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CLOSING CTA: EXECUTIVE SIGNATURE --- */}
            <section className="py-40 bg-slate-950 relative overflow-hidden">
                {/* Architectural Background Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-full border-r border-white/5"></div>

                {/* Ambient Light */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] opacity-50"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-center space-y-12"
                        >
                            <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 border border-white/10 rounded-full">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Final Executive Mandate</span>
                            </div>

                            <div className="relative inline-block">
                                <Quote className="absolute -top-12 -left-16 text-white/5 w-32 h-32 -rotate-12" />
                                <h3 className="text-4xl md:text-7xl font-outfit font-bold text-white leading-[1.1] tracking-tight relative z-10 max-w-4xl mx-auto">
                                    "Rev. Dr. Bright Adonai builds <span className="text-gold">trust</span> before structures."
                                </h3>
                                <Quote className="absolute -bottom-12 -right-16 text-white/5 w-32 h-32 rotate-180" />
                            </div>

                            <div className="max-w-2xl mx-auto space-y-8">
                                <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed italic">
                                    Invest with confidence under a leadership that prioritizes security, clarity, and long-term value before profit.
                                </p>

                                {/* Signature Line */}
                                <div className="pt-8 flex flex-col items-center">
                                    <div className="h-px w-24 bg-gold/30 mb-6"></div>
                                    <p className="font-outfit text-white font-bold tracking-[0.2em] text-sm uppercase">Rev. Dr. Bright Adonai</p>
                                    <p className="text-[10px] text-gold font-medium uppercase tracking-widest mt-2">Founder & Group CEO</p>
                                </div>
                            </div>

                            <div className="pt-16">
                                <button
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="group relative inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-950 rounded-2xl font-bold uppercase tracking-[0.3em] text-xs hover:bg-gold hover:text-slate-950 transition-all duration-500 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] active:scale-95 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    <span className="relative z-10">Engage Executive Office</span>
                                    <ArrowUpRight size={20} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
            </section>

            <ExecutiveContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
};

export default CEO;
