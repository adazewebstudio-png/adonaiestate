import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, CheckCircle, ArrowRight, ShieldCheck, Hotel, Map, Zap, TreePine, GraduationCap, Mountain, School, Car, Layout, Utensils, Wifi, Activity, X, Mail, MessageCircle } from 'lucide-react';

const getFeatureIcon = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('security') || t.includes('safe')) return <ShieldCheck size={24} />;
    if (t.includes('hotel') || t.includes('restaurant')) return <Hotel size={24} />;
    if (t.includes('golf') || t.includes('sport') || t.includes('gym')) return <Activity size={24} />;
    if (t.includes('school') || t.includes('university') || t.includes('education')) return <GraduationCap size={24} />;
    if (t.includes('water') || t.includes('light') || t.includes('power') || t.includes('electr')) return <Zap size={24} />;
    if (t.includes('green') || t.includes('nature') || t.includes('park') || t.includes('garden')) return <TreePine size={24} />;
    if (t.includes('mountain') || t.includes('view') || t.includes('scener')) return <Mountain size={24} />;
    if (t.includes('road') || t.includes('access') || t.includes('transport')) return <Car size={24} />;
    if (t.includes('layout') || t.includes('demarcated')) return <Layout size={24} />;
    if (t.includes('plot') || t.includes('land')) return <Map size={24} />;
    if (t.includes('wifi') || t.includes('internet')) return <Wifi size={24} />;
    if (t.includes('food') || t.includes('dining')) return <Utensils size={24} />;
    return <CheckCircle size={24} />;
};

interface EstatePageProps {
    title: string;
    location: string;
    description: string;
    features: string[];
    priceInfo?: string;
    imagePlaceholder: string;
    images?: string[];
    heroImage?: string;
    isUpcoming?: boolean;
    upcomingLabel?: string;
    upcomingHeroTitle?: string;
    upcomingOfferings?: { name: string, status?: string }[];
    customHero?: React.ReactNode;
    contentPadding?: string;
    aboutContent?: React.ReactNode;
    children?: React.ReactNode;
}

