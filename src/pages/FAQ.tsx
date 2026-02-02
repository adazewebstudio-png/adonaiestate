import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, ShieldCheck, MapPin, CreditCard, Clock, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggle }: FAQItemProps) => {
    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                onClick={toggle}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <h3 className={`text-lg font-bold pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-gray-800 group-hover:text-primary'}`}>
                    {question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-white border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary'}`}>
                    <ChevronDown size={18} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-600 leading-relaxed text-lg">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            category: "Land Ownership",
            icon: <ShieldCheck className="text-primary" size={24} />,
            items: [
                {
                    question: "Are your lands litigation-free?",
                    answer: "Absolutely. At Adonai Estate Limited, we pride ourselves on providing 100% litigation-free lands. We conduct rigorous due diligence and thorough background checks on all our properties before listing them. You are guaranteed a hassle-free ownership experience."
                },
                {
                    question: "Do I get an indenture and site plan after purchase?",
                    answer: "Yes. Upon full payment or reaching a specific agreement stage, we provide you with all necessary documentation, including a barcoded site plan and indenture, to legally secure your ownership."
                },
                {
                    question: "Can I verify the land documents before purchasing?",
                    answer: "We actively encourage it. We provide transparency at every step. You can take our documents to the Lands Commission or any relevant authority for independent verification before making a financial commitment."
                },
                {
                    question: "Is there a deadline for building on the land?",
                    answer: "generally, we encourage development within a reasonable timeframe to boost the community's value, but specific terms depend on the estate location. Check with our team for details on your preferred site."
                }
            ]
        },
        {
            category: "Payment & Finance",
            icon: <CreditCard className="text-primary" size={24} />,
            items: [
                {
                    question: "Do you offer installment payment plans?",
                    answer: "Yes, we understand that purchasing land is a significant investment. We offer flexible installment payment plans to suit your financial capabilities. Contact our sales team to discuss a plan that works for you."
                },
                {
                    question: "What is the procedure for purchasing land?",
                    answer: "The process is simple: 1. Schedule a site visit. 2. Select your preferred plot. 3. Complete a purchase application form. 4. Make payment (outright or installment). 5. Receive your documentation."
                },
                {
                    question: "Can I make payments in foreign currency?",
                    answer: "Yes, we accept payments in major foreign currencies. The amount will be calculated based on the prevailing exchange rate at the time of payment."
                }
            ]
        },
        {
            category: "Services & Support",
            icon: <MapPin className="text-primary" size={24} />,
            items: [
                {
                    question: "Are the estate locations developed?",
                    answer: "Our estates are strategically located in developing and fast-growing areas. Many of our locations, like Airport Golf City, are already serviced with access roads, electricity, and water, while others are rapidly upcoming hubs."
                },
                {
                    question: "Do you offer other services besides land sales?",
                    answer: "Yes. Aside from Land Sales & Registration, we offer Property Management, Real Estate Brokerage, and Real Estate Consultancy."
                },
                {
                    question: "Can you help me sell my property?",
                    answer: "Yes. Our Real Estate Brokerage service is designed to help you sell or rent your property efficiently. We connect you with verified buyers and handle the negotiation process."
                },
                {
                    question: "Do you build houses for clients?",
                    answer: "While our primary focus is on land sales and estate development, our Engineering subsidiary can assist with construction projects. Please contact us for a consultation regarding your specific building needs."
                }
            ]
        }
    ];

    return (
        <>
            <SEO
                title="Frequently Asked Questions | Adonai Estate Limited"
                description="Find answers to common questions about buying land in Ghana, our litigation-free guarantee, payment plans, and estate locations."
                pathname="/faq"
            />

            <div className="pt-32 pb-20 bg-slate-50 min-h-screen font-sans">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase mb-4 block">Help Center</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Frequently Asked Questions</h1>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about investing with Adonai Estate Limited.
                            Can't find the answer you're looking for? <Link to="/contact" className="text-primary font-bold underline decoration-primary/30 hover:decoration-primary transition-all">Chat to our friendly team.</Link>
                        </p>
                    </div>

                    {/* FAQ Grid */}
                    <div className="max-w-4xl mx-auto space-y-12">
                        {faqs.map((category, catIndex) => (
                            <div key={catIndex} className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        {category.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                                </div>

                                <div className="space-y-2">
                                    {category.items.map((item, itemIndex) => {
                                        const globalIndex = catIndex * 10 + itemIndex; // Unique ID for toggling
                                        return (
                                            <FAQItem
                                                key={itemIndex}
                                                question={item.question}
                                                answer={item.answer}
                                                isOpen={openIndex === globalIndex}
                                                toggle={() => toggleFAQ(globalIndex)}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Still have questions CTA */}
                    <div className="mt-20 max-w-2xl mx-auto text-center">
                        <div className="bg-primary text-white p-10 rounded-3xl relative overflow-hidden">
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <MessageCircle className="mx-auto mb-6 w-12 h-12" />
                            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                            <p className="mb-8 text-white/90 text-lg">
                                We're here to help you make the best investment decision.
                                Reach out to us directly.
                            </p>
                            <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors inline-block">
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQ;
