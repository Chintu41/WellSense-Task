import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 lg:py-32 bg-emerald-50/50 relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
                >
                    About Us
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "6rem" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="h-1 bg-emerald-500 mx-auto mb-6"
                />

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-emerald-700 font-bold tracking-widest mb-12 uppercase text-sm"
                >
                    Empowering holistic health & wellness
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8"
                >
                    Welcome to WellSense Community - your trusted companion on the journey to holistic well-being and nourishment! We understand that achieving optimal health goes beyond just what's on your plate; it encompasses lifestyle choices, mindful practices, and a commitment to overall wellness.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-base md:text-lg text-slate-500 font-medium pb-8"
                >
                    WellSense Community is officially registered under the parent organization <span className="text-emerald-700 font-black">FIVE ELEMENTS.</span>
                </motion.p>
            </div>
        </section>
    );
};

export default About;
