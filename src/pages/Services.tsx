import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Map, Building2, Handshake, Briefcase, ArrowRight, CheckCircle2, Shield, Users, TrendingUp, Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: Map,
            title: "Land Sales & Registration",
            description: "Secure litigation-free land with clear documentation. We handle the entire registration process for your peace of mind.",
            features: ["100% Litigation-Free", "Fast Documentation", "Flexible Payments", "Title Registration"],
            link: "/services/land-sales",
            color: "primary"
        },
        {
            icon: Building2,
            title: "Property Management",
            description: "Own the asset, skip the stress. We manage maintenance, tenants, and ensure steady returns on your investment.",
            features: ["Tenant Management", "Maintenance & Repairs", "Financial Reporting", "24/7 Security"],
            link: "/services/property-management",
            color: "gold"
        },
        {
            icon: Handshake,
            title: "Real Estate Brokerage",
            description: "Connect with buyers and sellers through our trusted network. Fair deals and smooth transactions guaranteed.",
            features: ["Property Valuation", "Buyer/Seller Matching", "Negotiation Support", "Closing Assistance"],
            link: "/services/brokerage",
            color: "primary"
        },
        {
            icon: Briefcase,
            title: "Real Estate Consultancy",
            description: "Expert guidance for acquisition, investment analysis, and development planning. Make informed decisions.",
            features: ["Investment Analysis", "Market Research", "Due Diligence", "Development Advisory"],
            link: "/services/consultancy",
            color: "gold"
        },
    ];

    const whyChooseUs = [
        { icon: Shield, title: "Trusted & Transparent", text: "Over a decade of integrity in the Ghanaian real estate market." },
        { icon: Users, title: "Client-Focused", text: "Your success is our priority. Personalized service for every client." },
        { icon: TrendingUp, title: "Results-Driven", text: "We don't just promise—we deliver measurable outcomes." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Our Services"
                description="Explore our comprehensive real estate services: Land Sales, Property Management, Brokerage, and Consultancy. Your trusted partner for litigation-free land in Ghana."
                pathname="/services"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Real Estate Services",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Adonai Estate Limited"
                    },
                    "areaServed": "Volta Region, Ghana",
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Real Estate Services Catalog",
                        "itemListElement": services.map((s, i) => ({
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": s.title,
                                "description": s.description
                            }
                        }))
                    }
                }}
            />

            {/* Premium Hero Section */}
            <section className="relative bg-primary pt-32 pb-40 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full text-gold font-bold text-sm uppercase tracking-wider mb-6">
                            What We Do
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 font-serif leading-tight">
                            Comprehensive<br />
                            <span className="text-gold">Real Estate Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            From land acquisition to property management, we provide end-to-end solutions that make real estate <span className="text-gold font-bold">simple, safe, and profitable</span>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 -mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-colors ${service.color === 'gold' ? 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                    <service.icon size={44} />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-serif">{service.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>

                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                            <CheckCircle2 size={16} className="text-gold shrink-0" />
                                            <span className="font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={service.link}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-gold transition-colors group/link"
                                >
                                    Learn More
                                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">The Adonai Difference</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Why Choose Us?</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">We're not just a real estate company—we're your partner in building wealth and securing your future.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-white p-10 rounded-[2rem] border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                                    <item.icon size={40} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-serif">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                            Whether you're buying land, managing property, or seeking expert advice—we're here to help you succeed.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="btn bg-gold text-primary hover:bg-white hover:text-primary font-bold px-10 py-4 shadow-2xl shadow-gold/30 flex items-center justify-center gap-2">
                                <MessageCircle size={20} /> WhatsApp Us
                            </a>
                            <a href="tel:+233599007786" className="btn bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white hover:text-primary font-bold px-10 py-4 flex items-center justify-center gap-2">
                                <Phone size={20} /> Call Now
                            </a>
                            <a href="mailto:richardadaaze@gmail.com" className="btn bg-transparent text-white border border-white/30 hover:bg-white hover:text-primary font-bold px-10 py-4 flex items-center justify-center gap-2">
                                <Mail size={20} /> Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
