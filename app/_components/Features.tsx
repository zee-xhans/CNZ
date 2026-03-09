"use client";
import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Mobile Friendly",
        desc: "Optimasi sempurna di semua perangkat seluler untuk menjangkau lebih banyak audiens.",
        icon: "📱",
        color: "from-[#7B2CBF]/20 to-[#3C096C]/10",
        gradient: "from-[#7B2CBF] to-[#3C096C]"
    },
    {
        title: "Website Cepat & Stabil",
        desc: "Performa tinggi dengan kecepatan loading maksimal demi kenyamanan pengunjung.",
        icon: "⚡",
        color: "from-[#E0AAFF]/20 to-[#7B2CBF]/10",
        gradient: "from-[#E0AAFF] to-[#7B2CBF]"
    },
    {
        title: "Website Terima Beres",
        desc: "Anda fokus pada bisnis, kami yang urus semua teknis dari awal hingga peluncuran.",
        icon: "🚀",
        color: "from-[#3C096C]/20 to-[#10002B]/10",
        gradient: "from-[#3C096C] to-[#10002B]"
    }
];

const Features = () => {
    const [hoveredButton, setHoveredButton] = React.useState<number | null>(null);

    return (
        <section className="relative py-32 bg-[#10002B] overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-20 w-80 h-80 bg-[#7B2CBF]/10 rounded-full blur-[120px]"
                />
                {/* Grid Pattern Halus */}
                <div className="absolute inset-0 opacity-[0.03]" 
                     style={{ backgroundImage: `radial-gradient(#E0AAFF 1px, transparent 0)`, backgroundSize: '40px 40px' }} 
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="inline-block mb-6 px-6 py-2 rounded-full bg-[#3C096C]/30 border border-[#7B2CBF]/30 backdrop-blur-md"
                    >
                        <span className="text-[#E0AAFF] text-[10px] font-black tracking-[0.3em] uppercase">
                            ✦ Kenapa Kami ✦
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-[#E0AAFF] mb-6 tracking-tighter"
                    >
                        Dapatkan{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-[#7B2CBF] text-[#E0AAFF] px-6 py-2 rounded-[2rem] shadow-[0_0_30px_rgba(123,44,191,0.4)]">
                                Fitur Spesial
                            </span>
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#E0AAFF]/60 max-w-2xl mx-auto text-lg font-medium"
                    >
                        Kualitas premium dengan teknologi terbaru untuk mendukung skala bisnis Anda.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="relative group h-full"
                        >
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#7B2CBF] to-[#E0AAFF] rounded-[3rem] opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
                            
                            {/* Main Card */}
                            <div className="relative h-full bg-[#3C096C]/10 border border-[#7B2CBF]/20 backdrop-blur-xl rounded-[3rem] p-10 shadow-2xl overflow-hidden group-hover:border-[#7B2CBF]/50 transition-all duration-500">
                                {/* Decorative Gradient Circle */}
                                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700`} />
                                
                                {/* Icon Container */}
                                <div className="relative mb-10">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/10`}>
                                        <span className="text-4xl">{feature.icon}</span>
                                    </div>
                                    
                                    {/* Pulse Aura */}
                                    <motion.div
                                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                        className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl -z-10`}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-black text-[#E0AAFF] mb-4 tracking-tight group-hover:text-white transition-colors">
                                    {feature.title}
                                </h3>
                                
                                <p className="text-[#E0AAFF]/50 mb-10 leading-relaxed font-medium">
                                    {feature.desc}
                                </p>

                                {/* Button Style Premium */}
                                <motion.button
                                    onHoverStart={() => setHoveredButton(index)}
                                    onHoverEnd={() => setHoveredButton(null)}
                                    className="w-full py-4 rounded-2xl font-black text-xs tracking-[0.2em] relative overflow-hidden border border-[#7B2CBF]/40"
                                >
                                    <span className={`absolute inset-0 bg-[#7B2CBF] transition-transform duration-500 ${hoveredButton === index ? 'translate-y-0' : 'translate-y-full'}`} />
                                    <span className={`relative flex items-center justify-center gap-3 transition-colors duration-300 ${hoveredButton === index ? 'text-[#E0AAFF]' : 'text-[#7B2CBF]'}`}>
                                        PELAJARI DETAIL <span>→</span>
                                    </span>
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats Halus */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-24 flex flex-wrap justify-center gap-12"
                >
                    {[
                        { value: "100+", label: "Projects Completed", icon: "🏆" },
                        { value: "50+", label: "Happy Clients", icon: "😊" },
                        { value: "24/7", label: "Support Ready", icon: "⚡" }
                    ].map((stat, index) => (
                        <div key={index} className="flex items-center gap-4 px-8 py-4 rounded-3xl bg-[#3C096C]/10 border border-[#7B2CBF]/10 hover:border-[#7B2CBF]/30 transition-all">
                            <span className="text-3xl">{stat.icon}</span>
                            <div>
                                <div className="text-2xl font-black text-[#E0AAFF]">{stat.value}</div>
                                <div className="text-[10px] font-black text-[#7B2CBF] uppercase tracking-widest">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;