import React from 'react';
import EstateLayout from '../../components/EstateLayout';
import { Anchor, Waves, TreeDeciduous, CheckCircle2, Home, MapPin, Sun, Wind } from 'lucide-react';
import { motion } from 'framer-motion';


const VoltaSafariCity = () => {


    const highlights = [
        { icon: Waves, title: 'Riverside Living', text: 'Exclusive access to the serene banks of the Volta River at Sogakope.' },
        { icon: TreeDeciduous, title: 'Eco-Luxury', text: 'Designed to blend high-end architecture with the natural beauty of the safari landscape.' },
        { icon: Anchor, title: 'Water Activities', text: 'Planned docks and waterfront activities for recreational and tourism purposes.' },
        { icon: Wind, title: 'Fresh Atmosphere', text: 'Escape the city heat with the refreshing and cool breeze characteristic of the riverfront.' },
    ];

    const offerings = [
        { name: 'Luxury Riverside Lodges', status: 'Upcoming' },
        { name: 'Eco-Friendly Residential Plots', status: 'Upcoming' },
        { name: 'Safari-Themed Short Stays', status: 'Upcoming' },
        { name: 'Waterfront Restaurant & Bar', status: 'Upcoming' },
    ];

    return (
        <>
            <EstateLayout
                title="Volta Safari City"
                location="Sogakope, Volta Region"
                isUpcoming={true}
                upcomingLabel="Upcoming Project"
                upcomingHeroTitle="A Resort You Can Call Home"
                upcomingOfferings={offerings}
                description="Volta Safari City at Sogakope is where luxury meets nature. This visionary eco-friendly development offers riverside lodges and residential homes designed for those who seek tranquility, luxury, and a direct connection to nature. It's not just an estate; it's a resort-style lifestyle."
                features={[
                    'Prime Volta Riverfront Access',
                    'Eco-Friendly Infrastructure',
                    'Luxury Safari Lodges',
                    'Boat Docks & Waterfront Trails',
                    '24/7 Gated Security',
                    'Planned Resort & Spa',
                    'Sustainable Power Integration',
                    'Proper Layout & Demarcation',
                    'Litigation-Free Waterfront Land',
                    'High Tourism Value'
                ]}
                imagePlaceholder="Volta Safari City View"
                heroImage="/images/estates/volta-safari-city/safari3.jpg"
                images={[
                    '/images/estates/volta-safari-city/safari1.jpg',
                    '/images/estates/volta-safari-city/safari2.jpg',
                    '/images/estates/volta-safari-city/safari3.jpg',
                    '/images/estates/volta-safari-city/safari4.jpg',
                    '/images/estates/volta-safari-city/safari5.jpg',
                    '/images/estates/volta-safari-city/safari6.jpg'
                ]}
            >
                {/* Vision Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Nature & Luxury</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">The Riverside Dream</h2>
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
            </EstateLayout>


        </>
    );
};

export default VoltaSafariCity;