const EstateLayout: React.FC<EstatePageProps> = ({
    title, location, description, features, priceInfo, imagePlaceholder, images, heroImage,
    isUpcoming, upcomingLabel, upcomingHeroTitle, upcomingOfferings, customHero, contentPadding, aboutContent, children
}) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'b5034291-8a43-4923-a84a-1ed1a6c6028a',
                    subject: `New Enquiry: ${title} - ${location}`,
                    from_name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message || 'No additional message provided.',
                    estate: title,
                    location: location,
                    to_email: 'richardadaaze@gmail.com'
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitSuccess(true);
                setFormData({ fullName: '', phone: '', email: '', message: '' });
                setTimeout(() => setSubmitSuccess(false), 5000);
            } else {
                alert('Something went wrong. Please try again or contact us directly.');
            }
        } catch (error) {
            console.error('Email submission error:', error);
            alert('Failed to send enquiry. Please try again or contact us directly via WhatsApp or Email.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const pageUrl = `https://adonaiestateltd.com/estates/${title.toLowerCase().replace(/\s+/g, '-')}`;
    const ogImage = heroImage ? `https://adonaiestateltd.com${heroImage}` : (images && images[0] ? `https://adonaiestateltd.com${images[0]}` : 'https://adonaiestateltd.com/airport_golf_city_main.jpg');
    const fullDescription = `Explore ${title} in ${location}. ${description}`;

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>{title} | Adonai Estate Limited</title>
                <meta name="description" content={fullDescription} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:title" content={`${title} | Adonai Estate Limited`} />
                <meta property="og:description" content={fullDescription} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:site_name" content="Adonai Estate Limited" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={pageUrl} />
                <meta name="twitter:title" content={`${title} | Adonai Estate Limited`} />
                <meta name="twitter:description" content={fullDescription} />
                <meta name="twitter:image" content={ogImage} />
            </Helmet>

            {customHero ? (
                customHero
            ) : isUpcoming ? (
                /* High Impact Upcoming Hero */
                <div className="relative pt-32 pb-24 md:pt-40 md:pb-40 bg-primary text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-4xl mx-auto"
                        >
                            <span className="text-gold font-bold tracking-[0.3em] uppercase mb-6 block text-sm md:text-base">
                                {upcomingLabel || 'Upcoming Milestone'}
                            </span>
                            <h1 className="text-4xl md:text-7xl font-bold mb-8 font-serif leading-tight text-white">
                                {upcomingHeroTitle || title}
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-16">
                                {description}
                            </p>

                            {upcomingOfferings && upcomingOfferings.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                                    {upcomingOfferings.map((offering, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2 + idx * 0.1 }}
                                            className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors"
                                        >
                                            <div className="flex-shrink-0 w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center">
                                                <CheckCircle size={14} className="text-gold" />
                                            </div>
                                            <span className="font-bold text-left text-sm md:text-base">{offering.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            ) : (
                /* Regular Estate Hero */
                <div className="pt-24 md:pt-32 pb-12">
                    <div className="container mx-auto px-4">
                        <div className="mb-12">
                            <span className="text-gold font-bold uppercase tracking-wider text-sm">{location}</span>
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2 mb-6 leading-tight">{title}</h1>
                            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="w-full h-[400px] md:h-[600px] bg-slate-100 rounded-[3rem] overflow-hidden relative mb-16 shadow-2xl cursor-zoom-in"
                            onClick={() => setSelectedImage(heroImage || (images ? images[0] : null))}
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
                    </div>
                </div>
            )}

            <div className={`container mx-auto px-4 ${contentPadding || 'py-24'}`}>
                {isUpcoming && (heroImage || (images && images.length > 0)) && (
                    /* Display image below hero for upcoming projects */
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full h-[300px] md:h-[500px] -mt-20 relative z-20 rounded-[3rem] overflow-hidden shadow-2xl mb-20 cursor-zoom-in"
                        onClick={() => setSelectedImage(heroImage || (images ? images[0] : null))}
                    >
                        <img
                            src={heroImage || (images ? images[0] : '')}
                            alt={title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Details & Features */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">About this Estate</h2>
                            {aboutContent ? (
                                aboutContent
                            ) : (
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
                            )}
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features & Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="p-3.5 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                            {getFeatureIcon(feature)}
                                        </div>
                                        <span className="text-gray-700 font-medium leading-relaxed text-sm">{feature}</span>
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
                                        <div
                                            key={index}
                                            className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-gray-100 cursor-zoom-in"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <img
                                                src={img}
                                                alt={`${title} Gallery ${index + 1}`}
                                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
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

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Full Name"
                                    required
                                    className="w-full p-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number"
                                    required
                                    className="w-full p-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Email Address"
                                    required
                                    className="w-full p-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Message (Optional)"
                                    rows={3}
                                    className="w-full p-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                ></textarea>

                                {submitSuccess && (
                                    <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm font-medium flex items-center gap-2">
                                        <CheckCircle size={16} />
                                        Your email client should have opened. Send the email to complete your enquiry!
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full shadow-lg shadow-primary/20 disabled:opacity-70"
                                >
                                    {isSubmitting ? 'Opening Email...' : 'Send Enquiry'}
                                    <ArrowRight size={16} className="ml-2" />
                                </button>
                                <div className="mt-6 flex flex-col gap-3">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t border-gray-100"></div>
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-white px-2 text-gray-400 font-bold tracking-widest">Or Instant Contact</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3">
                                        <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all font-bold text-sm">
                                            <MessageCircle size={18} /> WhatsApp
                                        </a>
                                        <a href="mailto:richardadaaze@gmail.com" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/5 text-primary hover:bg-primary hover:text-white transition-all font-bold text-sm">
                                            <Mail size={18} /> Email
                                        </a>
                                    </div>
                                </div>
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

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage}
                            alt="Full screen view"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};

export default EstateLayout;
