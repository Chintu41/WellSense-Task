import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { Activity, Calendar, FileText, LogOut, User as UserIcon, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const UserDashboard = () => {
    const { user, logout } = useAuth();
    const [healthData, setHealthData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHealthStatus = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/auth/user/health-status`);
                setHealthData(res.data.data);
            } catch (err) {
                console.error('Error fetching health status', err);
            } finally {
                setLoading(false);
            }
        };

        fetchHealthStatus();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-emerald-600" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <div>
                        <h1 className="text-3xl font-display font-black text-slate-900">Health Dashboard</h1>
                        <p className="text-slate-500 font-medium">Welcome back, {user?.name}</p>
                    </div>
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all shadow-sm"
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Health Status Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                                <Activity className="w-7 h-7" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Overall Health Status</h3>
                                <p className="text-emerald-600 font-bold uppercase text-xs tracking-wider">Proactive Checkup active</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Status</p>
                                <p className="text-2xl font-black text-emerald-600">{healthData?.status}</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Next Checkup</p>
                                <p className="text-2xl font-black text-slate-900">{healthData?.nextCheckup}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Recent Reports</h4>
                            <div className="space-y-3">
                                {healthData?.reports.map((report, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-emerald-200 transition-all">
                                        <div className="flex items-center gap-3">
                                            <FileText className="w-5 h-5 text-slate-400" />
                                            <span className="font-bold text-slate-700">{report}</span>
                                        </div>
                                        <button className="text-emerald-600 text-xs font-black uppercase tracking-widest">Download</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Stats/Profile Card */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-emerald-900 rounded-[2.5rem] p-8 text-white shadow-xl shadow-emerald-900/20"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                    <UserIcon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <p className="text-xl font-black">{user?.name}</p>
                                    <p className="text-white/60 text-sm">{user?.email}</p>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-white/10 flex justify-between">
                                <div>
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Member Since</p>
                                    <p className="font-bold">Feb 2026</p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Points</p>
                                    <p className="font-bold">1,240</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm"
                        >
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-emerald-600" />
                                Schedule
                            </h4>
                            <div className="space-y-4">
                                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
                                    <p className="text-xs font-black text-emerald-600 uppercase mb-1">Tomorrow, 09:00 AM</p>
                                    <p className="font-bold text-slate-800">Sugar Level Monitoring</p>
                                </div>
                                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                                    <p className="text-xs font-black text-slate-400 uppercase mb-1">Sat, 11:30 AM</p>
                                    <p className="font-bold text-slate-800">Diet Consultation</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
