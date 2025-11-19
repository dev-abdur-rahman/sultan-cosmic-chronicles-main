import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTrophy, FaMedal, FaCertificate, FaGraduationCap } from 'react-icons/fa';

const achievements = [
  {
    icon: FaTrophy,
    title: 'Mathematics Olympiad – 1st Place',
    description: 'Awarded personally by Dr. Dipu Moni, Education Minister of Bangladesh',
    quote: 'An achievement not of luck, but of relentless preparation and faith in Allah.',
    color: 'primary',
  },
  {
    icon: FaMedal,
    title: 'National Physics Olympiad – 13th Place',
    description: 'National-level recognition of scientific intellect and problem-solving excellence',
    quote: 'The balance between logic and calmness.',
    color: 'cosmic-cyan',
  },
  {
    icon: FaCertificate,
    title: 'Government Land Survey (Aminship) – A+ Grade',
    description: 'Top grade in technical field exam, proving adaptability in both theoretical and practical domains',
    quote: 'Accuracy meets discipline.',
    color: 'cosmic-purple',
  },
  {
    icon: FaGraduationCap,
    title: 'University of the People (USA) – CSE Bachelor\'s',
    description: 'Full scholarship for Computer Science & Engineering degree',
    quote: 'My dream of international education becoming reality.',
    color: 'primary',
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-gradient-gold mb-4">
            Achievements
          </h2>
          <p className="text-xl text-muted-foreground">
            Proof of progress — prayers and proof that Allah never forgets the patient
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-effect p-8 rounded-2xl cosmic-border relative overflow-hidden group"
            >
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${achievement.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${achievement.color}/20 mb-6 group-hover:animate-float`}>
                  <achievement.icon className={`text-3xl text-${achievement.color}`} />
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-4 text-gradient-gold">
                  {achievement.title}
                </h3>
                
                <p className="text-foreground/90 leading-relaxed mb-4">
                  {achievement.description}
                </p>
                
                <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary pl-4">
                  {achievement.quote}
                </blockquote>
              </div>

              {/* Decorative corner element */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${achievement.color}/5 rounded-full blur-3xl`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect inline-block px-8 py-6 rounded-2xl">
            <p className="text-xl font-display font-semibold text-gradient-gold mb-2">
              "These certificates are not just papers"
            </p>
            <p className="text-lg text-foreground/80">
              They are prayers and proof that Allah never forgets the patient.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
