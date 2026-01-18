import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const AirportGolfCitySchool = () => {
    return (
        <>
            <Helmet>
                <title>AIRPORT GOLFCITY INTERNATIONAL SCHOOL | Adonai Estate Subsidiary</title>
                <meta name="description" content="AIRPORT GOLFCITY INTERNATIONAL SCHOOL, providing quality education as a subsidiary of Adonai Estate Ltd." />
            </Helmet>

            <div className="pt-24 pb-20 bg-white min-h-screen">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AIRPORT GOLFCITY INTERNATIONAL SCHOOL</h1>
                        <div className="w-48 h-48 mx-auto mb-10 overflow-hidden rounded-full border-4 border-primary shadow-2xl">
                            <img src="/agis_logo.jpg" alt="AIRPORT GOLFCITY INTERNATIONAL SCHOOL Logo" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-xl text-gray-600">
                            Details about AIRPORT GOLFCITY INTERNATIONAL SCHOOL will be updated soon.
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default AirportGolfCitySchool;
