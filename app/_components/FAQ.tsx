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
            <section className="relative py-24 bg-[#FFFEEC] overflow-hidden">
                  {/* Soft Glow Background - selaras dengan section lain */}
                  <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#CBD83B]/14 via-[#A88AED]/10 to-transparent blur-[150px] rounded-full"></div>
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-20">

                              {/* KIRI: Konten Teks & Deskripsi */}
                              <div className="w-full lg:w-1/3">
                                    <motion.div
                                          initial={{ opacity: 0, x: -20 }}
                                          whileInView={{ opacity: 1, x: 0 }}
                                          viewport={{ once: true }}
                                          className="sticky top-32"
                                    >
                                          <h2 className="text-4xl md:text-5xl font-black text-black leading-tight mb-6 tracking-tight">
                                                Punya <br />
                                                <span className="text-[#A88AED]">Pertanyaan?</span>
                                          </h2>
                                          <p className="text-gray-700 text-lg leading-relaxed mb-8">
                                                Kami merangkum beberapa pertanyaan yang paling sering diajukan untuk membantu Anda memahami layanan kami lebih baik.
                                          </p>

                                          {/* Box Bantuan Kecil (Minimalis) */}
                                          <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-md">
                                                <p className="text-black font-bold mb-2 text-sm">Masih bingung?</p>
                                                <p className="text-gray-600 text-sm mb-4">Konsultasikan ide Anda secara gratis dengan tim ahli kami.</p>
                                                <button className="text-[#A88AED] font-bold text-sm hover:text-[#CBD83B] transition-colors flex items-center gap-2">
                                                      Hubungi via WhatsApp <span>→</span>
                                                </button>
                                          </div>
                                    </motion.div>
                              </div>

                              {/* KANAN: Accordion List (Card terang) */}
                              <div className="w-full lg:w-2/3 space-y-4">
                                    {faqs.map((faq, index) => (
                                          <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`group rounded-2xl border transition-all duration-300 ${openIndex === index
                                                            ? 'bg-white border-[#E5E7EB] shadow-lg'
                                                            : 'bg-white border-[#E5E7EB] hover:border-[#A88AED]/60 hover:shadow-md'
                                                      }`}
                                          >
                                                <button
                                                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                                      className="w-full p-6 text-left flex justify-between items-center outline-none"
                                                >
                                                      <span className={`text-lg font-semibold transition-colors duration-300 ${openIndex === index ? 'text-black' : 'text-gray-700 group-hover:text-black'
                                                            }`}>
                                                            {faq.q}
                                                      </span>

                                                      {/* Icon Indikator (Minimalis) */}
                                                      <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''
                                                            }`}>
                                                            <div className={`absolute w-4 h-0.5 bg-current transition-colors ${openIndex === index ? 'text-[#A88AED]' : 'text-gray-500'
                                                                  }`}></div>
                                                            <div className={`absolute w-0.5 h-4 bg-current transition-all ${openIndex === index ? 'text-[#A88AED] opacity-0 scale-0' : 'text-gray-500 opacity-100'
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
                                                                  <div className="px-6 pb-6 text-gray-600 leading-relaxed text-base">
                                                                        <div className="pt-2 border-t border-[#E5E7EB] opacity-80">
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