import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Gem, ArrowRight, CheckCircle2 } from 'lucide-react';

const Grolip = () => {
    const tableData = [
        { plots: 1.5, amount: "45,000.00", returns: "1,800.00" },
        { plots: 2, amount: "60,000.00", returns: "2,400.00" },
        { plots: 3, amount: "90,000.00", returns: "3,600.00" },
        { plots: 4, amount: "120,000.00", returns: "4,800.00" },
        { plots: 5, amount: "150,000.00", returns: "6,000.00" },
        { plots: 6, amount: "180,000.00", returns: "7,200.00" },
    ];

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <Helmet>
                <title>GROLIP | Adonai Estate Limited</title>
                <meta name="description" content="Greater Returns On Land Investment Package (GROLIP) - Earn 4% monthly appreciation with Adonai Estate Limited." />
            </Helmet>

            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <span className="text-gold font-bold tracking-widest uppercase mb-2 block">Investment Package</span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
                        GREATER RETURNS ON <br className="hidden md:block" />
                        <span className="text-primary">LAND INVESTMENT PACKAGE</span> (GROLIP)
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Invest in Ho Airport Golf City Executive Golf Avenue Land & Earn <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">4% Appreciation Monthly</span>.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                    >
                        <div className="p-4 bg-blue-50 text-blue-600 rounded-full mb-4">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Great Appreciation</h3>
                        <p className="text-gray-500">Secure your wealth with land that grows in value every single month.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                    >
                        <div className="p-4 bg-green-50 text-green-600 rounded-full mb-4">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Low Maintenance</h3>
                        <p className="text-gray-500">A hassle-free investment. We manage the land while you earn the returns.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
                    >
                        <div className="p-4 bg-gold/10 text-gold rounded-full mb-4">
                            <Gem size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Land Ownership</h3>
                        <p className="text-gray-500">Full ownership rights with genuine documentation and peace of mind.</p>
                    </motion.div>
                </div>

                {/* Investment Table */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
                >
                    <div className="bg-primary p-6 text-white text-center">
                        <h2 className="text-2xl font-bold">Investment Returns Table</h2>
                        <p className="opacity-90 mt-1">ROI calculated based on 4% monthly appreciation</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 border-b border-gray-200">
                                <tr>
                                    <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Number of Plots</th>
                                    <th className="p-6 font-bold text-gray-600 uppercase text-xs tracking-wider">Investment Amount (₵)</th>
                                    <th className="p-6 font-bold text-green-700 uppercase text-xs tracking-wider">Monthly Returns (₵)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {tableData.map((row, index) => (
                                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-6 font-medium text-gray-900">{row.plots} Plots</td>
                                        <td className="p-6 font-bold text-gray-700">₵ {row.amount}</td>
                                        <td className="p-6 font-bold text-green-600 text-lg">₵ {row.returns}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-8 bg-slate-50 text-center border-t border-gray-100">
                        <p className="text-gray-600 mb-6 font-medium italic">
                            "Adonai Estate Limited: The Volta Land Supermarket"
                        </p>
                        <button className="btn btn-primary shadow-xl shadow-primary/20 text-lg px-8 py-4">
                            Invest Now <ArrowRight size={20} className="ml-2" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Grolip;
