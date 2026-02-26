import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock } from 'lucide-react';

const FitSense = () => {
    return (
        <section id="fitsense" className="section-padding bg-white relative">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-16 max-w-4xl mx-auto flex flex-col items-center gap-6"
                >
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                        <Zap className="w-10 h-10 text-emerald-600 animate-pulse" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900">
                        FitSense <span className="text-emerald-600">Coming Soon</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium max-w-2xl">
                        We are building something revolutionary for your fitness journey. Stay tuned for advanced tracking, personalized workouts, and seamless health integration.
                    </p>
                    <div className="flex items-center gap-2 text-slate-400 font-bold border-t border-slate-100 pt-8 mt-4 w-full justify-center">
                        <Clock className="w-5 h-5" />
                        <span className="text-sm uppercase tracking-widest">Expected launch: Q3 2026</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FitSense;
