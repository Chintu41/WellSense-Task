import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Play, X, Star, Heart, Activity } from 'lucide-react';

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const stats = [
        { label: 'Happy Clients', value: '10,000+', icon: <Heart className="w-4 h-4 text-red-500" /> },
        { label: 'Success Rate', value: '98%', icon: <Activity className="w-4 h-4 text-emerald-500" /> },
        { label: 'Expert Coaches', value: '50+', icon: <Star className="w-4 h-4 text-amber-500" /> },
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-slate-50 pt-24 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 min-h-screen flex items-center">
            {/* dynamic gradient backgrounds */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 pointer-events-none opacity-40">
                <div className="w-[800px] h-[800px] bg-gradient-to-br from-emerald-100 via-emerald-50 to-transparent rounded-full blur-[100px] animate-pulse-slow"></div>
            </div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 pointer-events-none opacity-40">
                <div className="w-[600px] h-[600px] bg-gradient-to-tr from-emerald-50 via-emerald-100 to-transparent rounded-full blur-[100px] animate-float-slow"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-12 xl:col-span-7 max-w-3xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-emerald-100 text-emerald-700 text-xs sm:text-sm font-bold tracking-wide mb-8 shadow-sm"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
                            TRANSFORMING LIVES ACROSS 15+ COUNTRIES
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-display font-black tracking-tight mb-6 leading-[1.05]">
                            <span className="text-slate-900">Heal your </span>
                            <span className="text-emerald-600 relative">
                                body
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-emerald-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                                </svg>
                            </span>
                            <span className="text-slate-900">, reclaim</span><br />
                            <span className="text-brand-primary">your </span>
                            <span className="text-slate-900">zest for life.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-2xl">
                            <span className="text-slate-900 font-bold border-b-2 border-emerald-200">Personalized nutritional science</span> for fat loss, diabetes reversal, and lasting holistic well-being.
                        </p>

                        <div className="flex flex-col mb-14">
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-5">
                                <a href="#consultation" className="btn-primary group !px-10 !py-4 text-lg shadow-[0_10px_30px_-10px_rgba(243,146,33,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(243,146,33,0.4)]">
                                    Start Your Journey
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                                </a>
                                <button
                                    onClick={() => setIsVideoOpen(true)}
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-slate-700 bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 shadow-sm transition-all duration-300 group"
                                >
                                    <Play className="w-5 h-5 mr-3 text-emerald-600 fill-emerald-600 group-hover:scale-110 transition-transform" />
                                    Watch Success Stories
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card required</span>
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free 15-min discovery call</span>
                            </div>
                        </div>

                        {/* Modern Stats Display */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-slate-100 pt-10">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + (i * 0.1) }}
                                    className="flex flex-col gap-1"
                                >
                                    <div className="flex items-center gap-2">
                                        {stat.icon}
                                        <span className="text-2xl font-black text-slate-900">{stat.value}</span>
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-12 xl:col-span-5 relative"
                    >
                        <div className="relative w-full max-w-[550px] mx-auto xl:ml-auto">
                            {/* main video container shadow/bg */}
                            <div className="absolute inset-0 bg-brand-100 transform rotate-3 rounded-[3rem] opacity-30 -z-10"></div>
                            <div className="absolute inset-0 bg-emerald-100 transform -rotate-3 rounded-[3rem] opacity-30 -z-10"></div>

                            <div
                                className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] z-10 border-[16px] border-white bg-slate-100 group cursor-pointer aspect-[4/5]"
                                onClick={() => setIsVideoOpen(true)}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Expert Guidance"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-brand-900/30 transition-all duration-700 flex items-center justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-white/40 animate-ping"></div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            whileActive={{ scale: 0.9 }}
                                            className="relative w-28 h-28 bg-white/40 backdrop-blur-xl rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:bg-brand-500"
                                        >
                                            <Play className="w-12 h-12 ml-2 transition-transform duration-500 group-hover:scale-110" fill="currentColor" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Floating Trust Badge */}
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.2 }}
                                    className="absolute bottom-8 -right-4 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-brand-50 max-w-[220px]"
                                >
                                    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-inner">
                                        <ShieldCheck className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Results</p>
                                        <p className="text-sm font-black text-slate-900">100% Verified</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6"
                    >
                        <div
                            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
                            onClick={() => setIsVideoOpen(false)}
                        ></div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 40 }}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border border-white/10"
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-6 right-6 z-20 p-3 bg-black/50 hover:bg-brand-600 text-white rounded-full backdrop-blur-md transition-all active:scale-90"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/ro8g6KyeN8we?autoplay=1&rel=0"
                                title="WellSense Presentation"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Hero;
