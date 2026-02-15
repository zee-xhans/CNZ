"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    // Deteksi scroll menggunakan useScroll dari Framer Motion (lebih efisien)
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const menuItems = useMemo(() => [
        { name: 'Home', href: '/' },
        { name: 'Profile', href: '/profile' },
        { name: 'Layanan', href: '/layanan' },
    ], []);

    // Variasi Animasi
    const navVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        },
    };

    const mobileMenuVariants = {
        closed: { opacity: 0, scale: 0.95, y: -20 },
        open: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.95, 
            y: -10,
            transition: { duration: 0.2 }
        }
    };

    const itemVariants = {
        closed: { x: -20, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            layout // Menghaluskan transisi perubahan class (top-0 ke top-4)
            className={`fixed z-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                ${isScrolled
                    ? 'top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-3xl'
                    : 'top-0 left-0 w-full px-6 md:px-12 py-6 bg-transparent border-b border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                
                {/* LOGO */}
                <Link href="/" className="group flex items-center gap-2 outline-none">
                    <motion.div
                        whileHover={{ rotate: -10, scale: 1.1 }}
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#CBD83B] via-[#A88AED] to-[#FFFEEC] shadow-lg"
                    >
                        <span className="text-[#212F3D] font-black text-xl">C</span>
                    </motion.div>
                    <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-black/80'}`}>
                        CN<span className="text-[#CBD83B]">Z</span> Tech
                    </span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative text-sm font-bold text-black/60 hover:text-black transition-colors group"
                        >
                            {item.name}
                            <motion.span 
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A88AED]"
                                whileHover={{ width: '100%' }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        </Link>
                    ))}
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-3">
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(203, 216, 59, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:block bg-[#CBD83B] text-[#212F3D] px-6 py-2.5 rounded-full text-sm font-bold transition-transform"
                    >
                        Let's Talk
                    </motion.button>

                    {/* IMPROVED HAMBURGER */}
                    <button
                        className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center group"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="flex flex-col gap-1.5 w-6">
                            <motion.span 
                                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                className="w-full h-0.5 bg-black rounded-full" 
                            />
                            <motion.span 
                                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                className="w-full h-0.5 bg-black rounded-full" 
                            />
                            <motion.span 
                                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className="w-full h-0.5 bg-black rounded-full" 
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="exit"
                        className="absolute top-full left-0 right-0 mt-4 md:hidden"
                    >
                        <div className="mx-2 bg-white/90 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <motion.div key={item.name} variants={itemVariants}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-[#212F3D] font-bold text-lg py-2 hover:translate-x-2 transition-transform"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.button 
                                variants={itemVariants}
                                className="w-full bg-[#A88AED] text-white py-4 rounded-2xl font-bold shadow-lg"
                            >
                                Let's Talk
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;