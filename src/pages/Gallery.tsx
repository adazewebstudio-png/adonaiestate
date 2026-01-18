import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon, Maximize2, X, Filter, Loader2, Calendar, MapPin } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';

interface GalleryItem {
    _id: string;
    title: string;
    category: string;
    image: any;
    description?: string;
    _createdAt: string;
}

const CATEGORIES = [
    'All',
    'Commissioning of Police Station',
    'Golf City restaurant Launch',
    'NOWA 2020',
    'Airport Golf City'
];

const Gallery = () => {
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const query = `*[_type == "gallery"] | order(_createdAt desc)`;
                const data = await client.fetch(query);
                setItems(data);
                setFilteredItems(data);
            } catch (error) {
                console.error('Error fetching gallery:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredItems(items);
        } else {
            setFilteredItems(items.filter(item => item.category === activeCategory));
        }
    }, [activeCategory, items]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin text-gold" size={48} />
                    <p className="text-gray-500 font-medium tracking-widest uppercase text-xs">Opening the vault...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <Helmet>
                <title>Gallery | Adonai Estate Limited</title>
                <meta name="description" content="Explore photos from our major milestones, events, and estate developments." />
            </Helmet>

            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="bg-primary rounded-[3rem] pt-16 pb-16 md:pt-24 md:pb-24 mb-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-10 max-w-4xl mx-auto px-6"
                    >
                        <span className="text-gold font-bold tracking-[0.3em] uppercase mb-4 block text-sm">Visual Journey</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 italic font-serif leading-tight">Our Gallery</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Capturing the milestones, celebrations, and architectural excellence that define our legacy.
                        </p>
                    </motion.div>
                </div>

                {/* Filter Controls */}
                <div className="mb-12 flex flex-col items-center gap-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 transform active:scale-95 ${activeCategory === cat
                                    ? 'bg-gold text-white shadow-xl shadow-gold/20'
                                    : 'bg-white text-gray-500 hover:bg-slate-100 border border-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3 text-gray-400">
                        <Filter size={18} className="text-gold" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em]">Showing {filteredItems.length} Moments</span>
                    </div>
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item._id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.05 }}
                                className="group cursor-pointer"
                                onClick={() => setSelectedImage(item)}
                            >
                                <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 aspect-square">
                                    {item.image ? (
                                        <img
                                            src={urlFor(item.image).width(800).height(800).url()}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-slate-100">
                                            <ImageIcon size={48} className="text-gray-300" />
                                        </div>
                                    )}

                                    {/* Overlay content */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                        <motion.div
                                            initial={{ y: 20 }}
                                            whileInView={{ y: 0 }}
                                            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                        >
                                            <span className="text-gold text-[10px] font-black uppercase tracking-widest mb-2 block">{item.category}</span>
                                            <h3 className="text-white text-xl font-bold mb-2 font-serif">{item.title}</h3>
                                            <div className="flex items-center gap-2 text-white/70 text-xs">
                                                <Maximize2 size={14} className="text-gold" />
                                                <span className="font-bold tracking-tighter">Click to expand</span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-32 text-center"
                    >
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                            <ImageIcon size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No photos in this category yet</h3>
                        <p className="text-gray-500 max-w-sm mx-auto">We are currently curating and uploading photos for this category. Check back soon!</p>
                    </motion.div>
                )}
            </div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 bg-white rounded-[3rem] overflow-hidden shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="lg:col-span-2 aspect-[4/3] lg:aspect-auto bg-slate-100 relative">
                                <img
                                    src={urlFor(selectedImage.image).url()}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">{selectedImage.category}</span>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif italic">{selectedImage.title}</h3>
                                {selectedImage.description && (
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                                        "{selectedImage.description}"
                                    </p>
                                )}
                                <div className="space-y-4 pt-8 border-t border-gray-100">
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <Calendar size={18} className="text-gold" />
                                        <span className="text-sm font-bold uppercase tracking-wider">{new Date(selectedImage._createdAt).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <MapPin size={18} className="text-gold" />
                                        <span className="text-sm font-bold uppercase tracking-wider">Official Milestone</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="mt-12 btn btn-primary w-full py-4 rounded-2xl"
                                >
                                    Close Viewer
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
