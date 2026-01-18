import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Calendar, User, ArrowLeft, Loader2, Share2, Facebook, Twitter, Linkedin, Copy, Bookmark, Clock, ArrowRight, Mail, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '../lib/sanity';
import SEO from '../components/SEO';

interface Post {
    _id: string;
    title: string;
    mainImage: any;
    _createdAt: string;
    author?: {
        name: string;
        image?: any;
        bio?: any;
        role?: string;
        slug?: { current: string };
    };
    body: any[];
    categories?: { title: string; slug: { current: string } }[];
    publishedAt?: string;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        ogImage?: any;
        keywords?: string[];
    };
    excerpt?: string;
    slug?: {
        current: string;
    };
    comments: Comment[];
}

interface Comment {
    _id: string;
    name: string;
    comment: string;
    _createdAt: string;
}

const portableTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <figure className="my-12 group">
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative">
                        <img
                            src={urlFor(value).width(1200).fit('max').auto('format').url()}
                            alt={value.alt || 'Adonai Estate Blog Content'}
                            loading="lazy"
                            className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    {value.caption && (
                        <figcaption className="mt-4 px-6 text-sm text-gray-500 italic text-center border-l-2 border-gold py-2 ml-4">
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
        gallery: ({ value }: any) => {
            const { images, columns = 2 } = value;
            if (!images || images.length === 0) return null;

            const gridCols: Record<number, string> = {
                1: 'grid-cols-1',
                2: 'grid-cols-1 md:grid-cols-2',
                3: 'grid-cols-1 md:grid-cols-3',
                4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4',
            };

            return (
                <div className={`grid ${gridCols[columns] || gridCols[2]} gap-6 my-16`}>
                    {images.map((img: any, i: number) => (
                        <div key={i} className="group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 bg-white">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={urlFor(img).width(800).height(600).url()}
                                    alt={img.alt || 'Gallery Content'}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            {img.caption && (
                                <div className="p-4 bg-white text-xs text-gray-500 italic border-t border-gray-50">
                                    {img.caption}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            );
        },
    },
    block: {
        normal: ({ children }: any) => (
            <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 font-serif leading-tight relative inline-block">
                {children}
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gold rounded-full"></span>
            </h2>
        ),
        h3: ({ children }: any) => <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6 font-serif">{children}</h3>,
        h4: ({ children }: any) => <h4 className="text-xl font-bold text-gray-900 mt-10 mb-4 font-serif">{children}</h4>,
        blockquote: ({ children }: any) => (
            <div className="my-12 p-10 bg-slate-50 rounded-3xl border-l-[6px] border-gold relative overflow-hidden">
                <div className="absolute top-4 left-4 text-gold/20 font-serif text-8xl pointer-events-none">"</div>
                <blockquote className="text-2xl italic text-gray-800 font-serif leading-relaxed relative z-10">
                    {children}
                </blockquote>
            </div>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a href={value.href} rel={rel} className="text-primary font-bold underline decoration-gold/30 hover:decoration-gold transition-all">
                    {children}
                </a>
            );
        },
    },
};

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [commentData, setCommentData] = useState({ name: '', email: '', comment: '' });
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            await client.create({
                _type: 'comment',
                post: {
                    _type: 'reference',
                    _ref: post?._id,
                },
                name: commentData.name,
                email: commentData.email,
                comment: commentData.comment,
                approved: false,
            });
            setSubmitted(true);
            setCommentData({ name: '', email: '', comment: '' });
        } catch (error) {
            console.error('Error submitting comment:', error);
            alert('Failed to submit comment. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        const fetchPost = async () => {
            try {
                // Fetch post by slug OR ID
                const query = `*[_type == "post" && (slug.current == $slug || _id == $slug)][0] {
                    _id,
                    title,
                    mainImage,
                    _createdAt,
                    publishedAt,
                    excerpt,
                    author->{ 
                        name, 
                        "image": profileImage, 
                        role,
                        bio,
                        slug
                    },
                    body,
                    categories[]->{ title, slug },
                    "comments": *[_type == "comment" && post._ref == ^._id && approved == true] | order(_createdAt desc) {
                        _id,
                        name,
                        comment,
                        _createdAt
                    },
                    seo {
                        ...,
                        "keywords": keywords[]->title
                    }
                }`;
                const data = await client.fetch(query, { slug });
                setPost(data);

                if (data) {
                    // Fetch related posts (excluding current one)
                    const relatedQuery = `*[_type == "post" && _id != $id][0...5] {
                        _id,
                        title,
                        mainImage,
                        _createdAt,
                        slug,
                        excerpt
                    }`;
                    const relatedData = await client.fetch(relatedQuery, { id: data._id });
                    setRelatedPosts(relatedData);
                }
            } catch (error) {
                console.error('Error fetching post:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin text-gold" size={48} />
                    <p className="text-gray-500 font-bold tracking-widest uppercase text-xs">Loading Experience...</p>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h1 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Article Not Found</h1>
                <Link to="/insight" className="btn btn-primary">Back to Insights</Link>
            </div>
        );
    }

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.mainImage ? urlFor(post.mainImage).url() : undefined,
        "author": {
            "@type": "Person",
            "name": post.author?.name || "Adonai Estate Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Adonai Estate Limited",
            "logo": {
                "@type": "ImageObject",
                "url": "https://adonaiestatelimited.com/logo.jpg"
            }
        },
        "datePublished": post.publishedAt || post._createdAt,
        "description": post.excerpt || post.title
    };

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title={post.seo?.metaTitle || post.title}
                description={post.seo?.metaDescription || post.excerpt}
                image={post.mainImage ? urlFor(post.mainImage).url() : undefined}
                article={true}
                pathname={`/insight/${post.slug?.current}`}
                schema={blogSchema}
            />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-gold z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Immersive Hero Header */}
            <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
                {post.mainImage ? (
                    <img
                        src={urlFor(post.mainImage).width(1920).height(1080).url()}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-slate-900"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end pb-32">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link
                                to="/insight"
                                className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors mb-6 text-sm font-bold uppercase tracking-widest"
                            >
                                <ArrowLeft size={16} />
                                Back to Insights
                            </Link>

                            {post.categories && post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {post.categories.map((cat, i) => (
                                        <span key={i} className="px-3 py-1 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full text-[10px] font-black uppercase tracking-widest text-gold text-white shadow-sm">
                                            {cat.title}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif leading-tight">
                                {post.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-8 text-white/80">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-white/10 overflow-hidden">
                                        {post.author?.image ? (
                                            <img src={urlFor(post.author.image).width(40).height(40).url()} alt="" />
                                        ) : (
                                            <User size={20} className="text-gold" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-tighter text-white font-bold">{post.author?.name || 'By Adonai Team'}</p>
                                        <p className="text-[10px] text-white/50">{post.author?.role || 'Contributor'}</p>
                                    </div>
                                </div>
                                <div className="h-6 w-[1px] bg-white/10 hidden sm:block"></div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Calendar size={18} className="text-gold" />
                                    {new Date(post.publishedAt || post._createdAt).toLocaleDateString(undefined, {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Clock size={18} className="text-gold" />
                                    <span>5 min read</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Spacer to separate Hero from Content */}
            <div className="h-8 bg-white"></div>

            <div className="container mx-auto px-4 pt-6 pb-16">
                <div className="flex flex-col lg:flex-row gap-20 max-w-7xl mx-auto">

                    {/* Floating Social Sidebar */}
                    <aside className="hidden lg:block w-16">
                        <div className="sticky top-32 flex flex-col gap-4">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                title="Share on Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#1DA1F2] hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                title="Share on Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#0077B5] hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                title="Share on LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(shareUrl);
                                    alert('Link copied to clipboard!');
                                }}
                                className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-white transition-all transform hover:scale-110 active:scale-95"
                                title="Copy Link"
                            >
                                <Copy size={20} />
                            </button>
                            <div className="w-[1px] h-20 bg-gray-100 mx-auto mt-4"></div>
                        </div>
                    </aside>

                    {/* Article Content */}
                    <main className="flex-grow max-w-3xl">
                        <article className="prose prose-xl prose-slate max-w-none">
                            <div className="text-gray-900 leading-[1.8] text-lg md:text-xl font-light">
                                <PortableText
                                    value={post.body || []}
                                    components={portableTextComponents}
                                />
                            </div>
                        </article>

                        {/* Author Bio Card */}
                        {post.author && (
                            <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-slate-50 border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] overflow-hidden flex-shrink-0 shadow-xl border-4 border-white">
                                    {post.author.image ? (
                                        <img src={urlFor(post.author.image).url()} alt={post.author.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-gold/10 flex items-center justify-center text-gold">
                                            <User size={48} />
                                        </div>
                                    )}
                                </div>
                                <div className="relative z-10">
                                    <span className="text-gold font-bold text-xs uppercase tracking-widest mb-1 block">Author</span>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">{post.author.name}</h3>
                                    <p className="text-gray-500 font-medium mb-4">{post.author.role || 'Property Consultant & Market Analyst'}</p>
                                    <p className="text-gray-600 leading-relaxed mb-6 italic">
                                        {post.author.bio || 'Adonai Team Contributor'}
                                    </p>
                                    {post.author.slug && (
                                        <Link to={`/agent/${post.author.slug.current}`} className="text-primary font-bold inline-flex items-center gap-2 group/btn">
                                            View Full Profile <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Comments Section */}
                        <section className="mt-24 pt-16 border-t border-gray-100">
                            <div className="flex items-center gap-3 mb-12">
                                <div className="p-3 bg-gold/10 rounded-2xl text-gold">
                                    <MessageCircle size={24} />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 font-serif">
                                    Comments <span className="text-gray-300 ml-2">{post.comments?.length || 0}</span>
                                </h3>
                            </div>

                            {/* Comment Form */}
                            <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 mb-16">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Comment Submitted!</h4>
                                        <p className="text-gray-600 max-w-sm mx-auto">
                                            Thank you for your feedback. Your comment is awaiting moderation and will be visible shortly.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-8 text-primary font-bold hover:text-gold transition-colors"
                                        >
                                            Submit another comment
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleCommentSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={commentData.name}
                                                    onChange={e => setCommentData({ ...commentData, name: e.target.value })}
                                                    placeholder="e.g. John Doe"
                                                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-gold focus:ring-4 focus:ring-gold/5 outline-none transition-all font-medium"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={commentData.email}
                                                    onChange={e => setCommentData({ ...commentData, email: e.target.value })}
                                                    placeholder="john@example.com"
                                                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-gold focus:ring-4 focus:ring-gold/5 outline-none transition-all font-medium"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-black uppercase tracking-widest text-gray-500 ml-2">Your Comment</label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={commentData.comment}
                                                onChange={e => setCommentData({ ...commentData, comment: e.target.value })}
                                                placeholder="Share your thoughts on this article..."
                                                className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-gold focus:ring-4 focus:ring-gold/5 outline-none transition-all font-medium resize-none"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="btn btn-primary w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-lg group"
                                        >
                                            {submitting ? (
                                                <Loader2 className="animate-spin" size={20} />
                                            ) : (
                                                <>
                                                    Post Comment <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Comments List */}
                            <div className="space-y-8">
                                {post.comments?.length > 0 ? (
                                    post.comments.map((comment) => (
                                        <motion.div
                                            key={comment._id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="flex gap-6 items-start"
                                        >
                                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center flex-shrink-0 text-gold bg-gradient-to-br from-white to-slate-50">
                                                <User size={24} />
                                            </div>
                                            <div className="flex-grow pt-1">
                                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                                    <h4 className="font-bold text-gray-900 text-lg">{comment.name}</h4>
                                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                        {new Date(comment._createdAt).toLocaleDateString(undefined, {
                                                            month: 'short',
                                                            day: 'numeric',
                                                            year: 'numeric'
                                                        })}
                                                    </span>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed text-lg italic">
                                                    "{comment.comment}"
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 px-6 border-2 border-dashed border-gray-100 rounded-[3rem]">
                                        <p className="text-gray-400 font-medium italic">No comments yet. Be the first to share your thoughts!</p>
                                    </div>
                                )}
                            </div>
                        </section>
                    </main>

                    {/* Desktop Sidebar / Ad / CTAs */}
                    <aside className="hidden xl:block w-80">
                        <div className="sticky top-32 space-y-10">
                            {/* Featured Related Articles (Visual Cards) */}
                            {relatedPosts.slice(0, 2).length > 0 && (
                                <div className="space-y-8">
                                    <h4 className="text-xl font-bold text-gray-900 px-2 font-serif">Featured Insights</h4>
                                    {relatedPosts.slice(0, 2).map((related) => {
                                        const words = related.title.split(' ');
                                        const displayTitle = words.length > 3
                                            ? words.slice(0, 3).join(' ') + '...'
                                            : related.title;

                                        return (
                                            <Link
                                                key={related._id}
                                                to={`/insight/${related.slug?.current}`}
                                                className="block p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all group"
                                            >
                                                <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-100">
                                                    {related.mainImage && (
                                                        <img
                                                            src={urlFor(related.mainImage).width(400).height(225).url()}
                                                            alt=""
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    )}
                                                </div>
                                                <h5 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors font-serif">
                                                    {displayTitle}
                                                </h5>
                                                <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed mb-4">
                                                    {related.excerpt}
                                                </p>
                                                <span className="text-xs font-bold text-gold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
                                                    Read More <ArrowRight size={14} />
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}

                            {/* Remaining Related Posts list */}
                            {relatedPosts.slice(2, 5).length > 0 && (
                                <div className="p-8 rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/50 border border-gray-100">
                                    <h4 className="text-xl font-bold text-gray-900 mb-6 font-serif">You Might Also Like</h4>
                                    <div className="space-y-6">
                                        {relatedPosts.slice(2, 5).map((related) => (
                                            <Link key={related._id} to={`/insight/${related.slug?.current}`} className="group block">
                                                <div className="flex gap-4 items-center">
                                                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                                                        {related.mainImage && (
                                                            <img src={urlFor(related.mainImage).width(100).height(100).url()} alt="" className="w-full h-full object-cover" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <h5 className="text-sm font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">{related.title}</h5>
                                                        <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">{new Date(related._createdAt).toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </div>

            {/* Newsletter CTA Bottom (Mobile focused) */}
            <div className="bg-slate-50 py-20">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Ready to invest in your future?</h3>
                    <p className="text-gray-600 mb-10 max-w-xl mx-auto text-lg">
                        Join hundreds of satisfied clients who have secured their dream property through Adonai Estate Limited.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-12 py-5 shadow-2xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95">Talk to a Consultant</a>
                        <a href="mailto:richardadaaze@gmail.com" className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white px-12 py-5 flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95">
                            <Mail size={18} /> Send Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
