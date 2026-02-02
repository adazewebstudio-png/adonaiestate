import React from 'react';
import EstateLayout from '../../components/EstateLayout';
import { School, GraduationCap, Mountain, CheckCircle2, Building2, MapPin, Zap, Route } from 'lucide-react';
import { motion } from 'framer-motion';


const UhasFloridaCity = () => {


    const highlights = [
        { icon: School, title: 'Academic Hub', text: 'Located just minutes away from the University of Health and Allied Sciences (UHAS).' },
        { icon: Building2, title: 'Hostel Investment', text: 'Primely situated for student hostels and staff residential developments.' },
        { icon: Mountain, title: 'Scenic Views', text: 'Wake up to the beautiful and serene mountain landscapes of the Ho municipality.' },
        { icon: Route, title: 'Planned Access', text: 'Designed with a proper road network and easy accessibility to the teaching hospital.' },
    ];

    const offerings = [
        { name: 'Student Hostel Plots', status: 'Upcoming' },
        { name: 'Residential Plots (Staff Zone)', status: 'Upcoming' },
        { name: 'Commercial Service Plots', status: 'Upcoming' },
        { name: 'Mixed-Use Development Area', status: 'Upcoming' },
    ];

    return (
        <>
            <EstateLayout
                title="UHAS Florida City"
                location="Ho, Volta Region"
                isUpcoming={true}
                upcomingLabel="Upcoming Project"
                upcomingHeroTitle="Future Living, Minutes from Campus"
                upcomingOfferings={offerings}
                description="UHAS Florida City is a vibrant and youthful community designed for modern lifestyles. Located just minutes away from the University of Health and Allied Sciences (UHAS), this estate is strategically positioned for individuals looking for a scenic residential home or investors aiming to tap into the high demand for student and staff accommodation."
                features={[
                    'Proximity to UHAS Campus',
                    'Ideal for Student Hostels',
                    'Fast Developing Area',
                    'Close to Ho Teaching Hospital',
                    'Scenic Mountain Views',
                    'Litigation Free & Secure Documentation',
                    'Planned Electricity & Water Lines',
                    'Clear Road Demarcations',
                    'Gated Community Security Potential',
                    'Serene & Quiet Environment'
                ]}
                imagePlaceholder="UHAS Florida City Development"
                heroImage="/images/estates/florida-city/hero.jpg"
                images={['/images/estates/florida-city/hero.jpg']}
            >
                {/* Vision Section */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <span className="text-gold font-bold tracking-widest uppercase mb-4 block text-sm">Strategic Location</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">A Smart Investment in Ho</h2>
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

export default UhasFloridaCity;
