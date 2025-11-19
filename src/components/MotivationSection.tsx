// MotivationSection.futuristic.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import React, { useRef, useState, useCallback, useEffect } from "react";
import { FaHeart, FaTimes } from "react-icons/fa";
import fatherSilhouette from "@/assets/father-silhouette.jpg";

/* ----------------------------
   FULL FATHER STORY (exact text)
   ---------------------------- */
// (same fullStory and highlights from your original code)
const fullStory = `No one can even imagine that a father's love for his child can surpass the love of thousands of mothers—unless they know my father.

My father never grew tired of pedaling his rickshaw.
He only felt weary when he realized that some essential task remained undone—whether it was buying a particular book for his child or getting medicine for his ailing mother.

In the dark of night, he would carry a flask of tea through the streets to sell. And when trucks arrived at the wholesale market, his thin, frail body would jump into the labor work. He stumbled countless times, enduring insults and harsh words from many, yet fatigue never truly touched him; his suffering was never visible.

We may not have directly witnessed all of this, but what we did see was even more terrifying: at one point, he was found unconscious on the street and taken to the hospital by passersby. When we learned the news, my grandmother rushed to the hospital, crying. The doctors repeatedly urged him to take care of himself, but he paid no heed. Later, he faced even more terrible accidents.

Twice, he suffered severe head injuries in car accidents on the EPZ highway, his body drenched in blood. At that time, no hospital in Savar wanted to admit him. When he was finally taken to Dhaka Medical College, even the doctors could not assure us that he would regain consciousness. But, Alhamdulillah, after about a week, he awoke. Everyone had assumed that this time he would not return—but by Allah’s grace, my father came back from the gates of death.

In short, he worked like a madman, and our neighbors even called him crazy. He never imagined his own happiness or comfort. His peace and joy were always directed toward our smiling faces.

I rarely saw my father sleep at home. Yet, when utterly exhausted, he would sleep on the rickshaw seat under the scorching sun, covering himself with a towel as his bed.

After all that hardship, he often returned home empty-handed.
He never complained about being insulted by a landlord, or scolded by passengers for a late fare.
He hid thousands of such pains from us, ensuring that his ailing elderly mother remained worry-free and that we were happy.

He always prayed silently to Allah:
"May the life of a day laborer never touch my children."

He would hide his own tattered clothes and clothe us in new ones. My father invested his entire life to give me a beautiful world.

Silent Warrior: The Story of My Father
In the eyes of the world, he may have seemed like an ordinary man—a poor, struggling man who got lost in the fight for survival. But to me, he was the greatest warrior in the world. He carried no sword or gun; his weapons were patience, sacrifice, and a love so deep that it faced all the storms, struggles, and adversities of life. This is the story of that silent warrior: my father.

From the very beginning, my father’s life symbolized struggle. Even as a child, he was gentle-hearted and restless—hesitant to make decisions, unable to protect himself from the harsh realities of the world. He was simple, trusting, and easily hurt, much like a child.

After my grandmother’s second marriage, she moved to Dhaka with my father. Survival in the village had become impossible, so they set out for an unknown city in hope of life. My father was only ten or twelve. When they arrived in Dhaka, they saw how harsh the vast city could be. They had nothing—only the clothes on their backs and a handful of courage.

They had no home. Their first shelter was under an overpass, on cold, hard ground. The sky was their roof, and the busy street their yard. My grandmother, a determined woman, did odd jobs door to door, earning barely enough for a single meal. Renting a home was a dream. So, for months, they slept on the footpath.

Eventually, with a little savings, they built a small shelter under the overpass with bamboo and paper. It shook in the wind and rain, but it was their first place they could call their own.

Instead of school, my father’s only classroom was the struggle of survival. He became a street vendor, borrowing items like water bottles, biscuits, and chips from shopkeepers, then walking the streets selling them in a soft voice. At the end of the day, after returning the borrowed items, he earned only a small commission—not even enough for a single meal.

Many nights, he went to sleep hungry. Later, seeking more income, he began hard labor—pulling rickshaws, working as a porter, carrying heavy loads. With his small frame, he sweated and endured pain every day but never stopped. Finally, my grandmother and he were able to rent a small tin shed in a slum—one of their greatest achievements.

In that slum, he eventually met my mother. She knew he was poor, but his honesty and hard work won her heart. They married. Five years later, my elder sister Runa was born, and seven years later, I was born.

Our birth brought joy to my father’s life but also doubled his responsibilities. The household expenses increased, and hardships grew. He worked even harder, day and night, just to see our smiling faces. He never thought of his own comfort. His only dream was that we would grow up educated, well-mannered, and successful.

Yet, the pressures of poverty gradually broke my mother mentally. She became angry and bitter, mistreating my father with harsh words. Still, he never protested. He endured silently, thinking that arguing would hurt his children more.

But when my mother became involved with another man and began to oppress us, including me as an infant, my father realized she would not run the household properly. He endured much, but when her cruelty extended to us, he could not tolerate it. Thinking of our bright future, he divorced her to protect us.

When our mother left, my father was left destitute—holding only me and little Runa in his arms. Yet he never remarried. He spent his life entirely for us, ensuring that no stepmother’s negligence could touch us. To this day, I cannot even imagine my mother’s face; I do not know who she is. And I believe this ignorance has been a great blessing in my life. But if she ever comes to me, I will honor her with the respect due to an ideal mother, Insha’Allah.

My father taught me that even in life’s harshest circumstances, one must maintain decorum and composure, not be defeated by adversity, respond to evil with dignity, and attempt to correct wrongdoers with love. This is where Allah’s love and mercy are manifested.

Though my father was illiterate and never attended school, he taught me lessons far beyond words. Through his life, he imparted countless teachings, enough to fill a book. His life was an ocean of knowledge—every wave a lesson, every droplet a wisdom, and the depths of his silent love a source of affection.

Raised by my grandmother’s motherly love, I never felt the absence of a mother. Comparing her care to other mothers, we found a thousand joys in her.

My father became a silent warrior. Day and night he worked tirelessly just to put a morsel of food on our plates. Twice, he suffered severe accidents while pulling rickshaws, unconscious in the hospital. Doctors said he might not return—but Allah’s mercy saved him. I believe Allah kept him because we could not survive without him.

Life’s trials did not end there. He silently endured society’s ridicule and human cruelty.

Then came the terrifying COVID-19 pandemic. I was attending classes. The country was in lockdown, work stopped. People were safe at home, but for families like ours, it was like a death sentence. There was no money for food, no help, no hope. Yet my father did not stop. One day, he bought a small flask and started selling tea on the streets—his last effort to keep the household alive.

One day, a police officer smashed his flask without hearing a word, the only source of our livelihood. Father quietly returned home, resting his head on grandmother’s lap, and cried—a defeated but honest man, who lost everything yet did no wrong.

The next day, he went out again. Grandmother cooked a small portion of khichuri, which he packaged and sold on the street for twenty taka. He was neither broken nor subdued. His faith in Allah was unwavering; he knew that no matter the hardship, Allah never fails the honest.

To ensure my studies were undisturbed, he built a small enclosed study space inside our tiny home. I could observe everything from there. In such circumstances, I often cried bitterly, my books damp with tears. Yet I believed that Allah had set us this test and would reward us beyond measure. Allah did not grant us the power to protest, but He gave something stronger: patience. Through that strength, even a boy like me dares to dream big.

Today, I live with that belief. I study, I work, I dream—with one goal: to stand by my father someday and honor him with all the joy in heaven.

My father is not just a man—he is the foundation of my life, my inspiration, my pride. His body may be weak, but his mind is unwavering. His knowledge limited, yet his heart is full of infinite love.

Every drop of sweat, every tear, every scar tells the story of his sacrifice. When I study and think of him, tears fall—not of sorrow, but of pride and inspiration.

I know that Allah tests those He loves severely. I believe my father’s honest struggle will never be in vain.`;

