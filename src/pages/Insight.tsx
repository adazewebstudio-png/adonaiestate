import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Insight = () => {
    // Placeholder blog data
    const posts = [
        {
            id: 1,
            title: "Investing in Ho: The Next Real Estate Hotspot",
            excerpt: "Discover why the Volta Region's capital is attracting smart investors and how infrastructure developments are boosting property values.",
            date: "Oct 15, 2025",
            author: "Adonai Team",
            image: "Blog Image 1"
        },
        {
            id: 2,
            title: "5 Things to Check Before Buying Land in Ghana",
            excerpt: "A comprehensive guide to ensuring your land purchase is secure, litigation-free, and worth your hard-earned money.",
            date: "Sep 28, 2025",
            author: "Legal Dept",
            image: "Blog Image 2"
        },
        {
            id: 3,
            title: "The Rise of Eco-Friendly Living in Sogakope",
            excerpt: "Explore how Volta Safari City is setting a new standard for sustainable luxury living by the river.",
            date: "Sep 10, 2025",
            author: "Adonai Team",
            image: "Blog Image 3"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Insights & News | Adonai Estate Limited</title>
                <meta name="description" content="Latest news, real estate tips, and market insights from Adonai Estate Limited." />
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
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Market Trends</span>
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">Insights & News</h1>
                            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                                Stay informed with the latest trends, tips, and updates from the Ghanaian real estate market.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 rounded-3xl flex flex-col"
                            >
                                <div className="h-64 bg-slate-100 relative overflow-hidden">
                                    {/* Placeholder image logic matching previous */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                        {post.image}
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-gold" />
                                            {post.date}
                                        </div>
                                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                        <div className="flex items-center gap-1.5">
                                            <User size={14} className="text-gold" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors font-serif leading-tight">
                                        <Link to="#">{post.title}</Link>
                                    </h2>

                                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <Link to="#" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors mt-auto uppercase tracking-wide">
                                        Read Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Insight;
