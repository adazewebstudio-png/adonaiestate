import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Lock, CheckCircle2, ShoppingCart } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageName: string;
    packagePrice: string;
}

const BookingModal = ({ isOpen, onClose, packageName, packagePrice }: BookingModalProps) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        whatsapp: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Reset when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setFormData({ fullName: '', email: '', phone: '', whatsapp: '' });
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        const subject = encodeURIComponent('Airport Golf City Inquiry');
        const body = encodeURIComponent(
            `Name: ${formData.fullName}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `WhatsApp: ${formData.whatsapp}\n` +
            `Interested Package: ${packageName}\n` +
            `Price: ${packagePrice}`
        );

        // Construct mailto link (simulating "sending" for this MVP)
        // In a real app, you'd use fetch() to send this data to a backend which then sends the email.
        const mailtoLink = `mailto:placeholder@email.com?subject=${subject}&body=${body}`;

        // We delay the opening of the mail client slightly to show the "Success" state first if desired,
        // or we just open it. The user requested: "When he press send... It should come to my mail"
        // Since we can't auto-send without backend, we'll open the mail client 
        // OR simply display the success message as requested and log the data.

        // For the sake of the specific request "It should come to my mail... use a placeholder",
        // opening the mail client is the only client-side way to actually "send" it to a mail.
        // However, the "popup" requirement suggests a purely UI flow first.

        // Let's settle on: Show success UI.
        // And maybe silently trigger window.open(mailto) or just imply it happened for the demo.
        // Given the prompt "When he press send to send it to my email", I will open the mailto link.

        window.location.href = mailtoLink;
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative"
                >
                    <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10">
                        <X size={20} className="text-gray-600" />
                    </button>

                    {isSubmitted ? (
                        <div className="p-12 text-center">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Thank You!</h3>
                            <p className="text-gray-600 text-lg mb-8">
                                Thank you for your interest. We will reach out right away to finalize your booking for <span className="font-bold text-primary">{packageName}</span>.
                            </p>
                            <button onClick={onClose} className="btn btn-primary w-full py-4 rounded-xl">
                                Close
                            </button>
                        </div>
                    ) : (
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">Secure Your Plot</span>
                                <h3 className="text-2xl font-bold text-gray-900 font-serif">Buy {packageName}</h3>
                                <p className="text-primary font-bold text-xl mt-1">{packagePrice}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                            placeholder="024 XXX XXXX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp Number</label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            required
                                            value={formData.whatsapp}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 focus:bg-white"
                                            placeholder="024 XXX XXXX"
                                        />
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4">
                                    Send Inquiry <Send size={18} />
                                </button>
                            </form>
                        </div>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default BookingModal;
