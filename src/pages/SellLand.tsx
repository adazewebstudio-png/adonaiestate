
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Tag,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    HelpCircle,
    MapPin,
    DollarSign,
    Calendar,
    User,
    Phone,
    Mail,
    FileText,
    TrendingUp,
    Loader2
} from 'lucide-react';
import SEO from '../components/SEO';
import { client } from '../lib/sanity';

const SellLand = () => {
    // Form State
    const [boughtFromUs, setBoughtFromUs] = useState<string>('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    // Dynamic Fields
    const [location, setLocation] = useState(''); // Handles both Site Location and Land Location
    const [numPlots, setNumPlots] = useState('');
    const [plotNumbers, setPlotNumbers] = useState('');
    const [price, setPrice] = useState(''); // Purchase Price
    const [year, setYear] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Helper to encode data for Netlify
    const encode = (data: Record<string, string>) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const doc = {
            _type: 'sellRequest',
            status: 'new',
            firstName,
            middleName,
            lastName,
            phone,
            email,
            boughtFromUs,
            // Conditional mapping
            siteLocation: boughtFromUs === 'yes' ? location : undefined,
            landLocation: boughtFromUs === 'no' ? location : undefined,
            plotNumbers: boughtFromUs === 'yes' ? plotNumbers : undefined,
            purchasePrice: boughtFromUs === 'yes' ? price : undefined,
            yearOfPurchase: boughtFromUs === 'yes' ? year : undefined,
            numberOfPlots: numPlots,
            sellingPrice: sellingPrice,
            registrationStatus: registrationStatus
        };

        const netlifyData = {
            "form-name": "sell-land-request",
            firstName,
            middleName,
            lastName,
            email,
            phone,
            boughtFromUs,
            siteLocation: boughtFromUs === 'yes' ? location : '',
            landLocation: boughtFromUs === 'no' ? location : '',
            numberOfPlots: numPlots,
            plotNumbers: plotNumbers,
            purchasePrice: price,
            yearOfPurchase: year,
            sellingPrice: sellingPrice,
            registrationStatus: registrationStatus
        };

        try {
            // Submit to Sanity (Database) AND Netlify (Email Notification) in parallel
            await Promise.all([
                client.create(doc),
                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode(netlifyData)
                })
            ]);

            setFormSubmitted(true);
            window.scrollTo(0, 0);
        } catch (error) {
            console.error("Submission failed:", error);
            alert("Something went wrong. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Structured Data for AEO/LLM
    const pageSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Land Resale & Acquisition",
                "provider": {
                    "@type": "Organization",
                    "name": "Adonai Estate Limited"
                },
                "description": "Professional assistance in selling your land or liquidating your real estate investment.",
                "areaServed": "Ghana",
                "serviceType": "Real Estate"
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can I sell my land if I didn't buy it from Adonai Estate?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, we handle sales for prime lands acquired from other sources, subject to our verification and due diligence process."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do you buy the land back directly?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "For lands originally purchased from Adonai Estate, we offer buy-back options. For third-party lands, we act as a broker to connect you with our extensive network of verified buyers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What documents do I need to sell my land?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You will typically need your site plan, indenture, land certificate (if applicable), and valid personal identification. Our team will guide you through the specific requirements."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-20">
            <SEO
                title="Sell Your Land"
                description="Resell your land through Adonai Estate Limited. Whether you bought from us or elsewhere, we help you find the right buyers or buy it back."
                pathname="/sell-land"
                schema={pageSchema}
            />

            <div className="container mx-auto px-4">
                {/* Hero / Explanation Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold font-bold tracking-widest uppercase mb-4 block"
                    >
                        Maximize Your Investment
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 font-serif italic"
                    >
                        Sell Your Land with <span className="text-primary italic">Adonai</span>
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -ml-16 -mb-16"></div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8 relative z-10">
                            At Adonai Estate Limited, we understand that investment goals change. Whether you've purchased land from us in the past and are looking to liquidate, or you have a prime piece of land elsewhere that you want us to help you sell, our expert team is here to facilitate a smooth, secure, and profitable transaction.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            {[
                                { icon: TrendingUp, title: "Market Value", desc: "Get competitive pricing for your asset." },
                                { icon: ShieldCheck, title: "Verified Process", desc: "Secure and transparent documentation." },
                                { icon: User, title: "Expert Network", desc: "Access to our large pool of ready buyers." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-50 shadow-sm text-center">
                                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mx-auto mb-4">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Form Section */}
                <div className="max-w-3xl mx-auto mb-20">
                    {formSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white p-12 rounded-[3rem] border border-green-100 shadow-2xl text-center"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                Thank you for reaching out. Our property portfolio team will review your details and contact you shortly to discuss the next steps.
                            </p>
                            <button
                                onClick={() => {
                                    setFormSubmitted(false);
                                    setBoughtFromUs('');
                                    setFirstName('');
                                    setMiddleName('');
                                    setLastName('');
                                    setPhone('');
                                    setEmail('');
                                    setLocation('');
                                    setNumPlots('');
                                    setPlotNumbers('');
                                    setPrice('');
                                    setYear('');
                                    setSellingPrice('');
                                    setRegistrationStatus('');
                                }}
                                className="btn btn-primary"
                            >
                                Submit Another Request
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                {/* Question Dropdown */}
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HelpCircle size={16} className="text-gold" /> Did you buy the land from us?
                                    </label>
                                    <select
                                        required
                                        value={boughtFromUs}
                                        onChange={(e) => setBoughtFromUs(e.target.value)}
                                        className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none transition-all font-bold text-gray-700 appearance-none cursor-pointer"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="yes">Yes, I purchased from Adonai Estate</option>
                                        <option value="no">No, I purchased from elsewhere</option>
                                    </select>
                                </div>

                                <AnimatePresence mode="wait">
                                    {boughtFromUs && (
                                        <motion.div
                                            key={boughtFromUs}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><User size={12} /> First Name</label>
                                                    <input required value={firstName} onChange={e => setFirstName(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="John" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><User size={12} /> Middle Name (Optional)</label>
                                                    <input value={middleName} onChange={e => setMiddleName(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="Kwesi" />
                                                </div>
                                                <div className="space-y-2 md:col-span-2">
                                                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><User size={12} /> Last Name</label>
                                                    <input required value={lastName} onChange={e => setLastName(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="Doe" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><Phone size={12} /> Phone Number</label>
                                                    <input required value={phone} onChange={e => setPhone(e.target.value)} type="tel" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="+233..." />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><Mail size={12} /> Email Address</label>
                                                    <input required value={email} onChange={e => setEmail(e.target.value)} type="email" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="john@example.com" />
                                                </div>

                                                {boughtFromUs === 'yes' ? (
                                                    // Bought from Adonai
                                                    <>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><MapPin size={12} /> Site Location</label>
                                                            <input required value={location} onChange={e => setLocation(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="e.g. Airport Golf City" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><FileText size={12} /> No. of Plots</label>
                                                            <input required value={numPlots} onChange={e => setNumPlots(e.target.value)} type="number" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="1" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><Tag size={12} /> Plot Number(s)</label>
                                                            <input required value={plotNumbers} onChange={e => setPlotNumbers(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="e.g. A12, A13" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><DollarSign size={12} /> Purchase Price (GHS)</label>
                                                            <input required value={price} onChange={e => setPrice(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="GHS 15,000" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><Calendar size={12} /> Year of Purchase</label>
                                                            <input required value={year} onChange={e => setYear(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="2022" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><DollarSign size={12} /> Proposed Selling Price (GHS)</label>
                                                            <input required value={sellingPrice} onChange={e => setSellingPrice(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="GHS 25,000" />
                                                        </div>
                                                        <div className="space-y-2 md:col-span-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><FileText size={12} /> Registration Status</label>
                                                            <select required value={registrationStatus} onChange={e => setRegistrationStatus(e.target.value)} className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none appearance-none">
                                                                <option value="">Have you registered the land under your name or it's still under ours?</option>
                                                                <option value="Registered under Owner">Registered under my name</option>
                                                                <option value="Under Adonai Estate">Still under Adonai Estate name</option>
                                                            </select>
                                                        </div>
                                                    </>
                                                ) : (
                                                    // Bought elsewhere
                                                    <>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><MapPin size={12} /> Land Location</label>
                                                            <input required value={location} onChange={e => setLocation(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="e.g. Sogakope Riverside" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><FileText size={12} /> No. of Plots</label>
                                                            <input required value={numPlots} onChange={e => setNumPlots(e.target.value)} type="number" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="1" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><DollarSign size={12} /> Selling Price (GHS)</label>
                                                            <input required value={sellingPrice} onChange={e => setSellingPrice(e.target.value)} type="text" className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none" placeholder="GHS 50,000" />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <label className="text-xs font-bold text-gray-500 uppercase flex items-center gap-2 px-1"><ShieldCheck size={12} /> Is the land registered or not?</label>
                                                            <select required value={registrationStatus} onChange={e => setRegistrationStatus(e.target.value)} className="w-full p-4 bg-slate-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-gold outline-none appearance-none">
                                                                <option value="">Select status</option>
                                                                <option value="Registered">Yes, Registered</option>
                                                                <option value="Not Registered">No, Not Registered</option>
                                                            </select>
                                                        </div>
                                                    </>
                                                )}
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full btn btn-primary py-6 text-lg flex items-center justify-center gap-4 mt-8 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 size={24} className="animate-spin" /> Submitting Request...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Sell Request <ArrowRight size={20} />
                                                    </>
                                                )}
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </motion.div>
                    )}
                </div>

                {/* FAQ Section for SEO/AEO */}
                <div className="max-w-3xl mx-auto py-12 border-t border-gray-100">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 font-serif">Frequently Asked Questions</h2>
                    <div className="grid gap-6">
                        {[
                            {
                                q: "Can I sell my land if I didn't buy it from Adonai Estate?",
                                a: "Yes, we handle sales for prime lands acquired from other sources, subject to our verification and due diligence process."
                            },
                            {
                                q: "Do you buy the land back directly?",
                                a: "For lands originally purchased from Adonai Estate, we offer buy-back options. For third-party lands, we act as a broker to connect you with our extensive network of verified buyers."
                            },
                            {
                                q: "What documents do I need to sell my land?",
                                a: "You will typically need your site plan, indenture, land certificate (if applicable), and valid personal identification. Our team will guide you through the specific requirements."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl">
                                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-3">
                                    <HelpCircle size={20} className="text-gold shrink-0 mt-0.5" />
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600 ml-8 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellLand;
