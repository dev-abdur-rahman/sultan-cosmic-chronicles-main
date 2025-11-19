"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// IMPORT YOUR 20 CERTIFICATE IMAGES
import c1 from "@/assets/c1.png";
import c2 from "@/assets/c2.jpg";
import c3 from "@/assets/c3.jpeg";
import c4 from "@/assets/c4.png";
import c5 from "@/assets/c5.jpeg";
import c6 from "@/assets/c6.png";
import c7 from "@/assets/c7.png";
import c8 from "@/assets/c8.png";
import c9 from "@/assets/c9.png";
import c10 from "@/assets/c10.png";
import c11 from "@/assets/c11.png";
import c12 from "@/assets/c12.png";
import c13 from "@/assets/c13.png";
import c14 from "@/assets/c14.png";
import c15 from "@/assets/c15.png";
import c16 from "@/assets/c16.png";
import c17 from "@/assets/c17.png";
import c18 from "@/assets/c18.png";
import c19 from "@/assets/c19.png";
import c20 from "@/assets/c20.png";

type Cert = { id: string; title: string; issuer: string; image: string | StaticImageData };

/* ===========================
   Helpers & small hooks
   =========================== */
function useKey(handler: (e: KeyboardEvent) => void) {
  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handler]);
}

/* ===========================
   Lightbox (Cinematic Neon)
   =========================== */
function Lightbox({
  items,
  startIndex,
  onClose,
}: {
  items: Cert[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  }, [index]);

  useEffect(() => {
    if (autoplay) {
      intervalRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % items.length);
      }, 3000);
    } else {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [autoplay, items.length]);

  useKey((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
    if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
    if (e.key === " ") {
      e.preventDefault();
      setAutoplay((p) => !p);
    }
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    pointerRef.current = { x: e.clientX, y: e.clientY };
    setIsPanning(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPanning || !pointerRef.current) return;
    const dx = e.clientX - pointerRef.current.x;
    const dy = e.clientY - pointerRef.current.y;
    pointerRef.current = { x: e.clientX, y: e.clientY };
    setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch (err) {
      // ignore errors from releasePointerCapture on some browsers/devices
      void err;
    }
    pointerRef.current = null;
    setIsPanning(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = -e.deltaY;
    const zoomFactor = delta > 0 ? 1.08 : 0.92;
    setScale((s) => {
      const next = Math.min(4, Math.max(0.5, Number((s * zoomFactor).toFixed(3))));
      return next;
    });
  };

  const handleDoubleClick = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    controls.start({ rotate: [0, -2, 0, 2, 0], transition: { duration: 0.6 } });
  };

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  const handleDownload = () => {
    const img = items[index].image as string;
    const link = document.createElement("a");
    link.href = img;
    link.download = `${items[index].title}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // small neon pulse animation on index change
  useEffect(() => {
    controls.start({
      boxShadow: [
        "0 0 0px rgba(99,102,241,0.0)",
        "0 0 28px rgba(99,102,241,0.18)",
        "0 0 12px rgba(99,102,241,0.08)",
      ],
      transition: { duration: 0.9, ease: "easeOut" },
    });
  }, [index, controls]);

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 z-[1000] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        ref={backdropRef}
        onMouseDown={handleBackdropClick}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-none" />

        <motion.div
          className="relative z-20 max-w-[92vw] max-h-[92vh] w-[min(1200px,96vw)]"
          initial={{ y: 40, scale: 0.96, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 20, scale: 0.96, opacity: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <motion.div
            animate={controls}
            className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[rgba(255,255,255,0.04)] bg-gradient-to-b from-black/40 to-black/20"
            style={{ minHeight: 380 }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onWheel={handleWheel}
            onDoubleClick={handleDoubleClick}
            role="dialog"
            aria-modal="true"
          >
            {/* Cinematic image */}
            <div className="relative flex items-center justify-center p-6">
              <motion.img
                key={index}
                src={items[index].image as string}
                alt={items[index].title}
                className="select-none pointer-events-auto rounded-xl max-h-[76vh] object-contain"
                style={{
                  transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
                  transition: isPanning ? "none" : "transform 180ms cubic-bezier(.2,.9,.2,1)",
                  touchAction: "none",
                }}
                draggable={false}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px) saturate(.8)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px) saturate(1)" }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
              />
            </div>

            {/* Neon scanlines overlay */}
            <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-30">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
              <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,rgba(80,70,255,0.03) 0px, rgba(80,70,255,0.03) 1px, transparent 1px, transparent 6px)] animate-scan" />
            </div>

            {/* HUD (neon) */}
            <div className="absolute inset-0 pointer-events-none">
              {/* top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-3">
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 bg-black/30 backdrop-blur border border-[rgba(124,58,237,0.24)] hover:scale-105 transition transform"
                    aria-label="Close"
                    title="Close (Esc)"
                  >
                    <span className="text-white text-xl">✕</span>
                  </button>

                  <div className="px-3 py-1 rounded-full bg-[rgba(13,15,30,0.6)] text-sm text-cyan-200 border border-[rgba(99,102,241,0.12)]">
                    <strong className="block text-white/90">{items[index].title}</strong>
                    <span className="text-xs text-cyan-200/80">{items[index].issuer}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    onClick={() => setAutoplay((p) => !p)}
                    className="rounded-xl px-3 py-1 bg-gradient-to-r from-[#6ee7b7]/10 to-[#7c3aed]/10 backdrop-blur border border-[rgba(124,58,237,0.18)] hover:brightness-110 transition"
                    title="Play / Pause (Space)"
                  >
                    <span className="text-sm text-white">{autoplay ? "⏸ Pause" : "▶ Play"}</span>
                  </button>

                  <button
                    onClick={handleDownload}
                    className="rounded-xl px-3 py-1 bg-gradient-to-r from-[#60a5fa]/10 to-[#a78bfa]/10 border border-[rgba(96,165,250,0.14)] hover:brightness-110 transition"
                    title="Download"
                  >
                    <span className="text-sm text-white">⬇ Download</span>
                  </button>
                </div>
              </div>

              {/* center controls */}
              <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-auto">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={prev}
                  className="ml-2 rounded-full p-4 bg-[rgba(12,12,25,0.38)] border border-[rgba(124,58,237,0.12)]"
                  aria-label="Previous"
                >
                  <span className="text-2xl text-white">◀</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={next}
                  className="mr-2 rounded-full p-4 bg-[rgba(12,12,25,0.38)] border border-[rgba(96,165,250,0.12)]"
                  aria-label="Next"
                >
                  <span className="text-2xl text-white">▶</span>
                </motion.button>
              </div>

              {/* bottom HUD */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 pointer-events-auto">
                <div className="flex items-center gap-2 rounded-xl bg-[rgba(12,12,25,0.32)] px-3 py-1 border border-[rgba(255,255,255,0.04)]">
                  <button
                    onClick={() => setScale((s) => Math.min(4, s + 0.25))}
                    className="px-2 py-1 rounded"
                    title="Zoom in"
                  >
                    ＋
                  </button>

                  <div className="text-sm text-white/90 px-3">
                    {(scale * 100).toFixed(0)}%
                  </div>

                  <button
                    onClick={() => setScale((s) => Math.max(0.5, s - 0.25))}
                    className="px-2 py-1 rounded"
                    title="Zoom out"
                  >
                    －
                  </button>

                  <button
                    onClick={() => {
                      setScale(1);
                      setTranslate({ x: 0, y: 0 });
                    }}
                    className="ml-2 px-2 py-1 rounded bg-[rgba(124,58,237,0.12)]"
                    title="Reset (Double click)"
                  >
                    ⟳
                  </button>
                </div>

                <div className="text-sm text-white/80 bg-[rgba(12,12,25,0.3)] px-3 py-1 rounded-xl border border-[rgba(255,255,255,0.03)]">
                  {index + 1} / {items.length}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* small styles for scan animation */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-20%); opacity: .2; }
          50% { transform: translateY(0%); opacity: .35; }
          100% { transform: translateY(-20%); opacity: .2; }
        }
        .animate-scan {
          animation: scan 5.8s linear infinite;
        }
      `}</style>
    </AnimatePresence>
  );
}

