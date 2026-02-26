import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const { user, logout } = useAuth();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Our Programs', href: '/#programs' },
        { name: 'Events', href: '/#events' },
        { name: 'Team', href: '/#team' },
    ];

    const services = [
        { name: 'Diagnostics', href: '/services/diagnostics', status: 'Active' },
        { name: 'E-Commerce', href: '/services/ecommerce', status: 'Active' },
        { name: 'Cloud Kitchen', href: '/services/cloud-kitchen', status: 'Active' },
        { name: 'LMS', href: '/services/lms', status: 'Active' },
        { name: 'FitSense', href: '/services/fitsense', status: 'Active' },
    ];

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled || location.pathname !== '/'
                ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-lg'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <img
                                src={logo}
                                alt="WellSense Community Logo"
                                className="h-10 sm:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <HashLink
                                key={link.name}
                                smooth
                                to={link.href}
                                className="text-slate-700 hover:text-emerald-600 font-bold text-[15px] transition-all relative group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
                            </HashLink>
                        ))}

                        {/* Services Dropdown */}
                        <div
                            className="relative group py-2"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            <button className="flex items-center gap-1 text-[15px] font-bold text-slate-700 hover:text-emerald-600 transition-colors">
                                Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 mt-2"
                                    >
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                to={service.href}
                                                className="flex flex-col px-4 py-3 rounded-xl hover:bg-slate-50 transition-all group"
                                                onClick={() => setIsServicesOpen(false)}
                                            >
                                                <span className={`text-sm font-bold ${service.status === 'Active' ? 'text-emerald-600' : 'text-slate-700'}`}>
                                                    {service.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link
                                    to={user.role === 'trainer' ? '/dashboard/trainer' : '/dashboard/user'}
                                    className="flex items-center gap-2 text-slate-700 hover:text-emerald-600 font-bold text-[15px] transition-all"
                                >
                                    <User className="w-4 h-4" />
                                    Dashboard
                                </Link>
                                <button
                                    onClick={logout}
                                    className="text-slate-400 hover:text-red-500 transition-colors"
                                    title="Logout"
                                >
                                    <LogOut className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-full text-[13px] transition-all shadow-lg hover:shadow-emerald-900/20 active:scale-95"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-xl transition-all duration-300 ${isMobileMenuOpen ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600 hover:bg-slate-100'
                                }`}
                            aria-label="Toggle Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
                    >
                        <div className="px-4 py-8 space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                {navLinks.map((link) => (
                                    <HashLink
                                        key={link.name}
                                        smooth
                                        to={link.href}
                                        className="flex items-center justify-center px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/50 transition-all border border-transparent hover:border-emerald-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </HashLink>
                                ))}
                                {user && (
                                    <Link
                                        to={user.role === 'trainer' ? '/dashboard/trainer' : '/dashboard/user'}
                                        className="flex items-center justify-center px-4 py-3 rounded-2xl text-sm font-bold text-emerald-600 bg-emerald-50/50 border border-emerald-100"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                )}
                            </div>
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-3 mb-2">Our Services</p>
                                <div className="grid grid-cols-1 gap-1">
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.href}
                                            className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className={service.status === 'Active' ? 'text-emerald-600' : ''}>{service.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="pt-4">
                                {user ? (
                                    <button
                                        onClick={() => {
                                            logout();
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="bg-red-50 text-red-600 font-bold w-full flex justify-center py-4 text-base rounded-2xl shadow-sm active:scale-95 transition-all"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold w-full flex justify-center py-4 text-base rounded-2xl shadow-lg active:scale-95 transition-all"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
