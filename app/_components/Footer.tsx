"use client";
import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Memoisasi link agar tidak re-render saat scroll
  const links = useMemo(() => [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
    { name: "Layanan", href: "/layanan" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Kontak", href: "/kontak" },
  ], []);

  const socialIcons = [
    { name: 'TW', href: '#' },
    { name: 'IG', href: '#' },
    { name: 'LI', href: '#' },
    { name: 'FB', href: '#' }
  ];

  return (
    <footer className="bg-[#FFFEEC] pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Elements dengan warna baru */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A88AED] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#CBD83B] opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #A88AED 1px, transparent 0)`,
        backgroundSize: '40px 40px',
        opacity: 0.03
      }}></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-7xl">

        {/* TOP SECTION: Call to Action (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-gradient-to-br from-[#A88AED]/10 to-[#CBD83B]/10 rounded-3xl p-8 md:p-12 mb-16 border border-[#A88AED]/20 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a232e] mb-4">
                Siap Membangun{' '}
                <span className="text-[#A88AED] relative inline-block">
                  Ide Digital Anda?
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M1 4C40 1 80 1 199 4" stroke="#CBD83B" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="text-gray-600 max-w-xl text-sm md:text-base">
                Mari berkolaborasi untuk menciptakan solusi digital yang berdampak luas bagi bisnis Anda.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href="/kontak"
                className="group relative inline-block bg-[#CBD83B] text-[#1a232e] px-8 py-4 rounded-xl font-bold text-sm tracking-wider hover:bg-[#A88AED] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">MULAI PROYEK SEKARANG</span>
                <motion.div 
                  className="absolute inset-0 bg-[#A88AED]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* MIDDLE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Section - 5 columns */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#A88AED] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                CZ
              </div>
              <span className="text-2xl font-bold text-[#1a232e]">CNZ<span className="text-[#A88AED]">.</span></span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Partner transformasi digital terbaik untuk pertumbuhan bisnis yang berkelanjutan. 
              Kami menghadirkan inovasi untuk masa depan digital Anda.
            </p>
            
            {/* Contact Info */}
            <div className="pt-4 space-y-2">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="w-6 h-6 rounded-full bg-[#CBD83B]/20 flex items-center justify-center">
                  <span className="text-[#A88AED] text-xs">✉</span>
                </div>
                <span>hello@cnz.tech</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="w-6 h-6 rounded-full bg-[#CBD83B]/20 flex items-center justify-center">
                  <span className="text-[#A88AED] text-xs">📞</span>
                </div>
                <span>+62 123 4567 890</span>
              </div>
            </div>
          </div>

          {/* Navigation - 4 columns */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-bold text-[#1a232e] uppercase tracking-wider mb-6">
              Navigasi
            </h3>
            <nav className="grid grid-cols-2 gap-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-[#A88AED] transition-colors text-sm font-medium flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#CBD83B] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Newsletter - 3 columns */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-[#1a232e] uppercase tracking-wider mb-6">
              Connect
            </h3>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              {socialIcons.map((soc) => (
                <motion.a
                  key={soc.name}
                  href={soc.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-white border border-[#A88AED]/20 rounded-xl flex items-center justify-center text-xs font-bold text-[#1a232e] hover:bg-[#A88AED] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {soc.name}
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-xs text-gray-600">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="flex-1 px-4 py-2 bg-white border border-[#A88AED]/20 rounded-l-xl text-sm focus:outline-none focus:border-[#A88AED]"
                />
                <button className="px-4 bg-[#CBD83B] text-[#1a232e] rounded-r-xl text-sm font-medium hover:bg-[#A88AED] hover:text-white transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 border-t border-[#A88AED]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 order-2 md:order-1">
              © {currentYear} CNZ TECHNOLOGY NUSANTARA. All rights reserved.
            </p>
            
            <div className="flex gap-8 order-1 md:order-2">
              <Link 
                href="/privacy" 
                className="text-xs text-gray-500 hover:text-[#A88AED] transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CBD83B] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/terms" 
                className="text-xs text-gray-500 hover:text-[#A88AED] transition-colors relative group"
              >
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#CBD83B] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;