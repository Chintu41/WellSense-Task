import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            setIsVisible(window.scrollY > 800 && !isBottom);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 w-full z-40 p-4 md:p-6 lg:p-4 pointer-events-none"
                >
                    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.1)] rounded-[2rem] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-auto">
                        <div className="hidden sm:flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
                                </span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Ready to transform?</p>
                                <p className="text-xs text-slate-500 font-medium">Join 10,000+ happy clients worldwide.</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <a
                                href="#consultation"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full text-sm flex items-center gap-2 transition-all shadow-lg shadow-emerald-900/10 active:scale-95 flex-grow sm:flex-grow-0"
                            >
                                Book Free Consultation
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
