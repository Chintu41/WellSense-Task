import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Package, Truck, ShieldCheck, Star, ArrowRight, Plus, Minus, X, ShoppingCart } from 'lucide-react';

const Ecommerce = () => {
    const [cart, setCart] = useState({});
    const [showCheckout, setShowCheckout] = useState(false);

    const products = [
        { id: 1, name: "Diabetes Snack Box", price: 1299, image: "🍪" },
        { id: 2, name: "Natural Sweetener (Stevia)", price: 450, image: "🍃" },
        { id: 3, name: "Continuous Glucose Monitor", price: 4999, image: "📟" },
        { id: 4, name: "Wellness Tea Blend", price: 850, image: "☕" }
    ];

    const addToCart = (product) => {
        setCart(prev => ({
            ...prev,
            [product.id]: (prev[product.id] || 0) + 1
        }));
    };

    const removeFromCart = (productId) => {
        setCart(prev => {
            const newCart = { ...prev };
            if (newCart[productId] > 1) {
                newCart[productId]--;
            } else {
                delete newCart[productId];
            }
            return newCart;
        });
    };

    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
    const totalPrice = Object.entries(cart).reduce((acc, [id, qty]) => {
        const product = products.find(p => p.id === parseInt(id));
        return acc + (product?.price || 0) * qty;
    }, 0);

    const features = [
        {
            icon: <ShoppingBag className="w-6 h-6" />,
            title: "Curated Wellness Catalog",
            description: "Expertly selected products that support your specific health and dietary goals."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Secure Checkout",
            description: "Fast, encrypted, and reliable payment processing for a worry-free experience."
        },
        {
            icon: <Truck className="w-6 h-6" />,
            title: "Fast Order Tracking",
            description: "Real-time updates on your delivery from our warehouse to your doorstep."
        },
        {
            icon: <Package className="w-6 h-6" />,
            title: "Smart Inventory",
            description: "Ensuring your essential wellness supplements and snacks are always in stock."
        },
        {
            icon: <Star className="w-6 h-6" />,
            title: "Verified Reviews",
            description: "Real feedback from our community to help you make informed choices."
        }
    ];

    return (
        <section id="ecommerce" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
                        >
                            Wellness Shoppe
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight"
                        >
                            Curated Commerce for Your Health Journey
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-xl text-slate-600 leading-relaxed"
                        >
                            Access a premium selection of supplements, nutrition aids, and wellness tools designed specifically to complement your lifestyle management plan.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-10"
                        >
                            <button className="bg-emerald-600 text-white hover:bg-emerald-700 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-emerald-900/20 active:scale-95 flex items-center gap-3">
                                Explore Store
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 mt-12"
                        >
                            <div className="text-emerald-600 font-black text-3xl mb-2">100%</div>
                            <div className="text-slate-500 font-bold uppercase text-xs tracking-wider">Quality Verified</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-emerald-50 p-8 rounded-[2.5rem] shadow-sm border border-emerald-500/10"
                        >
                            <div className="text-emerald-600 font-black text-3xl mb-2">Secure</div>
                            <div className="text-emerald-600/60 font-bold uppercase text-xs tracking-wider">Payment Gateway</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-emerald-900 p-8 rounded-[2.5rem] shadow-sm border border-emerald-950 text-white col-span-2"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-2xl font-black mb-1">Fast Delivery</div>
                                    <div className="text-white/60 font-bold uppercase text-xs tracking-wider">Across the Region</div>
                                </div>
                                <Truck className="w-12 h-12 text-white/20" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Product Catalog - Functional Component */}
                <div className="mb-24">
                    <div className="flex justify-between items-end mb-10">
                        <h3 className="text-3xl font-extrabold text-slate-900">Featured Products</h3>
                        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
                            <div className="relative">
                                <ShoppingCart className="w-6 h-6 text-emerald-600" />
                                {totalItems > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </div>
                            <span className="font-bold text-slate-900">₹{totalPrice.toLocaleString()}</span>
                            {totalItems > 0 && (
                                <button
                                    onClick={() => setShowCheckout(true)}
                                    className="bg-emerald-600 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-emerald-700 transition-all"
                                >
                                    Proceed
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                whileHover={{ y: -10 }}
                                className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-center text-center"
                            >
                                <div className="w-full aspect-square bg-slate-50 rounded-3xl flex items-center justify-center text-6xl mb-6">
                                    {product.image}
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{product.name}</h4>
                                <p className="text-emerald-600 font-black mb-6">₹{product.price.toLocaleString()}</p>

                                {cart[product.id] ? (
                                    <div className="flex items-center gap-4 bg-emerald-50 rounded-xl px-4 py-2">
                                        <button onClick={() => removeFromCart(product.id)} className="p-1 hover:bg-white rounded-md text-emerald-600 transition-colors">
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="font-bold text-emerald-600 w-4">{cart[product.id]}</span>
                                        <button onClick={() => addToCart(product)} className="p-1 hover:bg-white rounded-md text-emerald-600 transition-colors">
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-full bg-slate-50 hover:bg-emerald-50 hover:text-emerald-600 text-slate-500 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add to Cart
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Features list */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-white/50 p-8 rounded-3xl border border-slate-100"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Checkout Modal */}
                <AnimatePresence>
                    {showCheckout && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-slate-900/60 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                className="bg-white rounded-[2.5rem] p-10 max-w-lg w-full relative shadow-2xl"
                            >
                                <button
                                    onClick={() => setShowCheckout(false)}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <h3 className="text-2xl font-black text-slate-900 mb-8">Order Summary</h3>
                                <div className="space-y-4 mb-8 max-h-60 overflow-y-auto pr-2">
                                    {Object.entries(cart).map(([id, qty]) => {
                                        const product = products.find(p => p.id === parseInt(id));
                                        return (
                                            <div key={id} className="flex justify-between items-center py-2 border-b border-slate-50">
                                                <div className="flex items-center gap-4">
                                                    <span className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center">{product?.image}</span>
                                                    <div>
                                                        <div className="font-bold text-sm text-slate-900">{product?.name}</div>
                                                        <div className="text-xs text-slate-500">Qty: {qty}</div>
                                                    </div>
                                                </div>
                                                <div className="font-bold text-emerald-600">₹{(product?.price || 0) * qty}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-between items-center mb-8 pt-4 border-t-2 border-slate-100">
                                    <span className="text-xl font-bold text-slate-900">Grand Total</span>
                                    <span className="text-2xl font-black text-emerald-600">₹{totalPrice.toLocaleString()}</span>
                                </div>
                                <button
                                    onClick={() => {
                                        alert('Checkout integration coming soon!');
                                        setShowCheckout(false);
                                        setCart({});
                                    }}
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-emerald-900/20"
                                >
                                    Complete Secure Purchase
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Ecommerce;
