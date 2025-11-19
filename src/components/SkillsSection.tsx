import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, 
  FaGithub, FaChalkboardTeacher, FaCode 
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiCplusplus } from 'react-icons/si';

const technicalSkills = [
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Python', icon: FaPython, color: 'text-blue-400' },
  { name: 'C/C++', icon: SiCplusplus, color: 'text-indigo-400' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-300' },
];

const teachingSkills = [
  'Advanced Communication',
  'Personal Mentoring',
  'Curriculum Planning',
  'Motivational Speaking',
];

const academicSkill = [
  'Chemistry',
  'Physics',
  'Mathematics',
  'ICT'
]

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-gradient-gold mb-4">
            My Arsenal
          </h2>
          <p className="text-xl text-muted-foreground">
            The constellation of skills that shaped my journey
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-display font-bold text-cosmic-cyan mb-8 flex items-center gap-3"
          >
            <FaCode className="text-primary" />
            Technical & Programming Skills
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.3 }
                }}
                className="glass-effect p-6 rounded-2xl cosmic-border flex flex-col items-center justify-center gap-4 cursor-pointer group"
              >
                <skill.icon className={`text-5xl ${skill.color} group-hover:animate-float`} />
                <span className="text-sm font-semibold text-foreground/90">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Teaching Skills */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-display font-bold text-cosmic-purple mb-8 flex items-center gap-3"
          >
            <FaChalkboardTeacher className="text-primary" />
            Teaching & Communication Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicSkill.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-2xl cosmic-border group hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                  <span className="text-lg font-medium text-foreground/90 group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-display font-bold text-cosmic-purple mb-8 flex items-center gap-3 pt-6"
          >
            <FaChalkboardTeacher className="text-primary" />
            Teaching & Communication Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachingSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-6 rounded-2xl cosmic-border group hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
                  <span className="text-lg font-medium text-foreground/90 group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-xl font-display font-semibold text-gradient-cosmic">
            "Each skill is a star — together, they form the constellation of my growth."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
