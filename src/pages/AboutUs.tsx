import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Briefcase, Handshake, ShieldCheck, Gem, Users, CheckCircle2, TrendingUp, Building2, Lock } from 'lucide-react';

const AboutUs = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <Helmet>
                <title>About Us | Adonai Estate Limited</title>
                <meta name="description" content="Learn about Adonai Estate Limited, our mission, vision, and commitment to affordable housing in Ghana." />
            </Helmet>

            <div className="pt-24 pb-20 bg-white min-h-screen">

                {/* Hero / Who We Are */}
                <div className="container mx-auto px-4 mb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div {...fadeIn}>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Adonai Estate</h1>
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Who We Are</span>
                            <div className="text-lg text-gray-600 leading-relaxed text-justify space-y-6">
                                <p>
                                    Since our founding in 2014, Adonai Estate Ltd has been a Ghanaian real estate company established to make land and home ownership secure, affordable, and achievable for the average Ghanaian. We focus on providing litigation-free land and well-planned estate developments that allow individuals, families, and investors to own property with confidence.
                                </p>
                                <p>
                                    Our work is rooted in a clear understanding of Ghana’s land ownership challenges and housing deficit. We exist to remove fear, uncertainty, and complexity from the land acquisition process by offering transparent documentation, flexible ownership options, and professionally planned communities.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-slate-100 rounded-[3rem] h-[400px] md:h-[500px] w-full flex items-center justify-center relative overflow-hidden shadow-2xl"
                        >
                            {/* Placeholder for Team/Office Image */}
                            <div className="absolute inset-0 bg-slate-200"></div>
                            <span className="relative z-10 text-gray-400 font-bold text-xl">About Us Image Placeholder</span>

                            {/* Decor elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                        </motion.div>
                    </div>

                    {/* Key Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                            <h3 className="text-5xl font-bold text-primary mb-2">11+</h3>
                            <p className="text-gray-900 font-bold mb-1">Years Experience</p>
                            <p className="text-sm text-gray-500">Since 2014</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                            <h3 className="text-5xl font-bold text-gold mb-2">3k+</h3>
                            <p className="text-gray-900 font-bold mb-1">Happy Clients</p>
                            <p className="text-sm text-gray-500">Trusting us with their future</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                            <h3 className="text-5xl font-bold text-primary mb-2">4.5k+</h3>
                            <p className="text-gray-900 font-bold mb-1">Plots Sold</p>
                            <p className="text-sm text-gray-500">Across the Volta Region & beyond</p>
                        </div>
                    </motion.div>
                </div>

                <div className="container mx-auto px-4">

                    {/* Vision & Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
                        <motion.div
                            {...fadeIn}
                            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="p-4 bg-gold/10 rounded-2xl inline-flex mb-6 text-gold group-hover:scale-110 transition-transform">
                                <Eye size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To help solve Ghana’s housing deficit realistically and inspire confidence in land and home ownership across the country.
                            </p>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                        >
                            <div className="p-4 bg-primary/10 rounded-2xl inline-flex mb-6 text-primary group-hover:scale-110 transition-transform">
                                <Target size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To make land and home ownership affordable, flexible, and litigation-free to the average Ghanaian by adhering to the highest quality standards.
                            </p>
                        </motion.div>
                    </div>

                    {/* Objectives */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900">Our Objectives</h2>
                            <div className="w-24 h-1.5 bg-gold mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { text: "Design real estate products that meet the needs of a growing and diverse population seeking affordable options.", icon: Users },
                                { text: "Develop well-planned communities for residential, commercial, business, and everyday living purposes.", icon: Building2 },
                                { text: "Provide quality homes and safe communities with strong emphasis on planning, infrastructure, and security.", icon: Lock },
                                { text: "Create opportunities for individuals and families to own dream homes and achieve investment goals.", icon: TrendingUp },
                                { text: "Contribute to Ghana’s economic development and support sustainable urbanization.", icon: Gem },
                            ].map((obj, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:bg-white hover:shadow-lg transition-all"
                                >
                                    <obj.icon className="text-primary mb-4" size={28} />
                                    <p className="text-gray-700 leading-relaxed font-medium">{obj.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* What We Do */}
                    <div className="mb-24 bg-slate-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
                        {/* Background accents */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">What We Do</h2>
                                <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                                    Adonai Estate Ltd provides a range of real estate services designed to support clients at every stage of ownership:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { title: 'Land Sales', text: 'Litigation-free land with clear documentation.', icon: Briefcase, link: '/services/land-sales' },
                                    { title: 'Consultancy', text: 'Advisory for acquisition and development planning.', icon: Users, link: '/services/consultancy' },
                                    { title: 'Management', text: 'Helping owners protect and maintain asset value.', icon: ShieldCheck, link: '/services/property-management' },
                                    { title: 'Brokerage', text: 'Transparent facilitation of property transactions.', icon: Handshake, link: '/services/brokerage' },
                                ].map((service, index) => (
                                    <Link key={index} to={service.link} className="block h-full">
                                        <motion.div
                                            whileHover={{ y: -5 }}
                                            className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-colors h-full"
                                        >
                                            <service.icon className="text-gold mb-6" size={32} />
                                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">{service.text}</p>
                                        </motion.div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Approach & Commitment */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <motion.div {...fadeIn}>
                            <div className="bg-slate-100 rounded-3xl h-64 md:h-96 w-full mb-8 relative overflow-hidden">
                                {/* Placeholder Approach Image */}
                                <div className="absolute inset-0 bg-slate-200"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">Approach Image</div>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
                            <div className="prose prose-lg text-gray-600">
                                <p className="mb-4">
                                    We do not simply sell land. We develop estates with long-term value in mind. Each project is planned to support growth, livability, and future development while remaining accessible to different income levels.
                                </p>
                                <p>
                                    From flagship developments such as Airport Golf City to our estate projects, our focus remains the same: clarity of ownership, thoughtful planning, and peace of mind.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            {...fadeIn}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-slate-50 to-gold/5 p-10 md:p-14 rounded-[3rem] border border-gray-100 text-center"
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Commitment</h2>
                            <p className="text-gray-600 mb-10 text-xl leading-relaxed italic">
                                "At Adonai Estate Ltd, we believe land ownership is the foundation for security, growth, and gentle wealth."
                            </p>
                            <p className="text-gray-600 mb-8 text-lg">
                                We are committed to building trust, creating well-planned communities, and guiding our clients through a clear ownership journey.
                            </p>
                            <div className="inline-block p-4 bg-white rounded-full shadow-md text-primary font-bold text-lg">
                                Building Confidence. One Community at a Time.
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AboutUs;
