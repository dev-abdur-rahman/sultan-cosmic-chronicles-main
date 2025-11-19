import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import olympiadAward from "@/assets/olympiad-award.jpg";
import classRoom from "@/assets/olympiad2.jpg";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hover3D = {
    initial: { rotateX: 0, rotateY: 0, scale: 1 },
    hover: {
      rotateX: -6,
      rotateY: 6,
      scale: 1.03,
      transition: { type: "spring", stiffness: 150, damping: 10 },
    },
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="py-20 px-4 relative" ref={ref}>
      {/* Floating particles */}
      <motion.div
        className="absolute top-10 left-10 w-3 h-3 bg-primary/40 rounded-full blur-sm"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-4 h-4 bg-cosmic-purple/40 rounded-full blur-sm"
        animate={{ y: [0, 20, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="container mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-2"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-4"
            animate={{
              textShadow: [
                "0 0 10px #f5d67b",
                "0 0 25px #ffecb3",
                "0 0 10px #f5d67b",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Who I Am
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            An educator, innovator, and lifelong learner
          </motion.p>
        </motion.div>

        {/* GRID FIXED: mobile = same layout as laptop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT CONTENT – SAME UI FOR MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10 px-2"
          >
            {[
              {
                title: "Background",
                color: "text-primary",
                content: (
                  <>
                    I am{" "}
                    <span className="text-primary font-semibold">
                      Md. Sultan Mahmud Dewan
                    </span>
                    , an educator, innovator, and lifelong learner from Dhaka,
                    Bangladesh. I specialize in{" "}
                    <span className="text-cosmic-cyan">Web Development</span>,
                    <span className="text-cosmic-purple"> Programming</span>,
                    and teaching
                    <span className="text-primary"> STEM subjects</span>.
                  </>
                ),
              },
              {
                title: "Educational Journey",
                color: "text-cosmic-cyan",
                content: (
                  <>
                    My journey began with self-learning and evolved into
                    teaching thousands through
                    <span className="text-primary font-semibold">
                      {" "}
                      Sultan's Study
                    </span>
                    . Currently studying CSE at
                    <span className="text-cosmic-purple font-semibold">
                      {" "}
                      University of the People (USA)
                    </span>
                    .
                  </>
                ),
              },
              {
                title: "Major Achievements",
                color: "text-cosmic-purple",
                content: (
                  <ul className="space-y-3">
                    <li>
                      🥇 <strong className="text-primary">1st Place</strong> –
                      Mathematics Olympiad
                    </li>
                    <li>
                      🧠{" "}
                      <strong className="text-cosmic-cyan">
                        National Physics Olympiad Finalist
                      </strong>
                    </li>
                    <li>
                      📐{" "}
                      <strong className="text-cosmic-purple">A+ Grade</strong> –
                      Govt. Land Survey
                    </li>
                  </ul>
                ),
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={hover3D}
                initial="initial"
                whileHover="hover"
                className="glass-effect p-6 md:p-8 rounded-2xl cosmic-border relative overflow-hidden"
              >
                {/* Glow sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-150%", "150%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <h3
                  className={`text-xl md:text-2xl font-display font-bold mb-4 ${card.color}`}
                >
                  {card.title}
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT IMAGES — SAME SIZE ON MOBILE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-16 px-2 "
          >
            {[olympiadAward, classRoom].map((img, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden border-4 border-primary/50 
                shadow-[0_0_60px_hsl(45,100%,60%,0.4)] group "
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* IMAGE */}
                <motion.img
                  src={img}
                  className="w-full h-[350px] md:h-[420px] object-cover group-hover:scale-110 
                  transition-all duration-700"
                />

                {/* HOLOGRAM SCAN */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent 
                  opacity-0 group-hover:opacity-100"
                  animate={{ y: ["100%", "-100%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* CAPTION */}
                <motion.div
                  className={`
    bg-black/35 backdrop-blur-sm absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center
    bg-gradient-to-t from-black/60 to-transparent transition-all duration-500 overflow-hidden

    ${isHovered ? "md:max-h-96 md:opacity-100" : "md:max-h-0 md:opacity-0"}

    max-h-none opacity-100
  `}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  {index === 0 ? (
                    <>
                      <p className="text-base md:text-lg font-semibold text-primary glow-text">
                        “Receiving the 1st Prize in Mathematics Olympiad from
                        Honorable Education Minister Dr. Dipu Moni”
                      </p>
                      <p className="text-xs md:text-sm text-foreground/80 mt-2">
                        A moment of pride, dedication, and divine gratitude
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-base md:text-lg font-semibold text-primary glow-text">
                        “Behind every success story stands a silent warrior. For
                        me, that warrior is my father. This prize is just a
                        trophy — HE is the reason.”
                      </p>
                      <p className="text-xs md:text-sm text-foreground/80 mt-2">
                        “They called my name for the prize, but in my heart, I
                        heard only his name — my father’s.”
                      </p>
                      <p className="text-xs md:text-sm text-primary/90 font-semibold mt-3">
                        “My father earned it. I only received it.”
                      </p>
                    </>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
