import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const estates = [
    {
        name: 'Airport Golf City',
        location: 'Ho',
        image: '/airport_golf_city_main.jpg',
        description: 'Adonai Estate Airport Golf City is our biggest site, meticulously designed to offer a premium living experience. Features a proper layout, well-demarcated plots, and a 98-acre golf course.',
        features: ['98-acre Golf Course', '24/7 Security', 'Hotel & Restaurant', 'Litigation Free'],
        link: '/estates/airport-golf-city'
    },
    {
        name: 'UHAS Florida City',
        location: 'Ho',
        image: '/uhas_florida_city_main.jpg',
        description: 'A vibrant community designed for modern lifestyles, located near the University of Health and Allied Sciences.',
        features: ['University Proximity', 'Paved Roads', 'Youthful Vibe'],
        link: '/estates/uhas-florida-city'
    },
    {
        name: 'Volta Safari City',
        location: 'Sogakope',
        image: '/volta_safari_city_main.jpg',
        description: 'Eco-friendly riverside lodges and homes. Experience nature and luxury combined.',
        features: ['River View', 'Eco-Friendly', 'Resort Style'],
        link: '/estates/volta-safari-city'
    },
    {
        name: 'Leaders City',
        location: 'Ho',
        image: '/leaders_city_main.jpg',
        description: 'The heart of commercial and residential excellence. Perfect for business and easy living.',
        features: ['City Center', 'Mixed Use', 'Commercial Hub'],
        link: '/estates/leaders-city'
    }
];

const OurEstates = () => {
    return (
        <>
            <Helmet>
                <title>Our Estates | Adonai Estate Limited</title>
                <meta name="description" content="Explore our premium estates across the Volta Region - Airport Golf City, UHAS Florida City, Volta Safari City, and Leaders City." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://adonaiestateltd.com/estates" />
                <meta property="og:title" content="Our Estates | Adonai Estate Limited" />
                <meta property="og:description" content="Explore our premium estates across the Volta Region - Airport Golf City, UHAS Florida City, Volta Safari City, and Leaders City." />
                <meta property="og:image" content="https://adonaiestateltd.com/airport_golf_city_main.jpg" />
                <meta property="og:site_name" content="Adonai Estate Limited" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Estates | Adonai Estate Limited" />
                <meta name="twitter:description" content="Explore our premium estates across the Volta Region - Airport Golf City, UHAS Florida City, Volta Safari City, and Leaders City." />
                <meta name="twitter:image" content="https://adonaiestateltd.com/airport_golf_city_main.jpg" />
            </Helmet>

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
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Find Your Perfect Plot</span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Our Premium Estates</h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                Explore our diverse range of litigation-free lands and homes across the Volta Region.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {estates.map((estate, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card overflow-hidden group bg-white shadow-xl rounded-3xl border border-gray-100/50 hover:shadow-2xl transition-all"
                            >
                                <Link to={estate.link} className="block h-72 overflow-hidden relative cursor-pointer">
                                    <img
                                        src={estate.image}
                                        alt={estate.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                                    <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                                        Selling Fast
                                    </div>
                                </Link>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <Link to={estate.link} className="hover:text-gold transition-colors">
                                                <h2 className="text-2xl font-bold text-gray-900 mb-1 font-serif">{estate.name}</h2>
                                            </Link>
                                            <p className="text-gold text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                                                {estate.location}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {estate.description}
                                    </p>

                                    <div className="mb-8">
                                        <div className="flex flex-wrap gap-2">
                                            {estate.features.map((feature, i) => (
                                                <span key={i} className="text-xs bg-slate-50 text-gray-600 px-3 py-1.5 rounded-lg border border-gray-200 font-medium">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <Link to={estate.link} className="btn btn-outline w-full text-primary border-primary hover:bg-gold hover:text-white hover:border-gold flex justify-center items-center py-4 rounded-xl">
                                        View Details
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurEstates;
