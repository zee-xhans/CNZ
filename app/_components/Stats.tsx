"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const StatCard = ({ item, index }: { item: any, index: number }) => {
      const ref = useRef(null);

      // 1. Ambil progress scroll khusus untuk section ini
      // offset: ["start end", "end start"] artinya dari mulai muncul di bawah sampai hilang di atas
      const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start 0.9", "end 0.1"]
      });

      // 2. Ambil angka dari string (misal "23+" -> 23)
      const numericValue = parseInt(item.value.replace(/[^0-9]/g, ""));
      const suffix = item.value.replace(/[0-9]/g, "");

      // 3. Transformasi progress scroll (0 sampai 1) menjadi angka (0 sampai numericValue)
      const rawNumber = useTransform(scrollYProgress, [0, 0.6], [0, numericValue]);

      // 4. Buat gerakannya halus (smooth)
      const smoothNumber = useSpring(rawNumber, {
            stiffness: 100,
            damping: 30,
            restDelta: 0.001
      });

      // 5. Ubah angka menjadi teks dengan suffix (+ atau %)
      const displayValue = useTransform(smoothNumber, (latest) =>
            Math.round(latest) + suffix
      );

      return (
            <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group p-10 rounded-[2.5rem] border border-black/5 bg-gradient-to-b from-white to-[#FFFEEC] hover:border-[#A88AED]/40 transition-all duration-500 shadow-xl"
            >
                  <div className="space-y-4">
                        {/* Angka yang TERIKAT dengan scroll user */}
                        <h2 className="text-6xl lg:text-7xl font-black text-black tracking-tighter">
                              <motion.span>{displayValue}</motion.span>
                        </h2>

                        <div className="space-y-2">
                              <p className="text-[#A88AED] font-bold text-sm uppercase tracking-[0.2em]">
                                    {item.label}
                              </p>
                              <div className="w-12 h-[2px] bg-black/10 group-hover:w-20 group-hover:bg-[#CBD83B] transition-all duration-500"></div>
                              <p className="text-gray-600 text-sm font-medium leading-relaxed italic">
                                    {item.sub}
                              </p>
                        </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-b from-[#CBD83B]/6 via-[#A88AED]/4 to-[#FFFEEC]/0 opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
      );
};

const Stats = () => {
      const data = [
            { value: "23+", label: "Projects Completed", sub: "Solusi digital terkirim" },
            { value: "99%", label: "Client Satisfaction", sub: "Feedback positif" },
            { value: "98%", label: "On-Time Delivery", sub: "Komitmen waktu" },
      ];

      return (
            <section className="relative py-24 bg-[#FFFEEC] overflow-hidden">
                  {/* Dekorasi Background selaras dengan Hero */}
                  <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#CBD83B]/10 via-[#A88AED]/10 to-[#FFFEEC]/0 blur-[120px]"></div>
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                              {data.map((item, index) => (
                                    <StatCard key={index} item={item} index={index} />
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default Stats;