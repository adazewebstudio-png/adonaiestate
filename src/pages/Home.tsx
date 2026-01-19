import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight,
    Shield,
    CheckCircle,
    Clock,
    Home as HomeIcon,
    Eye,
    Target,
    Tag,
    Maximize,
    Calendar,
    User,
    Search,
    Loader2,
    Mail,
    MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { client, urlFor } from '../lib/sanity';
import SEO from '../components/SEO';

const Home = () => {
    const [featuredProperties, setFeaturedProperties] = useState([]);
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    // Skeleton Components
    const PropertySkeleton = () => (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-10 bg-gray-200 rounded mt-4"></div>
            </div>
        </div>
    );

    const BlogSkeleton = () => (
        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 flex flex-col h-full animate-pulse">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-8 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-7 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
        </div>
    );

    useEffect(() => {
        const fetchData = async () => {
            try {
                const propQuery = `*[_type == "property"] | order(isFeatured desc, _createdAt desc)[0..5] {
                    _id, title, location, price, size, type, category, mainImage, tag
                }`;
                const postQuery = `*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc)[0..2] {
                    _id, title, excerpt, mainImage, _createdAt, publishedAt, author->{ name }, slug
                }`;

                const [props, posts] = await Promise.all([
                    client.fetch(propQuery, {}, { useCdn: true }),
                    client.fetch(postQuery, {}, { useCdn: true })
                ]);

                setFeaturedProperties(props || []);
                setFeaturedPosts(posts || []);
            } catch (error) {
                console.error('Error fetching home data:', error);
            } finally {
                setLoadingData(false);
            }
        };
        fetchData();
    }, []);

    const estates = [
        {
            name: 'Airport Golf City',
            location: 'Ho',
            image: '/airport_golf_city_main.jpg',
            description: 'Our biggest site featuring a 98-acre golf course, secure gated community, and premium amenities.',
            link: '/estates/airport-golf-city',
            status: 'Selling Fast'
        },
        {
            name: 'Millennium City',
            location: 'Kpetoe',
            image: '/images/estates/millennium-city/hero.jpg',
            description: 'Bringing you back to your roots with cultural heritage and modern living at Kpetoe.',
            link: '/estates/millennium-city',
            status: 'Upcoming'
        },
        {
            name: 'UHAS Florida City',
            location: 'Ho',
            image: '/images/estates/florida-city/hero.jpg',
            description: 'A vibrant community designed for modern lifestyles.',
            link: '/estates/uhas-florida-city',
            status: 'Upcoming'
        },
        {
            name: 'Volta Safari City',
            location: 'Sogakope',
            image: '/images/estates/volta-safari-city/safari2.jpg',
            description: 'Eco-friendly riverside lodges and homes.',
            link: '/estates/volta-safari-city',
            status: 'Upcoming'
        },
        {
            name: 'Leaders City',
            location: 'Ho',
            image: '/images/estates/leaders-city/home_thumb.jpg',
            description: 'The heart of commercial and residential excellence.',
            link: '/estates/leaders-city',
            status: 'Upcoming'
        }
    ];

    const services = [
        'Land Sales & Registration',
        'Consultancy',
        'Property Management',
        'Brokerage'
    ];

    return (
        <>
            <SEO
                title="Adonai Estate Limited | Ultra Modern Real Estate in Ghana"
                description="Helping solve Ghana's housing deficit realistically. Own litigation-free land and homes in Airport Golf City, UHAS Florida City, and more in the Volta Region."
                pathname="/"
            />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url(/hero_home_main.jpg)' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
                </div>

                <div className="container relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-gold uppercase tracking-[0.2em] mb-4 text-sm md:text-base font-bold">
                            Welcome to Adonai Estate
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Solving Ghana's <br />
                            <span className="text-gradient">Housing Deficit</span> Realistically
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light">
                            Inspiring confidence in land and home ownership. Affordable, flexible, and litigation-free properties for the average Ghanaian.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/estates" className="btn btn-primary">
                                Explore Our Estates
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-white rounded-full"></div>
                    </div>
                </motion.div>
            </section>

            {/* Welcome / Intro Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-left"
                        >
                            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Since 2014</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Your Trusted <br />
                                <span className="text-primary">Land Ownership Partner</span>
                            </h2>

                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                                <p className="font-medium text-gray-800">
                                    At Adonai Estate Ltd, we believe that owning land should be simple, secure, and affordable.
                                </p>
                                <p>
                                    Since our founding in 2014, we have been committed to offering litigation-free land for residential and commercial purposes across the Volta Region and beyond. As one of Ghana’s respected real estate companies and the number one real estate company in the Volta Region, all our properties are supported by transparent documentation and flexible payment plans.
                                </p>
                                <p>
                                    Whether you are looking to invest, build your home, or secure a future asset, we provide trusted options designed for growth, convenience, and peace of mind.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/about" className="btn btn-primary inline-flex items-center gap-2">
                                    Read More <ArrowRight size={18} />
                                </Link>
                                <p className="text-gold font-serif italic text-lg self-center">
                                    "Own land with confidence."
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats / Visuals */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                <h3 className="text-5xl font-bold text-gold mb-2">3k+</h3>
                                <p className="text-gray-900 font-bold mb-1">Happy Clients</p>
                                <p className="text-sm text-gray-500">Satisfied families and investors</p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow sm:translate-y-8">
                                <h3 className="text-5xl font-bold text-gold mb-2">4.5k+</h3>
                                <p className="text-gray-900 font-bold mb-1">Plots Sold</p>
                                <p className="text-sm text-gray-500">Across strategic locations</p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                                <h3 className="text-5xl font-bold text-gold mb-2">11+</h3>
                                <p className="text-gray-900 font-bold mb-1">Years Experience</p>
                                <p className="text-sm text-gray-500">Serving the real estate market</p>
                            </div>

                            <div className="bg-primary p-8 rounded-2xl shadow-xl flex flex-col justify-center text-white sm:translate-y-8">
                                <Shield className="w-12 h-12 mb-4 text-gold" />
                                <p className="font-bold text-xl mb-2">100% Litigation Free</p>
                                <p className="text-white/70 text-sm">Peace of mind guaranteed with every purchase.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 border-b border-gray-100 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, text: 'Litigation Free' },
                            { icon: CheckCircle, text: 'Registered Lands' },
                            { icon: Clock, text: 'Flexible Terms' },
                            { icon: HomeIcon, text: 'Quality Homes' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center gap-3 text-center"
                            >
                                <div className="p-3 bg-gold/10 rounded-full text-gold">
                                    <item.icon size={24} />
                                </div>
                                <span className="text-gray-700 font-medium">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Listings Section - Added before Estates */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <span className="text-gold font-bold tracking-widest uppercase mb-3 block text-sm">Official Listings</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mb-4 italic">Featured Properties</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Explore our latest litigation-free land offerings and premium residential developments across strategic growth zones.
                            </p>
                        </div>
                        <Link to="/listings" className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group border-b-2 border-primary/20 pb-2">
                            View All Listings <ArrowRight size={20} className="group-hover:text-gold" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loadingData ? (
                            <>
                                <PropertySkeleton />
                                <PropertySkeleton />
                                <PropertySkeleton />
                            </>
                        ) : (
                            featuredProperties.map((prop: any, index: number) => (
                                <motion.div
                                    key={prop._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        {prop.mainImage ? (
                                            <img
                                                src={urlFor(prop.mainImage).width(600).height(400).format('webp').url()}
                                                alt={prop.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-gray-400">No Image</div>
                                        )}
                                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                                            {prop.tag && (
                                                <div className="bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full text-primary shadow-sm">
                                                    {prop.tag}
                                                </div>
                                            )}
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-primary/95 backdrop-blur-sm px-4 py-2 text-sm font-black rounded-xl text-white shadow-lg">
                                            {prop.price}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-2">
                                                <Tag size={12} /> {prop.type}
                                            </div>
                                            <Link to={`/listings`}>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">{prop.title}</h3>
                                            </Link>
                                            <p className="text-gray-500 text-sm flex items-center gap-1.5 font-medium">
                                                <MapPin size={14} className="text-primary font-bold" /> {prop.location}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 py-4 border-t border-gray-50 mt-auto">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Maximize size={16} className="text-gold" />
                                                <span className="text-xs font-bold tracking-tight">{prop.size}</span>
                                            </div>
                                            <Link to={`/listings`} className="ml-auto text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                                Details <ArrowRight size={14} />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Featured Estates */}
            <section className="section-padding bg-slate-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Premium Estates</h2>
                            <p className="text-gray-600">Discover your dream location in the Volta Region</p>
                        </div>
                        <Link to="/estates" className="hidden md:flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {estates.map((estate, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={estate.image}
                                        alt={estate.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider text-white ${estate.status === 'Upcoming' ? 'bg-gold' : 'bg-primary'}`}>
                                            {estate.status}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <span className="text-gold text-xs font-bold uppercase tracking-wider mb-1 block">{estate.location}</span>
                                        <h3 className="text-white text-xl font-bold">{estate.name}</h3>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{estate.description}</p>
                                    <Link to={estate.link} className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Learn more <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/estates" className="btn btn-outline text-sm text-primary border-primary hover:bg-primary hover:text-white">View All Estates</Link>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding relative overflow-hidden bg-white">
                {/* Background blobs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-gold uppercase tracking-widest font-bold mb-2">Who We Are</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Confidence in Ownership</h3>
                            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                                <p>
                                    Adonai Estate Limited is dedicated to making land and home ownership <strong className="text-gray-900">affordable, flexible, and litigation-free</strong> for the average Ghanaian.
                                </p>
                                <p>
                                    We adhere to the highest quality standards, designing products that meet the diverse needs of our growing community.
                                </p>

                                <div className="grid grid-cols-1 gap-6 mt-10">
                                    <div className="flex flex-col sm:flex-row gap-5 p-6 rounded-3xl bg-white shadow-xl shadow-gold/5 border border-gold/10 hover:border-gold/30 transition-all duration-300 group hover:-translate-y-1">
                                        <div className="flex-shrink-0 w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                                            <Eye size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-900 font-bold text-xl mb-3 font-serif">Our Vision</h4>
                                            <p className="text-gray-600 leading-relaxed">To realistically help solve Ghana’s housing deficit and restore confidence in land and home ownership in our country.</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-5 p-6 rounded-3xl bg-white shadow-xl shadow-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1">
                                        <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <Target size={28} />
                                        </div>
                                        <div>
                                            <h4 className="text-gray-900 font-bold text-xl mb-3 font-serif">Our Mission</h4>
                                            <p className="text-gray-600 leading-relaxed">To make land and home ownership affordable, flexible, and litigation-free for the average Ghanaian, while adhering to the highest standards of quality.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="glass-card p-2 rotate-3 hover:rotate-0 transition-transform duration-500 bg-white">
                                <img src="/home_who_we_are.jpg" alt="About Adonai Estate" className="rounded-xl w-full h-auto shadow-2xl object-cover" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-100 opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-widest uppercase mb-2 block">What We Do</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Our Expertise</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">Comprehensive real estate solutions tailored to your needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: 'Land Sales & Registration',
                                desc: 'Litigation-free lands with secure documentation.',
                                link: '/services/land-sales',
                                icon: 'Map'
                            },
                            {
                                title: 'Consultancy',
                                desc: 'Expert advice on property investment and development.',
                                link: '/services/consultancy',
                                icon: 'Briefcase'
                            },
                            {
                                title: 'Property Management',
                                desc: 'End-to-end management for your rental assets.',
                                link: '/services/property-management',
                                icon: 'Key'
                            },
                            {
                                title: 'Brokerage',
                                desc: 'Connecting buyers and sellers with market expertise.',
                                link: '/services/brokerage',
                                icon: 'BarChart'
                            }
                        ].map((service, i) => (
                            <Link key={i} to={service.link} className="group">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center text-center relative overflow-hidden"
                                >
                                    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {/* Simple icon mapping based on index or string if we imported them. For now, simply using text/generic or importing icons at the top is safer. 
                                            Let's use a generic generic icon or rely on the imports I'll add.
                                         */}
                                        <ArrowRight size={24} className="text-gold group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.desc}</p>

                                    <span className="mt-auto text-primary font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Learn More <ArrowRight size={16} />
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Latest Insights Section - Added after Services */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-gold font-bold tracking-widest uppercase mb-2 block text-sm">Market Intelligence</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif italic">Latest Insights</h2>
                        </div>
                        <Link to="/insight" className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all group border-b-2 border-primary/20 pb-2 uppercase tracking-widest text-xs">
                            Explore All Insights <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {loadingData ? (
                            <>
                                <BlogSkeleton />
                                <BlogSkeleton />
                                <BlogSkeleton />
                            </>
                        ) : (
                            featuredPosts.map((post: any, index: number) => (
                                <motion.article
                                    key={post._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 rounded-[2.5rem] flex flex-col shadow-sm"
                                >
                                    <div className="h-64 bg-slate-100 relative overflow-hidden">
                                        {post.mainImage ? (
                                            <img
                                                src={urlFor(post.mainImage).width(600).height(400).format('webp').url()}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">No Image</div>
                                        )}
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-4">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-gold" />
                                                {new Date(post.publishedAt || post._createdAt).toLocaleDateString()}
                                            </div>
                                            {post.author && (
                                                <div className="flex items-center gap-1.5 border-l border-gray-200 pl-4">
                                                    <User size={14} className="text-gold" />
                                                    {post.author.name}
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors font-serif leading-tight">
                                            <Link to={`/insight/${post.slug?.current || post._id}`}>{post.title}</Link>
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <Link to={`/insight/${post.slug?.current || post._id}`} className="inline-flex items-center gap-2 text-xs font-black text-primary hover:text-gold transition-colors mt-auto uppercase tracking-widest border-b border-primary/10 pb-1 w-fit">
                                            Read More <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* CEO Message Section */}
            <section className="py-20 bg-white border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* CEO Profile */}
                        <div className="lg:col-span-4 text-center lg:text-left">
                            <div className="relative inline-block mx-auto lg:mx-0">
                                <div className="absolute inset-0 bg-gold/10 transform translate-x-4 translate-y-4 rounded-3xl"></div>
                                <img
                                    src="/ceo_bright_adonai.jpg"
                                    alt="Rev. Dr. Bright Adonai"
                                    className="relative z-10 w-full max-w-[350px] rounded-3xl shadow-xl border border-gray-100 mx-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="mt-6 text-center lg:text-left pl-2">
                                <h3 className="text-2xl font-bold text-primary font-serif">Rev. Dr. Bright Adonai</h3>
                                <p className="text-gold font-bold tracking-widest text-sm uppercase">CEO, Adonai Estate Ltd</p>
                            </div>
                        </div>

                        {/* Message Content */}
                        <div className="lg:col-span-8 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">
                                This Is How People <span className="text-primary italic">Secure Their Land Early</span>
                            </h2>

                            <div className="prose prose-lg text-gray-600 leading-relaxed space-y-6 text-base md:text-lg">
                                <p>
                                    Every major estate and fast-growing community starts the same way.
                                    <span className="font-semibold text-gray-900"> Early buyers secure land at accessible prices.</span> Late buyers pay more or miss out entirely.
                                </p>
                                <p>
                                    At Adonai Estate Ltd, we are currently offering litigation-free plots in strategic growth locations, including our flagship development, <strong className="text-gray-900">Airport Golf City</strong>. These lands are properly documented, clearly demarcated, and available for immediate acquisition.
                                </p>

                                <div className="bg-slate-50 border-l-4 border-gold p-6 rounded-r-xl my-8">
                                    <p className="text-xl font-bold text-gray-900 italic">
                                        "This is not a future opportunity. It is available now."
                                    </p>
                                </div>

                                <p className="font-bold text-gray-900">Buyers who act early enjoy:</p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none pl-0">
                                    {[
                                        'Lower entry prices',
                                        'Flexible payment options',
                                        'Priority allocation',
                                        'Long-term appreciation'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                            <CheckCircle className="text-gold flex-shrink-0" size={20} />
                                            <span className="font-medium text-gray-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p>
                                    Many of our current landowners started with one plot. Today, they own more, simply because they acted early. If you are planning to build, invest, or secure land for the future, waiting does not improve your position. <span className="text-red-500 font-medium">Prices rise. Availability reduces. Options disappear.</span>
                                </p>

                                <p>
                                    You do not need millions to start. You need the right location, clear ownership, and a decision. That is what Adonai Estate Ltd provides.
                                </p>

                                <div className="pt-4">
                                    <p className="text-xl font-bold text-gray-900 mb-4">Enquire now. Secure your plot. Grow with the development.</p>
                                    <Link to="/estates/airport-golf-city" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all uppercase tracking-wide border-b-2 border-primary pb-1">
                                        Start Your Journey <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section className="py-24 relative overflow-hidden bg-primary">
                <div className="absolute inset-0 bg-[url('/hero_home_main.jpg')] bg-cover bg-fixed opacity-10 mix-blend-overlay"></div>
                <div className="container mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Own Your Dream Land?</h2>
                    <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
                        Take the first step towards litigation-free land ownership and quality living today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://wa.me/233599007786" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-8 py-4">
                            Get in Touch with Adonai
                        </a>
                        <a href="mailto:richardadaaze@gmail.com" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 flex items-center justify-center gap-2">
                            <Mail size={20} /> Send Email
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
