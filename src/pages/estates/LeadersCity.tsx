import React, { useState } from 'react';
import EstateLayout from '../../components/EstateLayout';
import { Landmark, Building2, Briefcase, CheckCircle2, TrendingUp, MapPin, ShoppingBag, Settings, Car, Trophy, Sparkles, X, FileText, ArrowRight, Loader2, Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO, AGENT_INFO } from '../../constants/contact';

interface InterestFormData {
    fullName: string;
    email: string;
    phone: string;
    propertyCategory: string;
    propertyType: string;
}

const propertyOptions: Record<string, string[]> = {
    'Aspire Apartments': ['1-Bedroom Studio', '1-Bedroom Apartment'],
    'Aspire Homes': ['1-Bedroom Studio House', '1-Bedroom House'],
    'Heritage Park': ['Single-storey Two-bedroom House', 'Single-storey Three-bedroom House'],
    'Summit Gardens': ['Two-storey Two-Bedroom House', 'Two-storey Three-Bedroom House'],
    'Royal Crest': ['Two-storey Four-Bedroom House', 'Three-storey Five-bedroom House'],
    'Horizon Enclave': ['Standard Serviced Plot (70x100ft)', 'Commercial Plot'],
};

const LeadersCity = () => {
    const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
    const [formData, setFormData] = useState<InterestFormData>({
        fullName: '',
        email: '',
        phone: '',
        propertyCategory: '',
        propertyType: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            ...(name === 'propertyCategory' ? { propertyType: '' } : {})
        }));
    };

    const handleSubmitInterest = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    // NOTE: Consider moving to environment variables (import.meta.env.VITE_WEB3FORMS_KEY)
                    access_key: 'b5034291-8a43-4923-a84a-1ed1a6c6028a',
                    subject: `Leaders City Interest: ${formData.propertyCategory} - ${formData.propertyType}`,
                    from_name: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    property_category: formData.propertyCategory,
                    property_type: formData.propertyType,
                    estate: 'Leaders City',
                    // Auto-response configuration
                    autoresponse: true,
                    autoresponse_from: 'Adonai Estate Limited',
                    autoresponse_sender: 'noreply@adonaiestateltd.com',
                    autoresponse_replyto: AGENT_INFO.email,
                    autoresponse_subject: 'Thank You for Your Interest in Leaders City!',
                    autoresponse_message: `Dear ${formData.fullName},\n\nThank you for registering your interest in Leaders City - ${formData.propertyCategory} (${formData.propertyType})!\n\nWe are thrilled that you're considering joining our prestigious community in Ho, Volta Region. Your interest has been received and our team will be in touch with you shortly.\n\nWhat happens next:\n• Our sales team will review your inquiry\n• You'll receive priority information when off-building plans are released\n• Exclusive pricing and early-bird offers will be shared with you first\n\nIn the meantime, feel free to reach out to us:\n📞 Phone: ${AGENT_INFO.phone.primary}\n📧 Email: ${AGENT_INFO.email}\n🌐 Website: ${CONTACT_INFO.website}\n\nThank you for choosing Adonai Estate Limited - where your vision meets our excellence.\n\nWarm regards,\nThe Adonai Estate Team`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitSuccess(true);
                setFormData({ fullName: '', email: '', phone: '', propertyCategory: '', propertyType: '' });
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to submit. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const highlights = [
        { icon: ShoppingBag, title: 'Ultra-Modern Mall', text: 'A massive commerce hub at the entrance featuring global brands and dining.' },
        { icon: Car, title: 'Auto & Showrooms', text: 'Premium car showrooms and a state-of-the-art automobile repair center.' },
        { icon: Trophy, title: 'Elite Event Center', text: 'A world-class venue for conferences, weddings, and high-profile entrepreneurial summits.' },
        { icon: Briefcase, title: 'Entrepreneur Hub', text: 'Tailored for young, upcoming, established, and seasoned professionals.' },
    ];

    const offerings = [
        { name: 'Aspire Apartments (Studios & 1-Bed)', status: 'Upcoming' },
        { name: 'Aspire Homes (Studios & 1-Bed Houses)', status: 'Upcoming' },
        { name: 'Heritage Park (2 & 3 Bedroom Single-Storey)', status: 'Upcoming' },
        { name: 'Summit Gardens (2 & 3 Bedroom Two-Storey)', status: 'Upcoming' },
        { name: 'Horizon Enclave (Serviced Plots)', status: 'Upcoming' },
        { name: 'Royal Crest (4 & 5 Bedroom Mansions)', status: 'Upcoming' },
        { name: 'Commercial Business Plots', status: 'Upcoming' },
        { name: 'Automobile & Showroom Plots', status: 'Upcoming' },
        { name: 'Retail Mall Spaces', status: 'Upcoming' },
    ];

    return (
        <>
            <EstateLayout
                title="Leaders City"
                location="Ho, Volta Region"
                isUpcoming={true}
                upcomingLabel="Upcoming Milestone"
                upcomingHeroTitle="The Center of Global Opportunity"
                upcomingOfferings={offerings}
                description="Leaders City is the ultimate destination for those who lead. This premium mixed-use development in Ho is meticulously designed for professionals and entrepreneurs at every stage—from the young and upcoming to the highly established and seasoned visionaries. It's more than an estate; it's a high-performance ecosystem for life and business."
                features={[
                    'Huge Ultra-Modern Mall at the Entrance',
                    'State-of-the-art Auto Repair Center',
                    'Premium Car Showrooms',
                    'World-Class Event Center',
                    'Aspire Apartments (Modern Living)',
                    'Heritage Park (Executive Residences)',
                    'Horizon Enclave (Serviced Plots)',
                    'Strict "Hidden Roof" Architectural Code',
                    'Central Location in Ho Business District',
                    'Underground Drainage & Asphalted Roads',
                    '24/7 Professional Security & Smart Tech',
                    'High-Speed Internet Ready Zones'
                ]}
                imagePlaceholder="Leaders City Architecture"
                heroImage="/images/estates/leaders-city/img3.jpg"
                images={[
                    '/images/estates/leaders-city/img3.jpg',
                    '/images/estates/leaders-city/img1.jpg',
                    '/images/estates/leaders-city/img2.jpg',
                    '/images/estates/leaders-city/aspire1.jpg',
                    '/images/estates/leaders-city/aspire2.jpg',
                    '/images/estates/leaders-city/heritage1.jpg',
                    '/images/estates/leaders-city/heritage2.jpg',
                    '/images/estates/leaders-city/heritage3.jpg'
                ]}
            >
                {/* Off Building Plans Notice & Register Interest CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-gold font-bold text-sm uppercase tracking-wider mb-6">
                                <FileText size={16} />
                                <span>Coming Soon</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Off Building Plans Coming Soon</h3>
                            <p className="text-white/80 text-lg max-w-xl">
                                Be the first to know when building plans for Aspire Apartments, Heritage Park, Summit Gardens, and Royal Crest are released. Register your interest now to secure priority access and exclusive pricing.
                            </p>
                        </div>
                        <div className="flex-shrink-0">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsInterestModalOpen(true)}
                                className="px-10 py-5 bg-gold text-primary font-bold text-lg rounded-2xl shadow-2xl shadow-gold/30 hover:bg-white hover:text-primary transition-all flex items-center gap-3"
                            >
                                Register Your Interest
                                <ArrowRight size={20} />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Vision & Commercial Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Commerce & Lifestyle</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Building the Future of Enterprise</h2>
                        <div className="w-20 h-1.5 bg-gold mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-slate-50 border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Aspire Apartments Highlight */}
                <div className="mt-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-gold mb-4">
                                <Sparkles size={24} />
                                <span className="font-bold tracking-widest uppercase text-sm">Featured Zone</span>
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6 font-serif underline decoration-gold/30">Aspire Apartments</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Designed specifically for <span className="text-primary font-bold">aspiring entrepreneurs</span> and <span className="text-primary font-bold">young professionals</span>, these studio and one-bedroom units offer the perfect blend of efficiency, style, and status. It's the launchpad for the next generation of leaders.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Executive Studio Units',
                                    'One-Bedroom Lifestyle Apartments',
                                    'Smart Home Infrastructure',
                                    'Shared Networking Terraces'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800">
                                        <CheckCircle2 size={20} className="text-gold" />
                                        <span className="font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[16/10] cursor-zoom-in group"
                            >
                                <img src="/images/estates/leaders-city/aspire1.jpg" alt="Aspire Apartments Aerial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Heritage Park Highlight */}
                <div className="mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square cursor-zoom-in group"
                            >
                                <img src="/images/estates/leaders-city/heritage1.jpg" alt="Heritage Park Residence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-square cursor-zoom-in group translate-y-8"
                            >
                                <img src="/images/estates/leaders-city/heritage3.jpg" alt="Heritage Park Modern Home" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="flex items-center gap-3 text-gold mb-4">
                                <Building2 size={24} />
                                <span className="font-bold tracking-widest uppercase text-sm">Family & Luxury Zone</span>
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6 font-serif underline decoration-gold/30">Heritage Park</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                For those who have arrived and seek to build a legacy. <span className="text-primary font-bold">Heritage Park</span> offers premium 2 and 3 bedroom single-storey residences in a serene, master-planned environment.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Single-storey Two-Bedroom Houses',
                                    'Single-storey Three-Bedroom Houses',
                                    'Expansive Private Compound space',
                                    'Tree-lined streets & paved walkways'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800">
                                        <CheckCircle2 size={20} className="text-gold" />
                                        <span className="font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Summit Gardens Highlight */}
                <div className="mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-gold mb-4">
                                <TrendingUp size={24} />
                                <span className="font-bold tracking-widest uppercase text-sm">Executive Living</span>
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6 font-serif underline decoration-gold/30">Summit Gardens</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Elevate your lifestyle with <span className="text-primary font-bold">Summit Gardens</span>. These stunning two-storey residences are designed for established professionals and families who demand space, style, and sophistication.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Two-storey Two-Bedroom Houses',
                                    'Two-storey Three-Bedroom Houses',
                                    'Modern Architectural Design',
                                    'Private Gardens & Parking'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800">
                                        <CheckCircle2 size={20} className="text-gold" />
                                        <span className="font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[16/10] bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center"
                        >
                            <div className="text-center p-12">
                                <TrendingUp size={64} className="text-gold mx-auto mb-6" />
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Summit Gardens</h4>
                                <p className="text-gray-500">Architectural Renders Coming Soon</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Horizon Enclave Highlight */}
                <div className="mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 grid grid-cols-1 gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[16/10] bg-gradient-to-br from-slate-100 to-white flex items-center justify-center border border-gray-100"
                            >
                                <img src="/images/estates/leaders-city/horizon_enclave.jpg" alt="Horizon Enclave Plots" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="flex items-center gap-3 text-gold mb-4">
                                <Layout size={24} />
                                <span className="font-bold tracking-widest uppercase text-sm">Serviced Plots</span>
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6 font-serif underline decoration-gold/30">Horizon Enclave</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Build your own masterpiece within Leaders City. <span className="text-primary font-bold">Horizon Enclave</span> offers fully serviced plots for those with a unique vision. To ensure a sleek, contemporary skyline, all constructions in this enclave must adhere to a strict <span className="text-primary font-bold">Hidden Roof</span> architectural style.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Fully Serviced Plots (70x100ft)',
                                    'Strict Modern "Hidden Roof" Policy',
                                    'Ready-to-Build Infrastructure',
                                    'Full Access to Estate Amenities'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800">
                                        <CheckCircle2 size={20} className="text-gold" />
                                        <span className="font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Royal Crest Highlight */}
                <div className="mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 rounded-[2.5rem] overflow-hidden shadow-xl aspect-[16/10] bg-gradient-to-br from-gold/20 to-primary/10 flex items-center justify-center"
                        >
                            <div className="text-center p-12">
                                <Landmark size={64} className="text-gold mx-auto mb-6" />
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Royal Crest</h4>
                                <p className="text-gray-500">Architectural Renders Coming Soon</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="flex items-center gap-3 text-gold mb-4">
                                <Landmark size={24} />
                                <span className="font-bold tracking-widest uppercase text-sm">Ultra-Premium Residences</span>
                            </div>
                            <h3 className="text-4xl font-bold text-gray-900 mb-6 font-serif underline decoration-gold/30">Royal Crest</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                The pinnacle of luxury living in Leaders City. <span className="text-primary font-bold">Royal Crest</span> residences are designed for those who have reached the summit—expansive multi-storey mansions with every conceivable luxury.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Two-storey Four-Bedroom Houses',
                                    'Three-storey Five-Bedroom Mansions',
                                    'Premium Finishes & Smart Home Tech',
                                    'Exclusive Gated Community within Leaders City'
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-800">
                                        <CheckCircle2 size={20} className="text-gold" />
                                        <span className="font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Road Network & Future Section */}
                <div className="mt-32 pb-20">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">A Master-Planned Community</h3>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Leaders City is defined by its wide asphalted roads, underground drainage systems, and a layout that promotes ease of movement and elite living.
                        </p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[21/9] cursor-zoom-in group"
                    >
                        <img src="/images/estates/leaders-city/heritage2.jpg" alt="Leaders City Road Network" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </motion.div>
                </div>
            </EstateLayout>

            {/* Floating Register Interest Button */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsInterestModalOpen(true)}
                    className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-bold rounded-full shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                    </span>
                    <span>Register Your Interest</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </motion.div>

            {/* Interest Registration Modal */}
            <AnimatePresence>
                {isInterestModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => !isSubmitting && setIsInterestModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[2rem] w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">Register Your Interest</h3>
                                    <p className="text-gray-500 text-sm">Leaders City, Ho</p>
                                </div>
                                <button
                                    onClick={() => setIsInterestModalOpen(false)}
                                    disabled={isSubmitting}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {submitSuccess ? (
                                <div className="p-8 text-center">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={40} className="text-green-600" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h4>
                                    <p className="text-gray-600 mb-8">Your interest has been registered successfully. We'll contact you as soon as our off-building plans are released.</p>
                                    <button
                                        onClick={() => {
                                            setSubmitSuccess(false);
                                            setIsInterestModalOpen(false);
                                        }}
                                        className="btn btn-primary"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmitInterest} className="p-6 md:p-8 space-y-5">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                            placeholder="Your Full Name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors"
                                            placeholder="+233 XX XXX XXXX"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">I'm Interested In *</label>
                                        <select
                                            name="propertyCategory"
                                            value={formData.propertyCategory}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="">Select Property Category</option>
                                            {Object.keys(propertyOptions).map((category) => (
                                                <option key={category} value={category}>{category}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {formData.propertyCategory && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                        >
                                            <label className="block text-sm font-bold text-gray-700 mb-2">Property Type *</label>
                                            <select
                                                name="propertyType"
                                                value={formData.propertyType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full p-4 rounded-xl bg-slate-50 border border-gray-200 focus:border-gold outline-none transition-colors appearance-none cursor-pointer"
                                            >
                                                <option value="">Select Property Type</option>
                                                {propertyOptions[formData.propertyCategory]?.map((type) => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </motion.div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Interest
                                                <ArrowRight size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default LeadersCity;
