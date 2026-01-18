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
    ChevronRight,
    ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import ExecutiveContactModal from '../components/ExecutiveContactModal';

const CEO = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rev. Dr. Bright Adonai",
        "jobTitle": "Founder & CEO",
        "worksFor": {
            "@type": "Organization",
            "name": "Adonai Estate Limited"
        },
        "description": "Rev. Dr. Bright Adonai is a highly respected real estate entrepreneur, business strategist, and author."
    };

    return (
        <div className="bg-white min-h-screen text-slate-900 font-inter selection:bg-primary/10 selection:text-primary">
            <SEO
                title="Founder & CEO"
                description="Meet Rev. Dr. Bright Adonai, the visionary Founder & CEO of Adonai Estate Limited. Author, Real Estate Entrepreneur, and Business Strategist."
                pathname="/about/ceo"
                image="/ceo_bright_adonai_optimized.jpg"
                schema={personSchema}
            />

            {/* --- EXECUTIVE HERO: AUTHORITATIVE & CLEAN --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#FCFBFA] border-b border-slate-100">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                        {/* Dramatic Portrait Container */}
                        <div className="w-full lg:w-5/12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="relative group"
                            >
                                <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] bg-white border-4 border-white">
                                    <img
                                        src="/ceo_bright_adonai_optimized.jpg"
                                        alt="Rev. Dr. Bright Adonai"
                                        className="w-full h-auto scale-105 group-hover:scale-100 transition-transform duration-1000"
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 hidden lg:block">
                                    <div className="flex items-center gap-4 border-l-4 border-primary pl-4">
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Founded</p>
                                            <p className="text-lg font-outfit font-bold text-slate-900">ADONAI ESTATE</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Title & Introduction */}
                        <div className="w-full lg:w-7/12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="h-px w-12 bg-primary"></div>
                                    <span className="text-primary font-bold text-xs uppercase tracking-[0.5em]">Executive Profile</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl lg:text-[85px] font-outfit font-bold text-slate-900 leading-[0.9] mb-8 tracking-tighter">
                                    Rev. Dr. <br className="hidden md:block" /> Bright Adonai
                                </h1>
                                <div className="space-y-4 mb-12">
                                    <p className="text-2xl md:text-3xl font-outfit font-medium text-slate-800 leading-tight">
                                        Founder & Chief Executive Officer, <br />
                                        <span className="text-primary">Adonai Estate Limited</span>
                                    </p>
                                    <div className="flex flex-wrap items-center gap-4 text-gold font-bold uppercase tracking-[0.2em] text-[11px] italic">
                                        <span>Author</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                                        <span>Real Estate Entrepreneur</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                                        <span>Business Strategist</span>
                                    </div>
                                </div>
                                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light mb-12 capitalize pr-8">
                                    Rev. Dr. Bright Adonai is a highly respected real estate entrepreneur, business strategist, and author whose leadership has positioned Adonai Estate Limited as one of the most trusted and forward-looking property development companies in the Volta Region and beyond.
                                </p>
                                <button
                                    onClick={() => setIsContactModalOpen(true)}
                                    className="group relative px-10 py-5 bg-slate-900 text-white font-bold rounded-xl overflow-hidden shadow-2xl transition-all hover:bg-primary active:scale-95"
                                >
                                    <span className="relative flex items-center gap-3 uppercase tracking-[0.2em] text-xs">
                                        Engage Executive Office <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NARRATIVE CONTENT: AUTHORED VISION --- */}
            <main className="py-24 lg:py-40">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="max-w-5xl mx-auto space-y-40">

                        {/* Section 1: Authorship & Impact */}
                        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-8">
                                <header className="mb-12">
                                    <h2 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 mb-6 tracking-tight">Practical Wisdom & Leadership</h2>
                                    <div className="h-1.5 w-24 bg-gold rounded-full"></div>
                                </header>
                                <div className="space-y-8 text-xl text-slate-700 leading-relaxed text-justify pr-6">
                                    <p>
                                        He is the author of two practical and widely respected business books, <strong className="text-slate-900 font-bold italic underline decoration-primary/20 decoration-8 underline-offset-4">Building Generational Wealth through Real Estate Investment</strong> and <strong className="text-slate-900 font-bold italic underline decoration-primary/20 decoration-8 underline-offset-4">Business Sustainability Training for SMEs in Ghana</strong>.
                                    </p>
                                    <p>
                                        These books reflect not theory, but years of hands-on experience in building property businesses, protecting investors, and creating long-term value.
                                    </p>
                                    <div className="py-8">
                                        <div className="p-10 bg-slate-50 border-y border-slate-100 rounded-[2.5rem] relative overflow-hidden group">
                                            <Quote className="absolute -top-6 -left-6 w-32 h-32 text-slate-200/50 -z-0" />
                                            <p className="text-2xl md:text-3xl font-outfit font-medium text-slate-800 leading-tight relative z-10 text-center text-slate-900">
                                                "As Founder and CEO, his mission is clear: to make land and property ownership safe, transparent, and profitable for individuals, families, and institutions."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
                                <div className="p-8 bg-primary rounded-[2rem] text-white shadow-xl shadow-primary/20">
                                    <BookOpen size={40} className="mb-6 opacity-30" />
                                    <p className="text-xs font-black uppercase tracking-[0.4em] text-white/80 mb-4">Published Works</p>
                                    <h4 className="text-xl font-outfit font-bold leading-snug text-white">Codifying Real Estate Excellence for Ghana's Future.</h4>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Credentials & Operational Ethos */}
                        <section className="bg-slate-950 rounded-[4rem] p-8 md:p-16 lg:p-24 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(139,22,22,0.15),transparent)] pointer-events-none"></div>

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                                <div className="space-y-10">
                                    <header>
                                        <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block">Foundation of Authority</span>
                                        <h2 className="text-4xl md:text-6xl font-outfit font-bold leading-[1.1] tracking-tight text-white">A CEO Built on Discipline, Systems, and Results</h2>
                                    </header>
                                    <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed font-light">
                                        Rev. Dr. Bright Adonai holds a PhD in Business Administration (Entrepreneurship), an MPhil in Finance, and is a Chartered Marketer (CIM-UK). He is also pursuing a Master of Laws (LLM) with focus on legal and property-related frameworks.
                                    </p>
                                    <div className="p-8 bg-white/5 border-l-4 border-gold rounded-r-2xl">
                                        <p className="text-2xl font-outfit font-bold italic text-gold">
                                            However, what truly defines his leadership is structure, governance, and execution.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    <div className="bg-white/5 p-8 md:p-12 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                                        <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[11px] mb-10 flex items-center gap-4">
                                            <div className="h-px w-8 bg-gold/50"></div>
                                            Operational Delivery Mandate
                                        </h4>
                                        <ul className="space-y-8">
                                            {[
                                                'Strict land verification and due diligence systems',
                                                'Clear, legally sound documentation processes',
                                                'Transparent customer engagement',
                                                'Strategic property acquisition and development',
                                                'A long-term investment mindset'
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-6 group">
                                                    <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-950 transition-all duration-500 shadow-lg shadow-gold/5">
                                                        <CheckCircle2 size={18} />
                                                    </div>
                                                    <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="text-slate-500 italic text-sm pl-4 border-l border-white/10">This approach has earned the company a reputation for reliability, credibility, and delivery.</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Industry & Visionary Impact */}
                        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-3 px-5 py-2 bg-slate-100 rounded-full mb-8">
                                    <Building2 size={16} className="text-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Industry Standardization</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-outfit font-bold text-slate-900 leading-tight mb-8 tracking-tighter">Building Trust, Not Just Selling Land</h2>
                                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed mb-10 text-justify">
                                    Rev. Dr. Adonai is not only the CEO of Adonai Estate Limited. He is also the Founder of the <strong className="text-slate-900 underline decoration-primary/30 underline-offset-8">Volta Regional Association of Real Estate Developers</strong>, an initiative created to promote standards, professionalism, and ethical practices in the real estate sector.
                                </p>
                                <div className="p-12 bg-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    <p className="text-3xl md:text-4xl font-outfit font-bold italic leading-tight relative z-10 text-white">
                                        "To clean up the industry, protect buyers, and raise the bar for property development in Ghana."
                                    </p>
                                </div>
                            </div>
                            <div className="lg:col-span-5 space-y-12 pt-12">
                                <div className="space-y-10">
                                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Performance Recognition</h3>
                                    <div className="space-y-6">
                                        {[
                                            { title: "Ghana’s Most Respected CEO", sub: "Volta Regional Category" },
                                            { title: "Global Well-Respected CEO", sub: "Entrepreneur of the Year" },
                                            { title: "Real Estate Company of the Year", sub: "Adonai Estate Limited" },
                                            { title: "Corporate Ghana Hall of Fame", sub: "2024 Inductee" },
                                            { title: "Ghana’s 100 Most Influential People", sub: "National Ranking" }
                                        ].map((award, i) => (
                                            <div key={i} className="flex gap-6 items-center group cursor-default">
                                                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-all duration-500">
                                                    <Award size={20} />
                                                </div>
                                                <div>
                                                    <h5 className="font-outfit font-bold text-slate-900 group-hover:text-primary transition-colors">{award.title}</h5>
                                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">{award.sub}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold pt-4 border-t border-slate-100 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                                        Confirming performance, credibility, and impact.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Ministerial Foundation & Values */}
                        <section className="py-24 border-y border-slate-100 relative">
                            <div className="max-w-4xl mx-auto space-y-10">
                                <div className="text-center space-y-4 mb-20">
                                    <h2 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight">A Values-Driven Leader</h2>
                                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 text-center lg:text-left">
                                    <div className="space-y-8">
                                        <p className="text-xl lg:text-3xl text-slate-700 leading-snug font-light italic">
                                            In addition to his business leadership, Rev. Dr. Adonai is also a <strong className="text-primary font-bold">Reverend Minister</strong>. This background has deeply shaped his approach to leadership, making integrity, accountability, and stewardship non-negotiable values in both his personal life and business operations.
                                        </p>
                                        <div className="p-12 bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] rounded-[3.5rem] border border-slate-50 text-center">
                                            <p className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 leading-[1.1] tracking-tight text-slate-950">
                                                "This is one of the strongest reasons clients, families, and investors trust Adonai Estate with their savings and future plans."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Thought Leadership & Research */}
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center pb-24">
                            <div className="space-y-8">
                                <h2 className="text-3xl md:text-5xl font-outfit font-bold text-slate-900 tracking-tight leading-none mb-10">Thought Leadership & Influence</h2>
                                <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light italic border-l-4 border-gold pl-10">
                                    Beyond running companies, Rev. Dr. Bright Adonai is a researcher and author whose work in entrepreneurship, economics, and development has been published in international journals. Combined with his two books, this positions him as not just a property developer, but a leading voice in real estate investment and business sustainability.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="aspect-[4/5] bg-slate-50 rounded-3xl p-8 flex flex-col justify-end">
                                    <Globe size={32} className="text-primary mb-Auto" />
                                    <h4 className="text-slate-900 font-bold uppercase tracking-widest text-[10px]">Global Reach</h4>
                                    <p className="text-xs text-slate-400 mt-2 font-medium">Published Researcher</p>
                                </div>
                                <div className="aspect-[4/5] bg-slate-950 rounded-3xl p-8 flex flex-col justify-end text-white">
                                    <GraduationCap size={32} className="text-gold mb-Auto" />
                                    <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Academic Authority</h4>
                                    <p className="text-xs text-white/80 mt-2 font-medium">PhD Economics & Dev.</p>
                                </div>
                            </div>
                        </section>

                        {/* FINAL SUMMARY / GRAND CLOSING */}
                        <section className="pt-40 pb-20 text-center border-t border-slate-100">
                            <div className="max-w-4xl mx-auto space-y-16">
                                <div className="space-y-6">
                                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-primary">The Closing Principle</h3>
                                    <p className="text-4xl md:text-6xl font-outfit font-bold text-slate-900 leading-tight">
                                        "Adonai Estate Limited is built on one principle: security, clarity, and long-term value before profit."
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                    <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
                                        <p className="text-lg text-slate-600 leading-relaxed">
                                            Every project is approached with full legal verification, proper planning and documentation, clear customer communication, and a focus on appreciation and long-term returns.
                                        </p>
                                    </div>
                                    <div className="p-10 bg-[#FAF9F6] rounded-3xl border border-slate-100 flex items-center justify-center">
                                        <p className="text-2xl font-outfit font-bold italic text-slate-800 text-center uppercase tracking-tighter">
                                            Rev. Dr. Bright Adonai builds trust before structures <br />
                                            <span className="text-primary not-italic">& systems before scale.</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-20 space-y-12">
                                    <p className="text-3xl md:text-5xl font-outfit font-bold text-slate-900">
                                        Invest with <span className="text-primary italic">Confidence</span>.
                                    </p>
                                    <button
                                        onClick={() => setIsContactModalOpen(true)}
                                        className="inline-flex items-center gap-4 px-12 py-6 bg-slate-950 text-white font-bold rounded-2xl shadow-3xl hover:bg-primary hover:scale-105 active:scale-95 transition-all uppercase tracking-[0.2em] text-xs"
                                    >
                                        Engage Executive Office <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </main>

            <ExecutiveContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </div>
    );
};

export default CEO;
