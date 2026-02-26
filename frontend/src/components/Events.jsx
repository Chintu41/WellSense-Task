import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CreditCard, Star, ShieldCheck } from 'lucide-react';

const Events = () => {
    const [formData, setFormData] = useState({
        event: '',
        fullName: '',
        mobileNumber: '',
        email: '',
        spouseName: '',
        location: '',
        cabRequired: '',
        uplinePlatinum: '',
        dietaryRestrictions: '',
        attendingType: '',
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
        console.log('Event registration submitted:', formData);
        alert('Event payment integration coming soon!');
    };

    return (
        <section id="events" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="flex justify-between items-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl font-display font-medium text-slate-500"
                    >
                        Events
                    </motion.h2>
                    <nav className="flex items-center gap-2 text-sm font-medium">
                        <a href="#home" className="text-emerald-600 hover:underline">Home</a>
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                        <span className="text-slate-400">Events</span>
                    </nav>
                </div>

                {/* Form Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2.5rem] shadow-float border border-slate-100 overflow-hidden"
                >
                    <form onSubmit={handleSubmit} className="p-0">
                        {/* Event Selection */}
                        <div className="mb-0 group/section">
                            <div className="bg-emerald-50 py-6 px-10 border-b border-emerald-100 flex items-center justify-between transition-colors group-hover/section:bg-emerald-100/50">
                                <div>
                                    <h3 className="text-lg font-display font-black text-emerald-900 mb-1 leading-none uppercase tracking-wider">Select Your Event</h3>
                                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Step 1 of 2</p>
                                </div>
                                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                    <Star className="w-6 h-6" fill="currentColor" />
                                </div>
                            </div>
                            <div className="p-10">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4 block">AVAILABLE EVENTS</label>
                                <select
                                    name="event"
                                    required
                                    className="input-field appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1em_1em] !py-5 !bg-slate-50 border-transparent hover:border-emerald-200 focus:bg-white transition-all shadow-inner text-lg font-bold"
                                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                                    value={formData.event}
                                    onChange={handleChange}
                                >
                                    <option value="">Choose an upcoming event...</option>
                                    <option value="wellness-summit">Wellness Summit 2026 - Masterclass</option>
                                    <option value="nutrition-workshop">Advanced Nutrition Retreat - Weekend</option>
                                    <option value="fitness-retreat">Holistic Fitness & Recovery Camp</option>
                                </select>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="mb-0 group/section">
                            <div className="bg-emerald-50 py-6 px-10 border-b border-emerald-100 flex items-center justify-between transition-colors group-hover/section:bg-emerald-100/50 border-t">
                                <div>
                                    <h3 className="text-lg font-display font-black text-emerald-900 mb-1 leading-none uppercase tracking-wider">Registration Details</h3>
                                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Step 2 of 2</p>
                                </div>
                                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="p-10 space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Full Name */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Full Name <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            placeholder="Ex: John Doe"
                                            className="input-field !py-4 focus:ring-emerald-500 transition-all"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Mobile Number */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Contact Number <span className="text-red-500">*</span></label>
                                        <input
                                            type="tel"
                                            name="mobileNumber"
                                            required
                                            placeholder="+91 XXXXX XXXXX"
                                            className="input-field !py-4 focus:ring-emerald-500 transition-all"
                                            value={formData.mobileNumber}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Email Address */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Email ID <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="john@example.com"
                                            className="input-field !py-4 focus:ring-emerald-500 transition-all"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Spouse Name */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Spouse Name</label>
                                        <input
                                            type="text"
                                            name="spouseName"
                                            placeholder="Optional"
                                            className="input-field !py-4 focus:ring-emerald-500 transition-all"
                                            value={formData.spouseName}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Location */}
                                    <div className="md:col-span-2 space-y-3">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">City of Residence <span className="text-red-500">*</span></label>
                                        <input
                                            type="text"
                                            name="location"
                                            required
                                            placeholder="Ex: Hyderabad, Texas, London"
                                            className="input-field !py-4 focus:ring-emerald-500 transition-all"
                                            value={formData.location}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Cab Required */}
                                    <div className="md:col-span-2 p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4 block">CAB FACILITY REQUIRED?</label>
                                        <div className="flex items-center gap-8">
                                            <label className="flex items-center gap-3 cursor-pointer group/radio">
                                                <input
                                                    type="radio"
                                                    name="cabRequired"
                                                    value="yes"
                                                    required
                                                    className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-slate-300"
                                                    checked={formData.cabRequired === 'yes'}
                                                    onChange={handleChange}
                                                />
                                                <span className="text-sm font-black text-slate-600 group-hover/radio:text-emerald-600 transition-colors uppercase">YES, PLEASE</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group/radio">
                                                <input
                                                    type="radio"
                                                    name="cabRequired"
                                                    value="no"
                                                    required
                                                    className="w-5 h-5 text-emerald-600 focus:ring-emerald-500 border-slate-300"
                                                    checked={formData.cabRequired === 'no'}
                                                    onChange={handleChange}
                                                />
                                                <span className="text-sm font-black text-slate-600 group-hover/radio:text-red-500 transition-colors uppercase">NO, THANK YOU</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Options Grid */}
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Up-line Platinum <span className="text-red-500">*</span></label>
                                        <select
                                            name="uplinePlatinum"
                                            required
                                            className="input-field appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1em_1em] !py-4"
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                                            value={formData.uplinePlatinum}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select Partner</option>
                                            <option value="platinum1">Platinum Partner A</option>
                                            <option value="platinum2">Platinum Partner B</option>
                                        </select>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Dietary Preferences <span className="text-red-500">*</span></label>
                                        <select
                                            name="dietaryRestrictions"
                                            required
                                            className="input-field appearance-none bg-no-repeat bg-[right_1.5rem_center] bg-[length:1em_1em] !py-4"
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")` }}
                                            value={formData.dietaryRestrictions}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select option</option>
                                            <option value="none">Standard Meal</option>
                                            <option value="vegetarian">Vegetarian</option>
                                            <option value="vegan">Plant-Based / Vegan</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Agreement */}
                                <div className="flex items-start gap-4 p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                                    <input
                                        type="checkbox"
                                        id="event-agreed"
                                        name="agreed"
                                        required
                                        className="mt-1 w-5 h-5 rounded-lg border-emerald-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                                        checked={formData.agreed}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="event-agreed" className="text-xs font-bold text-emerald-900 leading-relaxed cursor-pointer">
                                        By checking this, I verify that all details provided are accurate and I agree to follow the <a href="#" className="underline font-black decoration-emerald-200 hover:decoration-emerald-500 transition-all">Event Code of Conduct</a>.
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className="flex flex-col items-center gap-6 pt-4">
                                    <button
                                        type="submit"
                                        className="group relative bg-emerald-600 hover:bg-emerald-700 text-white font-black py-5 px-16 rounded-full transition-all shadow-2xl hover:shadow-emerald-900/30 active:scale-95 flex items-center gap-4 text-xl overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                        <CreditCard className="w-6 h-6 transition-transform group-hover:rotate-12" />
                                        PROCEED TO SECURE PAYMENT
                                    </button>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">SECURE 256-BIT ENCRYPTED REGISTRATION</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Events;
