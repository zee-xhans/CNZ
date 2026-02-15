"use client";
import React from 'react';
import { motion } from 'framer-motion';

const GRID_PATTERN_URL =
    "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CBD83B' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

const features = [
    {
        title: "Mobile Friendly",
        desc: "Optimasi sempurna di semua perangkat seluler untuk menjangkau lebih banyak audiens.",
        icon: "📱",
        color: "from-blue-500/20 to-blue-600/10",
        gradient: "from-blue-500 to-blue-600"
    },
    {
        title: "Website Cepat & Stabil",
        desc: "Performa tinggi dengan kecepatan loading maksimal demi kenyamanan pengunjung.",
        icon: "⚡",
        color: "from-yellow-500/20 to-yellow-600/10",
        gradient: "from-yellow-500 to-yellow-600"
    },
    {
        title: "Website Terima Beres",
        desc: "Anda fokus pada bisnis, kami yang urus semua teknis dari awal hingga peluncuran.",
        icon: "🚀",
        color: "from-purple-500/20 to-purple-600/10",
        gradient: "from-purple-500 to-purple-600"
    }
];

const Features = () => {
    const [hoveredButton, setHoveredButton] = React.useState<number | null>(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section className="relative py-24 bg-gradient-to-b from-[#FFFEEC] via-white to-[#FFFEEC] overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#CBD83B]/20 via-transparent to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-[#A88AED]/20 via-transparent to-transparent rounded-full blur-3xl"
                />
                
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${GRID_PATTERN_URL})` }} />
            </div>

            <div className="container mx-auto px-4 relative z-10   ">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="bg-[#CBD83B] text-[#212F3D] px-6 py-2 rounded-full text-sm font-bold tracking-wider">
                            ✦ WHY CHOOSE US ✦
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#212F3D] mb-6 tracking-tight mt-20"
                    >
                        Dapatkan{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-[#CBD83B] text-[#212F3D] px-4 py-2 rounded-2xl">
                                Fitur Spesial
                            </span>
                            <motion.span
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -inset-2 bg-[#CBD83B]/30 rounded-3xl blur-xl -z-10"
                            />
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        Kualitas premium dengan teknologi terbaru untuk mendukung skala bisnis Anda.
                    </motion.p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            {/* Card Container */}
                            <div className="relative h-full">
                                {/* Gradient Border Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#CBD83B] to-[#A88AED] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                                
                                {/* Main Card */}
                                <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                    {/* Decorative Elements */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                                    
                                    {/* Icon Container */}
                                    <div className="relative mb-8">
                                        <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                                            <span className="text-4xl filter drop-shadow-lg">
                                                {feature.icon}
                                            </span>
                                        </div>
                                        
                                        {/* Pulse Effect */}
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.3, 0, 0.3]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                delay: index * 0.5
                                            }}
                                            className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl -z-10`}
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-[#212F3D] mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#CBD83B] group-hover:to-[#A88AED] transition-all duration-300">
                                        {feature.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {feature.desc}
                                    </p>

                                    {/* Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onHoverStart={() => setHoveredButton(index)}
                                        onHoverEnd={() => setHoveredButton(null)}
                                        className="w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wider relative overflow-hidden"
                                    >
                                        <span className={`absolute inset-0 bg-gradient-to-r from-[#CBD83B] to-[#A88AED] transition-opacity duration-300 ${hoveredButton === index ? 'opacity-0' : 'opacity-90'}`} />
                                        <span className={`absolute inset-0 bg-gradient-to-r from-[#A88AED] to-[#CBD83B] transition-opacity duration-300 ${hoveredButton === index ? 'opacity-100' : 'opacity-0'}`} />
                                        <span className={`relative flex items-center justify-center gap-2 transition-colors duration-300 ${hoveredButton === index ? 'text-white' : 'text-[#212F3D]'}`}>
                                            Pelajari Detail
                                            <motion.span
                                                animate={{ x: [0, 5, 0] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                                className="inline-block"
                                            >
                                                →
                                            </motion.span>
                                        </span>
                                    </motion.button>

                                    {/* Bottom Glow */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: index * 0.2
                                }}
                                className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#CBD83B]/30 to-[#A88AED]/30 rounded-full blur-lg -z-10"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
                >
                    {[
                        { value: "100+", label: "Projects Completed", icon: "🏆" },
                        { value: "50+", label: "Happy Clients", icon: "😊" },
                        { value: "24/7", label: "Support Ready", icon: "⚡" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#CBD83B]/20">
                            <span className="text-3xl mb-2 block">{stat.icon}</span>
                            <div className="text-2xl font-bold text-[#212F3D]">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;