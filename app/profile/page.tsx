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
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const values = [
  {
    title: "Inovasi",
    desc: "Selalu mengikuti teknologi terbaru untuk solusi yang relevan dan berdaya saing.",
    icon: "💡",
  },
  {
    title: "Kualitas",
    desc: "Fokus pada hasil terbaik dan kepuasan klien dalam setiap proyek.",
    icon: "✨",
  },
  {
    title: "Kolaborasi",
    desc: "Bekerja sama dengan klien sebagai partner untuk mencapai tujuan bisnis.",
    icon: "🤝",
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#FFFEEC] text-[#212F3D]">
      <Navbar />

      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFEEC] via-white to-[#FFFEEC] py-20 md:py-28">
          <div className="absolute top-20 right-0 w-80 h-80 bg-[#CBD83B]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#A88AED]/20 rounded-full blur-3xl" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="container relative z-10 mx-auto max-w-4xl px-4 text-center"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block rounded-full bg-[#CBD83B] px-5 py-2 text-sm font-bold tracking-wider text-[#212F3D]"
            >
              TENTANG KAMI
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-black tracking-tight text-[#212F3D] md:text-5xl lg:text-6xl"
            >
              CnZ{" "}
              <span className="bg-gradient-to-r from-[#CBD83B] to-[#A88AED] bg-clip-text text-transparent">
                Technology
              </span>{" "}
              Nusantara
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
            >
              Digital agency yang fokus pada solusi web, branding, dan kreatif untuk mendorong pertumbuhan bisnis Anda.
            </motion.p>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-white p-8 shadow-xl md:p-12 lg:p-16"
            >
              <h2 className="mb-8 text-3xl font-bold text-[#212F3D] md:text-4xl">
                Siapa Kami
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  CnZ Technology Nusantara adalah digital agency dan creative agency yang hadir untuk mendampingi bisnis dalam transformasi digital. Kami menggabungkan strategi kreatif dengan teknologi mutakhir untuk menghasilkan website, branding, dan konten yang tidak hanya menarik secara visual, tetapi juga mendukung tujuan bisnis Anda.
                </p>
                <p>
                  Dari pembuatan website yang cepat dan stabil, desain identitas merek, hingga layanan maintenance dan dukungan—kami siap menjadi partner Anda dalam mengembangkan kehadiran digital yang profesional dan berdampak.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-gradient-to-br from-[#CBD83B]/20 to-[#A88AED]/20 p-8 md:p-10 border border-[#CBD83B]/30"
              >
                <div className="mb-6 text-4xl">🎯</div>
                <h3 className="mb-4 text-2xl font-bold text-[#212F3D]">
                  Visi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi mitra digital terpercaya bagi UMKM dan perusahaan dalam mewujudkan solusi digital yang inovatif, berkualitas, dan berkelanjutan.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-gradient-to-br from-[#A88AED]/20 to-[#CBD83B]/20 p-8 md:p-10 border border-[#A88AED]/30"
              >
                <div className="mb-6 text-4xl">🚀</div>
                <h3 className="mb-4 text-2xl font-bold text-[#212F3D]">
                  Misi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Memberikan layanan website, branding, dan kreatif yang terstruktur, transparan, dan berorientasi hasil—dengan dukungan penuh dari tim yang berkomitmen pada kualitas dan kepuasan klien.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center text-3xl font-bold text-[#212F3D] md:text-4xl"
            >
              Nilai Kami
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl bg-white p-8 shadow-lg border border-white/50"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-[#212F3D]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
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
                Siap Bekerja Sama?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-600">
                Mari wujudkan ide digital Anda bersama kami.
              </p>
              <Link
                href="/"
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#CBD83B] to-[#A88AED] px-8 py-4 font-bold text-[#212F3D] shadow-lg transition hover:opacity-90"
              >
                Hubungi Kami
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
