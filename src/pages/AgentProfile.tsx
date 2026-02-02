import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Globe, Star, MessageSquare, Award, Clock, Users, ShieldCheck, Loader2, Mail, CheckCircle, Target, Briefcase, Share2 } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';
import { AGENT_INFO } from '../constants/contact';

// User-provided static content as fallback
const FALLBACK_PROFILE = {
    name: "Richard Adaze",
    role: "Head of Marketing & Public Relations",
    specialization: "Marketing Strategy & Public Relations",
    experience: "4+ Years",
    status: "Verified Company Representative",
    bio: [
        "Richard Adaze leads Marketing and Public Relations at Adonai Estate Limited, where he is responsible for the company’s public positioning, market education, and trust architecture.",
        "His work focuses on structure before scale, systems before noise, and trust before growth. Rather than approaching real estate marketing as promotion alone, Richard oversees how Adonai Estate is understood, represented, and trusted across all channels.",
        "With over four years of hands-on experience in real estate marketing, business systems, and digital infrastructure, he brings a systems-driven approach to market engagement — helping buyers make informed decisions and helping the company grow sustainably.",
        "At Adonai Estate Limited, Richard works closely with leadership to ensure that communication, branding, and market strategy reflect the company’s long-term vision as a modern, dependable real estate institution."
    ],
    responsibilities: [
        "Structuring clear, credible market narratives",
        "Ensuring consistency across public communication",
        "Supporting buyer confidence through education and clarity",
        "Protecting institutional reputation and trust"
    ],
    founderNote: "Richard is also the founder of Adaze Web Studio, where he designs digital systems for businesses that want to grow properly. This background allows him to bridge market insight and execution, ensuring Adonai Estate’s marketing systems are both effective and durable.",
};

interface Agent {
    _id: string;
    name: string;
    role: string;
    bio?: string; // Old single text field
    fullBio?: string[]; // New array field
    shortBio?: string;
    experience?: string;
    specialization?: string;
    status?: string;
    responsibilities?: string[];
    founderNote?: string;
    profileImage: any;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    website?: string;
    contactEmail?: string;
    phone?: string;
    whatsapp?: string;
    satisfiedClients?: number;
    dealsClosed?: number;
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

