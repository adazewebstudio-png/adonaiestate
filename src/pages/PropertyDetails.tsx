import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    MapPin,
    Maximize,
    Tag,
    Calendar,
    ArrowLeft,
    Phone,
    Mail,
    CheckCircle2,
    Loader2,
    ShieldCheck,
    Share2,
    Info,
    Home as HomeIcon,
    Layers,
    Star
} from 'lucide-react';
import { client, urlFor } from '../lib/sanity';
import SEO from '../components/SEO';
import { PortableText } from '@portabletext/react';

interface Property {
    _id: string;
    title: string;
    location: string;
    region?: string;
    district?: string;
    area?: string;
    price: string;
    size: string;
    type: string;
    category?: string;
    mainImage: any;
    propertyImages?: any[];
    fullDescription?: any[]; // Portable Text block array
    tag?: string;
    _createdAt: string;
    // New Off-Plan Fields
    floorPlans?: any[];
    roomDimensions?: { room: string; size: string }[];
    features?: string[];
    brochure?: any;
}

const PropertyDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const query = `*[_type == "property" && _id == $id][0] {
                    _id, title, location, region, district, area, price, size, type, category, mainImage, propertyImages, fullDescription, tag, _createdAt,
                    floorPlans, roomDimensions, features
                }`;
                const data = await client.fetch(query, { id });
                setProperty(data);
            } catch (error) {
                console.error('Error fetching property details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin text-gold" size={48} />
                    <p className="text-gray-500 font-bold tracking-widest uppercase text-xs">Fetching Details...</p>
                </div>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
                    <Info size={32} />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Property Not Found</h1>
                <p className="text-gray-500 mb-8">The property you are looking for might have been sold or removed.</p>
                <Link to="/listings" className="btn btn-primary">Back to Listings</Link>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <SEO
                title={property.title}
                description={property.fullDescription ? 'View details for this property.' : `Litigation-free ${property.type} for sale in ${property.location}. Price: ${property.price}. Size: ${property.size}.`}
                image={property.mainImage ? urlFor(property.mainImage).url() : undefined}
                pathname={`/listings/${property._id}`}
            />

            <div className="container mx-auto px-4">
                {/* Header / Breadcrumbs */}
                <div className="mb-8">
                    <Link to="/listings" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-bold mb-6 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 bg-gold/10 text-gold text-[10px] font-black uppercase tracking-widest rounded-full border border-gold/20">
                                    {property.category || 'Real Estate'}
                                </span>
                                {property.tag && (
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-full border border-primary/20">
                                        {property.tag}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] font-serif leading-tight">{property.title}</h1>
                            <p className="text-gray-500 flex items-center gap-2 mt-2 text-lg">
                                <MapPin size={20} className="text-gold" /> {property.location}{property.area ? `, ${property.area}` : ''}
                            </p>
                        </div>
                        <div className="text-left md:text-right">
                            <span className="text-gray-400 text-sm font-bold uppercase tracking-widest block mb-1">Asking Price</span>
                            <span className="text-3xl md:text-4xl font-bold text-primary">{property.price}</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Media & Details */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Featured Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-slate-50 relative aspect-video"
                        >
                            {property.mainImage ? (
                                <img
                                    src={urlFor(property.mainImage).width(1200).height(675).url()}
                                    alt={property.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-300">
                                    <HomeIcon size={80} strokeWidth={1} />
                                </div>
                            )}
                        </motion.div>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-gray-100 text-center">
                                <Maximize className="mx-auto text-gold mb-3" size={24} />
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Land Size</span>
                                <span className="text-[var(--color-primary)] font-bold">{property.size}</span>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-gray-100 text-center">
                                <Layers className="mx-auto text-gold mb-3" size={24} />
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Type</span>
                                <span className="text-[var(--color-primary)] font-bold">{property.type}</span>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-gray-100 text-center">
                                <Calendar className="mx-auto text-gold mb-3" size={24} />
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Listed On</span>
                                <span className="text-[var(--color-primary)] font-bold">{new Date(property._createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-gray-100 text-center">
                                <ShieldCheck className="mx-auto text-gold mb-3" size={24} />
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Verification</span>
                                <span className="text-[var(--color-primary)] font-bold">100% Genuine</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 font-serif">Description & Features</h2>
                            <div className="prose prose-lg text-gray-600 max-w-none leading-relaxed">
                                {property.fullDescription ? (
                                    <PortableText
                                        value={property.fullDescription}
                                        components={{
                                            block: {
                                                h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 font-serif">{children}</h1>,
                                                h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-serif">{children}</h2>,
                                                h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3 font-serif">{children}</h3>,
                                                h4: ({ children }) => <h4 className="text-lg font-bold text-gray-900 mt-6 mb-2 font-serif">{children}</h4>,
                                                normal: ({ children }) => <p className="mb-4 text-gray-600 leading-relaxed">{children}</p>,
                                                blockquote: ({ children }) => <blockquote className="border-l-4 border-gold pl-4 italic text-gray-700 my-6 bg-slate-50 py-2 pr-4 rounded-r-lg">{children}</blockquote>,
                                            },
                                            list: {
                                                bullet: ({ children }) => <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">{children}</ul>,
                                                number: ({ children }) => <ol className="list-decimal pl-5 mb-6 space-y-2 text-gray-600">{children}</ol>,
                                            },
                                            listItem: {
                                                bullet: ({ children }) => <li className="pl-1">{children}</li>,
                                                number: ({ children }) => <li className="pl-1">{children}</li>,
                                            },
                                            marks: {
                                                strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                                                em: ({ children }) => <em className="italic text-gray-800">{children}</em>,
                                                link: ({ value, children }) => {
                                                    const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
                                                    return (
                                                        <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : undefined} className="text-gold hover:underline font-medium">
                                                            {children}
                                                        </a>
                                                    )
                                                },
                                            }
                                        }}
                                    />
                                ) : (
                                    <p>This premium property is located in the prime area of {property.location}.</p>
                                )}

                                {/* Features List (Dynamic) */}
                                {property.features && property.features.length > 0 ? (
                                    <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
                                        {property.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <CheckCircle2 className="text-gold flex-shrink-0" size={20} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <ul className="mt-8 space-y-3 pl-0 list-none">
                                        <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={20} /> Properly registered and documented</li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={20} /> Clearly demarcated boundaries</li>
                                        <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={20} /> Litigation-free guarantee</li>
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Room Dimensions (Off-Plan) */}
                        {property.roomDimensions && property.roomDimensions.length > 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Room Dimensions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {property.roomDimensions.map((room, idx) => (
                                        <div key={idx} className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-gray-100">
                                            <span className="font-bold text-gray-700">{room.room}</span>
                                            <span className="text-gold font-bold">{room.size}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Floor Plans (Off-Plan) */}
                        {property.floorPlans && property.floorPlans.length > 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 font-serif">Floor Plans</h3>
                                <div className="space-y-8">
                                    {property.floorPlans.map((plan: any, i: number) => (
                                        <div key={i} className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
                                            <h4 className="font-bold text-gray-900 mb-4 ml-2">{plan.caption || `Floor Plan ${i + 1}`}</h4>
                                            <div className="rounded-2xl overflow-hidden bg-slate-50">
                                                <img
                                                    src={urlFor(plan).width(1200).url()}
                                                    alt={plan.caption || "Floor Plan"}
                                                    className="w-full h-auto object-contain"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Image Gallery */}
                        {property.propertyImages && property.propertyImages.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 font-serif">Property Gallery</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {property.propertyImages.map((img: any, i: number) => (
                                        <div key={i} className="rounded-3xl overflow-hidden border border-gray-100 aspect-video group relative">
                                            <img
                                                src={urlFor(img).width(800).height(600).url()}
                                                alt={img.alt || `Gallery ${i + 1}`}
                                                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                            />
                                            {img.caption && (
                                                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                                                    <p className="text-white text-xs font-medium text-center">{img.caption}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Agent & CTA */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-32 space-y-8">
                            {/* Agent Card */}
                            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
                                <div className="text-center mb-6">
                                    <div className="relative inline-block">
                                        <img
                                            src="/richard_adaze.jpg"
                                            alt="Richard Adaze"
                                            className="w-24 h-24 rounded-[2rem] object-cover mx-auto mb-4 border-4 border-white shadow-lg"
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-gold text-white p-1.5 rounded-full shadow-md">
                                            <ShieldCheck size={16} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Richard Adaze</h3>
                                    <p className="text-gold text-xs font-bold uppercase tracking-widest mt-1">Property Portfolio Manager</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <a
                                        href="tel:+233599007786"
                                        className="w-full flex items-center justify-center gap-3 py-4 bg-white text-gray-700 font-bold rounded-2xl border border-gray-100 shadow-sm hover:border-gold transition-all"
                                    >
                                        <Phone size={18} className="text-gold" /> +233 59 900 7786
                                    </a>
                                    <a
                                        href={`https://wa.me/233599007786?text=${encodeURIComponent(`Hello Richard, I am interested in the property: ${property.title} (ID: ${property._id}). Please provide more details.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full flex items-center justify-center gap-3 py-4 bg-green-500 text-white font-bold rounded-2xl shadow-lg shadow-green-500/20 hover:bg-green-600 transition-all"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                </div>

                                <Link
                                    to="/agent/richard-adaze"
                                    className="block text-center text-sm font-bold text-primary hover:text-gold transition-colors"
                                >
                                    View Agent Profile
                                </Link>

                                {/* Rate Agent Button */}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <p className="text-xs text-gray-400 text-center mb-3">Had a great experience?</p>
                                    <Link
                                        to="/agent/richard-adaze#rate-agent"
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gold/10 text-gold hover:bg-gold hover:text-white transition-all font-bold text-sm"
                                    >
                                        <Star size={16} /> Rate Our Agent
                                    </Link>
                                </div>
                            </div>

                            {/* Share & Info */}
                            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm space-y-6">
                                <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">Share this Property</h3>

                                <div className="space-y-3">
                                    <button
                                        onClick={() => {
                                            const message = `Check out this property from Adonai Estate: ${property.title} (ID: ${property._id}). ${window.location.href}`;
                                            window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
                                        }}
                                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 text-gray-600 hover:text-green-600 transition-colors font-medium border border-transparent hover:border-green-100"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            {/* WhatsApp Icon SVG */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /></svg>
                                        </div>
                                        <span>Share on WhatsApp</span>
                                    </button>

                                    <button
                                        onClick={() => {
                                            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
                                        }}
                                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors font-medium border border-transparent hover:border-blue-100"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                            {/* Facebook Icon SVG */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                        </div>
                                        <span>Share on Facebook</span>
                                    </button>

                                    <button
                                        onClick={() => {
                                            window.location.href = `mailto:?subject=Check out this property: ${property.title}&body=I found this property on Adonai Estate and thought you might be interested:%0D%0A%0D%0A${property.title} (ID: ${property._id})%0D%0A${window.location.href}`;
                                        }}
                                        className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors font-medium border border-transparent hover:border-gray-200"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <span>Share via Email</span>
                                    </button>
                                </div>

                                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mt-6 pt-4">
                                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Property ID</div>
                                    <div className="text-gray-900 font-mono font-medium text-sm flex items-center gap-2">
                                        {property._id}
                                        <button
                                            onClick={() => {
                                                navigator.clipboard.writeText(property._id);
                                                alert('Property ID copied!');
                                            }}
                                            className="text-gold hover:text-primary transition-colors"
                                            title="Copy ID"
                                        >
                                            <Layers size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
