"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const layanan = [
  {
    title: "Pembuatan Website",
    desc: "Website profesional, cepat, dan mobile-friendly untuk company profile, landing page, atau toko online. Dari desain hingga peluncuran.",
    icon: "🌐",
    highlight: "from-[#CBD83B]/20 to-[#A88AED]/20",
  },
  {
    title: "Branding & Identitas",
    desc: "Logo, panduan merek, dan aset visual yang konsisten agar bisnis Anda mudah dikenali dan terpercaya.",
    icon: "🎨",
    highlight: "from-[#A88AED]/20 to-[#CBD83B]/20",
  },
  {
    title: "UI/UX Design",
    desc: "Desain antarmuka yang nyaman digunakan dan fokus pada pengalaman pengguna untuk konversi lebih baik.",
    icon: "✨",
    highlight: "from-[#CBD83B]/20 to-[#A88AED]/20",
  },
  {
    title: "Maintenance & Support",
    desc: "Update konten, perbaikan bug, backup, dan dukungan teknis agar website Anda tetap aman dan up to date.",
    icon: "🔧",
    highlight: "from-[#A88AED]/20 to-[#CBD83B]/20",
  },
  {
    title: "Optimasi & SEO",
    desc: "Optimasi kecepatan, struktur konten, dan dasar SEO agar website mudah ditemukan di mesin pencari.",
    icon: "📈",
    highlight: "from-[#CBD83B]/20 to-[#A88AED]/20",
  },
  {
    title: "Konsultasi Digital",
    desc: "Rekomendasi strategi digital sesuai kebutuhan bisnis Anda—mulai dari channel hingga prioritas pengembangan.",
    icon: "💬",
    highlight: "from-[#A88AED]/20 to-[#CBD83B]/20",
  },
];

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-[#FFFEEC] text-[#212F3D]">
      <Navbar />

      <main className="pt-24 pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFEEC] via-white to-[#FFFEEC] py-20 md:py-28">
          <div className="absolute top-20 right-0 w-80 h-80 bg-[#A88AED]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#CBD83B]/20 rounded-full blur-3xl" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container relative z-10 mx-auto max-w-4xl px-4 text-center"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block rounded-full bg-[#A88AED] px-5 py-2 text-sm font-bold tracking-wider text-white"
            >
              LAYANAN KAMI
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-black tracking-tight text-[#212F3D] md:text-5xl lg:text-6xl"
            >
              Layanan{" "}
              <span className="bg-gradient-to-r from-[#CBD83B] to-[#A88AED] bg-clip-text text-transparent">
                Digital
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
            >
              Solusi lengkap dari website, branding, hingga dukungan teknis—disesuaikan dengan kebutuhan bisnis Anda.
            </motion.p>
          </motion.div>
        </section>

        {/* Daftar Layanan */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {layanan.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl border border-white/80"
                >
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.highlight} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-hidden
                  />
                  <div className="relative">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="mt-5 text-xl font-bold text-[#212F3D]">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proses Kerja (opsional) */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center text-3xl font-bold text-[#212F3D] md:text-4xl"
            >
              Cara Kami Bekerja
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Konsultasi & Brief",
                  desc: "Kami dengarkan kebutuhan, target, dan preferensi Anda.",
                },
                {
                  step: "02",
                  title: "Proposal & Timeline",
                  desc: "Anda terima penawaran dan jadwal pengerjaan yang jelas.",
                },
                {
                  step: "03",
                  title: "Desain & Development",
                  desc: "Pengerjaan berjalan dengan update berkala.",
                },
                {
                  step: "04",
                  title: "Review & Launch",
                  desc: "Revisi sesuai feedback, lalu peluncuran dan serah terima.",
                },
              ].map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-6 rounded-2xl bg-white/80 p-6 shadow-md border border-[#CBD83B]/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#CBD83B] to-[#A88AED] text-sm font-bold text-[#212F3D]">
                    {phase.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#212F3D]">
                      {phase.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-gradient-to-r from-[#CBD83B]/20 via-[#A88AED]/20 to-[#CBD83B]/20 p-10 md:p-14 border border-[#A88AED]/20"
            >
              <h2 className="text-2xl font-bold text-[#212F3D] md:text-3xl">
                Tertarik dengan Layanan Kami?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-600">
                Ceritakan kebutuhan Anda—kami siap membantu dari konsultasi hingga eksekusi.
              </p>
              <Link
                href="/"
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#CBD83B] to-[#A88AED] px-8 py-4 font-bold text-[#212F3D] shadow-lg transition hover:opacity-90"
              >
                Mulai Konsultasi
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
