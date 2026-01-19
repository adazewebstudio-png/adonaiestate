import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, ShieldCheck, Handshake, CheckCircle2, Target, Eye, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const AboutUs = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <SEO
                title="About Us"
                description="Learn about Adonai Estate Limited, our mission, vision, and commitment to affordable housing in Ghana since 2014. We focus on secure, litigation-free land."
                pathname="/about"
                image="/ceo_bright_adonai.jpg"
            />

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
                            <img
                                src="/about_development.jpg"
                                alt="Adonai Estate Development"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Vision & Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {[
                            { title: 'Our Vision', text: 'To realistically help solve Ghana’s housing deficit and restore confidence in land and home ownership in our country.', icon: Eye },
                            { title: 'Our Mission', text: 'To make land and home ownership affordable, flexible, and litigation-free for the average Ghanaian, while adhering to the highest standards of quality.', icon: Rocket },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-slate-50 border border-gray-100 hover:shadow-xl transition-all h-full group"
                            >
                                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                    <item.icon size={30} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Core Values Section */}
                    <div className="text-center mb-12 mt-20">
                        <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-xs">Our Foundation</span>
                        <h2 className="text-3xl font-bold text-gray-900 font-serif">Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Integrity', text: 'We build trust through honest communication and litigation-free land documentation.', icon: ShieldCheck },
                            { title: 'Transparency', text: 'Ensuring every step of the land acquisition process is clear, recorded, and understandable.', icon: Target },
                            { title: 'Community', text: 'We believe in developing neighborhoods that foster growth, security, and shared progress.', icon: Users },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Core Objectives */}
                <div className="bg-slate-50 py-24 mb-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Objectives</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
                                Built on three strong pillars that define our success and your security.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: 'Land Ownership Security', text: 'We prevent litigation and ownership disputes by ensuring all our lands are properly registered and documented before sale.' },
                                { title: 'Community Planning', text: 'We do not just sell plots; we build environments with proper layouts, road access, and utility planning.' },
                                { title: 'Financial Achievement', text: 'We make land and home ownership achievable for middle and low-income earners through flexible payment plans and fair pricing.' },
                            ].map((obj, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-center text-center"
                                >
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{obj.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-normal">{obj.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4">
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

                    {/* Our Team */}
                    <div className="mb-24">
                        <div className="text-center mb-16">
                            <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Leadership</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Team</h2>
                            <div className="w-24 h-1.5 bg-gold mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                {
                                    name: "Rev. Dr. Bright Adonai",
                                    role: "Founder and CEO",
                                    image: "/ceo_bright_adonai.jpg",
                                },
                                {
                                    name: "Mr. Francis Lanyo",
                                    role: "Managing Director",
                                    image: "/francis_lanyo.jpg",
                                },
                                {
                                    name: "Richard Adaze",
                                    role: "Head of Marketing and PRO",
                                    image: "/richard_adaze.jpg",
                                }
                            ].map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="group"
                                >
                                    <div className="relative mb-6 overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[4/5] shadow-xl border border-gray-100">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                                                <Users size={80} strokeWidth={1} />
                                            </div>
                                        )}
                                        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="flex gap-4 justify-center">
                                                {/* Social placeholders if needed */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                        <p className="text-gold font-bold uppercase tracking-widest text-xs">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Approach & Commitment */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <motion.div {...fadeIn}>
                            <div className="bg-slate-100 rounded-3xl h-64 md:h-96 w-full mb-8 relative overflow-hidden">
                                <img
                                    src="/our_approach.jpg"
                                    alt="Adonai Estate Approach and Vision"
                                    className="w-full h-full object-cover"
                                />
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
