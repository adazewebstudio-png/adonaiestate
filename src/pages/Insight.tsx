import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../lib/sanity';

interface Post {
    _id: string;
    title: string;
    excerpt: string;
    mainImage: any;
    _createdAt: string;
    publishedAt?: string;
    author?: {
        name: string;
    };
    categories?: { title: string }[];
    slug: {
        current: string;
    };
}

const BlogSkeleton = () => (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 flex flex-col h-full animate-pulse">
        <div className="h-64 bg-gray-200"></div>
        <div className="p-8 space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="h-7 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        </div>
    </div>
);

import { useHeaderStyle } from '../contexts/HeaderContext';

const Insight = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const { setIsTransparent } = useHeaderStyle();

    useEffect(() => {
        setIsTransparent(true);
        return () => setIsTransparent(false);
    }, [setIsTransparent]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const query = `*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
                    _id, title, excerpt, mainImage, _createdAt, publishedAt, author->{ name }, categories[]->{ title }, slug
                }`;
                const data = await client.fetch(query, {}, { useCdn: true });
                setPosts(data || []);
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    return (
        <>
            <SEO
                title="Insights & News"
                description="Latest news, real estate tips, and market insights from Adonai Estate Limited. Stay updated on the Ghanaian housing market."
                pathname="/insight"
            />

            <div className="bg-slate-50 min-h-screen">
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

                <div className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loading ? (
                            <>
                                <BlogSkeleton />
                                <BlogSkeleton />
                                <BlogSkeleton />
                            </>
                        ) : (
                            posts.map((post, index) => (
                                <motion.article
                                    key={post._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 rounded-3xl flex flex-col"
                                >
                                    <div className="h-64 bg-slate-100 relative overflow-hidden">
                                        {post.mainImage ? (
                                            <img
                                                src={urlFor(post.mainImage).width(600).height(400).format('webp').url()}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">No Image</div>
                                        )}

                                        {post.categories && post.categories.length > 0 && (
                                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                                {post.categories.map((cat, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-primary shadow-sm border border-gray-100">
                                                        {cat.title}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-gold" />
                                                {new Date(post.publishedAt || post._createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                            {post.author && (
                                                <>
                                                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                                    <div className="flex items-center gap-1.5">
                                                        <User size={14} className="text-gold" />
                                                        {post.author.name}
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors font-serif leading-tight">
                                            <Link to={`/insight/${post.slug?.current || post._id}`}>{post.title}</Link>
                                        </h2>

                                        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <Link to={`/insight/${post.slug?.current || post._id}`} className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gold transition-colors mt-auto uppercase tracking-wide">
                                            Read Article <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Insight;
