import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Facebook, Send, MessageSquare, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Adonai Estate Limited</title>
                <meta name="description" content="Get in touch with Adonai Estate Limited. We are ready to help you own your litigation-free land today." />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://adonaiestateltd.com/contact" />
                <meta property="og:title" content="Contact Us | Adonai Estate Limited" />
                <meta property="og:description" content="Get in touch with Adonai Estate Limited. We are ready to help you own your litigation-free land today." />
                <meta property="og:image" content="https://adonaiestateltd.com/logo.jpg" />
                <meta property="og:site_name" content="Adonai Estate Limited" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us | Adonai Estate Limited" />
                <meta name="twitter:description" content="Get in touch with Adonai Estate Limited. We are ready to help you own your litigation-free land today." />
                <meta name="twitter:image" content="https://adonaiestateltd.com/logo.jpg" />
            </Helmet>

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
                                info: ["+233 599 007 786", "+233 362 000 350"],
                                sub: "Mon-Fri, 8am-5pm",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                icon: Mail,
                                title: "Email Support",
                                info: ["info@adonaiestateltd.com"],
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
                                    <a href="https://web.facebook.com/AdonaiEstateLtd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-gold hover:text-white transition-colors">
                                        <Facebook size={20} /> Facebook Page
                                    </a>
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

                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h3>
                                <p className="text-gray-500">We usually respond within a few hours.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">First Name</label>
                                        <input type="text" className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 rounded-t-lg px-4 py-3 text-gray-900 focus:ring-0 focus:border-gold focus:bg-gold/5 transition-all placeholder:text-gray-300" placeholder="Enter name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Last Name</label>
                                        <input type="text" className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 rounded-t-lg px-4 py-3 text-gray-900 focus:ring-0 focus:border-gold focus:bg-gold/5 transition-all placeholder:text-gray-300" placeholder="Enter surname" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                                    <input type="email" className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 rounded-t-lg px-4 py-3 text-gray-900 focus:ring-0 focus:border-gold focus:bg-gold/5 transition-all placeholder:text-gray-300" placeholder="name@example.com" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                                    <textarea rows={4} className="w-full bg-slate-50 border-0 border-b-2 border-slate-200 rounded-t-lg px-4 py-3 text-gray-900 focus:ring-0 focus:border-gold focus:bg-gold/5 transition-all placeholder:text-gray-300 resize-none" placeholder="How can we help you today?"></textarea>
                                </div>

                                <div className="pt-4">
                                    <button type="submit" className="w-full py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg shadow-gray-900/20 hover:bg-gold hover:text-gray-900 hover:shadow-gold/30 transition-all flex items-center justify-center gap-2 group">
                                        Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>

                    {/* Branch Offices Section */}
                    <div className="mt-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Our Branch Offices</h2>
                            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { name: "Hohoe", location: "Main Street, Hohoe", phone: "+233 XX XXX XXXX" },
                                { name: "Sogakope", location: "River View Road", phone: "+233 XX XXX XXXX" },
                                { name: "Denu", location: "Border Road Area", phone: "+233 XX XXX XXXX" },
                                { name: "East Legon", location: "Accra, Greater Accra", phone: "+233 XX XXX XXXX" }
                            ].map((office, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center"
                                >
                                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                        <MapPin size={20} />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{office.name}</h3>
                                    <p className="text-sm text-gray-500 mb-1">{office.location}</p>
                                    <p className="text-sm text-primary font-medium">{office.phone}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
