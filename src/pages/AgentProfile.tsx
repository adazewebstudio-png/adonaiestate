import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Globe, Star, MessageSquare, Award, Clock, Users, ShieldCheck, Loader2, Mail } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';

interface Agent {
    _id: string;
    name: string;
    role: string;
    bio: string;
    experience?: string;
    specialization?: string;
    profileImage: any;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
    contactEmail?: string;
}

interface Review {
    _id: string;
    name: string;
    text: string;
    rating: number;
    _createdAt: string;
}

const AgentProfile = () => {
    const [agent, setAgent] = useState<Agent | null>(null);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form states
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState('');
    const [reviewerName, setReviewerName] = useState('');

    useEffect(() => {
        const fetchAgentData = async () => {
            try {
                // Fetch Agent (Richard)
                const agentQuery = `*[_type == "agent" && (slug.current == "richard-adaze" || name match "Richard Adaze*")][0]`;
                const agentData = await client.fetch(agentQuery);
                setAgent(agentData);

                if (agentData) {
                    // Fetch Reviews for this agent
                    const reviewsQuery = `*[_type == "review" && references($id)] | order(_createdAt desc)`;
                    const reviewsData = await client.fetch(reviewsQuery, { id: agentData._id });
                    setReviews(reviewsData);
                }
            } catch (error) {
                console.error('Error fetching agent data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAgentData();
    }, []);

    const handleSubmitReview = async (e: React.FormEvent) => {
        e.preventDefault();
        if (rating === 0) return alert('Please select a rating');
        if (!agent) return;

        setSubmitting(true);
        try {
            await client.create({
                _type: 'review',
                agent: {
                    _type: 'reference',
                    _ref: agent._id,
                },
                name: reviewerName || 'Verified Client',
                text: comment || 'Excellent service!',
                rating: rating,
                approved: false, // Default to false for moderation
            });

            setSubmitted(true);
            setComment('');
            setReviewerName('');
            setRating(0);
        } catch (error) {
            console.error('Error submitting review:', error);
            alert('Failed to submit review. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin text-gold" size={48} />
                    <p className="text-gray-500 font-medium">Loading agent profile...</p>
                </div>
            </div>
        );
    }

    if (!agent) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Agent Not Found</h2>
                    <Link to="/" className="text-gold hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <SEO
                title="Richard Adaze - Head of Marketing"
                description="Meet Richard Adaze, the Head of Marketing at Adonai Estate Limited with over 4 years of experience in real estate marketing."
                image={agent.profileImage ? urlFor(agent.profileImage).width(1200).height(630).url() : "/richard_adaze.jpg"}
                pathname="/agent/richard-adaze"
            />

            <div className="container mx-auto px-4">
                {/* Profile Header Card */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-gray-100">
                    <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-1/3 h-[400px] md:h-auto overflow-hidden relative">
                            <img
                                src={agent.profileImage ? urlFor(agent.profileImage).width(800).height(1000).format('webp').url() : "/richard_adaze.jpg"}
                                alt={agent.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"></div>
                            <div className="absolute bottom-6 left-6 text-white md:hidden">
                                <h1 className="text-3xl font-bold">{agent.name}</h1>
                                <p className="text-gold font-medium">{agent.role}</p>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="md:w-2/3 p-8 md:p-12 relative">
                            <div className="hidden md:block mb-6">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider mb-4">Official Agent Profile</span>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{agent.name}</h1>
                                <p className="text-xl text-gray-500 font-medium">{agent.role}</p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 py-6 border-y border-gray-50">
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-sm mb-1 font-medium">Experience</span>
                                    <span className="text-gray-900 font-bold flex items-center gap-2"><Clock size={16} className="text-gold" /> {agent.experience || '4+ Years'}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-sm mb-1 font-medium">Specialization</span>
                                    <span className="text-gray-900 font-bold flex items-center gap-2"><ShieldCheck size={16} className="text-gold" /> {agent.specialization || 'Real Estate'}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-sm mb-1 font-medium">Verified Status</span>
                                    <span className="text-gray-900 font-bold flex items-center gap-2"><Award size={16} className="text-gold" /> Verified Agent</span>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                {agent.bio}
                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-4">
                                    {agent.facebook && (
                                        <a href={agent.facebook} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                                            <Facebook size={20} />
                                        </a>
                                    )}
                                    {agent.instagram && (
                                        <a href={agent.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all">
                                            <Instagram size={20} />
                                        </a>
                                    )}
                                    {agent.linkedin && (
                                        <a href={agent.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-gray-400 hover:text-blue-700 hover:bg-blue-50 transition-all">
                                            <Linkedin size={20} />
                                        </a>
                                    )}
                                    {agent.website && (
                                        <a href={agent.website} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-50 text-gray-400 hover:text-gold hover:bg-gold/5 transition-all">
                                            <Globe size={20} />
                                        </a>
                                    )}
                                </div>
                                <div className="h-10 w-[1px] bg-gray-100 hidden sm:block"></div>
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="btn btn-primary px-8">Contact Agent</a>
                                    <a href="mailto:richardadaaze@gmail.com" className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white px-8 flex items-center gap-2">
                                        <Mail size={18} /> Send Email
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left/Main Column: Reviews & Statistics */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Reviews Section */}
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <MessageSquare className="text-gold" />
                                    Client Reviews
                                </h2>
                                <div className="flex items-center gap-1 text-gold font-bold">
                                    <Star fill="currentColor" size={18} />
                                    <span>5.0</span>
                                    <span className="text-gray-400 font-medium text-sm ml-1">({reviews.length} Reviews)</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                {reviews.map((review) => (
                                    <div key={review._id} className="p-6 rounded-2xl bg-slate-50 border border-gray-100">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                                <p className="text-xs text-gray-400">{new Date(review._createdAt).toLocaleDateString()}</p>
                                            </div>
                                            <div className="flex gap-0.5 text-gold">
                                                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed italic">"{review.text}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Success Indicators */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">150+</h3>
                                <p className="text-gray-500 text-sm">Satisfied Clients</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
                                    <ShieldCheck size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">400+</h3>
                                <p className="text-gray-500 text-sm">Land Deals Closed</p>
                            </div>
                            <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                                <p className="text-gray-500 text-sm">Trust Rating</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Rate Agent Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm sticky top-32">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Rate Your Experience</h3>
                            <p className="text-gray-500 text-sm mb-6">Your feedback helps us maintain high standards of service.</p>

                            <form onSubmit={handleSubmitReview} className="space-y-6">
                                <div className="flex flex-col items-center py-4 bg-slate-50 rounded-2xl border border-gray-50">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Select Star Rating</span>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                className={`transition-all ${star <= (hover || rating) ? 'text-gold scale-110' : 'text-gray-300'}`}
                                                onClick={() => setRating(star)}
                                                onMouseEnter={() => setHover(star)}
                                                onMouseLeave={() => setHover(0)}
                                            >
                                                <Star size={32} fill={star <= (hover || rating) ? 'currentColor' : 'none'} />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name (Optional)"
                                        value={reviewerName}
                                        onChange={(e) => setReviewerName(e.target.value)}
                                        className="w-full p-4 rounded-xl bg-slate-50 border border-gray-100 focus:border-gold outline-none transition-all placeholder:text-gray-400"
                                    />
                                    <textarea
                                        rows={4}
                                        placeholder="Write your review here..."
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        className="w-full p-4 rounded-xl bg-slate-50 border border-gray-100 focus:border-gold outline-none transition-all placeholder:text-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full btn btn-primary py-4 shadow-lg shadow-primary/20">
                                    Submit Review
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentProfile;
