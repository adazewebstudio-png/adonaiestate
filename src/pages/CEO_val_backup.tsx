import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import {
    Award,
    BookOpen,
    GraduationCap,
    Heart,
    ShieldCheck,
    Star,
    TrendingUp,
    Quote,
    Building2,
    Users,
    Scale,
    Send
} from 'lucide-react';
import ExecutiveContactModal from '../components/ExecutiveContactModal';

const CEO = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Bright Adonai",
        "jobTitle": "CEO",
        "worksFor": {
            "@type": "Organization",
            "name": "Adonai Estate Limited"
        },
        "description": "Bright Adonai is a vision-driven real estate entrepreneur and CEO of Adonai Estate Limited, focused on solving Ghana's housing deficit.",
        "image": "https://adonaiestateltd.com/ceo_bright_adonai.jpg",
        "award": [
            "Ghana's Most Respected CEO",
            "Global Well-Respected CEO",
            "Outstanding Entrepreneur of the Year"
        ]
    };

    const achievements = [
        "Ghana's Most Respected CEO (Volta Regional Category)",
        "Global Well-Respected CEO",
        "Outstanding Entrepreneur of the Year (Real Estate)",
        "Corporate Ghana Hall of Fame Inductee",
        "Listed among Ghana's 100 Most Influential People"
    ];

    const leadershipPillars = [
        { icon: Scale, title: 'Corporate Governance', text: 'Ensuring absolute transparency and ethical standards across all subsidiaries.' },
        { icon: ShieldCheck, title: 'Legal Discipline', text: 'Rigorous due diligence and secure documentation for every property asset.' },
        { icon: TrendingUp, title: 'Strategic Growth', text: 'Sustainable land banking and development positioned for generational value.' },
        { icon: Users, title: 'Institutional Building', text: 'Raising industry standards through education and professional associations.' }
    ];

    const books = [
        {
            title: 'Building Generational Wealth through Real Estate Investment',
            desc: 'A strategic guide for investors looking to secure long-term capital appreciation.'
        },
        {
            title: 'Modern Trends in Ghanaian Real Estate Market',
            desc: 'An analytical overview of emerging opportunities in the housing sector.'
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">
            <SEO
                title="Founder & CEO"
                description="Meet Bright Adonai, the vision-driven entrepreneur leading Adonai Estate Limited. Discover his awards, philanthropic work, and commitment to Ghanaian property ownership."
                pathname="/about/ceo"
                image="/ceo_bright_adonai.jpg"
                schema={personSchema}
            />

            {/* CEO Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/ceo_bright_adonai.jpg"
                        className="w-full h-full object-cover opacity-60 object-[50%_20%]"
                        alt="Bright Adonai"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block px-4 py-1 bg-gold/20 backdrop-blur-md rounded-full text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-gold/30">
                            The Visionary Leader
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 font-serif tracking-tight lg:leading-[1.1]">
                            Bright <span className="text-gold italic">Adonai</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                            Pioneering realistic solutions to Ghana's housing deficit and inspiring the next generation of property owners.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <Quote className="w-16 h-16 text-gold/20 mx-auto mb-8" />
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-[1.3] font-serif italic mb-10">
                            "Real estate is not just about buildings; it is about providing security, dignity, and a foundation for generational success."
                        </h2>
                        <div className="w-20 h-1 bg-gold mx-auto"></div>
                    </motion.div>
                </div>
            </section>

            {/* Biography Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-serif">A Legacy of Excellence</h2>
                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                                <p>
                                    As the CEO of Adonai Estate Limited, Bright Adonai has transformed the real estate landscape in the Volta Region and beyond. His journey is defined by a deep-rooted commitment to transparency, legal integrity, and urban planning excellence.
                                </p>
                                <p>
                                    Under his leadership, Adonai Estate has grown from a single project to a diversified conglomerate, including construction, educational research, and hospitality ventures. His focus remains clear: making land and home ownership achievable for every Ghanaian.
                                </p>
                            </div>

                            <div className="mt-12 space-y-4">
                                {achievements.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-slate-800 font-bold">
                                        <Award className="text-gold shrink-0" size={24} />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {leadershipPillars.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 bg-white rounded-3xl shadow-lg border border-slate-50 hover:border-gold/30 hover:-translate-y-2 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6">
                                        <pillar.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{pillar.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Books & Thought Leadership */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">Authorship</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif">Thought Leadership</h2>
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        {books.map((book, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="flex gap-8 group"
                            >
                                <div className="w-32 h-44 bg-slate-900 rounded-lg shrink-0 overflow-hidden shadow-2xl relative group-hover:-translate-y-2 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gold/40 to-transparent"></div>
                                    <BookOpen className="absolute bottom-4 right-4 text-white/20" size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif group-hover:text-primary transition-colors">{book.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-light">{book.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philanthropy Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 text-gold font-bold mb-6">
                                <Heart className="fill-gold" size={24} />
                                <span className="uppercase tracking-[0.2em] text-sm">Beyond Business</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif">Philanthropy & Impact</h2>
                            <p className="text-xl text-white/70 leading-relaxed mb-10 font-light">
                                Bright Adonai is deeply committed to social responsibility, particularly in education and youth empowerment. Through the Adonai Foundation, he has supported numerous students and community initiatives across Ghana.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <GraduationCap className="text-gold mb-4" size={32} />
                                    <h4 className="text-white font-bold text-xl mb-2">Education</h4>
                                    <p className="text-white/50 text-sm">Full scholarships and research grants for students.</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                    <Building2 className="text-gold mb-4" size={32} />
                                    <h4 className="text-white font-bold text-xl mb-2">Community</h4>
                                    <p className="text-white/50 text-sm">Vital infrastructure development in remote areas.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/10">
                                <img src="/ceo_bright_adonai.jpg" className="w-full h-full object-cover" alt="Philanthropy" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl hidden md:block">
                                <Star className="text-gold mb-4" size={40} fill="currentColor" />
                                <h5 className="text-slate-900 font-bold text-2xl">Influential</h5>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">AEO Recognized Entity</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ExecutiveContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />

            {/* Floating Vertical Contact Tab - Desktop Only */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
            >
                <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="flex items-center gap-3 bg-slate-900/90 backdrop-blur-md text-white py-4 px-3 rounded-r-2xl border-y border-r border-white/10 shadow-2xl hover:bg-gold hover:text-slate-900 transition-all duration-300 group overflow-hidden"
                    style={{ writingMode: 'vertical-rl' }}
                >
                    <div className="flex items-center gap-4 py-2 rotate-180">
                        <span className="font-bold tracking-[0.2em] uppercase text-xs">Contact Executive Office</span>
                        <Send size={18} className="rotate-90 group-hover:translate-y-1 transition-transform" />
                    </div>
                </button>
            </motion.div>

            {/* Mobile Floating Action Button */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="fixed bottom-8 right-8 z-40 lg:hidden"
            >
                <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-16 h-16 bg-gold text-slate-900 rounded-full shadow-2xl flex items-center justify-center active:scale-95 transition-all"
                >
                    <Send size={24} />
                </button>
            </motion.div>
        </div>
    );
};

export default CEO;
