import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Clock, Globe } from 'lucide-react';

const Trust = () => {
    return (
        <section id="trust" className="section-padding bg-white relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-50 to-white"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Trust Stats with Depth & Premium Feel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 max-w-6xl mx-auto">
                    {[
                        { icon: <ShieldCheck className="w-10 h-10" />, value: "100%", label: "Science-Backed", desc: "Evidence-based protocols" },
                        { icon: <Clock className="w-10 h-10" />, value: "2M+", label: "Hours Consulting", desc: "Expert guidance delivered" },
                        { icon: <Globe className="w-10 h-10" />, value: "15+", label: "Countries Present", desc: "Global wellness community" },
                        { icon: <Star className="w-10 h-10" fill="currentColor" />, value: "4.9/5", label: "Client Rating", desc: "Unmatched satisfaction" }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8, ease: "easeOut" }}
                            whileHover={{ y: -12 }}
                            className="bg-white p-8 rounded-[3rem] text-center border border-accent-100 shadow-[0_20px_40px_-15px_rgba(212,142,92,0.1)] hover:shadow-[0_40px_60px_-15px_rgba(212,142,92,0.2)] transition-all duration-500 group flex flex-col items-center h-full relative overflow-hidden"
                        >
                            <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-emerald-50 text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                <div className="transition-colors duration-500">
                                    {stat.icon}
                                </div>
                            </div>
                            <h4 className="text-5xl font-display font-black text-slate-900 mb-2 tracking-tight group-hover:scale-105 transition-transform">{stat.value}</h4>
                            <p className="font-black uppercase tracking-[0.2em] text-[10px] mb-3 text-emerald-600">{stat.label}</p>
                            <p className="text-slate-500 text-sm font-medium leading-tight">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-semibold tracking-wide text-xs uppercase shadow-sm"
                    >
                        Our Commitment
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6"
                    >
                        Science-led wellness for a <span className="text-emerald-600 italic">better you</span>
                    </motion.h3>
                    <p className="text-lg text-slate-500 font-medium">We combine nutritional science with holistic principles to deliver results that last a lifetime.</p>
                </div>
            </div>
        </section>
    );
};

export default Trust;
