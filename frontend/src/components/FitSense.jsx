import React from 'react';
import { motion } from 'framer-motion';
import { Activity, HeartPulse, Dumbbell, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import fitsensePreview from '../assets/fitsense-preview.png';

const FitSense = () => {
    const features = [
        {
            icon: <Activity className="w-8 h-8" />,
            title: "Activity Tracking",
            desc: "Monitor steps, active minutes, and calories burned with precise biometric synchronization.",
            color: "text-brand-600",
            bg: "bg-brand-50"
        },
        {
            icon: <HeartPulse className="w-8 h-8" />,
            title: "Health Monitoring",
            desc: "Track weight, BMI trends, and glucose levels with intuitive data visualizations.",
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            icon: <Dumbbell className="w-8 h-8" />,
            title: "Personalized Workouts",
            desc: "Access trainer-guided routines that adapt to your fitness level and progress.",
            color: "text-brand-600",
            bg: "bg-brand-50"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Smart Insights",
            desc: "Receive weekly health analytics and AI-powered recommendations for your journey.",
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="fitsense" className="section-padding bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/4 pointer-events-none opacity-20">
                <div className="w-[600px] h-[600px] bg-brand-100 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Hero Introduction */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-widest shadow-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Next Generation Fitness
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 mb-6 leading-tight"
                    >
                        FitSense — <span className="text-emerald-600 italic">Smart Fitness</span> & Health Tracking
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed"
                    >
                        Track your fitness, monitor health metrics, and get personalized wellness insights powered by intelligent coaching. A seamless companion for your holistic transformation.
                    </motion.p>
                </div>

                {/* Main Visual element & Features Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-100 transform rotate-3 rounded-[3rem] opacity-30 -z-10"></div>
                        <div className="relative rounded-[3rem] overflow-hidden shadow-float border-8 border-white bg-slate-50">
                            <img
                                src={fitsensePreview}
                                alt="FitSense Dashboard Mockup"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-soft hover:shadow-float transition-all duration-500 group"
                            >
                                <div className={`w-16 h-16 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Call To Action Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[4rem] bg-slate-900 p-12 md:p-20 overflow-hidden text-center"
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-600/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-600/10 to-transparent pointer-events-none"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-8 leading-tight">
                            Ready to take <span className="text-emerald-400">control</span> of your health journey?
                        </h3>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-white">
                            <span className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Advanced Analytics</span>
                            <span className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Device Sync</span>
                            <span className="flex items-center gap-2 font-bold"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Expert Tips</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="btn-primary !px-10 !py-5 text-lg group w-full sm:w-auto">
                                Get Early Access
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-white border-2 border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto">
                                Explore Programs
                            </button>
                        </div>
                        <p className="mt-8 text-slate-400 text-sm font-bold tracking-wide uppercase">
                            Join thousands of members improving their fitness journey.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FitSense;
