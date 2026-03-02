import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Send, MessageSquare, Clock, MessageCircle, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useHeaderStyle } from '../contexts/HeaderContext';
import { CONTACT_INFO } from '../constants/contact';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const { setIsTransparent } = useHeaderStyle();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setIsTransparent(true);
        return () => setIsTransparent(false);
    }, [setIsTransparent]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    subject: `New Contact: ${formData.firstName} ${formData.lastName}`,
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
                toast.success('Message sent successfully!');
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            toast.error('Failed to send message. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <SEO
                title="Contact Us"
                description="Get in touch with Adonai Estate Limited. We are ready to help you own your litigation-free land today in the Volta Region of Ghana."
                pathname="/contact"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "mainEntity": {
                        "@type": "RealEstateAgent",
                        "name": "Adonai Estate Limited",
                        "telephone": [CONTACT_INFO.phone.primary, CONTACT_INFO.phone.secondary],
                        "email": CONTACT_INFO.email,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Ho",
                            "addressRegion": "Volta Region",
                            "addressCountry": "GH"
                        }
                    }
                }}
            />

            {/* Premium Hero Section */}
            <div className="relative bg-primary pt-32 pb-48 overflow-hidden">
                {/* Abstract Background Shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Volta Land Supermarket</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight text-white">
                            Let's Start Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">Ownership Journey</span>
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                            Whether you're looking for your first plot, a commercial space, or simply have a question, our team is ready to assist you.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Overlapping Content Section */}
            <div className="bg-slate-50 min-h-screen relative z-20 -mt-32 pb-20">
                <div className="container mx-auto px-4">

                    {/* Contact Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {[
                            {
                                icon: Phone,
                                title: "Talk to Sales",
                                info: [CONTACT_INFO.phone.primary, CONTACT_INFO.phone.secondary],
                                sub: "Mon-Fri, 8am-5pm",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                icon: Mail,
                                title: "Email Support",
                                info: [CONTACT_INFO.email],
                                sub: "We reply within 24hrs",
                                color: "bg-orange-50 text-orange-600"
                            },
                            {
                                icon: MapPin,
                                title: "Visit Our HQ",
                                info: ["Adonai Estate Limited", "Ho, Volta Region"],
                                sub: "Get Directions",
                                color: "bg-green-50 text-green-600",
                                link: "https://www.google.com/maps/search/?api=1&query=Adonai+Estate+Limited,+Ho"
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-gold/30 transition-all group relative"
                            >
                                {card.link && <a href={card.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={card.sub}></a>}
                                <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <card.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
                                <div className="space-y-1 mb-4">
                                    {card.info.map((line, i) => (
                                        card.title === "Talk to Sales" ? (
                                            <a key={i} href={`tel:${line.replace(/\s+/g, '')}`} className="block text-gray-700 font-medium text-lg hover:text-primary transition-colors">
                                                {line}
                                            </a>
                                        ) : card.title === "Email Support" ? (
                                            <a key={i} href={`mailto:${line}`} className="block text-gray-700 font-medium text-lg hover:text-primary transition-colors">
                                                {line}
                                            </a>
                                        ) : (
                                            <p key={i} className="text-gray-700 font-medium text-lg">{line}</p>
                                        )
                                    ))}
                                </div>
                                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider flex items-center gap-2">
                                    {card.sub} {card.link && <Clock size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        {/* Map & Socials */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="bg-white p-2 rounded-3xl shadow-lg border border-gray-100">
                                <div className="rounded-2xl overflow-hidden h-[400px] relative">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Adonai+Estate+Limited,+Ho&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Adonai Estate Limited Location"
                                        className="grayscale hover:grayscale-0 transition-all duration-700"
                                    ></iframe>
                                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold shadow-sm">
                                        📍 Adonai Estate HQ
                                    </div>
                                </div>
                            </div>

                            <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden flex items-center justify-between">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-2">Connect with us</h3>
                                    <p className="text-white/70 mb-6">Follow our journey on social media.</p>
                                    <div className="flex flex-wrap gap-3">
                                        <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-gold hover:text-white transition-colors text-sm">
                                            <Facebook size={18} /> Facebook
                                        </a>
                                        <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] to-[#E1306C] text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity text-sm">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                            Instagram
                                        </a>
                                        <a href={CONTACT_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-gold hover:text-white transition-colors text-sm">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /></svg>
                                            Twitter
                                        </a>
                                        <a href={`https://wa.me/${CONTACT_INFO.phone.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-[#25D366] transition-colors text-sm">
                                            <MessageCircle size={18} /> WhatsApp
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
                                <MessageSquare size={120} className="absolute -right-8 -bottom-8 text-white/10" />
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-gold to-primary"></div>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-500 mb-6">We'll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-gold font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h3>
                                        <p className="text-gray-500">We usually respond within a few hours.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">First Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.firstName}
                                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 rounded-t-lg px-4 py-3 text-gray-900 focus:ring-0 focus:border-gold focus:bg-gold/5 transition-all placeholder:text-gray-300"
                                                    placeholder="Enter name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Last Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.lastName}
                                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                    className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 rounded-t-lg px-4 py-3 text-gray-900 focus:ring-0 focus:border-gold focus:bg-gold/5 transition-all placeholder:text-gray-300"
                                                    placeholder="Enter surname"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 rounded-t-lg px-4 py-3 text-gray-900 focus:ring-0 focus:border-gold focus:bg-gold/5 transition-all placeholder:text-gray-300"
                                                placeholder="name@example.com"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                                            <textarea
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 rounded-t-lg px-4 py-3 text-gray-900 focus:ring-0 focus:border-gold focus:bg-gold/5 transition-all placeholder:text-gray-300 resize-none"
                                                placeholder="How can we help you today?"
                                            ></textarea>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-900/20 hover:bg-gold hover:text-gray-900 hover:shadow-gold/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 size={18} className="animate-spin" /> Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Contact;
