import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const programsData = [
    {
        title: 'Fat Loss / Weight Loss / Weight Gain Program',
        description: 'A dedicated weight management program prioritizing overall well-being over quick fixes. Our personalized plans help build healthier relationships with food and develop sustainable habits focusing on mindful eating, adequate nutrient intake, and regular physical activity.',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        color: 'brand',
        benefits: [
            'Increased energy levels',
            'Promotes overall well-being',
            'Improved sleep quality',
            'Reduced risk of chronic diseases',
            'Enhanced mobility and joint function'
        ],
        ctaText: 'Chat with our experts to find the specific program suitable for you, and achieve your desired healthy weight! Click Here.'
    },
    {
        title: 'Type-2 Diabetes Reversal Program',
        description: 'A comprehensive evidence-based holistic program that helps individuals to stop taking diabetes medications progressively. This lifestyle modification aims to reverse metabolic causes of type 2 diabetes and normalise blood sugar levels, without any medications.',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        color: 'emerald',
        benefits: [
            'Blood Sugar Regulation',
            'Weight Management',
            'Reduced Reliance on Medications',
            'Improved Cardiovascular Health',
            'Enhanced Quality of Life'
        ],
        ctaText: 'Chat with our experts to understand how this reversal program works for you and live an illness free quality of life! Click Here.'
    },
    {
        title: 'PCOD / PCOS & Thyroid Reversal Program',
        description: 'A specialized tailored program for women that helps reverse Polycystic Ovary Syndrome (PCOS) and manage associated conditions like Thyroid. This program focuses on addressing underlying root causes and reversing the conditions naturally.',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        color: 'accent',
        benefits: [
            'Hormonal Balance',
            'Improved Menstrual Regularity',
            'Enhanced Fertility',
            'Reduced Risk of Metabolic Complications',
            'Improved Emotional Well-being'
        ],
        ctaText: 'Chat with our experts to understand how this reversal works and take control of your health today! Click Here.'
    },
    {
        title: 'In-Fertility Issues Reversal',
        description: 'A targeted program addressing the underlying root causes contributing to both male and female infertility through personalized nutrition, tailored lifestyle modifications, and stress management therapies.',
        image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        color: 'tertiary',
        benefits: [
            'Optimized Reproductive Health',
            'Hormonal Balance',
            'Improved Sperm & Egg Quality',
            'Reduced Oxidative Stress',
        ],
        ctaText: 'Chat with our experts to learn more about the targeted approaches to address infertility issues naturally! Click Here.'
    },
    {
        title: 'Bone / Joint Health Program',
        description: 'Designed to improve joint mobility, reduce inflammation, and strengthen bone density using anti-inflammatory diets and specific nutrient supplementation combined with low-impact routines.',
        image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        color: 'brand',
        benefits: [
            'Improved Joint Mobility',
            'Reduced Inflammation',
            'Increased Bone Density',
            'Pain Management',
        ],
        ctaText: 'Chat with our experts to understand how you can regain your active lifestyle without joint pain. Click Here.'
    },
    {
        title: 'Skin / Hair Care Program',
        description: 'Holistic approach emphasizing nutrient-dense eating, gut health restoration, and targeted detoxification to promote a natural, radiant glow and strong, healthy hair follicles.',
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        color: 'accent',
        benefits: [
            'Glowing, Clear Skin',
            'Stronger Hair Follicles',
            'Gut-Skin Axis Restoration',
            'Natural Detoxification',
        ],
        ctaText: 'Chat with our experts to unlock the secrets to radiant skin and healthier hair naturally! Click Here.'
    },
    {
        title: 'Auto-Immune Reversal Program',
        description: 'A comprehensive approach aiming to calm the immune system by identifying triggers, healing the gut, and incorporating lifestyle habits that collectively reduce autoimmune flare-ups.',
        image: 'https://images.unsplash.com/photo-1494390648435-056efef81bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        color: 'emerald',
        benefits: [
            'Reduced Flare-ups',
            'Gut Healing',
            'Immune System Modulation',
            'Improved Energy'
        ],
        ctaText: 'Chat with our experts to discuss how to manage your autoimmune conditions effectively. Click Here.'
    },
    {
        title: 'Kids Nutritional Program',
        description: 'Ensuring your child receives the right foundation for development with child-friendly, balanced nutritional plans that support growth, concentration, and a robust immune system.',
        image: 'https://images.unsplash.com/photo-1440428099904-c6d459a7e7b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        color: 'brand',
        benefits: [
            'Supported Growth',
            'Better Concentration',
            'Strong Immunity',
            'Healthy Eating Habits'
        ],
        ctaText: 'Chat with our experts to foster healthy eating habits in your children right from the start! Click Here.'
    }
];

const Programs = () => {
    return (
        <section id="programs" className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Decorative background lines */}
            <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 font-semibold tracking-wide text-xs uppercase shadow-sm"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6 uppercase tracking-wider"
                    >
                        OUR PROGRAMS
                    </motion.h2>
                </div>

                <div className="space-y-24 lg:space-y-32">
                    {programsData.map((program, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>

                                {/* Image Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="w-full lg:w-1/2"
                                >
                                    <div className="relative group rounded-[2.5rem] overflow-hidden shadow-float">
                                        <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <img src={program.image} alt={program.title} className="w-full h-80 sm:h-96 lg:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />

                                        {/* Decorative Corner accent */}
                                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-60 group-hover:scale-150 transition-transform duration-700"></div>
                                    </div>
                                </motion.div>

                                {/* Text Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                    className="w-full lg:w-1/2"
                                >
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="text-3xl sm:text-4xl font-display font-black mb-6 leading-tight text-emerald-700"
                                    >
                                        {program.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="text-lg text-slate-600 font-medium leading-relaxed mb-10"
                                    >
                                        {program.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h4 className="font-bold text-slate-900 text-sm uppercase tracking-widest mb-6 border-l-4 border-slate-200 pl-4">Key Benefits</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                            {program.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-center text-slate-700 font-semibold text-sm">
                                                    <div className="p-1 rounded-full mr-3 shadow-sm shrink-0 bg-emerald-100 text-emerald-600">
                                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                                    </div>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                        className="p-6 rounded-[2rem] border shadow-soft text-sm leading-relaxed group/cta bg-white/50 backdrop-blur-md border-emerald-100"
                                    >
                                        <p className="mb-0 italic font-medium text-slate-600">
                                            {program.ctaText.split('Click Here')[0]}
                                            <a href="#consultation" className="font-black transition-all ml-1 group/link inline-flex items-center underline underline-offset-4 hover:scale-105 text-emerald-600 decoration-emerald-200 hover:text-emerald-700">
                                                Click Here
                                                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                        </p>
                                    </motion.div>
                                </motion.div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Programs;
