import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Shield, Star, Maximize2, Target, Eye, Navigation } from 'lucide-react';
import SEO from '../components/SEO';

const activeEstates = [
    {
        name: 'Airport Golf City',
        location: 'Ho, Volta Region',
        image: '/airport_golf_city_main.jpg',
        description: 'Our flagship development, meticulously designed as a luxury sanctuary. Features well-demarcated plots, premium infrastructure, and a stunning 98-acre golf course.',
        features: ['98-acre Golf Course', '24/7 Elite Security', 'Planned Hotel & Restaurant', '100% Litigation Free'],
        link: '/estates/airport-golf-city',
        tag: 'Selling Fast',
        priceRange: 'Premium'
    }
];

const upcomingEstates = [
    {
        name: 'Millennium City',
        location: 'Kpetoe',
        image: '/images/estates/millennium-city/hero.jpg',
        description: 'A visionary cultural hub designed to reconnect you with your roots. A unique blend of tradition and modern community living at Kpetoe.',
        features: ['Cultural Exchange Center', 'Tourism Hub', 'Serviced Plots', 'Institutional Zone'],
        link: '/estates/millennium-city',
        tag: 'Upcoming',
        id: 'millennium'
    },
    {
        name: 'UHAS Florida City',
        location: 'Ho',
        image: '/images/estates/florida-city/hero.jpg',
        description: 'A vibrant, modern lifestyle community located near the University of Health and Allied Sciences. Designed for energy and exclusivity.',
        features: ['University Proximity', 'Modern Infrastructure', 'Paved Access Roads', 'Youthful Vibe'],
        link: '/estates/uhas-florida-city',
        tag: 'Upcoming',
        id: 'florida'
    },
    {
        name: 'Volta Safari City',
        location: 'Sogakope',
        image: '/images/estates/volta-safari-city/safari2.jpg',
        description: 'Eco-conscious riverside luxury. Experience the serenity of nature combined with high-end architectural elegance along the Volta River.',
        features: ['Riverside View', 'Eco-Resort Design', 'Privacy & Luxury', 'Safari Aesthetic'],
        link: '/estates/volta-safari-city',
        tag: 'Upcoming',
        id: 'safari'
    },
    {
        name: 'Leaders City',
        location: 'Ho',
        image: '/images/estates/leaders-city/home_thumb.jpg',
        description: 'The future of commercial and residential synergy. Strategic location in Ho for leaders and visionary investors.',
        features: ['Mixed-Use Development', 'Commercial Excellence', 'High Appreciation', 'Prestige Address'],
        link: '/estates/leaders-city',
        tag: 'Upcoming',
        id: 'leaders'
    }
];

import { useEffect } from 'react';
import { useHeaderStyle } from '../contexts/HeaderContext';

