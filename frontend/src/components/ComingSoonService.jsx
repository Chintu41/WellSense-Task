import React from 'react';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const ComingSoonService = ({ id, name }) => {
    return (
        <section id={id} className="py-24 bg-slate-50 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Construction className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-display font-black text-slate-900">
                        {name} <span className="text-emerald-600">Coming Soon</span>
                    </h2>
                    <p className="text-slate-500 font-bold max-w-lg mx-auto">
                        We are working hard to bring you the best-in-class {name} experience. Check back later for updates!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ComingSoonService;
