import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const GcvrAucreGardens = () => {
    return (
        <>
            <Helmet>
                <title>GCVR/AUCRE GARDENS | Adonai Estate Subsidiary</title>
                <meta name="description" content="GCVR/AUCRE GARDENS, a subsidiary of Adonai Estate Ltd." />
            </Helmet>

            <div className="pt-24 pb-20 bg-white min-h-screen">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">GCVR/AUCRE GARDENS</h1>
                        <div className="w-full h-64 bg-slate-100 rounded-2xl mb-8 flex items-center justify-center text-gray-400">
                            (Logo/Image Details Coming Soon)
                        </div>
                        <p className="text-xl text-gray-600">
                            Details about GCVR/AUCRE GARDENS will be updated soon.
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default GcvrAucreGardens;
