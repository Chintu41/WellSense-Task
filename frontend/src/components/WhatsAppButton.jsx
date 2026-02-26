import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const phoneNumber = "911234567890"; // Example number
    const message = "Hi! I'm interested in the Wellsense wellness programs.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileActive={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[60] group"
        >
            <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 animate-pulse-slow"></div>
            <div className="relative w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] transition-transform duration-300">
                <MessageCircle size={32} fill="currentColor" />

                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </div>

                {/* Hover Label */}
                <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-2xl shadow-xl text-slate-800 text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none border border-slate-100">
                    Chat with an Expert
                </div>
            </div>
        </motion.a>
    );
};

export default WhatsAppButton;
