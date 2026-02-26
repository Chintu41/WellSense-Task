import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const LMS = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        city: '',
        uplineDiamond: '',
        uplinePlatinum: '',
        level: '',
        agreed: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Payment integration coming soon!');
    };

    return (
        <section id="lms" className="section-padding bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-700/5 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-display font-black text-emerald-900 mb-4"
                    >
                        LMS
                    </motion.h2>
                    <nav className="flex justify-center items-center gap-2 text-sm font-bold">
                        <Link to="/" className="text-emerald-600">Home</Link>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-400">LMS</span>
                    </nav>
                </div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100"
                >
                    {/* Card Header */}
                    <div className="bg-emerald-900 py-6 px-10">
                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                            Please Enter Your Details
                        </h3>
                    </div>

                    {/* Form Content */}
                    <div className="p-8 sm:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        required
                                        placeholder="Enter your full name"
                                        className="input-field"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Mobile Number */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1">
                                        Mobile Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        required
                                        placeholder="Enter mobile number"
                                        className="input-field"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter email address"
                                        className="input-field"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* City */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1">
                                        City <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="city"
                                        required
                                        placeholder="Enter your city"
                                        className="input-field"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Upline Diamond */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1">
                                        Upline Diamond <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="uplineDiamond"
                                        required
                                        className="input-field appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1em_1em]"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                                        value={formData.uplineDiamond}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Upline Diamond</option>
                                        <option value="diamond1">Diamond 1</option>
                                        <option value="diamond2">Diamond 2</option>
                                    </select>
                                </div>

                                {/* Upline Platinum */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1">
                                        Upline Platinum <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="uplinePlatinum"
                                        required
                                        className="input-field appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1em_1em]"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                                        value={formData.uplinePlatinum}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Upline Platinum</option>
                                        <option value="platinum1">Platinum 1</option>
                                        <option value="platinum2">Platinum 2</option>
                                    </select>
                                </div>

                                {/* Select Level */}
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-slate-700 flex items-center gap-1">
                                        Select Level <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="level"
                                        required
                                        className="input-field appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1em_1em]"
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                                        value={formData.level}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Level</option>
                                        <option value="level1">Level 1 - Starter</option>
                                        <option value="level2">Level 2 - Professional</option>
                                        <option value="level3">Level 3 - Enterprise</option>
                                    </select>
                                </div>
                            </div>

                            <div className="text-center py-4">
                                <p className="text-emerald-900 font-black text-xl mb-4">
                                    Select level to see price
                                </p>
                            </div>

                            {/* Agreement */}
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="agreed"
                                    name="agreed"
                                    required
                                    className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                                    checked={formData.agreed}
                                    onChange={handleChange}
                                />
                                <label htmlFor="agreed" className="text-sm text-slate-600 font-bold cursor-pointer">
                                    I agree to the <a href="#" className="text-emerald-600 underline">Terms and Conditions</a> and <a href="#" className="text-emerald-600 underline">Privacy Policy</a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-6">
                                <button
                                    type="submit"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center gap-3"
                                >
                                    <CreditCard className="w-5 h-5" />
                                    Pay Now
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Footer Badges */}
                    <div className="bg-slate-50 py-6 px-10 border-t border-slate-100 flex items-center justify-center gap-8">
                        <div className="flex items-center gap-2 text-slate-400">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-xs font-black uppercase tracking-widest leading-none">Secure Payment</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LMS;
