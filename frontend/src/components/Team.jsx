import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const team = [
    {
        name: "Dr. Sarah Johnson",
        role: "Chief Nutrition Officer",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "Specializing in clinical nutrition and metabolic health with 15+ years experience.",
        color: "brand"
    },
    {
        name: "Marcus Chen",
        role: "Head of Holistic Fitness",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "Former athlete dedicated to functional movement and injury prevention.",
        color: "emerald"
    },
    {
        name: "Elena Rodriguez",
        role: "Wellness Psychologist",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        bio: "Expert in behavior change and mental resilience for sustainable health.",
        color: "accent"
    }
];

const Team = () => {
    return (
        <section id="team" className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-slate-50 border border-slate-100 text-slate-500 font-bold text-xs uppercase tracking-widest"
                    >
                        The Experts
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-900 mb-6"
                    >
                        Guided by <span className="text-emerald-600 italic">World-Class Mentors</span>
                    </motion.h2>
                    <p className="text-lg text-slate-500 font-medium">Our multidisciplinary team combines medical expertise with holistic wisdom to support your transformation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="relative mb-8 rounded-[3rem] overflow-hidden aspect-[4/5] shadow-[0_20px_40px_-15px_rgba(212,142,92,0.1)] group-hover:shadow-[0_40px_60px_-15px_rgba(212,142,92,0.2)] transition-all duration-500">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t opacity-40 group-hover:opacity-60 transition-opacity duration-500 from-emerald-900"></div>

                                {/* Socials Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                                    {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center">
                                <h4 className="text-2xl font-black text-slate-900 mb-1">{member.name}</h4>
                                <p className="font-black uppercase tracking-widest text-xs mb-4 text-emerald-600">{member.role}</p>
                                <p className="text-sm text-slate-500 font-medium line-clamp-2">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
