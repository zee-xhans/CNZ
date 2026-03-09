"use client";

import React, { useMemo, useState } from "react";
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
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function KontakPage() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Konsisten dengan info di Footer
  const contact = useMemo(
    () => ({
      email: "hello@cnz.tech",
      phoneDisplay: "+62 123 4567 890",
      whatsappNumber: "621234567890",
      hours: "Senin–Jumat, 09:00–17:00 WIB",
    }),
    [],
  );

  function updateField<K extends keyof ContactFormState>(
    key: K,
    value: ContactFormState[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const text = [
        "Halo CNZ Tech, saya ingin konsultasi.",
        "",
        `Nama: ${form.name || "-"}`,
        `Email: ${form.email || "-"}`,
        `No. HP: ${form.phone || "-"}`,
        "",
        "Pesan:",
        form.message || "-",
      ].join("\n");

      const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
        text,
      )}`;
      window.open(url, "_blank", "noopener,noreferrer");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFEEC] text-[#212F3D]">
      <Navbar />

      <main className="pt-24 pb-24">
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-b from-[#FFFEEC] via-white to-[#FFFEEC] py-20 md:py-28">
          <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-[#A88AED]/20 blur-3xl" />
          <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-[#CBD83B]/20 blur-3xl" />

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
              KONTAK
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-black tracking-tight text-[#212F3D] md:text-5xl lg:text-6xl"
            >
              Ayo{" "}
              <span className="bg-linear-to-r from-[#CBD83B] to-[#A88AED] bg-clip-text text-transparent">
                ngobrol
              </span>{" "}
              soal proyekmu
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
            >
              Kirim pesan lewat form, atau langsung hubungi kami via email/WhatsApp.
              Kami respon secepat mungkin.
            </motion.p>
          </motion.div>
        </section>

        {/* Content */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:grid-cols-12">
              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-5"
              >
                <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
                  <h2 className="text-2xl font-bold text-[#212F3D] md:text-3xl">
                    Info Kontak
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Pilih cara yang paling nyaman untuk menghubungi kami.
                  </p>

                  <div className="mt-8 space-y-4">
                    <a
                      href={`mailto:${contact.email}`}
                      className="group flex items-start gap-4 rounded-2xl border border-[#A88AED]/15 bg-linear-to-br from-[#A88AED]/10 to-[#CBD83B]/10 p-5 transition hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <div className="font-bold text-[#212F3D]">Email</div>
                        <div className="mt-1 text-sm text-gray-600 group-hover:text-gray-700">
                          {contact.email}
                        </div>
                      </div>
                    </a>

                    <a
                      href={`https://wa.me/${contact.whatsappNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start gap-4 rounded-2xl border border-[#CBD83B]/25 bg-linear-to-br from-[#CBD83B]/15 to-[#A88AED]/10 p-5 transition hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                        <span className="text-xl">💬</span>
                      </div>
                      <div>
                        <div className="font-bold text-[#212F3D]">WhatsApp</div>
                        <div className="mt-1 text-sm text-gray-600 group-hover:text-gray-700">
                          {contact.phoneDisplay}
                        </div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 rounded-2xl border border-white/50 bg-[#FFFEEC] p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                        <span className="text-xl">⏰</span>
                      </div>
                      <div>
                        <div className="font-bold text-[#212F3D]">Jam Operasional</div>
                        <div className="mt-1 text-sm text-gray-600">
                          {contact.hours}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 rounded-2xl border border-[#A88AED]/15 bg-white p-6">
                    <h3 className="text-lg font-bold text-[#212F3D]">
                      Butuh yang cepat?
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Klik tombol di bawah untuk langsung membuka WhatsApp dengan format pesan.
                    </p>
                    <a
                      href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
                        "Halo CNZ Tech, saya ingin konsultasi tentang pembuatan website/branding.",
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-linear-to-r from-[#CBD83B] to-[#A88AED] px-6 py-4 text-sm font-bold text-[#212F3D] shadow-lg transition hover:opacity-90"
                    >
                      Chat WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7"
              >
                <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
                  <h2 className="text-2xl font-bold text-[#212F3D] md:text-3xl">
                    Kirim Pesan
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Ceritakan kebutuhanmu. Setelah klik kirim, WhatsApp akan terbuka otomatis.
                  </p>

                  <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55 }}
                    className="mt-8 space-y-5"
                  >
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block">
                        <span className="text-sm font-bold text-[#212F3D]">
                          Nama
                        </span>
                        <input
                          value={form.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          type="text"
                          placeholder="Nama lengkap"
                          className="mt-2 w-full rounded-2xl border border-[#A88AED]/20 bg-white px-4 py-3 text-sm text-[#212F3D] shadow-sm outline-none transition focus:border-[#A88AED]"
                          required
                        />
                      </label>

                      <label className="block">
                        <span className="text-sm font-bold text-[#212F3D]">
                          Email
                        </span>
                        <input
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          type="email"
                          placeholder="nama@email.com"
                          className="mt-2 w-full rounded-2xl border border-[#A88AED]/20 bg-white px-4 py-3 text-sm text-[#212F3D] shadow-sm outline-none transition focus:border-[#A88AED]"
                          required
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-sm font-bold text-[#212F3D]">
                        No. HP (opsional)
                      </span>
                      <input
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        type="tel"
                        inputMode="tel"
                        placeholder="+62..."
                        className="mt-2 w-full rounded-2xl border border-[#A88AED]/20 bg-white px-4 py-3 text-sm text-[#212F3D] shadow-sm outline-none transition focus:border-[#A88AED]"
                      />
                    </label>

                    <label className="block">
                      <span className="text-sm font-bold text-[#212F3D]">
                        Pesan
                      </span>
                      <textarea
                        value={form.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        placeholder="Ceritakan kebutuhanmu (jenis website, deadline, referensi, dll.)"
                        className="mt-2 min-h-[140px] w-full resize-y rounded-2xl border border-[#A88AED]/20 bg-white px-4 py-3 text-sm text-[#212F3D] shadow-sm outline-none transition focus:border-[#A88AED]"
                        required
                      />
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center rounded-2xl bg-[#CBD83B] px-6 py-4 text-sm font-bold text-[#212F3D] shadow-lg transition hover:bg-[#A88AED] hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Membuka WhatsApp..." : "Kirim Pesan"}
                    </button>

                    <p className="text-xs text-gray-500">
                      Dengan mengirim pesan, kamu akan diarahkan ke WhatsApp. Data tidak
                      disimpan di website.
                    </p>
                  </motion.form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

