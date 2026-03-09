"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  // Variabel animasi yang lebih halus
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-[#10002B]">
      
      {/* 1. PENINGKATAN BACKGROUND (Glow yang lebih dinamis) */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#7B2CBF]/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#3C096C]/30 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Pattern Grid Halus untuk kesan Tech */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#E0AAFF 1px, transparent 1px), linear-gradient(90deg, #E0AAFF 1px, transparent 1px)`, size: '40px 40px', backgroundSize: '40px 40px' }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10"
      >
        {/* SISI KIRI: Konten Teks (Span 7 kolom untuk ruang lebih luas) */}
        <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3C096C]/30 border border-[#7B2CBF]/30 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7B2CBF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B2CBF]"></span>
              </span>
              <p className="text-[#E0AAFF] font-bold tracking-widest text-[10px] uppercase">
                Digital Solution & Creative Agency
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-[72px] font-extrabold text-[#E0AAFF] leading-[1.05] tracking-tight"
            >
              Wujudkan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#E0AAFF]">Bisnis Digital</span> <br />
              Impian Anda.
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-[#E0AAFF]/70 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Kami menggabungkan strategi cerdas dan desain memukau untuk membangun 
            <span className="text-[#E0AAFF] font-semibold"> Website & Mobile Apps</span> yang mengubah pengunjung menjadi pelanggan setia.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
          >
            <Link href="#contact">
              <button className="group relative bg-[#7B2CBF] hover:bg-[#3C096C] text-[#E0AAFF] px-10 py-4 rounded-2xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(123,44,191,0.3)] hover:shadow-[0_0_30px_rgba(123,44,191,0.5)] active:scale-95 overflow-hidden">
                <span className="relative z-10">Konsultasi Gratis</span>
                <div className="absolute inset-0 bg-white/10 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
            <Link href="/portfolio" className="group text-[#E0AAFF] font-semibold flex items-center gap-3 py-2">
              <span className="border-b border-transparent group-hover:border-[#7B2CBF] transition-all">Lihat Portfolio</span>
              <div className="w-8 h-8 rounded-full border border-[#7B2CBF]/30 flex items-center justify-center group-hover:bg-[#7B2CBF] group-hover:text-white transition-all">
                <span className="text-lg">→</span>
              </div>
            </Link>
          </motion.div>
          
          {/* Stats Section dengan Desain Lebih Clean */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-10 pt-4 border-t border-[#E0AAFF]/10"
          >
            {[
              { label: "Project Selesai", val: "50+" },
              { label: "Klien Puas", val: "30+" },
              { label: "Rating Client", val: "4.9" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <p className="text-3xl font-black text-[#E0AAFF] group-hover:text-[#7B2CBF] transition-colors">{stat.val}</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#E0AAFF]/50 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* SISI KANAN: Mockup HP (Span 5 kolom) */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Efek Lingkaran Cahaya di Belakang HP */}
          <div className="absolute w-[120%] h-[120%] bg-[#7B2CBF]/10 rounded-full blur-3xl" />
          
          <div className="relative group">
            {/* Main Phone Frame */}
            <div className="relative w-[280px] md:w-[310px] aspect-[9/19.5] rounded-[3rem] p-3 border-[6px] border-[#3C096C] bg-[#10002B] shadow-[0_0_50px_rgba(0,0,0,0.5)] z-20 overflow-hidden transform group-hover:rotate-[-2deg] transition-transform duration-500">
              <Image
                src="/mockup-screen.png"
                alt="Project Preview"
                fill
                className="object-cover p-1 rounded-[2.5rem]"
                priority
              />
            </div>

            {/* Floating UI Elements (UX Improvement: Lebih Kontekstual) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-[20%] z-30 bg-[#3C096C]/80 backdrop-blur-xl border border-[#7B2CBF]/50 p-4 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7B2CBF] flex items-center justify-center text-white">⭐</div>
                <div>
                  <p className="text-[10px] text-[#E0AAFF]/60 uppercase font-bold">Client Success</p>
                  <p className="text-[#E0AAFF] font-bold text-sm">+120% Revenue</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 bottom-[15%] z-30 bg-[#10002B]/90 backdrop-blur-xl border border-[#7B2CBF]/50 p-4 rounded-2xl shadow-2xl hidden md:block"
            >
               <p className="text-[#7B2CBF] font-black text-xl mb-1">99.9%</p>
               <p className="text-[#E0AAFF]/70 text-[10px] leading-tight font-medium uppercase tracking-tighter">Uptime & <br/> Performance</p>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;