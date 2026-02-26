import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "The diabetes reversal program completely transformed my life. My HbA1c went from 8.5 to 5.8 in just 4 months. The constant support from my coach made all the difference.",
        author: "Rajiv S.",
        role: "Diabetes Reversal Program",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "emerald",
        rating: 5
    },
    {
        quote: "I struggled with PCOS for years before finding WellSense. Their holistic approach helped me manage my symptoms, lose weight, and finally regain my energy.",
        author: "Priya M.",
        role: "PCOD/PCOS Program",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "brand",
        rating: 5
    },
    {
        quote: "The joint health program is fantastic. I can now climb stairs without pain, something I haven't done in years. It's not just a diet, it's a complete lifestyle upgrade.",
        author: "Anil K.",
        role: "Bone/Joint Health",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "accent",
        rating: 5
    },
    {
        quote: "Weight management was always a battle until I reached out to WellSense. The sustainable habits they taught me are now part of my daily life.",
        author: "Sneha R.",
        role: "Weight Management",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        color: "tertiary",
        rating: 5
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };

    return (
        <section id="testimonials" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-widest"
                    >
                        Success Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-900 mb-6"
                    >
                        Real Outcomes, <span className="text-emerald-600 italic">Real People</span>
                    </motion.h2>
                    <p className="text-lg text-slate-500 font-medium">Join thousands who have reclaimed their health journey.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="relative h-[400px] sm:h-[350px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-white p-10 sm:p-16 rounded-[3rem] shadow-float border border-white flex flex-col md:flex-row items-center gap-10 md:gap-16">
                                    <div className="relative shrink-0">
                                        <div className="absolute -inset-4 rounded-full blur-2xl opacity-20 bg-emerald-500"></div>
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].author}
                                            className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-8 border-white shadow-xl"
                                        />
                                        <div className="absolute -bottom-2 -right-2 p-3 rounded-2xl shadow-lg text-white bg-emerald-500">
                                            <Quote size={20} fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="text-center md:text-left">
                                        <div className="flex justify-center md:justify-start text-amber-500 mb-6 space-x-1">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <Star key={i} size={18} fill="currentColor" />
                                            ))}
                                        </div>
                                        <p className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-8 italic">
                                            "{testimonials[currentIndex].quote}"
                                        </p>
                                        <div>
                                            <h4 className="text-2xl font-black text-slate-900 mb-1">{testimonials[currentIndex].author}</h4>
                                            <p className="font-black uppercase tracking-widest text-xs text-emerald-600">{testimonials[currentIndex].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex flex-center justify-center gap-4 mt-12">
                        <button
                            onClick={prev}
                            className="p-4 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all hover:shadow-lg active:scale-95"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="p-4 rounded-full bg-white border border-slate-100 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all hover:shadow-lg active:scale-95"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setDirection(i > currentIndex ? 1 : -1);
                                    setCurrentIndex(i);
                                }}
                                className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-emerald-100'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
