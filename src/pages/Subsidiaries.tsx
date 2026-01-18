import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Utensils, TreeDeciduous, GraduationCap, HardHat, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Subsidiaries = () => {
    const subsidiaries = [
        {
            name: "Golf City View Restaurant",
            link: "/subsidiaries/golf-city-view-restaurant",
            isExternal: false,
            description: "Fine dining and relaxation at the heart of our community.",
            icon: Utensils,
            image: "/gcvr_aucre_logo.jpg"
        },
        {
            name: "GCVR/AUCRE GARDENS",
            link: "/subsidiaries/gcvr-aucre-gardens",
            isExternal: false,
            description: "A scenic garden restaurant and event centre perfect for dining and social gatherings.",
            icon: TreeDeciduous,
            image: "/gcvr_aucre_logo.jpg"
        },
        {
            name: "AIRPORT GOLFCITY INTERNATIONAL SCHOOL",
            link: "/subsidiaries/airport-golf-city-school",
            isExternal: false,
            description: "Nurturing future leaders with quality education.",
            icon: GraduationCap,
            image: "/agis_logo.jpg"
        },
        {
            name: "Adonai Engineering & Construction Limited",
            link: "https://adonaiconstructionltd.com",
            isExternal: true,
            description: "Professional engineering and construction solutions.",
            icon: HardHat,
            image: "/aecl_logo.jpg"
        },
        {
            name: "Adonai University College of Research and Entrepreneurship",
            link: "https://aucre.edu.gh/",
            isExternal: true,
            description: "Fostering innovation and entrepreneurship in higher education.",
            icon: BookOpen,
            image: "/aucre_logo.jpg"
        }
    ];

    return (
        <>
            <SEO
                title="Our Subsidiaries"
                description="Discover the subsidiaries of Adonai Estate Limited, extending our impact across various sectors including hospitality, education, and construction."
                pathname="/subsidiaries"
            />

            <div className="bg-slate-50 min-h-screen">
                {/* Hero Section */}
                <div className="relative bg-primary pt-32 pb-32 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Building Communities</span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Our Subsidiaries</h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                Adonai Estate Limited is proud to be associated with these diverse ventures, each contributing to our vision of community and development.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subsidiaries.map((sub, index) => {
                            const Icon = sub.icon;
                            // @ts-ignore
                            const hasImage = sub.image;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white border border-gray-100/50 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>

                                    <div className="relative z-10">
                                        <div className={`w-20 h-20 bg-slate-50 rounded-2xl mb-8 flex items-center justify-center border border-gray-100 group-hover:border-gold/30 group-hover:bg-primary/5 transition-colors overflow-hidden ${hasImage ? 'p-1' : ''}`}>
                                            {hasImage ? (
                                                // @ts-ignore
                                                <img src={sub.image} alt={sub.name} className="w-full h-full object-contain" />
                                            ) : (
                                                <Icon size={40} className="text-gray-400 group-hover:text-gold transition-colors" />
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors font-serif">
                                            {sub.name}
                                        </h3>
                                        <p className="text-gray-600 mb-8 leading-relaxed">
                                            {sub.description}
                                        </p>

                                        {sub.isExternal ? (
                                            <a
                                                href={sub.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all uppercase text-sm tracking-wide"
                                            >
                                                Visit Website <ExternalLink size={16} />
                                            </a>
                                        ) : (
                                            <Link
                                                to={sub.link}
                                                className="inline-flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all uppercase text-sm tracking-wide"
                                            >
                                                View Details <ArrowRight size={16} />
                                            </Link>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subsidiaries;
