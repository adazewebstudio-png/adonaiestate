import React, { useState } from 'react';
import EstateLayout from '../../components/EstateLayout';
import { Tag, ShoppingCart, Lock, CheckCircle2, ArrowRight, MapPin, ShieldCheck, Layout, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingModal from '../../components/BookingModal';
import SEO from '../../components/SEO';

const AirportGolfCity = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState({ name: '', price: '' });

    const communities = [
        { name: 'Community 1', status: 'Sold Out' },
        { name: 'Community 2', status: 'Sold Out' },
        { name: 'Community 3', status: 'Sold Out' },
        { name: 'Community 4', status: 'Sold Out' },
        { name: 'Community 5', status: 'Sold Out' },
        { name: 'Community 6', price: 'GHS 12,000', status: 'Available' },
        { name: 'Community 7', status: 'Sold Out' },
        { name: 'Community 8', price: 'GHS 9,000', status: 'Available' },
        { name: 'Community 9', price: 'GHS 7,000', status: 'Available' },
        { name: 'Executive Golf Avenue', price: 'GHS 30,000', status: 'Available' },
        { name: 'Golf City Hills', price: 'GHS 20,000', status: 'Available' },
    ];

    const handleBuyClick = (name: string, price: string) => {
        setSelectedPackage({ name, price });
        setIsModalOpen(true);
    };

    const CustomHero = (
        <section className="relative h-[95vh] min-h-[750px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Layer with Ken Burns Animation */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    src="/airport_golf_city_main.jpg"
                    alt="Airport Golf City"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-primary/30 to-transparent"></div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center pt-32 md:pt-40">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/25 border border-gold/50 backdrop-blur-2xl mb-12 mt-12 md:mt-16 shadow-2xl shadow-gold/10"
                    >
                        <MapPin size={16} className="text-gold" />
                        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                            Airport Golf City · Ho, Volta Region
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-9xl font-bold text-white mb-8 font-serif italic tracking-tighter drop-shadow-2xl leading-[0.9]">
                        Experience <br />
                        <span className="text-gold drop-shadow-[0_0_30px_rgba(201,161,64,0.3)]">Luxury</span> Living.
                    </h1>

                    <div className="bg-black/40 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] max-w-2xl mx-auto mb-16 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:bg-black/50 hover:scale-[1.02] duration-500">
                        <p className="text-base md:text-xl text-white/95 leading-relaxed font-light drop-shadow-sm italic">
                            Discover the pinnacle of Voltarian excellence. A meticulously planned 98-acre golf course community where heritage meets modern architectural luxury.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { icon: ShieldCheck, label: "Litigation Free" },
                            { icon: Layout, label: "Premium Layout" },
                            { icon: Star, label: "98-Acre Golf" }
                        ].map((badge, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.15)' }}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/20 text-white font-bold text-sm uppercase tracking-widest shadow-xl transition-all"
                            >
                                <badge.icon size={22} className="text-gold" />
                                <span>{badge.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Premium Scroll Indicator */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 hidden md:block">
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-4"
                >
                    <span className="text-white/30 uppercase tracking-[0.6em] text-[9px] font-black">Begin Journey</span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-gold via-gold/40 to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );

    return (
        <>
            <SEO
                title="Airport Golf City | 98-Acre Golf Experience in Ho"
                description="Secure a plot in Ghana's premier golf community. Airport Golf City in Ho, Volta Region offers litigation-free lands, 24-hour security, and a vibrant golfing social life."
                pathname="/estates/airport-golf-city"
                schema={{
                    "@context": "https://schema.org/",
                    "@type": "Product",
                    "name": "Airport Golf City Estate Plot",
                    "image": "https://adonaiestateltd.com/airport_golf_city_main.jpg",
                    "description": "Standard plot size (100 x 70 ft) in a gated community with a 98-acre functional golf course in Ho, Volta Region.",
                    "brand": {
                        "@type": "Brand",
                        "name": "Adonai Estate"
                    },
                    "offers": {
                        "@type": "AggregateOffer",
                        "priceCurrency": "GHS",
                        "lowPrice": "7000",
                        "highPrice": "30000",
                        "offerCount": "11"
                    }
                }}
            />
            <EstateLayout
                title="Airport Golf City"
                location="Ho, Volta Region"
                customHero={CustomHero}
                contentPadding="pt-12 md:pt-20 pb-24"
                aboutContent={
                    <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-gold first-letter:mr-3 first-letter:float-left">
                            Airport Golf City stands as the crown jewel of Adonai Estate Limited's developments.
                            This isn't just a housing project; it is a meticulously engineered masterpiece where
                            modern luxury converges with the serene landscapes of the Volta Region.
                        </p>
                        <p>
                            Designed around an expansive 98-acre international standard golf course, the community
                            already boasts a <strong>vibrant, active golfing community</strong>. Beyond just a
                            planned amenity, our course is operational and hosts regular players, professional
                            tournaments, and community events on its lush greens daily.
                        </p>
                        <div className="p-8 bg-primary/5 border-l-4 border-gold italic rounded-r-[2rem] shadow-sm">
                            <Star className="text-gold mb-4" />
                            "The 98-acre course is fully functional and ready for your first tee-off. Experience
                            Hole 4 Par 4 and join a growing legacy of elite residents who value sport, community, and leisure."
                        </div>

                        {/* Live From the Course Gallery */}
                        <div className="pt-8">
                            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gold mb-6 flex items-center gap-2">
                                <div className="w-8 h-[1px] bg-gold"></div>
                                Live from the Course
                            </h3>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    '/images/golf-course/golf1.jpg',
                                    '/images/golf-course/golf2.jpg',
                                    '/images/golf-course/golf3.jpg',
                                    '/images/golf-course/golf4.jpg',
                                    '/images/golf-course/golf5.jpg',
                                    '/images/golf-course/golf6.jpg',
                                    '/images/golf-course/golf7.jpg',
                                    '/images/golf-course/golf8.jpg'
                                ].map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer ${idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Golfing at Airport Golf City ${idx + 1}`}
                                            className={`w-full h-full object-cover ${idx === 0 ? 'aspect-video lg:h-[400px]' : 'aspect-square lg:aspect-video lg:h-[200px]'}`}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                description="Adonai Estate Airport Golf City is our biggest site, featuring an active 98-acre golf course where people play and connect daily."
                features={[
                    'Active Golfing Community',
                    '98-Acre Operational Golf Course',
                    'Proper layout & Well demarcated',
                    'Litigation free lands',
                    'Residential and commercial plots',
                    'Plot size – 100 x 70 feet',
                    '24-hour security',
                    'Free documentation',
                    'Tourist sites – Kokovena Mountain',
                    'Proper sewage, drainage & lighting',
                    'Sports Complex & Police Station',
                    'Restaurant (currently operating)',
                    'Social amenities & Green spaces'
                ]}
                imagePlaceholder="Airport Golf City Image"
                heroImage="/airport_golf_city_main.jpg"
                images={[
                    '/images/airport-golf-city/img1.jpg',
                    '/images/airport-golf-city/img2.jpg',
                    '/images/airport-golf-city/img3.jpg',
                    '/images/airport-golf-city/img4.jpg',
                    '/images/airport-golf-city/img5.jpg'
                ]}
            >
                {/* Communities Pricing Section */}
                <div className="mt-16">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Pricing & Availability</h2>
                        <div className="hidden md:flex gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gold"></div> Available</div>
                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-300"></div> Sold Out</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {communities.map((comm, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                style={comm.status === 'Sold Out' ? {
                                    backgroundImage: 'repeating-linear-gradient(45deg, #f8fafc, #f8fafc 10px, #ffffff 10px, #ffffff 20px)'
                                } : {}}
                                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${comm.status === 'Sold Out'
                                    ? 'border border-slate-200 cursor-not-allowed shadow-sm'
                                    : 'bg-white border border-gray-100 shadow-xl shadow-gray-100/50 p-0 transform hover:-translate-y-1 hover:shadow-2xl'
                                    }`}
                            >
                                {comm.status === 'Sold Out' ? (
                                    <div className="p-6 flex items-center justify-between">
                                        <h3 className="font-bold text-slate-600 text-lg flex items-center gap-3">
                                            <Lock size={18} className="text-slate-400" />
                                            {comm.name}
                                        </h3>
                                        <span className="px-3 py-1 bg-white border border-slate-300 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">
                                            Sold Out
                                        </span>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="p-6 border-b border-gray-50 bg-gradient-to-r from-gray-50 to-white">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-xl text-gray-900">{comm.name}</h3>
                                                <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100 uppercase tracking-wide">
                                                    <CheckCircle2 size={12} /> Available
                                                </span>
                                            </div>
                                            <div className="text-gray-500 text-sm">Valid standard plot size (100 x 70 ft)</div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex items-baseline gap-1 mb-6">
                                                <span className="text-sm font-semibold text-gray-400">Starting at</span>
                                                <span className="text-3xl font-bold text-primary">{comm.price}</span>
                                            </div>

                                            <button
                                                onClick={() => window.location.href = '/listings'}
                                                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                                            >
                                                <Layout size={18} />
                                                View Details
                                                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                            </button>
                                        </div>
                                        {/* Gold Accent Indicator */}
                                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold"></div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </EstateLayout>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                packageName={`Airport Golf City - ${selectedPackage.name}`}
                packagePrice={selectedPackage.price}
            />
        </>
    );
};

export default AirportGolfCity;
