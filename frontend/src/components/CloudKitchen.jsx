import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Heart, Clock, Truck, CheckCircle2, Leaf, Calendar, X, Check } from 'lucide-react';

const CloudKitchen = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const plans = [
        { id: 1, name: "Starter (7 Days)", price: "₹2,499", savings: "5%", description: "2 high-protein meals daily + 1 healthy snack." },
        { id: 2, name: "Balanced (14 Days)", price: "₹4,699", savings: "10%", description: "2 meals + 2 snacks + wellness tea." },
        { id: 3, name: "Premium (30 Days)", price: "₹9,199", savings: "15%", description: "All meals + snacks + weekly doctor consultation." }
    ];

    const handleSubscribe = () => {
        if (!selectedPlan) return;
        setShowSuccess(true);
    };

    const steps = [
        { title: "Select Meal Plan", description: "Choose a plan that aligns with your specific diabetic and nutritional requirements." },
        { title: "Fresh Preparation", description: "Our chefs prepare your meals daily using only high-quality, whole ingredients." },
        { title: "Eco-Friendly Packing", description: "Meals are packed in sustainable, temperature-controlled containers." },
        { title: "Contactless Delivery", description: "Track your delivery in real-time as it makes its way to you." }
    ];

    const features = [
        { title: "Diet-focused meals", icon: <Heart className="w-5 h-5" /> },
        { title: "Nutrition-based menu", icon: <Leaf className="w-5 h-5" /> },
        { title: "Online ordering", icon: <Clock className="w-5 h-5" /> },
        { title: "Zero processed sugars", icon: <CheckCircle2 className="w-5 h-5" /> },
        { title: "Delivery tracking", icon: <Truck className="w-5 h-5" /> }
    ];

    return (
        <section id="cloud-kitchen" className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Vitality Kitchen</span>
                        <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                            Gourmet Nutrition, <br />Delivered to Your Door
                        </h2>
                        <p className="mt-8 text-xl text-slate-600 leading-relaxed">
                            Experience the perfect blend of health and taste. Our cloud kitchen specializes in chef-curated meals specifically designed to support stable blood sugar levels and overall wellness.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            {features.map((f, i) => (
                                <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full text-slate-700 font-medium text-sm">
                                    <span className="text-emerald-600">{f.icon}</span>
                                    {f.title}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="bg-emerald-50 rounded-[4rem] p-10 lg:p-16 border border-emerald-500/10">
                            <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center">Select Your Subscription</h3>
                            <div className="space-y-4">
                                {plans.map((plan) => (
                                    <motion.div
                                        key={plan.id}
                                        onClick={() => setSelectedPlan(plan)}
                                        whileHover={{ x: 5 }}
                                        className={`p-6 rounded-3xl border-2 cursor-pointer transition-all ${selectedPlan?.id === plan.id
                                            ? 'border-emerald-500 bg-white ring-4 ring-emerald-500/10'
                                            : 'border-white/50 bg-white/40 hover:border-emerald-500/30'
                                            }`}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3">
                                                <h4 className="font-bold text-slate-900">{plan.name}</h4>
                                                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Save {plan.savings}</span>
                                            </div>
                                            <span className="text-emerald-600 font-black">{plan.price}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed">{plan.description}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <button
                                    onClick={handleSubscribe}
                                    disabled={!selectedPlan}
                                    className={`w-full font-bold py-5 rounded-3xl transition-all shadow-xl flex items-center justify-center gap-3 ${selectedPlan
                                        ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-900/20 active:scale-95'
                                        : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                                        }`}
                                >
                                    <Calendar className="w-5 h-5" />
                                    {selectedPlan ? `Subscribe to ${selectedPlan.name}` : 'Select a Plan'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Steps Section */}
                <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20">
                    <h3 className="text-3xl font-extrabold text-slate-900 mb-16 text-center">The Path to Healthy Living</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, idx) => (
                            <div key={idx} className="relative group">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                                    {idx + 1}
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscription Success Modal */}
                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                className="bg-white rounded-[2.5rem] p-10 max-md w-full relative shadow-2xl"
                            >
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mx-auto mb-6">
                                        <Check className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-2">Subscription Confirmed!</h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed">
                                        You've subscribed to the <strong>{selectedPlan?.name}</strong> plan. A nutritionist will reach out to you within 2 hours to finalize your menu.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm font-bold border-b border-slate-50 pb-3">
                                            <span className="text-slate-500">Total Price</span>
                                            <span className="text-emerald-600">{selectedPlan?.price}</span>
                                        </div>
                                        <button
                                            onClick={() => setShowSuccess(false)}
                                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl transition-all"
                                        >
                                            Done
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default CloudKitchen;
