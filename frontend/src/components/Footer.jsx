import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-emerald-950 pt-20 pb-10 text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="relative">
                            <div className="absolute -top-4 left-0 w-24 h-1 bg-emerald-500" />
                            <h3 className="text-2xl font-black tracking-tight mt-2">WellSense Community</h3>
                        </div>
                        <div className="space-y-4 text-sm font-medium text-slate-300">
                            <p className="flex items-start gap-3">
                                <span className="text-emerald-500">Manikonda</span>
                                <br />
                                Hyderabad, TS-89
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="font-black text-white">Phone:</span> +91 93909 63643
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="font-black text-white">Email:</span> contact@wellsensecommunity.com
                            </p>
                        </div>
                        <div className="flex space-x-5 pt-2">
                            {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                                <a key={social} href={`#${social}`} className="text-slate-400 hover:text-emerald-500 transition-all transform hover:-translate-y-1">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center p-1">
                                        <div className="w-full h-full bg-slate-400 group-hover:bg-emerald-500" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-emerald-500 font-black uppercase tracking-widest text-sm mb-8">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-300">
                            <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-2">› Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors flex items-center gap-2">› About us</a></li>
                            <li><a href="#programs" className="hover:text-white transition-colors flex items-center gap-2">› Our Programs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">› Terms of service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">› Privacy policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">› Refund Policy</a></li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-emerald-500 font-black uppercase tracking-widest text-sm mb-8">Our Services</h4>
                        <ul className="space-y-4 text-sm font-bold text-slate-300">
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">› Diagnostic</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">› E-Commerce</a></li>
                            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">› Cloud Kitchen</a></li>
                            <li><a href="#lms" className="hover:text-white transition-colors flex items-center gap-2">› LMS</a></li>
                            <li><a href="#fitsense" className="hover:text-white transition-colors flex items-center gap-2">› FitSense</a></li>
                        </ul>
                    </div>

                    {/* App Download */}
                    <div>
                        <h4 className="text-emerald-500 font-black uppercase tracking-widest text-sm mb-8">Download Our App</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                            </a>
                            <a href="#" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="pt-10 border-t border-white/10 text-center space-y-4">
                    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                        © Copyright <span className="text-white">WellSense Community</span>. All Rights Reserved
                    </p>
                    <p className="text-slate-500 text-[10px] font-medium max-w-2xl mx-auto leading-relaxed">
                        WellSense Community is officially registered under the parent organization <span className="text-emerald-500 uppercase tracking-tighter font-black">THE FIVE ELEMENTS</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
