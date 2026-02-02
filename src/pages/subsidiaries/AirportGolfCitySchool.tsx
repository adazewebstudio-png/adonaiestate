import React from 'react';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Phone, MapPin, CheckCircle, GraduationCap, Baby, Users } from 'lucide-react';

const AirportGolfCitySchool = () => {
    const programs = [
        { name: "Child Care", icon: <Baby size={20} /> },
        { name: "Creche", icon: <Users size={20} /> },
        { name: "Nursery", icon: <BookOpen size={20} /> },
        { name: "Kindergarten", icon: <GraduationCap size={20} /> },
        { name: "Primary", icon: <CheckCircle size={20} /> }
    ];

    return (
        <>
            <SEO
                title="AIRPORT GOLFCITY INTERNATIONAL SCHOOL | AUCRE Basic School"
                description="Airport Golfcity International School (AGIS) offers British & GES curriculum for Creche, Nursery, Kindergarten, and Primary levels in Ho."
                pathname="/subsidiaries/airport-golf-city-school"
                image="/images/agis/agis_student_portrait.jpg"
            />

            <div className="pt-32 pb-20 bg-[#fafafa] min-h-screen">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-5xl mx-auto"
                    >
                        {/* Header Section */}
                        <div className="text-center mb-16">
                            <div className="w-40 h-40 mx-auto mb-8 overflow-hidden rounded-full border-4 border-red-600 shadow-2xl bg-white p-2">
                                <img src="/agis_logo.jpg" alt="AGIS Logo" className="w-full h-full object-cover rounded-full" />
                            </div>

                            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-red-200">
                                Admissions Open • Enrol Now
                            </span>

                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif leading-tight uppercase">
                                Airport Golfcity<br />International School
                            </h1>
                            <p className="text-xl md:text-2xl text-gold font-medium mb-8 tracking-wide">
                                (AUCRE Basic School) • Nurturing Excellence
                            </p>

                            {/* Main Description */}
                            <div className="max-w-3xl mx-auto mb-8 space-y-6">
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    <strong>AIRPORT GOLFCITY INTERNATIONAL SCHOOL (AGIS)</strong> is a premium preschool dedicated to providing a solid foundation for your child's future. We offer a safe, stimulating, and modern learning environment designed to spark curiosity and creativity in young minds.
                                </p>
                            </div>
                        </div>

                        {/* Specialized Content Section */}
                        <div className="max-w-5xl mx-auto mb-20">

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                {/* Programs Column (Span 7) */}
                                <div className="lg:col-span-7 space-y-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                                            <BookOpen size={20} />
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900">Programs Offered</h4>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {programs.map((prog, idx) => (
                                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-100 hover:-translate-y-1 transition-all duration-300 group">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                                                        {prog.icon}
                                                    </div>
                                                    <span className="font-bold text-gray-800 text-lg group-hover:text-red-600 transition-colors">{prog.name}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Location Column (Span 5) */}
                                <div className="lg:col-span-5">
                                    <div className="bg-gray-900 rounded-[2rem] p-8 md:p-10 h-full text-white relative overflow-hidden flex flex-col justify-center">
                                        {/* Decor */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                                        <div className="relative z-10">
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-yellow-400 mb-6 backdrop-blur-md border border-white/10">
                                                <MapPin size={16} /> Locate Us
                                            </div>

                                            <h4 className="text-2xl font-bold mb-4 font-serif">Conveniently Located</h4>
                                            <p className="text-gray-400 leading-relaxed mb-8">
                                                Situated in the heart of Ho, making drop-offs and pick-ups effortless for parents.
                                            </p>

                                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/5">
                                                <div className="flex items-start gap-4">
                                                    <div className="mt-1 text-red-500 bg-white p-2 rounded-full shadow-lg">
                                                        <MapPin size={20} fill="currentColor" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-white text-lg">AGIS Campus</p>
                                                        <p className="text-gray-300 mt-1 leading-relaxed">
                                                            Adjacent Ho Sports Stadium,<br />Living Spring Road,<br />Ho, Volta Region.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image Gallery Header */}
                        <div className="text-center mb-8 mt-16">
                            <h2 className="text-2xl font-bold text-gray-900 font-serif">Life at AGIS</h2>
                            <p className="text-gray-500">Inspiring curiosity, creativity, and confidence.</p>
                        </div>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/agis/agis_student_portrait.jpg" alt="Student Portrait" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/agis/agis_classroom_activity.jpg" alt="Active Learning" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/agis/agis_group_learning.jpg" alt="Collaborative Learning" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/agis/agis_practical_session.jpg" alt="Practical Skills" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/agis/agis_outdoor_seating.jpg" alt="Outdoor Activities" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-64 shadow-md group">
                                <img src="/images/agis/agis_sports.jpg" alt="Sports & Recreation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            </div>
                        </div>

                        {/* Call to Action Bar */}
                        <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 text-white text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-3xl font-bold mb-8 relative z-10">Secure Your Child's Place Today</h3>

                            <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                                <a href="tel:0362001361" className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-red-600/30">
                                    <Phone size={20} />
                                    036 200 1361
                                </a>
                                <a href="tel:0248629946" className="flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all">
                                    <Phone size={20} />
                                    024 862 9946
                                </a>
                            </div>
                            <p className="mt-6 text-gray-400 text-sm">Call us now for enrollment inquiries.</p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default AirportGolfCitySchool;
