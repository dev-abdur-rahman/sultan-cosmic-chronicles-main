import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import JourneySection from '@/components/JourneySection';
import SkillsSection from '@/components/SkillsSection';
import AchievementsSection from '@/components/AchievementsSection';
import MotivationSection from '@/components/MotivationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import ProudMomentGallery from '@/components/ProudeMoment';
import CertificatesSection from '@/components/Certifcecate';
import ServicesSection from '@/components/ServicesSection';
import DemoClassesSection from '@/components/DemoClassesSection';

import intro from '@/assets/introVideo.mp4';  // ✅ FIXED IMPORT
import { AnimatedCursor } from '@/components/AnimatedCursor';
import RecommendationLetter from '@/components/rcommendation';

const Index = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3800); // video duration
    return () => clearTimeout(timer);
  }, []);

  // --------------------
  // ⭐ LOADER WITH VIDEO
  // --------------------
  if (loading) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center">
      <StarField />

      {/* MAIN ANIMATION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative text-center z-20"
      >
        {/* Glowing Behind Circle */}
        <motion.div
          className="absolute inset-0 w-40 h-40 rounded-full bg-primary/20 blur-3xl mx-auto"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Text */}
        <motion.h3
          className="text-3xl md:text-5xl font-display font-bold text-gradient-gold drop-shadow-lg"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Welcome to Sultan’s Portfolio
        </motion.h3>

        {/* Subtext */}
        <motion.p
          className="text-cosmic-cyan mt-4 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Loading your cosmic experience...
        </motion.p>
      </motion.div>

      {/* Fade overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />
    </div>
  );
}



  // --------------------
  // ⭐ MAIN WEBSITE
  // --------------------
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen overflow-hidden">
          <AnimatedCursor />
          <StarField />

          <Navigation />

          <main>
            <HeroSection />
            <AboutSection />
            <RecommendationLetter/>
            <SkillsSection />
            <AchievementsSection />
            <ProudMomentGallery />
            <CertificatesSection />
            <ServicesSection />
            <DemoClassesSection />
            <JourneySection />
            <MotivationSection />
            <ContactSection />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
