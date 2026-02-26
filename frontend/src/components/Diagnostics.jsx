import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Clipboard, Search, ShieldCheck, UserCheck, Calendar, X, CheckCircle } from 'lucide-react';

const Diagnostics = () => {
    const [selectedTest, setSelectedTest] = useState(null);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [isBooking, setIsBooking] = useState(false);

    const tests = [
        { id: 1, name: "Diabetes Screening (HbA1c)", price: "₹499", description: "Average blood sugar levels over 3 months." },
        { id: 2, name: "Lipid Profile", price: "₹699", description: "Cholesterol levels to monitor heart health." },
        { id: 3, name: "Thyroid Profile (T3, T4, TSH)", price: "₹599", description: "Assessment of thyroid gland function." },
        { id: 4, name: "Full Body Checkup", price: "₹1,999", description: "60+ parameters for comprehensive wellness." }
    ];

    const handleBook = () => {
        if (!selectedTest) return;
        setIsBooking(true);
        // Simulate API call
        setTimeout(() => {
            setIsBooking(false);
            setShowBookingModal(true);
        }, 1500);
    };

    const features = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Online test booking",
            description: "Conveniently schedule your health tests from the comfort of your home."
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: "Certified lab partners",
            description: "We work only with accredited laboratories ensuring high precision results."
        },
        {
            icon: <Clipboard className="w-6 h-6" />,
            title: "Fast digital reports",
            description: "Get your diagnostic reports delivered directly to your dashboard instantly."
        }
    ];

    const steps = [
        { number: "01", title: "Select Test", description: "Choose from a wide range of diagnostic tests tailored to your needs." },
        { number: "02", title: "Book Appointment", description: "Pick a convenient time slot for home collection or lab visit." },
        { number: "03", title: "Sample Collection", description: "Our certified professionals collect samples with utmost care." },
        { number: "04", title: "Digital Report", description: "Access your verified results online within 24-48 hours." }
    ];

    return (
        <section id="diagnostics" className="section-padding bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
                    >
                        Proactive Wellness
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900"
                    >
                        Precision Diagnostics
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-xl text-slate-600 leading-relaxed"
                    >
                        Empowering your health journey with easy test bookings and comprehensive reporting support for proactive diabetes management.
                    </motion.p>
                </div>

                {/* Test Selector - Functional Part */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Available Diagnostic Tests</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tests.map((test) => (
                            <motion.div
                                key={test.id}
                                whileHover={{ y: -5 }}
                                onClick={() => setSelectedTest(test)}
                                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${selectedTest?.id === test.id
                                    ? 'border-emerald-500 bg-emerald-50 ring-4 ring-emerald-500/10'
                                    : 'border-slate-100 bg-slate-50 hover:border-emerald-500/30'
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="font-bold text-slate-900">{test.name}</h4>
                                    <span className="text-emerald-600 font-black">{test.price}</span>
                                </div>
                                <p className="text-sm text-slate-600 mb-4">{test.description}</p>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedTest?.id === test.id ? 'bg-emerald-600 border-emerald-600' : 'border-slate-300'
                                    }`}>
                                    {selectedTest?.id === test.id && <CheckCircle className="w-4 h-4 text-white" />}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            disabled={!selectedTest || isBooking}
                            onClick={handleBook}
                            className={`px-12 py-4 rounded-full font-bold text-white shadow-xl transition-all flex items-center gap-2 ${!selectedTest
                                ? 'bg-slate-300 cursor-not-allowed shadow-none'
                                : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-900/20'
                                }`}
                        >
                            {isBooking ? (
                                <>
                                    <Activity className="w-5 h-5 animate-spin" />
                                    Processing Booking...
                                </>
                            ) : (
                                <>
                                    <Calendar className="w-5 h-5" />
                                    {selectedTest ? `Book ${selectedTest.name}` : "Please Select a Test"}
                                </>
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Features & How it works - UI Remaining */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* How It Works Section */}
                <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-16 border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-8">How it works</h3>
                            <div className="space-y-10">
                                {steps.map((step, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <span className="text-4xl font-black text-emerald-600/20 leading-none">{step.number}</span>
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                            <p className="text-slate-600">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-3xl bg-emerald-500/5 border border-emerald-500/10 overflow-hidden flex items-center justify-center p-12">
                                <Activity className="w-48 h-48 text-emerald-600 opacity-20" />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-50 rounded-full -z-10 animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/5 rounded-full -z-10" />
                        </div>
                    </div>
                </div>

                {/* Booking Success Modal */}
                <AnimatePresence>
                    {showBookingModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                className="bg-white rounded-[2.5rem] p-10 max-w-md w-full relative shadow-2xl"
                            >
                                <button
                                    onClick={() => setShowBookingModal(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4">Request Received!</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        Our team will contact you shortly to schedule your <strong>{selectedTest?.name}</strong> collection.
                                    </p>
                                    <button
                                        onClick={() => setShowBookingModal(false)}
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl transition-all"
                                    >
                                        Got it, thanks!
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Diagnostics;
