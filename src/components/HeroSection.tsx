import { motion } from 'framer-motion';
import { FaTrophy, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import sultanPortrait from '@/assets/sultan-portrait2.png';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center px-4 py-20">
      <div className="container mx-auto">
        
        {/* FORCE same layout on mobile & desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-center md:text-left"
          >
            
            {/* Modern Animated Name */}
            <motion.h1
              className="text-4xl md:text-5xl font-display font-bold text-gradient-gold glow-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Md. Sultan Mahmud Dewan
            </motion.h1>

            {/* DETAILS */}
            <motion.div
              className="space-y-3 text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="flex items-center justify-center md:justify-start gap-3 text-cosmic-cyan">
                <FaTrophy className="text-primary" />
                <span>Math Olympiad Winner 🏆</span>
              </p>

              <p className="text-muted-foreground">
                Bachelor's Student in Computer Science & Engineering
              </p>
              <p className="text-muted-foreground">
                A+ Land Surveyor (Aminship)
              </p>
              <p className="text-cosmic-purple font-semibold">
                Founder of Sultan's Study – An Educational Platform
              </p>
              <p className="text-foreground">
                Educator | Developer | Dreamer
              </p>
            </motion.div>

            {/* BUTTONS */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button
                onClick={() => scrollToSection('achievements')}
                className="bg-gradient-to-r from-primary to-cosmic-gold text-primary-foreground shadow-[0_0_20px_hsl(45,100%,60%,0.4)] hover:shadow-[0_0_30px_hsl(45,100%,60%,0.6)]"
              >
                <FaTrophy className="mr-2" />
                My Achievements
              </Button>

              <Button
                onClick={() => scrollToSection('skills')}
                variant="outline"
                className="border-cosmic-purple text-cosmic-purple hover:bg-cosmic-purple/10"
              >
                <FaBriefcase className="mr-2" />
                View My Work
              </Button>

              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-cosmic-cyan text-cosmic-cyan hover:bg-cosmic-cyan/10"
              >
                <FaEnvelope className="mr-2" />
                Contact Me
              </Button>
            </motion.div>

            {/* QUOTE */}
            <motion.p
              className="text-sm text-muted-foreground italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              "Every dream, no matter how distant, can become a star in one's own galaxy."
            </motion.p>

          </motion.div>

          {/* RIGHT PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-[340px] md:h-[380px]">

              {/* Orbit Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cosmic-purple/30 animate-spin-slow" />
              <div
                className="absolute inset-4 rounded-full border-2 border-cosmic-cyan/30 animate-spin-slow"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              />

              {/* Portrait */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_60px_hsl(45,100%,60%,0.6)]">
                <img
                  src={sultanPortrait}
                  alt="Sultan - Md. Sultan Mahmud Dewan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating particles */}
              <motion.div
                className="absolute top-0 right-0 w-4 h-4 rounded-full bg-primary"
                animate={{ y: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className="absolute bottom-0 left-0 w-3 h-3 rounded-full bg-cosmic-cyan"
                animate={{ y: [10, -10, 10], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
