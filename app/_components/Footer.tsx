"use client";

import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = useMemo(() => [
    { name: "Home", href: "/" },
    { name: "Profile", href: "/profile" },
    { name: "Layanan", href: "/layanan" },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Kontak", href: "/kontak" },
  ], []);

  const socialIcons = [
    { name: 'IG', href: '#' },
    { name: 'LI', href: '#' },
    { name: 'WA', href: '#' },
    { name: 'YT', href: '#' }
  ];

  return (
    <footer className="bg-[#10002B] pt-24 pb-12 relative overflow-hidden border-t border-[#7B2CBF]/20">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7B2CBF] opacity-[0.07] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3C096C] opacity-[0.1] rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">

        {/* TOP SECTION: Call to Action (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#3C096C]/20 to-[#10002B] rounded-[3rem] p-8 md:p-16 mb-20 border border-[#7B2CBF]/30 backdrop-blur-sm shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
             <span className="text-[120px] leading-none select-none">🚀</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#E0AAFF] mb-6 leading-tight tracking-tighter">
                Siap Membangun <br />
                <span className="text-[#7B2CBF]">Ide Digital Anda?</span>
              </h2>
              <p className="text-[#E0AAFF]/60 max-w-lg text-lg font-medium mx-auto lg:mx-0">
                Mari berkolaborasi untuk menciptakan solusi digital yang berdampak luas bagi bisnis Anda.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/kontak"
                className="group relative inline-flex bg-[#7B2CBF] text-[#E0AAFF] px-10 py-5 rounded-2xl font-black text-sm tracking-[0.15em] hover:shadow-[0_0_40px_rgba(123,44,191,0.5)] transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">MULAI PROYEK SEKARANG</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* MIDDLE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 px-4">
          
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#7B2CBF] to-[#3C096C] rounded-2xl flex items-center justify-center text-[#E0AAFF] font-black text-2xl shadow-lg">
                C
              </div>
              <span className="text-3xl font-black text-[#E0AAFF] tracking-tighter">CNZ<span className="text-[#7B2CBF]">.</span></span>
            </div>
            <p className="text-[#E0AAFF]/50 text-base leading-relaxed max-w-sm font-medium">
              Partner transformasi digital terbaik untuk pertumbuhan bisnis yang berkelanjutan. 
              Membangun masa depan digital Anda dengan presisi.
            </p>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-[#3C096C]/30 flex items-center justify-center border border-[#7B2CBF]/20 group-hover:bg-[#7B2CBF]/20 transition-colors">
                  <span className="text-[#7B2CBF]">✉</span>
                </div>
                <span className="text-[#E0AAFF]/70 font-bold group-hover:text-[#E0AAFF]">hello@cnz.tech</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-[#3C096C]/30 flex items-center justify-center border border-[#7B2CBF]/20 group-hover:bg-[#7B2CBF]/20 transition-colors">
                  <span className="text-[#7B2CBF]">📞</span>
                </div>
                <span className="text-[#E0AAFF]/70 font-bold group-hover:text-[#E0AAFF]">+62 821 4567 890</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 lg:pl-12">
            <h3 className="text-xs font-black text-[#7B2CBF] uppercase tracking-[0.3em] mb-8">
              Navigasi
            </h3>
            <nav className="grid grid-cols-1 gap-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#E0AAFF]/60 hover:text-[#7B2CBF] transition-all text-sm font-bold flex items-center group"
                >
                  <span className="w-1.5 h-1.5 bg-[#7B2CBF] rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform"></span>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-black text-[#7B2CBF] uppercase tracking-[0.3em] mb-8">
              Connect
            </h3>
            
            <div className="flex gap-4 mb-10">
              {socialIcons.map((soc) => (
                <motion.a
                  key={soc.name}
                  href={soc.href}
                  whileHover={{ y: -5, borderColor: '#7B2CBF' }}
                  className="w-12 h-12 bg-[#3C096C]/20 border border-[#7B2CBF]/20 rounded-2xl flex items-center justify-center text-xs font-black text-[#E0AAFF] hover:bg-[#7B2CBF] transition-all duration-300 shadow-xl"
                >
                  {soc.name}
                </motion.a>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest font-black text-[#E0AAFF]/40">Newsletter</p>
              <div className="flex h-12">
                <input 
                  type="email" 
                  placeholder="Email anda" 
                  className="flex-1 px-5 bg-[#3C096C]/10 border border-[#7B2CBF]/20 rounded-l-2xl text-sm text-[#E0AAFF] focus:outline-none focus:border-[#7B2CBF] placeholder:text-[#E0AAFF]/20"
                />
                <button className="px-5 bg-[#7B2CBF] text-[#E0AAFF] rounded-r-2xl hover:bg-[#3C096C] transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-10 border-t border-[#7B2CBF]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-[#E0AAFF]/30 tracking-widest uppercase order-2 md:order-1">
              © {currentYear} CNZ TECHNOLOGY NUSANTARA. CRAFTED FOR EXCELLENCE.
            </p>
            
            <div className="flex gap-10 order-1 md:order-2">
              <Link href="/privacy" className="text-[10px] font-black text-[#E0AAFF]/30 hover:text-[#7B2CBF] tracking-widest uppercase transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-[10px] font-black text-[#E0AAFF]/30 hover:text-[#7B2CBF] tracking-widest uppercase transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;