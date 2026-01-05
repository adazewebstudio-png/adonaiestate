import React, { useState } from 'react';
import EstateLayout from '../../components/EstateLayout';
import { Tag, ShoppingCart, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingModal from '../../components/BookingModal';

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

    return (
        <>
            <EstateLayout
                title="Airport Golf City"
                location="Ho, Volta Region"
                description="Adonai Estate Airport Golf City is our biggest site, meticulously designed to offer a premium living experience. It features a proper layout, well-demarcated plots, and a host of amenities including a 98-acre golf course. All these features and more are expected to be provided at our other sites."
                features={[
                    'Proper layout & Well demarcated',
                    'Litigation free lands',
                    'Residential and commercial plots',
                    'Plot size – 100 x 70 feet',
                    '24-hour security',
                    'Free documentation',
                    '98 acres Golf course',
                    'Tourist sites – Kokovena Mountain, 100% Answered prayer rock',
                    'Proper sewage, drainage, water and lighting systems',
                    'Worship center, Sports Complex, School, Police Station',
                    'Hotel & Restaurant (currently operating)',
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
                                                onClick={() => handleBuyClick(comm.name, comm.price || '')}
                                                className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                                            >
                                                <ShoppingCart size={18} />
                                                Buy This Plot
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
