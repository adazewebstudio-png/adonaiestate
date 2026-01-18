import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, User, Mail, Phone, MessageSquare, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ExecutiveContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ExecutiveContactModal = ({ isOpen, onClose }: ExecutiveContactModalProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // --- EMAILJS CONFIGURATION ---
    const SERVICE_ID = 'service_1wmna0x';
    const TEMPLATE_ID = 'template_32wg3nh'; // <--- Found in 'Email Templates'
    const PUBLIC_KEY = '3niJ8UvwCvJdVdoM1';    // <--- Found in 'Account' -> 'Public Key'

    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setIsSending(false);
            setError(null);
            setFormData({ name: '', email: '', phone: '', reason: '' });
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSending(true);
        setError(null);

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.reason,
                    to_email: 'richardadaaze@gmail.com',
                },
                PUBLIC_KEY
            );

            setIsSubmitted(true);
        } catch (err) {
            console.error('EmailJS Error:', err);
            setError("Failed to send message. Please check your EmailJS configuration.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-[2.5rem] w-full max-w-xl shadow-2xl overflow-hidden relative border border-slate-100"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-10 text-slate-500"
                        >
                            <X size={20} />
                        </button>

                        {isSubmitted ? (
                            <div className="p-12 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                                >
                                    <CheckCircle2 size={40} />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 font-serif">Message Sent!</h3>
                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    Your message has been delivered directly to the Executive Office. You will receive a response shortly.
                                </p>
                                <button onClick={onClose} className="btn btn-primary w-full py-4 rounded-2xl shadow-lg shadow-primary/20 transition-all">
                                    Close Window
                                </button>
                            </div>
                        ) : (
                            <div className="p-8 md:p-12">
                                <div className="mb-10 text-center lg:text-left">
                                    <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">Premium Channel</span>
                                    <h3 className="text-3xl font-bold text-slate-900 font-serif">Contact Executive Office</h3>
                                    <p className="text-slate-500 mt-2">Direct communication channel for strategic inquiries and partnerships.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {error && (
                                        <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                                            {error}
                                        </div>
                                    )}
                                    <div className="space-y-4">
                                        <div className="relative group">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Full Name</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-gold transition-colors">
                                                    <User size={18} />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full pl-11 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="relative group">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Email Address</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-gold transition-colors">
                                                        <Mail size={18} />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full pl-11 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                                        placeholder="email@example.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="relative group">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Phone Number</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-gold transition-colors">
                                                        <Phone size={18} />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full pl-11 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all bg-slate-50 focus:bg-white"
                                                        placeholder="024 XXX XXXX"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Reason for Contact</label>
                                            <div className="relative">
                                                <div className="absolute top-4 left-4 pointer-events-none text-slate-400 group-focus-within:text-gold transition-colors">
                                                    <MessageSquare size={18} />
                                                </div>
                                                <textarea
                                                    name="reason"
                                                    required
                                                    rows={4}
                                                    value={formData.reason}
                                                    onChange={handleChange}
                                                    className="w-full pl-11 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                                                    placeholder="How can the Executive Office assist you?"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSending}
                                        className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl shadow-xl shadow-slate-900/20 hover:bg-gold hover:text-slate-900 hover:shadow-gold/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSending ? (
                                            <>Sending... <Loader2 className="animate-spin" size={20} /></>
                                        ) : (
                                            <>Send to Executive Office <Send size={20} /></>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExecutiveContactModal;
