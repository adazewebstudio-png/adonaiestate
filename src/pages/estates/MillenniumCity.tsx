import React from 'react';
import EstateLayout from '../../components/EstateLayout';
import { Tag, Lock, CheckCircle2, ArrowRight, History, MapPin, Building2, TreeDeciduous } from 'lucide-react';
import { motion } from 'framer-motion';


const MillenniumCity = () => {


    const highlights = [
        { icon: History, title: 'Cultural Heritage', text: 'Designed to bring people home to feel their roots and understand their heritage.' },
        { icon: MapPin, title: 'Strategic Location', text: 'Located at Kpetoe, a place of deep cultural significance and natural beauty.' },
        { icon: Building2, title: 'Future-Ready', text: 'Commercial and residential locations integrated with essential social amenities.' },
        { icon: TreeDeciduous, title: 'Tourism Centers', text: 'Planned tourism sites and cultural exchange programs within the city.' },
    ];

    const offerings = [
        { name: 'Residential Plots (Serviced)', status: 'Upcoming' },
        { name: 'Residential Plots (Unserviced)', status: 'Upcoming' },
        { name: 'Commercial Plots', status: 'Upcoming' },
        { name: 'Hotel & Resort Zone', status: 'Upcoming' },
        { name: 'Cultural Exchange Center', status: 'Upcoming' },
        { name: 'Restaurant & Dining Area', status: 'Upcoming' },
    ];

    return (
        <>
            <EstateLayout
                title="Millennium City"
                location="Kpetoe, Volta Region"
                isUpcoming={true}
                upcomingLabel="Upcoming Project"
                upcomingHeroTitle="Registration of Interest Coming Soon"
                upcomingOfferings={offerings}
                description="Millennium City at Kpetoe is a visionary project conceived to solve more than just the housing deficit. It is a homecoming project—a place where the diaspora and locals alike can reconnect with their cultural heritage, feel their roots, and settle down in a community that honors tradition while embracing modern excellence."
                features={[
                    'Cultural Exchange Programs',
                    'Tourism Sites & Heritage Hubs',
                    'Commercial and Residential Locations',
                    'Serviced and Unserviced Plots',
                    'Luxury Hotel & Resort',
                    'Modern Restaurant',
                    'Police Station (Security First)',
                    'Proper Layout and Planned Infrastructure',
                    'Worship Centers',
                    'Social Amenities & Green Spaces'
                ]}
                imagePlaceholder="Millennium City View"
                heroImage="/images/estates/millennium-city/hero.jpg"
                images={['/images/estates/millennium-city/hero.jpg']}
            >
                {/* Vision & Concept Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">A Place Called Home</h2>
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

export default MillenniumCity;
