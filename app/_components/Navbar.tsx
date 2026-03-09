"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import type { Variants } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const menuItems = useMemo(() => [
        { name: 'Home', href: '/' },
        { name: 'Profile', href: '/profile' },
        { name: 'Layanan', href: '/layanan' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Kontak', href: '/kontak' },
    ], []);

    const navVariants: Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        },
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            // Perbaikan: Background saat scroll dibuat lebih solid sedikit agar teks tidak bertabrakan dengan konten di bawahnya
            className={`fixed left-0 right-0 z-[100] transition-all duration-500 ease-in-out
                ${isScrolled
                    ? 'top-4 mx-auto w-[92%] max-w-6xl px-6 py-3 bg-[#10002B]/80 backdrop-blur-2xl border border-[#7B2CBF]/40 shadow-[0_10px_40px_rgba(0,0,0,0.6)] rounded-[2rem]'
                    : 'top-0 w-full px-6 md:px-12 py-8 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* LOGO - Memastikan teks putih/lavender agar terlihat di bg gelap */}
                <Link href="/" className="group flex items-center gap-2 outline-none">
                    <motion.div
                        whileHover={{ rotate: 8, scale: 1.1 }}
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#7B2CBF] to-[#3C096C] shadow-lg shadow-[#7B2CBF]/40"
                    >
                        <span className="text-white font-black text-xl">C</span>
                    </motion.div>
                    <span className="font-extrabold text-2xl tracking-tight text-[#E0AAFF] drop-shadow-sm">
                        CN<span className="text-[#7B2CBF]">Z</span> Tech
                    </span>
                </Link>

                {/* DESKTOP MENU - Menggunakan Soft Lavender cerah */}
                <div className="hidden md:flex items-center gap-10">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-[15px] font-bold text-[#E0AAFF] hover:text-white transition-all duration-300 group"
                        >
                            <span className="relative z-10">{item.name}</span>
                            <motion.span 
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7B2CBF] rounded-full"
                                whileHover={{ width: '100%' }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        </Link>
                    ))}
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-4">
                    <motion.button
                        whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0px 0px 25px rgba(123, 44, 191, 0.6)",
                            backgroundColor: "#3C096C" 
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:block bg-[#7B2CBF] text-white px-7 py-2.5 rounded-full text-sm font-extrabold transition-all border border-[#7B2CBF]/50"
                    >
                        Let's Talk
                    </motion.button>

                    {/* HAMBURGER - Warna Lavender Terang */}
                    <button
                        className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center rounded-full bg-[#3C096C]/30"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="flex flex-col gap-1.5 w-5">
                            <motion.span 
                                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                className="w-full h-[2px] bg-[#E0AAFF] rounded-full" 
                            />
                            <motion.span 
                                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                className="w-full h-[2px] bg-[#E0AAFF] rounded-full" 
                            />
                            <motion.span 
                                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className="w-full h-[2px] bg-[#E0AAFF] rounded-full" 
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-[110%] left-0 right-0 px-4 md:hidden"
                    >
                        <div className="bg-[#10002B] border border-[#7B2CBF]/50 rounded-[2rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col gap-6">
                            {menuItems.map((item, i) => (
                                <motion.div 
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-[#E0AAFF] font-bold text-xl hover:text-white transition-colors flex items-center justify-between"
                                    >
                                        {item.name}
                                        <span className="text-[#7B2CBF]">→</span>
                                    </Link>
                                </motion.div>
                            ))}
                            <hr className="border-[#7B2CBF]/20" />
                            <button className="w-full bg-[#7B2CBF] text-white py-4 rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-transform">
                                Let's Talk
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;