import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface EstatePageProps {
    title: string;
    location: string;
    description: string;
    features: string[];
    priceInfo?: string;
    imagePlaceholder: string;
    images?: string[];
    heroImage?: string;
    children?: React.ReactNode;
}

const EstateLayout: React.FC<EstatePageProps> = ({ title, location, description, features, priceInfo, imagePlaceholder, images, heroImage, children }) => {
    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <Helmet>
                <title>{title} | Adonai Estate Limited</title>
                <meta name="description" content={`Explore ${title} in ${location}. ${description}`} />
            </Helmet>

            <div className="container mx-auto px-4">
                {/* Hero / Header */}
                <div className="mb-12">
                    <span className="text-gold font-bold uppercase tracking-wider text-sm">{location}</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2  mb-6">{title}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Main Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full h-[400px] md:h-[500px] bg-slate-100 rounded-3xl overflow-hidden relative mb-16 shadow-2xl"
                >
                    {heroImage || (images && images.length > 0) ? (
                        <img
                            src={heroImage || (images ? images[0] : '')}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                            {imagePlaceholder}
                        </div>
                    )}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Details & Features */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">About this Estate</h2>
                            <div className="prose prose-lg text-gray-600">
                                <p>
                                    Experience the perfect blend of modern living and natural serenity at {title}.
                                    Our carefully planned community offers a peaceful environment with easy access to the city center.
                                    Whether you are looking for a residential plot to build your dream home or a commercial space for business, {title} is the ideal choice.
                                </p>
                                <p className="mt-4">
                                    All lands are litigation-free, demarcated with pillars, and ready for development.
                                    We provide flexible payment plans to suit your budget.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Amenities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-slate-50">
                                        <CheckCircle className="text-gold" size={20} />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Custom Content Injection (e.g., Communities) */}
                        {children}

                        {/* Gallery Section */}
                        {images && images.length > 1 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {images.slice(1).map((img, index) => (
                                        <div key={index} className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-gray-100">
                                            <img
                                                src={img}
                                                alt={`${title} Gallery ${index + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Placeholder Map */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Location Map</h3>
                            <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                                Map Placeholder (Google Maps Integration)
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form / Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 glass-card p-6 md:p-8 bg-white shadow-xl shadow-gray-200/50 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in this Property?</h3>
                            <p className="text-gray-500 text-sm mb-6">Fill out the form below to request a site visit or more information.</p>

                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors" />
                                <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors" />
                                <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors" />
                                <textarea placeholder="Message (Optional)" rows={3} className="w-full p-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors"></textarea>

                                <button className="btn btn-primary w-full shadow-lg shadow-primary/20">
                                    Send Enquiry <ArrowRight size={16} className="ml-2" />
                                </button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-gold/10 rounded-full text-gold">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 block uppercase font-bold">Location</span>
                                        <span className="text-gray-900 font-medium">{location}</span>
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

export default EstateLayout;
