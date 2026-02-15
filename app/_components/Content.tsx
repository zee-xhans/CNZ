"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContentSection = () => {
      const features = [
            { title: "Mobile Friendly", icon: "📱" },
            { title: "Website Cepat & Stabil", icon: "⚡" },
            { title: "Website Terima Beres", icon: "✅" },
      ];

      // Ref & scroll progress untuk animasi mockup HP
      const mockupRef = useRef<HTMLDivElement | null>(null);
      const { scrollYProgress } = useScroll({
            target: mockupRef,
            offset: ["start 0.9", "end 0.1"],
      });

      // Muncul dari atas ke bawah saat scroll turun, dan menghilang lagi saat scroll naik
      const mockupY = useTransform(scrollYProgress, [0, 1], [-80, 40]);
      const mockupOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.5, 1, 1]);

      return (
            <section className="relative pt-24 pb-0 bg-white overflow-hidden text-[#212F3D]">
                  <div className="container mx-auto px-6 relative z-10">

                        {/* Header Section */}
                        <div className="text-center max-w-4xl mx-auto mb-20">
                              <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl md:text-5xl font-black leading-tight tracking-tighter"
                              >
                                    Jasa Pembuatan <span className="bg-[#212F3D] text-white px-3 py-1 rounded-lg">Website Profesional</span> Terbaik <br /> untuk Bisnis Anda!
                              </motion.h2>

                              <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="mt-8 border border-gray-300 px-8 py-2 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:bg-gray-50 transition-all text-sm shadow-sm"
                              >
                                    <span>💬</span> Konsultasi Sekarang
                              </motion.button>
                        </div>

                        {/* Main Content Layout */}
                        <div className="flex flex-col lg:flex-row items-end justify-between gap-4 lg:gap-8">

                              {/* SISI KIRI: Bintang di Atas Angka, Teks di Sampingnya (Tengah antara Angka & HP) */}
                              <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="hidden lg:flex items-end gap-4 mb-28 flex-1"
                              >
                                    {/* Kolom Angka & Bintang */}
                                    <div className="flex flex-col items-start">
                                          <div className="flex text-yellow-500 text-sm mb-1 tracking-tighter">
                                                ★★★★★
                                          </div>
                                          <h3 className="text-6xl font-black text-[#212F3D] leading-[0.8] tracking-tighter">
                                                23+
                                          </h3>
                                    </div>

                                    {/* Teks Kepercayaan (Posisinya di tengah antara Angka dan Mockup HP nanti) */}
                                    <div className="border-l border-gray-200 pl-4 mb-1">
                                          <p className="text-[10px] font-bold text-gray-400 tracking-widest leading-[1.3] uppercase">
                                                SUDAH DIPERCAYA<br />
                                                OLEH BANYAK<br />
                                                KLIEN
                                          </p>
                                    </div>
                              </motion.div>

                              {/* TENGAH: Mockup HP Terpotong (animasi dua arah saat scroll) */}
                              <motion.div
                                    ref={mockupRef}
                                    style={{ y: mockupY, opacity: mockupOpacity, willChange: "transform, opacity" }}
                                    className="relative flex justify-center flex-1"
                              >
                                    <div className="relative w-[300px] md:w-[350px] h-[450px] bg-white border-[12px] border-[#212F3D] border-b-0 rounded-t-[3.5rem] shadow-[0_-15px_50px_rgba(0,0,0,0.1)] overflow-hidden">
                                          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#212F3D] rounded-full"></div>
                                          <div className="p-8 pt-20 bg-gray-50/50 h-full space-y-4">
                                                <div className="w-full h-32 bg-white rounded-2xl shadow-sm border border-gray-100"></div>
                                                <div className="w-3/4 h-3 bg-gray-200 rounded-full"></div>
                                          </div>
                                    </div>
                              </motion.div>

                              {/* SISI KANAN: List Fitur Capsule */}
                              <div className="flex flex-col gap-3 mb-28 flex-1 items-start lg:items-end">
                                    {features.map((f, i) => (
                                          <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3 bg-gray-100/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-gray-200 group hover:bg-[#212F3D] transition-all duration-500"
                                          >
                                                <div className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:bg-white/10 transition-colors">
                                                      <span className="text-lg group-hover:scale-110 transition-transform">{f.icon}</span>
                                                </div>
                                                <span className="font-bold text-xs md:text-sm text-[#212F3D] group-hover:text-white transition-colors">
                                                      {f.title}
                                                </span>
                                          </motion.div>
                                    ))}
                              </div>

                        </div>
                  </div>

                  <div className="h-3 bg-[#212F3D] w-full"></div>
            </section>
      );
};

export default ContentSection;