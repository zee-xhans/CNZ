"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
      const [openIndex, setOpenIndex] = useState<number | null>(0);

      const faqs = useMemo(() => [
            { q: "Berapa lama waktu pengerjaan website?", a: "Pengerjaan standar biasanya memakan waktu 7-14 hari kerja, tergantung pada kompleksitas fitur dan kesiapan konten dari pihak klien." },
            { q: "Teknologi apa yang digunakan?", a: "Kami menggunakan stack modern seperti Next.js, Tailwind CSS, dan Framer Motion untuk memastikan website cepat, SEO-friendly, dan interaktif." },
            { q: "Apakah website sudah termasuk hosting dan domain?", a: "Ya, paket profesional kami sudah termasuk biaya pendaftaran domain (.com/.id) dan cloud hosting premium untuk tahun pertama." },
            { q: "Apakah saya bisa mengelola konten sendiri?", a: "Tentu! Kami menyediakan Dashboard CMS (Content Management System) yang user-friendly sehingga Anda bisa mengubah teks dan gambar dengan mudah." },
            { q: "Bagaimana dengan layanan purna jual (maintenance)?", a: "Kami memberikan garansi maintenance selama 3 bulan untuk perbaikan bug dan update minor guna menjaga performa website Anda tetap optimal." },
      ], []);

      return (
            <section className="relative py-24 bg-[#10002B] overflow-hidden">
                  {/* Deep Glow Background */}
                  <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#3C096C]/10 blur-[150px] rounded-full"></div>
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

                              {/* KIRI: Konten Teks & Deskripsi */}
                              <div className="w-full lg:w-1/3">
                                    <motion.div
                                          initial={{ opacity: 0, x: -20 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true }}
                                          className="sticky top-32"
                                    >
                                          <h2 className="text-4xl md:text-5xl font-black text-[#E0AAFF] leading-tight mb-6 tracking-tight">
                                                Punya <br />
                                                <span className="text-[#7B2CBF]">Pertanyaan?</span>
                                          </h2>
                                          <p className="text-[#E0AAFF]/60 text-lg leading-relaxed mb-10 font-medium">
                                                Kami merangkum beberapa pertanyaan yang paling sering diajukan untuk membantu Anda memahami layanan kami lebih baik.
                                          </p>

                                          {/* Box Bantuan Glassmorphism */}
                                          <div className="p-8 rounded-[2rem] bg-[#3C096C]/10 border border-[#7B2CBF]/20 backdrop-blur-md shadow-2xl">
                                                <p className="text-[#E0AAFF] font-black mb-3 text-sm tracking-wide uppercase">Masih bingung?</p>
                                                <p className="text-[#E0AAFF]/50 text-sm mb-6 leading-relaxed">Konsultasikan ide Anda secara gratis dengan tim ahli kami.</p>
                                                <button className="text-[#7B2CBF] font-black text-sm hover:text-[#E0AAFF] transition-all flex items-center gap-2 group">
                                                      Hubungi via WhatsApp <span className="group-hover:translate-x-1 transition-transform">→</span>
                                                </button>
                                          </div>
                                    </motion.div>
                              </div>

                              {/* KANAN: Accordion List (Dark Glass Style) */}
                              <div className="w-full lg:w-2/3 space-y-5">
                                    {faqs.map((faq, index) => (
                                          <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`group rounded-[1.8rem] border transition-all duration-500 backdrop-blur-sm ${openIndex === index
                                                            ? 'bg-[#3C096C]/10 border-[#7B2CBF]/40 shadow-[0_10px_40px_rgba(0,0,0,0.4)]'
                                                            : 'bg-[#3C096C]/5 border-[#7B2CBF]/10 hover:border-[#7B2CBF]/30'
                                                      }`}
                                          >
                                                <button
                                                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                                      className="w-full p-7 text-left flex justify-between items-center outline-none"
                                                >
                                                      <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-[#E0AAFF]' : 'text-[#E0AAFF]/60 group-hover:text-[#E0AAFF]'
                                                            }`}>
                                                            {faq.q}
                                                      </span>

                                                      {/* Icon Indikator (Minimalis & Modern) */}
                                                      <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-[#7B2CBF] rotate-180' : 'bg-[#3C096C]/30'
                                                            }`}>
                                                            <div className={`absolute w-3.5 h-0.5 bg-current transition-colors ${openIndex === index ? 'text-[#E0AAFF]' : 'text-[#7B2CBF]'
                                                                  }`}></div>
                                                            <div className={`absolute w-0.5 h-3.5 bg-current transition-all ${openIndex === index ? 'text-[#E0AAFF] opacity-0 scale-0' : 'text-[#7B2CBF] opacity-100'
                                                                  }`}></div>
                                                      </div>
                                                </button>

                                                <AnimatePresence>
                                                      {openIndex === index && (
                                                            <motion.div
                                                                  initial={{ height: 0, opacity: 0 }}
                                                                  animate={{ height: "auto", opacity: 1 }}
                                                                  exit={{ height: 0, opacity: 0 }}
                                                                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                            >
                                                                  <div className="px-7 pb-7">
                                                                        <div className="pt-5 border-t border-[#7B2CBF]/10 text-[#E0AAFF]/60 leading-relaxed text-base md:text-lg font-medium italic">
                                                                              {faq.a}
                                                                        </div>
                                                                  </div>
                                                            </motion.div>
                                                      )}
                                                </AnimatePresence>
                                          </motion.div>
                                    ))}
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default FAQ;