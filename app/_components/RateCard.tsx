"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const rateItems = [
  {
    title: "Pembuatan Website",
    desc: "Company profile, landing page, atau toko online.",
    price: "Rp 3.500.000",
    icon: "🌐",
    features: ["Desain responsif", "Domain & hosting setup", "Serah terima lengkap"],
    highlight: false,
  },
  {
    title: "Branding & Identitas",
    desc: "Logo, panduan merek, dan aset visual.",
    price: "Rp 2.000.000",
    icon: "🎨",
    features: ["Logo + variasi", "Panduan penggunaan", "File siap cetak"],
    highlight: true,
  },
  {
    title: "UI/UX Design",
    desc: "Desain antarmuka dan pengalaman pengguna.",
    price: "Rp 1.500.000",
    icon: "✨",
    features: ["Wireframe", "Prototype", "Handoff ke development"],
    highlight: false,
  },
  {
    title: "Maintenance & Support",
    desc: "Update konten, perbaikan, backup berkala.",
    price: "Rp 500.000/bln",
    icon: "🔧",
    features: ["Update konten", "Backup", "Dukungan prioritas"],
    highlight: false,
  },
  {
    title: "Optimasi & SEO",
    desc: "Optimasi kecepatan dan dasar SEO.",
    price: "Rp 1.000.000",
    icon: "📈",
    features: ["Audit performa", "On-page SEO", "Laporan bulanan"],
    highlight: false,
  },
  {
    title: "Konsultasi Digital",
    desc: "Strategi digital sesuai kebutuhan bisnis.",
    price: "Rp 300.000/sesi",
    icon: "💬",
    features: ["Sesi 1–2 jam", "Rekomendasi tertulis", "Follow-up singkat"],
    highlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function RateCard() {
  const colors = {
    bg: "bg-[#10002B]",
    card: "bg-[#3C096C]/5 border-[#7B2CBF]/15",
    cardHover: "hover:bg-[#3C096C]/15 hover:border-[#7B2CBF]/40",
    textMain: "text-[#E0AAFF]",
    textMuted: "text-[#E0AAFF]/50",
    accent: "text-[#7B2CBF]",
    cta: "bg-[#7B2CBF] text-[#E0AAFF]",
  };

  return (
    <section className={`relative overflow-hidden py-24 md:py-32 ${colors.bg}`}>
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 -right-24 h-[500px] w-[500px] rounded-full bg-[#7B2CBF]/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 -left-24 h-[400px] w-[400px] rounded-full bg-[#3C096C]/20 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3C096C]/30 border border-[#7B2CBF]/30 backdrop-blur-md mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#7B2CBF] animate-ping" />
            <p className="text-[#E0AAFF] font-black tracking-[0.25em] text-[10px] uppercase">
              Pricing Structure
            </p>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-6xl font-black tracking-tighter leading-none ${colors.textMain}`}
          >
            Investasi Untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B2CBF] to-[#E0AAFF]">Masa Depan</span> <br /> Digital Anda.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`mx-auto mt-6 max-w-2xl text-lg md:text-xl font-medium ${colors.textMuted}`}
          >
            Harga kompetitif dengan standar industri tertinggi. Setiap proyek unik, mari bicarakan solusi yang tepat untuk budget Anda.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rateItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group relative flex flex-col rounded-[3rem] border p-8 transition-all duration-500 backdrop-blur-sm ${colors.card} ${colors.cardHover} ${
                item.highlight ? "ring-1 ring-[#7B2CBF]/40 shadow-[0_20px_50px_rgba(60,9,108,0.3)]" : ""
              }`}
            >
              {/* Highlight Badge */}
              {item.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7B2CBF] to-[#3C096C] px-5 py-1.5 rounded-full shadow-xl border border-[#7B2CBF]/30">
                  <span className="text-[10px] font-black text-[#E0AAFF] uppercase tracking-widest">Paling Populer</span>
                </div>
              )}

              {/* Icon Holder */}
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[#3C096C]/20 text-3xl border border-[#7B2CBF]/10 group-hover:scale-110 group-hover:bg-[#7B2CBF]/20 transition-all duration-500">
                {item.icon}
              </div>

              {/* Title & Desc */}
              <div className="mt-8">
                <h3 className={`text-2xl font-black tracking-tight ${colors.textMain}`}>
                  {item.title}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed font-medium ${colors.textMuted}`}>
                  {item.desc}
                </p>
              </div>
              
              {/* Pricing Section */}
              <div className="mt-8 pt-6 border-t border-[#7B2CBF]/10">
                <span className={`text-[10px] uppercase tracking-[0.2em] font-black ${colors.accent}`}>Mulai Dari</span>
                <div className={`text-3xl font-black mt-1 tracking-tighter ${colors.textMain}`}>
                  {item.price.split(' ')[2]} <span className="text-sm font-bold text-[#E0AAFF]/40 ml-1">IDR</span>
                </div>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-4">
                {item.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-semibold text-[#E0AAFF]/80">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7B2CBF]/20 border border-[#7B2CBF]/30">
                      <span className={`text-[10px] ${colors.accent}`}>✓</span>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex-1" />
              
              {/* Button */}
              <Link
                href="/kontak"
                className={`group/btn relative overflow-hidden inline-block w-full rounded-2xl px-6 py-4 text-center text-sm font-black transition-all duration-500 ${colors.cta} shadow-lg shadow-[#7B2CBF]/20 hover:shadow-[#7B2CBF]/40`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Konsultasi Sekarang <span className="text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 translate-y-full bg-white/10 group-hover/btn:translate-y-0 transition-transform duration-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className={`text-center text-xs font-bold tracking-widest uppercase ${colors.textMuted}`}>
            * Harga final ditentukan setelah sesi konsultasi teknis
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#7B2CBF] to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}