    // Form states
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState('');
    const [reviewerName, setReviewerName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Agent (Richard)
                const agentQuery = `*[_type == "agent" && (slug.current == "richard-adaze" || name match "Richard Adaze*")][0]`;
                const agentData = await client.fetch(agentQuery);
                setAgent(agentData);

                if (agentData) {
                    // Fetch only approved reviews for this agent
                    const reviewsQuery = `*[_type == "review" && references($id) && approved == true] | order(_createdAt desc)`;
                    const reviewsData = await client.fetch(reviewsQuery, { id: agentData._id });
                    setReviews(reviewsData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Scroll to rate-agent section if hash is present
    const location = useLocation();
    useEffect(() => {
        if (location.hash === '#rate-agent' && !loading) {
            const element = document.getElementById('rate-agent');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, [location.hash, loading]);

    const handleSubmitReview = async (e: React.FormEvent) => {
        e.preventDefault();
        if (rating === 0) return alert('Please select a rating');
        if (!reviewerName.trim()) return alert('Please enter your name');
        if (!agent) return alert('Review system unavailable.');

        setSubmitting(true);
        try {
            const result = await client.create({
                _type: 'review',
                agent: {
                    _type: 'reference',
                    _ref: agent._id,
                },
                name: reviewerName.trim(),
                text: comment.trim() || 'Great experience!',
                rating: rating,
                approved: true, // Auto-approve for real-time display
            });

            // Update UI immediately (Optimistic-ish, using returned ID)
            const newReview: Review = {
                _id: result._id,
                name: reviewerName.trim(),
                text: comment.trim() || 'Great experience!',
                rating: rating,
                _createdAt: new Date().toISOString()
            };
            setReviews([newReview, ...reviews]);

            alert('Thank you! Your review has been posted.');
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
                    <p className="text-gray-500 font-medium">Loading profile...</p>
                </div>
            </div>
        );
    }

    // Prepare display data: Priority = Sanity Data -> Fallback Data
    const displayProfile = {
        name: agent?.name || FALLBACK_PROFILE.name,
        role: agent?.role || FALLBACK_PROFILE.role,
        image: agent?.profileImage ? urlFor(agent?.profileImage).width(800).height(1000).format('webp').url() : "/richard_adaze.jpg",
        specialization: agent?.specialization || FALLBACK_PROFILE.specialization,
        experience: agent?.experience || FALLBACK_PROFILE.experience,
        status: agent?.status || FALLBACK_PROFILE.status,
        // If fullBio exists in Sanity, use it. Else if old bio exists, wrap in array. Else fallback.
        bio: agent?.fullBio && agent.fullBio.length > 0
            ? agent.fullBio
            : (agent?.bio ? [agent.bio] : FALLBACK_PROFILE.bio),
        responsibilities: agent?.responsibilities && agent.responsibilities.length > 0
            ? agent.responsibilities
            : FALLBACK_PROFILE.responsibilities,
        founderNote: agent?.founderNote || FALLBACK_PROFILE.founderNote,
        // Socials
        facebook: agent?.facebook,
        instagram: agent?.instagram,
        linkedin: agent?.linkedin,
        website: agent?.website,
    };

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <SEO
                title={`${displayProfile.name} - ${displayProfile.role}`}
                description="Verified Company Representative at Adonai Estate Limited."
                image={displayProfile.image}
                pathname="/agent/richard-adaze"
            />

            <div className="container mx-auto px-4">
                {/* Profile Header Card */}
                <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden mb-12 border border-gray-100">
                    <div className="flex flex-col lg:flex-row">
                        {/* Image Section */}
                        <div className="lg:w-5/12 h-[500px] lg:h-auto overflow-hidden relative group">
                            <img
                                src={displayProfile.image}
                                alt={displayProfile.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent lg:hidden"></div>
                            <div className="absolute bottom-6 left-6 text-white lg:hidden">
                                <h1 className="text-3xl font-bold">{displayProfile.name}</h1>
                                <p className="text-gold font-medium text-sm mt-1">{displayProfile.role}</p>
                            </div>
                        </div>

                        {/* Info Section */}
                        <div className="lg:w-7/12 p-8 md:p-16 relative flex flex-col justify-center">
                            <div className="hidden lg:block mb-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold text-xs font-black uppercase tracking-widest mb-4">
                                    <ShieldCheck size={14} />
                                    {displayProfile.status}
                                </div>
                                <h1 className="text-5xl font-bold text-gray-900 mb-2 font-serif">{displayProfile.name}</h1>
                                <p className="text-xl text-primary font-medium">{displayProfile.role}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 py-8 border-y border-gray-100">
                                <div className="space-y-1">
                                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block">Specialization</span>
                                    <span className="text-gray-900 font-bold flex items-center gap-2">
                                        <Briefcase size={18} className="text-gold" />
                                        {displayProfile.specialization}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider block">Experience</span>
                                    <span className="text-gray-900 font-bold flex items-center gap-2">
                                        <Clock size={18} className="text-gold" />
                                        {displayProfile.experience}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4">
                                <a href={`tel:${agent?.phone || AGENT_INFO.phone.primary}`} className="btn btn-primary flex-1 w-full sm:w-auto justify-center">
                                    Contact Adaze
                                </a>
                                <a href={`https://wa.me/${agent?.whatsapp || AGENT_INFO.phone.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn bg-[#25D366] text-white hover:bg-[#128C7E] border-none flex-1 w-full sm:w-auto justify-center gap-2">
                                    <MessageSquare size={18} /> WhatsApp
                                </a>
                                <a href={`mailto:${agent?.contactEmail || AGENT_INFO.email}`} className="btn btn-outline border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white flex-1 w-full sm:w-auto justify-center gap-2">
                                    <Mail size={18} /> Email
                                </a>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    {agent?.facebook && (
                                        <a href={agent.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                                            <Facebook size={18} />
                                        </a>
                                    )}
                                    {agent?.instagram && (
                                        <a href={agent.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-all">
                                            <Instagram size={18} />
                                        </a>
                                    )}
                                    {agent?.linkedin && (
                                        <a href={agent.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 text-gray-400 hover:text-blue-700 hover:bg-blue-50 transition-all">
                                            <Linkedin size={18} />
                                        </a>
                                    )}
                                    {agent?.website && (
                                        <a href={agent.website} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-50 text-gray-400 hover:text-gold hover:bg-gold/5 transition-all">
                                            <Globe size={18} />
                                        </a>
                                    )}
                                </div>

                                <button
                                    onClick={() => {
                                        if (navigator.share) {
                                            navigator.share({
                                                title: `Recommend ${displayProfile.name}`,
                                                text: `Check out ${displayProfile.name} - ${displayProfile.role} at Adonai Estate.`,
                                                url: window.location.href,
                                            }).catch(console.error);
                                        } else {
                                            navigator.clipboard.writeText(window.location.href);
                                            alert('Profile link copied to clipboard!');
                                        }
                                    }}
                                    className="text-sm font-bold text-gold hover:text-gold/80 flex items-center gap-2"
                                >
                                    <Share2 size={16} /> Recommend Adaze
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left/Main Column: Bio & Content */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Bio Section */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8 font-serif">About Adaze</h2>

                            <div className="text-gray-600 space-y-6 text-lg leading-relaxed">
                                {displayProfile.bio.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>

                            <div className="my-10 p-8 bg-slate-50 rounded-3xl border border-gray-100">
                                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <Target className="text-gold" size={20} />
                                    Key Responsibilities
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {displayProfile.responsibilities.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative p-8 bg-gray-900 rounded-3xl text-white overflow-hidden mb-12">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-xl font-bold mb-4 text-gold font-serif">A Note on Systems</h3>
                                <p className="text-gray-300 leading-relaxed italic">
                                    "{displayProfile.founderNote}"
                                </p>
                            </div>

                            {/* Success Indicators (Restored) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
                                        <Users size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{agent?.satisfiedClients || 0}+</h3>
                                    <p className="text-gray-500 text-sm font-medium">Satisfied Clients</p>
                                </div>
                                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{agent?.dealsClosed || 0}+</h3>
                                    <p className="text-gray-500 text-sm font-medium">Land Deals Closed</p>
                                </div>
                                <div className="text-center p-6 bg-slate-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold mx-auto mb-4">
                                        <Award size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-1">
                                        {reviews.length > 0
                                            ? `${Math.round((reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length / 5) * 100)}%`
                                            : 'N/A'}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-medium">Trust Rating</p>
                                </div>
                            </div>
                        </div>

                        {/* Reviews Section */}
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                    <MessageSquare className="text-gold" />
                                    Client & Partner Reviews
                                </h2>
                                {reviews.length > 0 && (
                                    <div className="flex items-center gap-1 text-gold font-bold bg-gold/5 px-3 py-1 rounded-lg">
                                        <Star fill="currentColor" size={16} />
                                        <span>{(reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)}</span>
                                    </div>
                                )}
                            </div>

                            {loading ? (
                                <div className="py-12 flex justify-center">
                                    <Loader2 className="animate-spin text-gray-300" />
                                </div>
                            ) : reviews.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {reviews.map((review) => (
                                        <div key={review._id} className="p-6 rounded-3xl bg-slate-50 border border-gray-100">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                                    <p className="text-xs text-gray-400">{new Date(review._createdAt).toLocaleDateString()}</p>
                                                </div>
                                                <div className="flex gap-0.5 text-gold">
                                                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed text-sm italic">"{review.text}"</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-gray-100">
                                    <p className="text-gray-500">No reviews displayed yet.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Rate Agent Form */}
                    <div className="lg:col-span-4">
                        <div id="rate-agent" className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl shadow-gray-200/50 sticky top-32">
                            <div className="mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                                    <Star size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Worked with Adaze?</h3>
                                <p className="text-gray-500 text-sm">
                                    Share your experience working with the marketing team or Richard directly.
                                </p>
                            </div>

                            <form onSubmit={handleSubmitReview} className="space-y-5">
                                <div className="flex flex-col items-center py-6 bg-slate-50 rounded-2xl border border-gray-50">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Tap to Rate</span>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                className={`transition-all duration-200 ${star <= (hover || rating) ? 'text-gold scale-110' : 'text-gray-200'}`}
                                                onClick={() => setRating(star)}
                                                onMouseEnter={() => setHover(star)}
                                                onMouseLeave={() => setHover(0)}
                                            >
                                                <Star size={28} fill={star <= (hover || rating) ? 'currentColor' : 'currentColor'} />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="Your Name *"
                                        value={reviewerName}
                                        onChange={(e) => setReviewerName(e.target.value)}
                                        required
                                        className="w-full p-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-gold outline-none transition-all placeholder:text-gray-400 font-medium text-sm"
                                    />
                                    <textarea
                                        rows={4}
                                        placeholder="How was your experience including clarity of communication?..."
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        className="w-full p-4 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-gold outline-none transition-all placeholder:text-gray-400 font-medium text-sm resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    className="w-full btn btn-primary py-4 rounded-xl shadow-lg shadow-primary/20 text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={submitting || !agent}
                                >
                                    {submitting ? 'Submitting...' : 'Submit Review'}
                                </button>
                                {!agent && <p className="text-xs text-red-400 text-center">Reviews unavailable (Connection Issue)</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgentProfile;
