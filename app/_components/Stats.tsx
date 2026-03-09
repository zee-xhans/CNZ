"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const StatCard = ({ item, index }: { item: any, index: number }) => {
      const ref = useRef(null);

      // 1. Ambil progress scroll khusus untuk section ini
      const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start 0.9", "end 0.2"]
      });

      // 2. Logika ekstraksi angka
      const numericValue = parseInt(item.value.replace(/[^0-9]/g, ""));
      const suffix = item.value.replace(/[0-9]/g, "");

      // 3. Transformasi progress scroll menjadi angka
      const rawNumber = useTransform(scrollYProgress, [0, 0.7], [0, numericValue]);

      // 4. Spring animation agar angka tidak "melompat"
      const smoothNumber = useSpring(rawNumber, {
            stiffness: 80,
            damping: 25,
      });

      // 5. Ubah angka menjadi teks dengan suffix
      const displayValue = useTransform(smoothNumber, (latest) =>
            Math.round(latest) + suffix
      );

      return (
            <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  // Perbaikan UI: Glassmorphism Gelap
                  className="relative group p-10 rounded-[3rem] border border-[#7B2CBF]/20 bg-[#3C096C]/10 backdrop-blur-md hover:border-[#7B2CBF]/50 transition-all duration-500 shadow-2xl overflow-hidden"
            >
                  <div className="relative z-10 space-y-4">
                        {/* Angka Utama: Menggunakan Soft Lavender */}
                        <h2 className="text-6xl lg:text-7xl font-black text-[#E0AAFF] tracking-tighter">
                              <motion.span>{displayValue}</motion.span>
                        </h2>

                        <div className="space-y-3">
                              <p className="text-[#7B2CBF] font-black text-xs uppercase tracking-[0.25em]">
                                    {item.label}
                              </p>
                              {/* Garis Dekoratif: Bright Violet */}
                              <div className="w-12 h-[3px] bg-[#7B2CBF]/30 group-hover:w-24 group-hover:bg-[#7B2CBF] transition-all duration-500 rounded-full"></div>
                              <p className="text-[#E0AAFF]/60 text-sm font-medium leading-relaxed italic">
                                    {item.sub}
                              </p>
                        </div>
                  </div>

                  {/* Efek Cahaya saat Hover (Radial Glow) */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </motion.div>
      );
};

const Stats = () => {
      const data = [
            { value: "50+", label: "Projects Completed", sub: "Solusi digital skala nasional" },
            { value: "99%", label: "Client Satisfaction", sub: "Berdasarkan review mitra" },
            { value: "98%", label: "On-Time Delivery", sub: "Ketepatan waktu pengerjaan" },
      ];

      return (
            <section className="relative py-32 bg-[#10002B] overflow-hidden">
                  {/* Dekorasi Background: Deep Obsidian & Purple Glow */}
                  <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3C096C]/20 blur-[150px] rounded-full"></div>
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                        {/* Heading Tambahan untuk Konteks UX */}
                        <div className="text-center mb-20 space-y-4">
                              <motion.h3 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="text-[#7B2CBF] font-bold tracking-widest text-xs uppercase"
                              >
                                    Our Track Record
                              </motion.h3>
                              <motion.h2 
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="text-4xl md:text-5xl font-black text-[#E0AAFF]"
                              >
                                    Kepercayaan dalam <span className="text-[#7B2CBF]">Angka</span>
                              </motion.h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {data.map((item, index) => (
                                    <StatCard key={index} item={item} index={index} />
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Stats;