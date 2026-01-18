import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Maximize, Tag, User, Calendar, ArrowRight, Filter, Search, ChevronDown, X } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';

interface Property {
    _id: string;
    title: string;
    location: string;
    region?: string;
    district?: string;
    area?: string;
    price: string;
    size: string;
    type: string;
    category?: string;
    mainImage: any;
    tag?: string;
    _createdAt: string;
}

const CATEGORIES = ['All', 'Residential land', 'Off Plan Building', 'Commercial Lands'];

const LOCATIONS: any = {
    'Greater Accra': {
        'Accra Metropolitan': ['Central Business District', 'Airport Residential', 'Cantonments', 'East Legon', 'Osu', 'Labone'],
        'Tema Metropolitan': ['Tema Community 1', 'Tema Community 25', 'Sakumono'],
        'Adentan Municipal': ['Adenta', 'Frafraha', 'Oyarifa'],
        'Ga East Municipal': ['Haatso', 'Atomic', 'Dome'],
        'Ga West Municipal': ['Pokuase', 'Amasaman'],
        'Ledzokuku-Krowor': ['Teshie', 'Nungua'],
        'Other': ['Dodowa', 'Prampram', 'Ada']
    },
    'Volta Region': {
        'Ho Municipal': ['Ho Township', 'Airport Golf City', 'UHAS Area', 'Sokode', 'Bankoe'],
        'South Tongu': ['Sogakope', 'Tefle'],
        'Hohoe Municipal': ['Hohoe', 'Wli'],
        'Keta Municipal': ['Keta', 'Anloga'],
        'North Tongu': ['Juapong', 'Battor'],
        'Other': ['Kpando', 'Aflao', 'Akatsi']
    },
    'Eastern Region': {
        'New Juaben North': ['Koforidua', 'Effiduase'],
        'Akuapim North': ['Akropong', 'Aburi', 'Larteh'],
        'Akuapim South': ['Nsawam', 'Aburi Hills'],
        'Suhum Municipal': ['Suhum'],
        'Other': ['Kibi', 'Nkawkaw', 'Somanya']
    }
};

const PropertySkeleton = () => (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full animate-pulse">
        <div className="h-64 bg-gray-200"></div>
        <div className="p-6 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-10 bg-gray-200 rounded mt-4"></div>
        </div>
    </div>
);