/* ===========================
   Certificates Section (Neon + 3D tilt)
   =========================== */
export default function CertificatesSection() {
  const certificates: Cert[] = [
    { id: "c1", title: "PHP & Laravel (80%)", issuer: "BD Skills / BITM / ICT Division", image: c1 },
  { id: "c2", title: "Intermediate English 2 (B2+)", issuer: "University of the People", image: c2 },
  { id: "c3", title: "National Math Olympiad – Winner (1st Place)", issuer: "Jahangirnagar University Science Club", image: c3 },
  { id: "c4", title: "Introduction to Cyber Security", issuer: "Simplilearn Skill", image: c4 },
  { id: "c5", title: "Introduction to Critical Infrastructure Protection", issuer: "UPOPSWAT Academy", image: c5 },
  { id: "c6", title: "Cyber Hygiene Training", issuer: "Asia Foundation & SAJIDA Foundation", image: c6 },
  { id: "c7", title: "", issuer: "", image: c7 },
  { id: "c8", title: "Generative AI for Beginners", issuer: "Simplilearn SkillUP", image: c8 },
  { id: "c9", title: "LinkedIn 101", issuer: "Grameenphone Academy", image: c9 },
  { id: "c10", title: "COVID-19 Awareness and Prevention", issuer: "BRAC & a2i Programme", image: c10 },

  { id: "c11", title: "WordPress Installation — Module 2", issuer: "Grameenphone Academy", image: c11 },
  { id: "c12", title: "Basic of WordPress Part 1 — Module 3", issuer: "Grameenphone Academy", image: c12 },
  { id: "c13", title: "Basic of WordPress Part 2 — Module 4", issuer: "Grameenphone Academy", image: c13 },
  { id: "c14", title: "Elementor & Widgets — Module 5", issuer: "Grameenphone Academy", image: c14 },
  { id: "c15", title: "WordPress Project Part 1 — Module 6", issuer: "Grameenphone Academy", image: c15 },
  { id: "c16", title: "WordPress Project Part 2 — Module 7", issuer: "Grameenphone Academy", image: c16 },
  { id: "c17", title: "WordPress Project Part 3 — Module 8", issuer: "Grameenphone Academy", image: c17 },
  { id: "c18", title: "Career with AI", issuer: "Grameenphone Academy", image: c18 },
  { id: "c19", title: "Online Safety", issuer: "Grameenphone Academy", image: c19 },
  { id: "c20", title: "Certificate of Excellence — WordPress Project", issuer: "Grameenphone Academy", image: c20 },
];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [particlesMove, setParticlesMove] = useState(true);

  const openLightbox = (i: number) => {
    setStartIndex(i);
    setLightboxOpen(true);
    setParticlesMove(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setParticlesMove(true);
  };

  const handleDownload = (img: string, title: string) => {
    const link = document.createElement("a");
    link.href = img;
    link.download = `${title}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // tilt effect handlers for cards
  const useTilt = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      let rect: DOMRect;
      const handleMove = (e: MouseEvent) => {
        rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotateY = (px - 0.5) * 14; // left/right
        const rotateX = (py - 0.5) * -10; // top/bottom
        el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
        el.style.boxShadow = `${(rotateY / 10) * -12}px ${Math.abs(rotateX) / 2}px 30px rgba(99,102,241,0.12)`;
      };
      const handleEnter = () => {
        el.style.transition = "transform 180ms ease, box-shadow 180ms ease";
      };
      const handleLeave = () => {
        el.style.transition = "transform 600ms cubic-bezier(.2,.9,.2,1), box-shadow 600ms cubic-bezier(.2,.9,.2,1)";
        el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
        el.style.boxShadow = "0 10px 30px rgba(2,6,23,0.45)";
      };
      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      };
    }, []);
    return ref;
  };

  const tiltRef = useTilt();

  return (
    <section id="certificates" className="relative py-20 px-4 overflow-hidden">
      {/* dynamic background glow + particles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={particlesMove ? { x: [0, -120, 0], y: [0, -60, 0] } : {}}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          className="absolute -left-40 -top-20 w-[1200px] h-[800px] rounded-full bg-gradient-to-tr from-[#6ee7b7]/12 via-[#7c3aed]/10 to-[#60a5fa]/06 blur-3xl"
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.04),transparent_20%)]" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#6ee7b7] drop-shadow-lg">
            Certificates & Achievements
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto"
          >
            Every certificate carries a story of struggle, patience, and gratitude.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 80, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.04 }}
              className="group relative rounded-3xl p-[2px] transform-gpu"
            >
              <div
                ref={tiltRef}
                className="rounded-3xl overflow-hidden bg-gradient-to-br from-black/40 to-black/25 backdrop-blur-xl border border-[rgba(124,58,237,0.06)] p-4 hover:scale-[1.01] transition"
                style={{
                  boxShadow: "0 10px 30px rgba(2,6,23,0.45)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={cert.image as string}
                    alt={cert.title}
                    className="w-full h-56 object-cover rounded-xl transition-transform duration-[1200ms] group-hover:scale-110"
                  />

                  {/* Neon overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => openLightbox(idx)}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] text-white font-semibold shadow-[0_10px_30px_rgba(124,58,237,0.18)]"
                    >
                      View
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.96 }}
                      onClick={() => handleDownload(cert.image as string, cert.title)}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#7c3aed] text-white font-semibold shadow-[0_10px_30px_rgba(96,165,250,0.12)]"
                    >
                      Download
                    </motion.button>
                  </div>
                </div>

                <div className="mt-4 space-y-1">
                  <h3 className="text-lg md:text-xl font-semibold text-cyan-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-block w-8 h-8 rounded-full bg-gradient-to-tr from-[#60a5fa] to-[#7c3aed]/60 shadow-md" />
                    <div className="text-xs text-gray-300">Verified • {cert.issuer}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox items={certificates} startIndex={startIndex} onClose={closeLightbox} />
      )}

      {/* Local styles for subtle neon lines & particle dots */}
      <style>{`
        /* subtle moving dots */
        .particles-dot {
          position: absolute;
          border-radius: 9999px;
          filter: blur(2px);
          opacity: .9;
          mix-blend-mode: screen;
        }

        /* small responsive tweaks */
        @media (max-width: 640px) {
          #certificates img { height: 220px; object-fit: cover; }
        }
      `}</style>
    </section>
  );
}
