import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const milestones = [
    {
      year: "2005–2010",
      title: "The Beginning of My Story",
      description:
        "Born on August 28, 2005, in Dhaka, Bangladesh. Lost my mother, Shilpi Begum, as a baby. My father, Rahul Amin, though mentally weak and financially struggling, became both my strength and shelter — working endlessly as a rickshaw driver, hawker, and laborer. At age five, he admitted me into an orphanage (Etimkhana), believing it might give me a better chance at life.",
      quote:
        "“No one can even imagine that a father’s love for his child can surpass the love of thousands of mothers — unless they know my father.”",
      color: "primary",
    },
    {
      year: "2010–2017",
      title: "Life in the Orphanage – Learning Independence",
      description:
        "I spent nearly seven years in an orphanage — seven years that shaped my soul with patience, discipline, and unwavering faith in Allah. Those walls witnessed my loneliness, but they also forged a strength within me that nothing could break. In that quiet struggle, I learned to rely on no one but Allah and myself. I also saw how society often turns away from the poor and the orphaned, treating them as invisible. And in those moments, I made a silent promise: one day, I will rise — not because of what I owned, but because of the character, resilience, and faith I built on my own.",
      quote:
        "“I didn’t have much — but I had a dream. To prove that poverty can’t define destiny.”",
      color: "cosmic-purple",
    },
    {
      year: "2017–2021",
      title: "Rebuilding from Zero",
      description:
        "When I reached Class 9, I faced rejection again. Many schools refused to admit me because I had nearly zero academic background — I had gaps to fill and little support. My father could not pay for a good education, yet his silent prayers strengthened me. I enrolled in a small local school and began studying from scratch. I worked day and night to cover eight years of missed schooling, focusing especially on Math, Physics, and Chemistry — the subjects that felt like home. In 2021, I passed my SSC with GPA 4.61 — a milestone earned by self-study, persistence, and faith.",
      quote: "“Education became my weapon — and knowledge, my shield.”",
      color: "cosmic-cyan",
    },
    {
      year: "2021–2024",
      title: "College – The Spark of Excellence",
      description:
        "Joined Dhamrai Government College for HSC. Life stayed hard — I continued teaching to support myself while preparing for BUET. In 2022, during my 1st year of college, I won 1st Place in the National Math Olympiad, receiving the award from Honorable Education Minister Dr. Dipu Moni. In 2023, I earned A+ in the Government Land Survey (Aminship) exam and participated in the Physics and Chemistry Olympiads. However, due to political unrest in 2024 and the automatic pass policy, I couldn’t take the HSC exams and received GPA 4.17 based on previous results.",
      quote:
        "“It wasn’t about competing with others — it was about proving what faith and effort can achieve.”",
      color: "primary",
    },
    {
      year: "2024–2025",
      title: "Rising Through Self-Learning",
      description:
        "Built my first portfolio website — my digital identity (sweet-macaron-66d6d7.netlify.app). Started teaching online through YouTube and Google Drive to help others. Learned programming and web development (C, C++, Python, Java, JavaScript, HTML, CSS, WordPress). Later, I was accepted into the University of the People (USA) as a Bachelor’s student in Computer Science & Engineering — my first international academic step.",
      quote:
        "“Every sleepless night and every tear was a seed — now it blooms in knowledge and purpose.”",
      color: "cosmic-cyan",
    },
    {
      year: "2025–Future",
      title: "My Vision Ahead",
      description:
        "I imagine a world where every child, regardless of background, has access to education and digital opportunity. I want to continue higher studies abroad with a fully funded scholarship, build an educational and technological platform for underprivileged children, and dedicate my knowledge to serving humanity and pleasing Allah.",
      quote:
        "“Learn, Lead, and Serve — with sincerity and faith in Allah.”",
      color: "cosmic-purple",
    },
  ];

  return (
    <section id="journey" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-gradient-gold mb-4">
            My Journey – From Orphanage to Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From a father’s silent struggle to self-discovery and faith — a timeline of purpose,
            patience, and perseverance.
          </p>
        </motion.div>

        {/* Vertical Timeline Line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cosmic-purple via-cosmic-cyan to-primary transform -translate-x-1/2 hidden lg:block" />

          {/* Timeline Cards */}
          <div className="space-y-20">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`${i % 2 === 0 ? "lg:text-right" : "lg:col-start-2"}`}>
                  <div className="glass-effect p-8 rounded-2xl cosmic-border hover:scale-[1.03] transition-transform duration-300 shadow-lg">
                    <span
                      className={`inline-block px-4 py-2 rounded-full bg-${m.color}/20 text-${m.color} font-semibold mb-4`}
                    >
                      {m.year}
                    </span>
                    <h3 className="text-3xl font-display font-bold mb-4 text-gradient-gold">
                      {m.title}
                    </h3>
                    <p className="text-foreground/90 leading-relaxed mb-4">
                      {m.description}
                    </p>
                    <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary pl-4">
                      {m.quote}
                    </blockquote>
                  </div>
                </div>

                {/* Timeline Dot Animation */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className={`w-6 h-6 rounded-full bg-${m.color} shadow-[0_0_25px_currentColor]`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-24"
        >
          <div className="glass-effect inline-block px-10 py-6 rounded-2xl cosmic-border shadow-[0_0_25px_hsl(45,100%,60%,0.3)]">
            <p className="text-2xl font-display font-semibold text-gradient-gold leading-relaxed">
              “From the silence of an orphanage to the digital world — my story isn’t about pain,
              it’s about purpose, patience, and faith.”
            </p>
            <p className="mt-4 text-muted-foreground">
              My father’s tears became my strength, and my faith became my future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