const highlights = [
  "He pedaled rickshaws, sold tea, and did labor to feed and educate us.",
  "He faced accidents and hunger but never lost faith or dignity.",
  "When everything stopped in COVID, he started again — humble, relentless.",
  "His silent sacrifice became my foundation and motivation.",
];

export default function MotivationSection() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Audio states
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [ambientOn, setAmbientOn] = useState(false);

  // pointer tilt micro-interactions
  const handlePointer = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0-1
    const py = (e.clientY - rect.top) / rect.height; // 0-1
    const rotateY = (px - 0.5) * 12; // -6..6
    const rotateX = (py - 0.5) * -10; // -5..5
    el.style.setProperty("--tilt-x", `${rotateX}deg`);
    el.style.setProperty("--tilt-y", `${rotateY}deg`);
  }, []);

  const handlePointerLeave = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLDivElement;
    el.style.setProperty("--tilt-x", `0deg`);
    el.style.setProperty("--tilt-y", `0deg`);
  }, []);

  // audio control helpers
  useEffect(() => {
    // keep audio element src in sync with selected language
    if (audioRef.current) {
      audioRef.current.src = language === "en" ? "/audio/father-story-en.mp3" : "/audio/father-story-bn.mp3";
      audioRef.current.load();
    }
    // when language switches we stop playback (avoid auto-playing new file)
    setAudioPlaying(false);
    if (audioRef.current) audioRef.current.pause();
  }, [language]);

  useEffect(() => {
    // auto-pause narration when modal opens
    if (modalOpen) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setAudioPlaying(false);
    }
  }, [modalOpen]);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // play promise rejection handling (silent)
      });
      setAudioPlaying(true);
    }
  };

  const switchLanguage = () => {
    setLanguage((l) => (l === "en" ? "bn" : "en"));
  };

  const toggleAmbient = () => {
    if (!ambientRef.current) return;
    if (ambientOn) {
      ambientRef.current.pause();
      setAmbientOn(false);
    } else {
      ambientRef.current.play().catch(() => {});
      setAmbientOn(true);
    }
  };

  // clean up on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
      if (ambientRef.current) {
        ambientRef.current.pause();
        ambientRef.current.src = "";
      }
    };
  }, []);

  return (
    <section id="motivation" ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* ----- Custom styles / keyframes for heavy animations ----- */}
      <style>{`
        /* Floating shards */
        @keyframes floatY { 0% { transform: translateY(0px) } 50% { transform: translateY(-24px) } 100% { transform: translateY(0px) } }
        @keyframes floatX { 0% { transform: translateX(0px) } 50% { transform: translateX(18px) } 100% { transform: translateX(0px) } }
        @keyframes spinSlow { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }
        @keyframes holoScan { 0% { transform: translateY(120%) } 100% { transform: translateY(-120%) } }
        .text-back-shadow { text-shadow: 0 8px 30px rgba(2,6,23,0.6); }
        .holo-line { background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%); opacity: 0.7; mix-blend-mode: screen; }
        .glass-3d { backdrop-filter: blur(8px) saturate(120%); background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.04); }
        .neon-glow { text-shadow: 0 6px 30px rgba(99,102,241,0.14), 0 2px 10px rgba(56,189,248,0.06); }
        .audio-orb { box-shadow: 0 10px 30px rgba(99,102,241,0.12), inset 0 -6px 16px rgba(0,0,0,0.2); }
      `}</style>

      {/* AUDIO ELEMENTS (hidden) */}
      <audio ref={audioRef} preload="auto" src={language === "en" ? "/audio/father-story-en.mp3" : "/audio/father-story-bn.mp3"} />
      <audio ref={ambientRef} preload="auto" src="/audio/ambient.mp3" loop />

      {/* Floating audio control orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-3"
        aria-hidden={false}
      >
        {/* Play / Pause Orb */}
        <button
          onClick={toggleAudio}
          aria-pressed={audioPlaying}
          aria-label={audioPlaying ? "Pause narration" : "Play narration"}
          className={`w-16 h-16 rounded-full bg-gradient-to-br from-primary to-cosmic-purple text-white flex items-center justify-center audio-orb relative focus:outline-none ring-0`}
          title={audioPlaying ? "Pause narration" : "Play narration"}
        >
          {/* pulsing ring when playing */}
          {audioPlaying && <span className="absolute -inset-1 rounded-full animate-ping bg-primary/30" />}
          {/* icon */}
          {audioPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="6" y="6" width="4" height="12" fill="white" />
              <rect x="14" y="6" width="4" height="12" fill="white" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="white">
              <path d="M3 6v12l10-6z" />
            </svg>
          )}
        </button>

        {/* language switch */}
        <button
          onClick={switchLanguage}
          aria-label="Switch narration language"
          className="px-3 py-1 rounded-full text-sm bg-white/6 backdrop-blur text-white border border-white/10"
          title="Switch language"
        >
          {language === "en" ? "বাংলা" : "EN"}
        </button>

        {/* ambient toggle */}
        <button
          onClick={toggleAmbient}
          aria-pressed={ambientOn}
          aria-label="Toggle ambient sound"
          className={`px-3 py-1 rounded-full text-sm ${ambientOn ? "bg-white/10" : "bg-white/4"} text-white border border-white/10`}
          title="Toggle ambient"
        >
          {ambientOn ? "Ambient On" : "Ambient Off"}
        </button>
      </motion.div>

      {/* Background depth layers */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050410] via-[#081028] to-[#060617] opacity-80" />
        <div className="absolute -left-10 top-10 w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-cosmic-purple/6 to-cosmic-cyan/6 blur-3xl animate-[floatY_10s_ease-in-out_infinite]" />
        <div className="absolute right-10 -top-6 w-[180px] h-[180px] rounded-full bg-gradient-to-tr from-primary/6 to-cosmic-purple/6 blur-2xl animate-[floatX_8s_ease-in-out_infinite]" />
        <div className="absolute -right-40 -bottom-40 w-[520px] h-[520px] rounded-full border border-white/2 opacity-5 animate-[spinSlow_60s_linear_infinite]" />
      </div>

      {/* Floating particle shards */}
      <div aria-hidden className="pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute opacity-40 bg-gradient-to-r from-white/6 to-white/2 blur-md rounded-sm"
            style={{
              width: `${6 + i * 6}px`,
              height: `${20 + i * 8}px`,
              left: `${(i * 11) % 100}%`,
              top: `${15 + (i * 9) % 70}%`,
              transform: `rotate(${i * 16}deg)`,
              animation: `${i % 2 === 0 ? "floatY" : "floatX"} ${6 + i}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaHeart className="text-3xl text-primary animate-pulse" />
            <h2 className="text-5xl font-display font-bold text-gradient-gold neon-glow text-back-shadow">
              My Motivation
            </h2>
            <FaHeart className="text-3xl text-primary animate-pulse" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="text-2xl text-cosmic-cyan font-display neon-glow text-back-shadow"
          >
            The Silent Warrior: My Father's Story
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* Hologram image panel with heavy animation and 3D tilt */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.995 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.85, ease: "anticipate" }}
            className="relative rounded-2xl overflow-hidden glass-3d shadow-[0_30px_80px_rgba(2,6,23,0.6)]"
            onPointerMove={handlePointer}
            onPointerLeave={handlePointerLeave}
            style={{ perspective: 1600 }}
          >
            <div
              className="relative rounded-2xl border border-white/4 overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(0)",
              }}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 140, damping: 14 }}
                style={{
                  transform: "rotateX(var(--tilt-x, 0)) rotateY(var(--tilt-y, 0))",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* image */}
                <img src={fatherSilhouette} alt="Father silhouette" className="w-full h-[480px] object-cover block" />

                {/* hologram scanline overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute inset-0 holo-line"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.04) 60%, rgba(0,0,0,0) 100%)",
                      animation: "holoScan 2.6s linear infinite",
                      mixBlendMode: "overlay",
                    }}
                  />
                </div>

                {/* neon rim */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: "0 0 50px rgba(99,102,241,0.08), inset 0 0 30px rgba(56,189,248,0.02)" }} />

                {/* hologram shard cluster (3D) */}
                <div className="absolute -bottom-8 left-8 right-8 pointer-events-none" aria-hidden>
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded" style={{ transform: "skewX(-12deg)", opacity: 0.6 }} />
                    <div className="w-36 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded" style={{ transform: "skewX(8deg)", opacity: 0.45 }} />
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded" style={{ opacity: 0.35 }} />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Glowing quote / short intro box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="glass-3d p-8 rounded-2xl border border-white/6 flex items-start gap-5"
            role="region"
            aria-label="Motivation short quote"
          >
            <div className="flex-shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-cosmic-cyan flex items-center justify-center shadow-[0_8px_30px_rgba(99,102,241,0.12)]">
                <FaHeart className="text-white" />
              </div>
            </div>

            <div>
              <p className="text-xl font-display text-white/95 neon-glow text-back-shadow leading-relaxed">
                "No one can even imagine a father's love — unless they know my father."
              </p>
              <p className="mt-3 text-sm text-gray-300">
                Small acts, huge heart — a life's quiet devotion condensed to a single line.
              </p>
            </div>
          </motion.div>

          {/* Highlights grid (animated cards) */}
          <div className="grid md:grid-cols-3 gap-6">
            {["Sacrifice", "Endurance", "Legacy"].map((title, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.08 }}
                className="glass-3d p-6 rounded-2xl border border-white/6 relative overflow-hidden"
                whileHover={{ translateY: -6, boxShadow: "0 20px 60px rgba(2,6,23,0.6)" }}
              >
                <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full bg-gradient-to-tr from-primary/6 to-cosmic-purple/6 blur-2xl opacity-30" />
                <h4 className="text-lg font-semibold text-gradient-gold neon-glow">{title}</h4>
                <p className="text-sm text-foreground/90 mt-3">
                  {title === "Sacrifice" && "He pedaled rickshaws, sold tea and did labor — so we could keep our dignity and our books."}
                  {title === "Endurance" && "He faced accidents and hunger — yet he returned to work each day with faith."}
                  {title === "Legacy" && "His patient struggle became the ground for my dreams and study."}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated expanded panel (short story inside) */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.995 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="relative"
          >
            <AnimatePresence>
              {expanded ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.45 }}
                  className="glass-3d p-6 rounded-2xl border border-white/6 max-h-[520px] overflow-y-auto"
                >
                  <h3 className="text-2xl font-display font-bold text-gradient-gold neon-glow text-center mb-4 text-back-shadow">
                    Silent Warrior — Short Account
                  </h3>

                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    {highlights.map((p, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.06 * i, duration: 0.45 }}
                        className="text-sm"
                      >
                        {p}
                      </motion.p>
                    ))}

                    <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.45 }} className="text-sm italic text-muted-foreground mt-4">
                      “I know that Allah tests those He loves severely. I believe my father’s honest struggle will never be in vain.”
                    </motion.p>

                    <div className="mt-6 flex items-center gap-3">
                      <button
                        onClick={() => {
                          // open full story modal
                          setModalOpen(true);
                        }}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-cosmic-cyan text-white font-semibold shadow-[0_8px_30px_rgba(99,102,241,0.12)] hover:scale-[1.02] transition-transform"
                      >
                        Read Full Story
                      </button>

                      <button
                        onClick={() => setExpanded(false)}
                        className="px-4 py-2 rounded-full bg-transparent border border-white/8 text-white font-medium hover:bg-white/4 transition"
                      >
                        Collapse
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* collapsed hint */}
                  <div className="glass-3d p-4 rounded-2xl border border-white/6 flex items-center justify-between">
                    <p className="text-sm text-foreground/90">Click <strong>Learn More</strong> to read a short, powerful account of my father's sacrifice.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* CTA Buttons */}
          <div className="text-center">
            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 }}
              onClick={() => setExpanded((s) => !s)}
              className="mt-4 px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-primary to-cosmic-gold text-primary-foreground shadow-[0_14px_30px_rgba(99,102,241,0.12)] hover:scale-[1.02] transition-transform"
            >
              {expanded ? "Show Less" : "Learn More"}
            </motion.button>
          </div>
        </div>
      </div>

      {/* FULL STORY MODAL (heavy text, animated) */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            aria-modal="true"
            role="dialog"
          >
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />

            <motion.div
              initial={{ y: 24, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 12, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-60 max-w-4xl w-full max-h-[85vh] overflow-hidden rounded-2xl border border-white/6 glass-3d shadow-[0_30px_80px_rgba(2,6,23,0.7)]"
            >
              {/* modal header */}
              <div className="flex items-center justify-between p-4 border-b border-white/6">
                <h3 className="text-lg font-semibold text-gradient-gold">Silent Warrior — Full Story</h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition"
                  aria-label="Close full story"
                >
                  <FaTimes className="text-white" />
                </button>
              </div>

              {/* modal content */}
              <div className="p-6 overflow-y-auto max-h-[70vh] space-y-4 text-foreground/90 leading-relaxed whitespace-pre-line">
                {/* story text */}
                {fullStory.split("\n\n").map((paragraph, i) => (
                  <motion.p key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02, duration: 0.28 }} className="text-sm">
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <div className="p-4 border-t border-white/6 flex items-center justify-end gap-4">
                <button
                  onClick={() => {
                    // close modal
                    setModalOpen(false);
                  }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-cosmic-cyan text-white font-semibold"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
