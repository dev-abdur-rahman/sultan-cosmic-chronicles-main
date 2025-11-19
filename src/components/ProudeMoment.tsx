"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const galleryImages = [
  "/images/memory1.jpg",
  "/images/memory2.jpg",
  "/images/memory3.jpg",
  "/images/memory4.jpg",
  "/images/memory5.jpg",
  "/images/memory6.jpg",
];

export default function ProudMomentGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // ⭐ MODAL STATE
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // ⭐ OPEN MODAL
  const openModal = (index: number) => setCurrentIndex(index);

  // ⭐ CLOSE MODAL
  const closeModal = () => setCurrentIndex(null);

  // ⭐ PREVIOUS IMAGE
  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  // ⭐ NEXT IMAGE
  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  // ⭐ KEYBOARD CONTROLS
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <section id="proud-moment" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-gradient-gold mb-4">
            Proud Moment
          </h2>
          <p className="text-xl text-muted-foreground">
            Snapshots of blessings and patience rewarded
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 3, transition: { duration: 0.3 } }}
              className="relative overflow-hidden rounded-2xl glass-effect cosmic-border group"
            >
              <motion.img
                src={src}
                alt={`Proud Moment ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              {/* ⭐ VIEW BUTTON */}
              <button
                onClick={() => openModal(index)}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                px-4 py-2 bg-cosmic-purple/80 text-white text-sm font-semibold shadow-md 
                rounded-full hover:bg-cosmic-cyan/90 transition-all duration-300"
              >
                View
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ⭐ FULLSCREEN MODAL VIEWER */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* IMAGE */}
            <motion.img
              key={galleryImages[currentIndex]}
              src={galleryImages[currentIndex]}
              alt="Preview"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl font-bold bg-black/40 
              px-3 py-1 rounded-full hover:bg-red-500/70 transition"
            >
              ✕
            </button>

            {/* ⬅ PREV BUTTON */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-4xl bg-black/40 px-4 py-2 
              rounded-full hover:bg-white/30 transition"
            >
              ‹
            </button>

            {/* NEXT BUTTON ➡ */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-4xl bg-black/40 px-4 py-2 
              rounded-full hover:bg-white/30 transition"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
