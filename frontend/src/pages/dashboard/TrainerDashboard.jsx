import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { Users, Calendar, MessageSquare, LogOut, Shield, Loader2, Search } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || '';

const TrainerDashboard = () => {
    const { user, logout } = useAuth();
    const [trainerData, setTrainerData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrainerDashboard = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/auth/trainer/dashboard`);
                setTrainerData(res.data.data);
            } catch (err) {
                console.error('Error fetching trainer dashboard', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTrainerDashboard();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-emerald-600" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 pt-24 text-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                            <Shield className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-display font-black text-slate-900">Trainer Portal</h1>
                            <p className="text-slate-500 font-medium tracking-tight">Managing wellness for {trainerData?.assignedUsers} users</p>
                        </div>
                    </div>
                    <button
                        onClick={logout}
                        className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-100 transition-all shadow-sm"
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-8 bg-white rounded-[2rem] border border-emerald-100 shadow-sm">
                        <Users className="w-8 h-8 text-emerald-600 mb-4" />
                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Active Clients</p>
                        <p className="text-4xl font-black text-slate-900">{trainerData?.assignedUsers}</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                        <Calendar className="w-8 h-8 text-emerald-600 mb-4" />
                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Sessions Today</p>
                        <p className="text-4xl font-black text-slate-900">{trainerData?.todaySchedule.length}</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="p-8 bg-white rounded-[2rem] border border-orange-100 shadow-sm">
                        <MessageSquare className="w-8 h-8 text-orange-500 mb-4" />
                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Pending Queries</p>
                        <p className="text-4xl font-black text-slate-900">{trainerData?.pendingConsultations}</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* User Management List */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-xl font-bold text-slate-900">Assigned Clients</h3>
                            <button className="text-emerald-600 font-black text-sm flex items-center gap-2">
                                <Search className="w-4 h-4" />
                                Find User
                            </button>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                                        <div>
                                            <p className="font-bold text-slate-900">Client User {i}</p>
                                            <p className="text-xs text-slate-500">Last Active: 2h ago</p>
                                        </div>
                                    </div>
                                    <button className="bg-white px-4 py-2 rounded-lg text-xs font-black uppercase text-emerald-600 border border-emerald-100 hover:bg-emerald-600 hover:text-white transition-all">View Progress</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Today's Schedule */}
                    <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-slate-900 mb-8">Today's Schedule</h3>
                        <div className="space-y-6">
                            {trainerData?.todaySchedule.map((task, idx) => (
                                <div key={idx} className="flex gap-6 items-start relative pb-6 last:pb-0">
                                    <div className="relative z-10 w-4 h-4 rounded-full bg-emerald-600 mt-1 flex-shrink-0"></div>
                                    {idx !== trainerData.todaySchedule.length - 1 && <div className="absolute left-2 top-2 w-[2px] h-full bg-slate-100"></div>}
                                    <div>
                                        <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1">09:00 AM - 10:00 AM</p>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">{task}</h4>
                                        <p className="text-sm text-slate-500">Virtual Session - WellSense Platform</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerDashboard;