const Listings = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedArea, setSelectedArea] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const query = `*[_type == "property"] | order(_createdAt desc) {
                    _id, title, location, region, district, area, price, size, type, category, mainImage, tag, _createdAt
                }`;
                const data = await client.fetch(query, {}, { useCdn: true });
                setProperties(data || []);
                setFilteredProperties(data || []);
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    useEffect(() => {
        let result = properties;
        if (activeCategory !== 'All') result = result.filter(p => p.category === activeCategory);
        if (selectedRegion) result = result.filter(p => p.region === selectedRegion);
        if (selectedDistrict) result = result.filter(p => p.district === selectedDistrict);
        if (selectedArea) result = result.filter(p => p.area === selectedArea);
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(p => p.title.toLowerCase().includes(query) || p.location.toLowerCase().includes(query));
        }
        setFilteredProperties(result);
    }, [activeCategory, selectedRegion, selectedDistrict, selectedArea, searchQuery, properties]);

    const resetFilters = () => {
        setActiveCategory('All');
        setSelectedRegion('');
        setSelectedDistrict('');
        setSelectedArea('');
        setSearchQuery('');
    };

    return (
        <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
            <SEO
                title="Property Listings"
                description="Explore Residential Land, Commercial Land, and Off-Plan Buildings across Ghana. Litigation-free and ready for development."
                pathname="/listings"
            />

            <div className="container mx-auto px-4">
                <div className="bg-primary rounded-[3rem] pt-16 pb-16 md:pt-24 md:pb-24 mb-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                    <div className="relative z-10 max-w-4xl mx-auto px-6">
                        <span className="text-gold font-bold tracking-[0.3em] uppercase mb-4 block text-sm">Official Catalog</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 italic font-serif">Property Listings</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Filter our curated selection of premium, litigation-free properties by category and location.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100 mb-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeCategory === cat ? 'bg-gold text-white shadow-lg shadow-gold/20' : 'bg-slate-50 text-gray-500 hover:bg-slate-100'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 w-full lg:w-auto">
                            <div className="bg-slate-50 p-2.5 rounded-2xl border border-gray-100 flex-1 flex items-center gap-3 min-w-[300px]">
                                <Search size={18} className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by name or area..."
                                    className="bg-transparent border-none outline-none text-sm w-full"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-gray-600">
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`p-3 rounded-2xl border transition-all duration-300 flex items-center gap-2 font-bold text-sm ${showFilters ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-100 hover:border-gold'}`}
                            >
                                <Filter size={18} />
                                <span className="hidden sm:inline">Advanced Filter</span>
                                <ChevronDown size={16} className={`transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-50 mt-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">1. Region</label>
                                        <select
                                            value={selectedRegion}
                                            onChange={(e) => { setSelectedRegion(e.target.value); setSelectedDistrict(''); setSelectedArea(''); }}
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-gray-100 outline-none focus:border-gold transition-colors font-medium text-sm"
                                        >
                                            <option value="">Select Region</option>
                                            {Object.keys(LOCATIONS).map(region => (<option key={region} value={region}>{region}</option>))}
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">2. District / City</label>
                                        <select
                                            value={selectedDistrict}
                                            disabled={!selectedRegion}
                                            onChange={(e) => { setSelectedDistrict(e.target.value); setSelectedArea(''); }}
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-gray-100 outline-none focus:border-gold transition-colors font-medium text-sm disabled:opacity-50"
                                        >
                                            <option value="">Select District</option>
                                            {selectedRegion && Object.keys(LOCATIONS[selectedRegion]).map(dist => (<option key={dist} value={dist}>{dist}</option>))}
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">3. Specific Area</label>
                                        <select
                                            value={selectedArea}
                                            disabled={!selectedDistrict}
                                            onChange={(e) => setSelectedArea(e.target.value)}
                                            className="w-full p-4 rounded-xl bg-slate-50 border border-gray-100 outline-none focus:border-gold transition-colors font-medium text-sm disabled:opacity-50"
                                        >
                                            <option value="">Select Area</option>
                                            {selectedDistrict && LOCATIONS[selectedRegion][selectedDistrict].map((area: string) => (<option key={area} value={area}>{area}</option>))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-end mt-6">
                                    <button onClick={resetFilters} className="text-sm font-bold text-primary hover:text-gold transition-colors flex items-center gap-2">
                                        <X size={16} /> Reset All Filters
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mb-8 flex items-center justify-between">
                    <p className="text-gray-500 font-medium text-sm">
                        Showing <span className="text-gray-900 font-bold">{filteredProperties.length}</span> properties
                        {selectedRegion && <span> in <span className="text-gold font-bold">{selectedRegion}</span></span>}
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Updates</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {loading ? (
                        <>
                            <PropertySkeleton />
                            <PropertySkeleton />
                            <PropertySkeleton />
                        </>
                    ) : filteredProperties.length > 0 ? (
                        filteredProperties.map((prop) => (
                            <motion.div
                                key={prop._id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100 flex flex-col h-full"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    {prop.mainImage ? (
                                        <img
                                            src={urlFor(prop.mainImage).width(600).height(400).format('webp').url()}
                                            alt={prop.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-gray-400">No Image Available</div>
                                    )}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {prop.tag && <div className="bg-white/95 backdrop-blur-sm px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full text-primary shadow-sm">{prop.tag}</div>}
                                        {prop.category && <div className="bg-gold/90 backdrop-blur-sm px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full text-white shadow-sm">{prop.category}</div>}
                                    </div>
                                    <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 text-sm font-black rounded-xl text-white shadow-lg">{prop.price}</div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-2"><Tag size={12} /> {prop.type}</div>
                                        <Link to={`/listings/${prop._id}`}><h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-primary transition-colors cursor-pointer">{prop.title}</h3></Link>
                                        <p className="text-gray-500 text-sm flex items-center gap-1.5 font-medium"><MapPin size={14} className="text-primary font-bold" /> {prop.location}</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-50 mb-6">
                                        <div className="flex items-center gap-2 text-gray-600"><Maximize size={16} className="text-gold" /><span className="text-xs font-bold tracking-tight">{prop.size}</span></div>
                                        <div className="flex items-center gap-2 text-gray-600"><Calendar size={16} className="text-gold" /><span className="text-xs font-bold tracking-tight">{new Date(prop._createdAt).toLocaleDateString()}</span></div>
                                    </div>
                                    <div className="mt-auto flex flex-col gap-4">
                                        <Link to="/agent/richard-adaze" className="flex items-center gap-3 group/agent p-2 rounded-xl transition-colors hover:bg-slate-50">
                                            <img src="/richard_adaze.jpg" alt="Agent" className="w-8 h-8 rounded-full border border-gray-200" />
                                            <div className="text-left"><span className="block text-[9px] text-gray-400 font-black uppercase tracking-tighter">Listed By</span><span className="block text-xs font-bold text-gray-700 group-hover/agent:text-gold transition-colors">Richard Adaze</span></div>
                                        </Link>
                                        <Link to={`/listings/${prop._id}`} className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-white font-bold rounded-xl hover:bg-gold transition-all duration-300 shadow-lg shadow-primary/10">View Details <ArrowRight size={16} /></Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400"><Search size={32} /></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No matching properties</h3>
                            <p className="text-gray-500 mb-8 max-w-sm mx-auto">We couldn't find any listings matching your current filters.</p>
                            <button onClick={resetFilters} className="btn btn-primary px-8">Reset All Filters</button>
                        </div>
                    )}
                </div>

                <div className="mt-16 bg-gold/5 rounded-3xl p-8 border border-gold/10 text-center">
                    <div className="flex items-center justify-center gap-4 mb-4"><div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold shadow-sm"><User size={24} /></div></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Want to list your property?</h3>
                    <p className="text-gray-600 max-w-xl mx-auto">All property listings are managed by <strong>Richard Adaze</strong>. Contact him for verification.</p>
                </div>
            </div>
        </div>
    );
};

export default Listings;
