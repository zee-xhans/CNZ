"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
      // Variabel animasi untuk efisiensi (reusable)
      const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            },
            exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
      };

      const itemVariants = {
            hidden: { opacity: 0, y: 30 },
            visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as any }
            }
      };

      return (
            <section className="relative min-h-screen flex items-center pb-12 overflow-hidden bg-[#FFFEEC]">
                  {/* Background Decor - Gunakan opacity rendah agar ringan dirender */}
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#CBD83B]/12 via-[#A88AED]/12 to-[#FFFEEC]/14 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

                  <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                        style={{ willChange: "transform, opacity" }} // Mengaktifkan GPU
                        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
                  >

                        {/* SISI KIRI: Konten Teks */}
                        <div className="space-y-8 text-center lg:text-left">
                              <div className="space-y-4">
                                    <motion.p
                                          variants={itemVariants}
                                          className="text-black font-bold tracking-[0.2em] text-xs uppercase italic"
                                    >
                                          Digital Solution & Creative Agency
                                    </motion.p>

                                    <motion.h1
                                          variants={itemVariants}
                                          className="text-5xl lg:text-[68px] font-black text-black leading-[1.1] tracking-tighter"
                                    >
                                          Transform Your <br />
                                          <span>Business Concept.</span>
                                    </motion.h1>
                              </div>

                              <motion.p
                                    variants={itemVariants}
                                    className="text-gray-700 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
                              >
                                    Kami membantu Anda membangun kredibilitas melalui <span className="text-black">Jasa Website & Aplikasi Mobile</span> dengan standar desain kelas dunia.
                              </motion.p>

                              <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-2"
                              >
                                    <Link href="#contact">
                                          <button className="bg-[#CBD83B] text-[#212F3D] px-10 py-4 rounded-2xl font-bold transition-all hover:bg-[#A88AED] hover:text-[#FFFEEC] active:scale-95 shadow-xl shadow-[#CBD83B]/40">
                                                Konsultasi Gratis
                                          </button>
                                    </Link>
                                    <Link href="/portfolio" className="group text-black font-medium flex items-center gap-2 hover:text-[#A88AED] transition-all">
                                          See Our Work
                                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </Link>
                              </motion.div>
                        </div>

                        {/* SISI KANAN: Mockup HP */}
                        <motion.div
                              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                              viewport={{ once: false, amount: 0.2 }}
                              transition={{ duration: 1, ease: "circOut" }}
                              style={{ willChange: "transform" }}
                              className="relative flex justify-center lg:justify-end"
                        >
                              {/* Bayangan Dasar */}
                              

                              {/* Container HP dengan CSS Animation (Float) yang Ringan */}
                              <div className="relative  md:w-[280px] aspect-[9/19] rounded-[2.8rem] p-2">
                                    
                                          <Image
                                                src="/mockup-screen.png"
                                                alt="Project Preview"
                                                fill
                                                className="object-cover"
                                                priority // Penting untuk LCP (performa load awal)
                                                sizes="(max-width: 768px) 260px, 280px"
                                          />
                            

                                    {/* Aksen UX Focused */}
                                    <motion.div
                                          initial={{ x: 20, opacity: 0 }}
                                          whileInView={{ x: 0, opacity: 1 }}
                                          transition={{ delay: 0.8 }}
                                          className="absolute top-1/2 -right-8 -translate-y-1/2 bg-[#212F3D] border border-white/10 px-4 py-3 rounded-2xl shadow-2xl hidden md:block"
                                    >
                                          <p className="text-white font-bold text-sm tracking-tighter">UX Focused</p>
                                          <div className="w-8 h-1 bg-[#CBD83B] rounded-full mt-1"></div>
                                    </motion.div>
                              </div>
                        </motion.div>

                  </motion.div>
            </section>
      );
};

export default Hero;