const OurEstates = () => {
    const [filter, setFilter] = useState('all');
    const { setIsTransparent } = useHeaderStyle();

    useEffect(() => {
        setIsTransparent(true);
        return () => setIsTransparent(false);
    }, [setIsTransparent]);

    return (
        <div className="bg-[#fafafa] min-h-screen">
            <SEO
                title="Premium Estates"
                description="Explore our elite portfolio of litigation-free estates across the Volta Region. From the grand Airport Golf City to upcoming safari-style riverside luxury."
                pathname="/estates"
            />

            {/* Immersive Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/airport_golf_city_main.jpg"
                        className="w-full h-full object-cover scale-105"
                        alt="Adonai Estates"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-[#fafafa]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block px-4 py-1.5 bg-gold/20 backdrop-blur-md rounded-full text-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 border border-gold/30">
                            The Volta Land Supermarket
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 font-serif italic tracking-tight">
                            Heritage and <span className="text-gold">Horizon</span>
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                            Crafting secure, high-value communities that inspire confidence and build generational wealth.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Bottom Wave/Curve */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fafafa"></path>
                    </svg>
                </div>
            </section>

            {/* Enhanced Filter UI */}
            <div className="container mx-auto px-4 -mt-10 relative z-30">
                <div className="bg-white p-4 rounded-3xl shadow-2xl border border-gray-100 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                    {['all', 'active', 'upcoming'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setFilter(t)}
                            className={`px-8 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${filter === t
                                ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                : 'text-gray-400 hover:text-primary hover:bg-slate-50'}`}
                        >
                            {t.charAt(0).toUpperCase() + t.slice(1)} Developments
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 overflow-hidden">
                <AnimatePresence mode="wait">
                    <div className="space-y-32">
                        {/* Active Developments Section */}
                        {(filter === 'all' || filter === 'active') && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">Prime Investments</h2>
                                    <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
                                    <p className="mt-6 text-gray-500 max-w-xl mx-auto">Our current active developments offering high-tier infrastructure and immediate land allocation.</p>
                                </div>
                                <div className="grid grid-cols-1 gap-16">
                                    {activeEstates.map((estate, index) => (
                                        <MainEstateCard key={estate.name} estate={estate} index={index} />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Upcoming Section */}
                        {(filter === 'all' || filter === 'upcoming') && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4">Visionary Future</h2>
                                    <div className="w-24 h-1.5 bg-gold mx-auto rounded-full"></div>
                                    <p className="mt-6 text-gray-500 max-w-xl mx-auto">Upcoming residential and commercial hubs set to redefine real estate standards in Ghana.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                                    {upcomingEstates.map((estate, index) => (
                                        <SecondaryEstateCard key={estate.name} estate={estate} index={index} />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </AnimatePresence>
            </div>

            {/* Why Adonai Estates - Narrative Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-8 italic text-white">The Adonai <span className="text-gold underline decoration-gold/30">Standard</span></h2>
                            <p className="text-xl text-white/80 leading-relaxed mb-10 font-light">
                                We don't just sell plots; we build infrastructure that sustains growth and designs that inspire high living. Our estates are a testament to our commitment to realism and elite governance.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-heading">
                                <div className="space-y-4">
                                    <Shield className="text-gold" size={32} />
                                    <h4 className="text-xl font-bold uppercase tracking-widest text-sm text-white">Security of Tenure</h4>
                                    <p className="text-white/60 text-sm">Every square inch is rigorously vetted and documented for absolute peace of mind.</p>
                                </div>
                                <div className="space-y-4">
                                    <Target className="text-gold" size={32} />
                                    <h4 className="text-xl font-bold uppercase tracking-widest text-sm text-white">Planned Layouts</h4>
                                    <p className="text-white/60 text-sm">Expertly demarcated zones for residential, commercial, and green spaces.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/10 aspect-video">
                                <img src="/images/estates/leaders-city/home_thumb.jpg" className="w-full h-full object-cover" alt="Elite Living" />
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-3xl shadow-2xl hidden md:block">
                                <Star className="text-white mb-4" size={40} fill="white" />
                                <h5 className="text-primary font-bold text-2xl">Voted #1</h5>
                                <p className="text-primary/70 text-sm font-bold uppercase tracking-wider">In the Volta Region</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

/* Large Feature Card for Active Estates */
const MainEstateCard = ({ estate, index }: { estate: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="group relative"
    >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 bg-white rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-gray-100">
            <div className="w-full lg:w-7/12 h-[500px] overflow-hidden relative">
                <img
                    src={estate.image}
                    alt={estate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-700"></div>
                <div className="absolute top-8 left-8">
                    <span className="bg-white/95 backdrop-blur shadow-xl px-6 py-2 rounded-full text-primary font-black uppercase text-xs tracking-widest border border-primary/10">
                        {estate.tag}
                    </span>
                </div>
            </div>

            <div className="w-full lg:w-5/12 p-12 lg:p-16 text-left">
                <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-[0.2em] mb-4">
                    <MapPin size={18} /> {estate.location}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">{estate.name}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-light">
                    {estate.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {estate.features.map((feature: any, i: number) => (
                        <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                            <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                                <Maximize2 size={12} />
                            </div>
                            {feature}
                        </div>
                    ))}
                </div>

                <Link to={estate.link} className="btn btn-primary w-full sm:w-auto px-10 py-5 rounded-2xl group/btn">
                    View Comprehensive Details <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                </Link>
            </div>
        </div>
    </motion.div>
);

/* Smaller Grid Card for Upcoming Estates */
const SecondaryEstateCard = ({ estate, index }: { estate: any, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
    >
        <div className="bg-white rounded-[2.5rem] p-4 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
            <div className="relative h-72 rounded-[2rem] overflow-hidden mb-8">
                <img
                    src={estate.image}
                    alt={estate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent flex flex-col justify-end p-6">
                </div>
                <div className="absolute top-6 right-6">
                    <span className="bg-gold text-white font-black uppercase text-[10px] px-4 py-1.5 rounded-full tracking-widest shadow-xl shadow-gold/30 border border-white/20">
                        {estate.tag}
                    </span>
                </div>
            </div>

            <div className="px-4 pb-4 flex flex-col flex-grow text-left">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold font-serif text-gray-900 group-hover:text-primary transition-colors">{estate.name}</h3>
                    <div className="flex items-center gap-1.5 text-gold font-bold uppercase tracking-widest text-[10px] mt-1">
                        <Navigation size={12} /> {estate.location}
                    </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                    {estate.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {estate.features.slice(0, 3).map((f: any, i: number) => (
                        <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            {f}
                        </span>
                    ))}
                </div>

                <Link to={estate.link} className="flex items-center justify-between p-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-primary transition-colors group/link">
                    Explore Project <Eye size={18} className="group-hover/link:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    </motion.div>
);

export default OurEstates;
