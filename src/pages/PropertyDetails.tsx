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
    Layers
} from 'lucide-react';
import { client, urlFor } from '../lib/sanity';
import SEO from '../components/SEO';

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
    gallery?: any[];
    description?: string;
    tag?: string;
    _createdAt: string;
}

const PropertyDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const query = `*[_type == "property" && _id == $id][0] {
                    _id, title, location, region, district, area, price, size, type, category, mainImage, gallery, description, tag, _createdAt
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
                description={property.description || `Litigation-free ${property.type} for sale in ${property.location}. Price: ${property.price}. Size: ${property.size}.`}
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
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif leading-tight">{property.title}</h1>
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
                                <span className="text-gray-900 font-bold">{property.size}</span>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-gray-100 text-center">
                                <Layers className="mx-auto text-gold mb-3" size={24} />
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Type</span>
                                <span className="text-gray-900 font-bold">{property.type}</span>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-gray-100 text-center">
                                <Calendar className="mx-auto text-gold mb-3" size={24} />
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Listed On</span>
                                <span className="text-gray-900 font-bold">{new Date(property._createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-[2rem] border border-gray-100 text-center">
                                <ShieldCheck className="mx-auto text-gold mb-3" size={24} />
                                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest block mb-1">Verification</span>
                                <span className="text-gray-900 font-bold">100% Genuine</span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Description & Features</h2>
                            <div className="prose prose-lg text-gray-600 max-w-none leading-relaxed">
                                {property.description ? (
                                    <p>{property.description}</p>
                                ) : (
                                    <p>This premium property is located in the prime area of {property.location}. This land reflects Adonai Estate's commitment to litigation-free and secure property ownership. Perfect for residential or commercial development, it offers excellent road access and proximity to essential services.</p>
                                )}
                                <ul className="mt-8 space-y-3 pl-0 list-none">
                                    <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={20} /> Properly registered and documented</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={20} /> Clearly demarcated boundaries</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={20} /> Litigation-free guarantee</li>
                                    <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={20} /> Ready for immediate development</li>
                                </ul>
                            </div>
                        </div>

                        {/* Image Gallery */}
                        {property.gallery && property.gallery.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Property Gallery</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {property.gallery.map((img: any, i: number) => (
                                        <div key={i} className="rounded-3xl overflow-hidden border border-gray-100 aspect-video">
                                            <img
                                                src={urlFor(img).width(600).height(400).url()}
                                                alt={`Gallery ${i + 1}`}
                                                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                            />
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
                                        href="https://wa.me/233599007786"
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
                            </div>

                            {/* Share & Info */}
                            <div className="px-4 space-y-6">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Property link copied!');
                                    }}
                                    className="w-full flex items-center justify-between text-gray-500 font-bold hover:text-gold transition-colors py-2 border-b border-gray-100"
                                >
                                    <span className="flex items-center gap-2"><Share2 size={18} /> Share this property</span>
                                    <ArrowLeft size={16} className="rotate-180" />
                                </button>
                                <div className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
                                    <p className="text-xs text-gray-600 italic leading-relaxed">
                                        "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world."
                                    </p>
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
