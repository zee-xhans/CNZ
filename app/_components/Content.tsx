"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ContentSection = () => {
      const features = [
            { title: "Mobile Friendly", icon: "📱" },
            { title: "Website Cepat & Stabil", icon: "⚡" },
            { title: "Website Terima Beres", icon: "✅" },
      ];

      const mockupRef = useRef<HTMLDivElement | null>(null);
      const { scrollYProgress } = useScroll({
            target: mockupRef,
            offset: ["start 0.9", "end 0.1"],
      });

      const mockupY = useTransform(scrollYProgress, [0, 1], [-40, 60]);
      const mockupOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

      return (
            <section className="relative pt-32 pb-0 bg-[#10002B] overflow-hidden text-[#E0AAFF]">
                  {/* Efek Glow Background */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.05),transparent_70%)] pointer-events-none" />

                  <div className="container mx-auto px-6 relative z-10">
                        {/* Header Section */}
                        <div className="text-center max-w-4xl mx-auto mb-20">
                              <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter"
                              >
                                    Jasa Pembuatan <span className="text-[#7B2CBF] inline-block">Website Profesional</span> <br /> 
                                    Terbaik Untuk <span className="italic">Bisnis Anda.</span>
                              </motion.h2>

                              <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(123,44,191,0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-10 border border-[#7B2CBF]/40 bg-[#3C096C]/20 px-10 py-4 rounded-2xl font-bold flex items-center gap-3 mx-auto hover:bg-[#3C096C]/40 transition-all text-sm backdrop-blur-sm"
                              >
                                    <span className="text-lg">💬</span> Konsultasi Sekarang
                              </motion.button>
                        </div>

                        {/* Main Content Layout */}
                        <div className="flex flex-col lg:grid lg:grid-cols-3 items-end justify-between gap-12 lg:gap-8">

                              {/* SISI KIRI: Review & Kepercayaan */}
                              <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="hidden lg:flex items-end gap-6 mb-28"
                              >
                                    <div className="flex flex-col items-start">
                                          <div className="flex text-[#7B2CBF] text-xs mb-2 tracking-widest">
                                                ★★★★★
                                          </div>
                                          <h3 className="text-7xl font-black text-[#E0AAFF] leading-none tracking-tighter">
                                                50+
                                          </h3>
                                    </div>

                                    <div className="border-l border-[#7B2CBF]/30 pl-6 mb-1">
                                          <p className="text-[11px] font-black text-[#E0AAFF]/50 tracking-[0.2em] leading-relaxed uppercase">
                                                SUDAH DIPERCAYA<br />
                                                OLEH BERBAGAI<br />
                                                SEKTOR INDUSTRI
                                          </p>
                                    </div>
                              </motion.div>

                              {/* TENGAH: Mockup HP Terpotong */}
                              <motion.div
                                    ref={mockupRef}
                                    style={{ y: mockupY, opacity: mockupOpacity, willChange: "transform, opacity" }}
                                    className="relative flex justify-center w-full"
                              >
                                    <div className="relative w-[300px] md:w-[380px] h-[480px] bg-[#10002B] border-[10px] border-[#3C096C] border-b-0 rounded-t-[3.5rem] shadow-[0_-20px_80px_rgba(60,9,108,0.3)] overflow-hidden">
                                          {/* Notch */}
                                          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#3C096C] rounded-full"></div>
                                          
                                          {/* Konten Dummy di Dalam HP */}
                                          <div className="p-8 pt-20 bg-gradient-to-b from-[#3C096C]/10 to-transparent h-full space-y-6">
                                                <div className="w-full h-40 bg-[#3C096C]/20 rounded-3xl border border-[#7B2CBF]/20 animate-pulse"></div>
                                                <div className="space-y-3">
                                                      <div className="w-3/4 h-3 bg-[#E0AAFF]/20 rounded-full"></div>
                                                      <div className="w-1/2 h-3 bg-[#E0AAFF]/10 rounded-full"></div>
                                                </div>
                                          </div>
                                    </div>
                              </motion.div>

                              {/* SISI KANAN: List Fitur Capsule */}
                              <div className="flex flex-col gap-4 mb-28 items-start lg:items-end w-full">
                                    {features.map((f, i) => (
                                          <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: 30 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-4 bg-[#3C096C]/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-[#7B2CBF]/20 group hover:border-[#7B2CBF]/60 transition-all duration-500 w-full lg:w-auto"
                                          >
                                                <div className="w-10 h-10 flex items-center justify-center bg-[#10002B] rounded-xl border border-[#7B2CBF]/30 group-hover:scale-110 transition-transform">
                                                      <span className="text-xl">{f.icon}</span>
                                                </div>
                                                <span className="font-bold text-sm md:text-base text-[#E0AAFF] tracking-tight">
                                                      {f.title}
                                                </span>
                                          </motion.div>
                                    ))}
                              </div>

                        </div>
                  </div>

                  {/* Border Bawah Tebal */}
                  <div className="h-4 bg-gradient-to-r from-[#10002B] via-[#7B2CBF] to-[#10002B] w-full"></div>
            </section>
      );
};

export default ContentSection;