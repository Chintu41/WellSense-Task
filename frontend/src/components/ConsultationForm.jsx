import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, CalendarClock, PhoneOutgoing, UserCircle } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || '';

const ConsultationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        healthGoal: 'Fat Loss / Weight Management',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const goals = [
        'Fat Loss / Weight Management',
        'Diabetes Reversal',
        'PCOD / PCOS & Thyroid',
        'Infertility Reversal',
        'Bone / Joint Health',
        'Hair & Skin Health',
        'Auto Immune Reversal',
        'Kids Nutrition',
        'Immunity Boosting',
        'Other'
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await axios.post(`${API_URL}/api/consultations`, formData);
            if (response.data.success) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    healthGoal: 'Fat Loss / Weight Management',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(
                error.response?.data?.error || 'Something went wrong. Please try again later.'
            );
        }
    };

    return (
        <section id="consultation" className="section-padding bg-slate-900 relative overflow-hidden">
            {/* Dynamic dark gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900 via-slate-900 to-slate-900"></div>
            <div className="absolute -left-40 bottom-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[100px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold tracking-wide text-xs uppercase">
                            Free Discovery Session
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Begin Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">Peak Wellness</span>
                        </h2>
                        <p className="text-lg text-slate-300 mb-12 font-light leading-relaxed max-w-lg">
                            Book a complimentary consultation with our expert health coaches. We'll discuss your specific goals, health history, and how our scientific programs can help you effectively.
                        </p>

                        <div className="space-y-8">
                            <div className="flex group">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                        <UserCircle className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-xl font-display font-semibold text-white">Share Your Profile</h4>
                                    <p className="mt-2 text-slate-400 font-light text-sm leading-relaxed max-w-sm">Provide brief details so we perfectly understand your starting point.</p>
                                </div>
                            </div>

                            <div className="flex group">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                        <CalendarClock className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-xl font-display font-semibold text-white">Get Matched Faster</h4>
                                    <p className="mt-2 text-slate-400 font-light text-sm leading-relaxed max-w-sm">We route your specific case to the most specialized health coach available.</p>
                                </div>
                            </div>

                            <div className="flex group">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                        <PhoneOutgoing className="w-7 h-7" />
                                    </div>
                                </div>
                                <div className="ml-5">
                                    <h4 className="text-xl font-display font-semibold text-white">Receive Actionable Advice</h4>
                                    <p className="mt-2 text-slate-400 font-light text-sm leading-relaxed max-w-sm">Walk away from your first call with clear, scientific steps towards your goal.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-8 sm:p-12 relative overflow-hidden"
                    >
                        {/* Subtle card accent top border */}
                        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                                </div>
                                <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Request Received!</h3>
                                <p className="text-slate-600 mb-10 text-lg leading-relaxed font-light">
                                    Thank you for taking the first step. One of our health experts will contact you within <strong className="font-semibold text-slate-900">24 hours</strong> to schedule your consultation.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="btn-primary w-full max-w-xs mx-auto text-lg"
                                >
                                    Done
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="mb-8">
                                    <h3 className="text-3xl font-display font-bold text-slate-900 mb-2">Request Callback</h3>
                                    <p className="text-slate-500 text-sm">Fill in your details and we'll reach out shortly.</p>
                                </div>

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="bg-red-50 border border-red-200 p-4 mb-6 rounded-xl flex items-start"
                                    >
                                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                                        <p className="text-red-700 text-sm font-medium">{errorMessage}</p>
                                    </motion.div>
                                )}

                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="e.g. John Doe"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="input-field"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="healthGoal" className="block text-sm font-semibold text-slate-700 mb-2">Primary Health Goal *</label>
                                    <select
                                        id="healthGoal"
                                        name="healthGoal"
                                        required
                                        value={formData.healthGoal}
                                        onChange={handleChange}
                                        className="input-field cursor-pointer appearance-none pr-10"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em' }}
                                    >
                                        {goals.map(goal => (
                                            <option key={goal} value={goal} className="text-slate-800">{goal}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="pb-4">
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Additional details (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="input-field resize-none"
                                        placeholder="Tell us briefly about your current health challenges..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className={`btn-primary w-full flex justify-center py-4 text-lg shadow-xl shadow-brand-500/20 ${status === 'loading' ? 'opacity-80 cursor-wait' : ''}`}
                                >
                                    {status === 'loading' ? (
                                        <span className="flex items-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        <span className="flex items-center">
                                            Secure My Consultation <Send className="ml-2 w-5 h-5" />
                                        </span>
                                    )}
                                </button>
                                <div className="text-center mt-4">
                                    <p className="text-xs text-slate-400 flex items-center justify-center">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                                        Your information is 100% secure and private.
                                    </p>
                                </div>
                            </form>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ConsultationForm;
