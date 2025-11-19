import { motion } from "framer-motion";
import { FaPlayCircle, FaFileAlt } from "react-icons/fa";

export default function DemoClassesSection() {
  const demoVideos = [
    {
      subject: "Physics",
      url: "https://drive.google.com/file/d/14B0Xa8xHTKKr84K9iML0QSKBbmazMJsL/preview",
    },
    {
      subject: "Chemistry",
      url: "https://drive.google.com/file/d/1O0aDCzpMl7orQQQb4hYj-0qGgAdJeoUQ/preview",
    },
    {
      subject: "Mathematics",
      url: "https://drive.google.com/file/d/1HjA6zj9jafdRBjnylO6UeqSxlgy4jWpp/preview",
    },
  ];

  const notes = [
    {
      title: "Digital Note – Chemistry (Google Drive)",
      link: "https://drive.google.com/file/d/1v75qW1hRKnzpWyZ5JsB5HJsoU5Oo3Xhu/view",
    },
    {
      title: "Handwritten Note – Chemistry (Adobe)",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:1b52c8e0-3df7-46be-a924-7c5c642963bd",
    },
    {
      title: "Digital Note – Chemistry (Drive 2)",
      link: "https://drive.google.com/file/d/1wDUc4QppcjxXtmcc-8NqQtbX5by-Oge0/view",
    },
  ];

  return (
    <section id="demo-classes" className="py-24 px-4">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
          
        >
          <h2 className="text-5xl font-bold text-gradient-gold mb-4">
             Classes & Study Notes (HSC and Admission label)
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience my teaching style through interactive demo classes and structured study materials.
          </p>
        </motion.div>

        {/* ONLINE / DEMO CLASSES */}
        <h3 className="text-3xl font-bold text-primary mb-8">
          Online  Classes
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {demoVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-5 border border-cosmic-purple/30 
              hover:-translate-y-2 hover:shadow-cosmic-cyan/40 transition-all duration-500"
            >
              {/* Animated Video Thumbnail */}
              <motion.div
                whileHover={{
                  scale: 1.07,
                  rotateX: 10,
                  rotateY: -10,
                }}
                className="w-full h-48 rounded-xl bg-gradient-to-br 
                from-cosmic-purple/40 to-cosmic-cyan/20 border
                border-cosmic-purple/20 shadow-inner relative overflow-hidden
                flex items-center justify-center"
              >
                {/* Glow sweep */}
                <motion.div
                  initial={{ x: "-150%" }}
                  animate={{ x: "200%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute top-0 left-0 w-1/3 h-full
                  bg-gradient-to-r from-transparent via-cosmic-cyan/20 to-transparent rotate-12"
                />

                {/* Floating icon */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <FaPlayCircle className="text-6xl text-cosmic-cyan drop-shadow-2xl" />
                </motion.div>
              </motion.div>

              {/* Title */}
              <h4 className="text-xl font-semibold text-primary mt-4 mb-3">
                {video.subject}  Class
              </h4>

              {/* Video iframe */}
              <iframe
                src={video.url}
                className="w-full h-48 rounded-xl border border-cosmic-purple/30"
              ></iframe>
            </motion.div>
          ))}
        </div>

        {/* STUDY NOTES */}
        <h3 className="text-3xl font-bold text-primary mb-10 text-center">
          Downloadable Study Notes
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-effect p-5 rounded-xl border border-cosmic-purple/30 
              hover:-translate-y-2 transition-all duration-500 cursor-pointer 
              hover:shadow-cosmic-cyan/40 relative overflow-hidden"
            >
              {/* Animated Thumbnail */}
              <motion.div
                whileHover={{
                  scale: 1.07,
                  rotateX: 10,
                  rotateY: -10,
                }}
                className="w-full h-40 rounded-xl flex items-center justify-center 
                bg-gradient-to-br from-cosmic-purple/40 to-cosmic-cyan/20 
                border border-cosmic-purple/20 shadow-inner relative overflow-hidden"
              >
                {/* Particle sparkle */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cosmic-cyan/60 rounded-full blur-sm"
                    animate={{
                      x: [Math.random() * 100, Math.random() * 200 - 100],
                      y: [Math.random() * 100, Math.random() * 200 - 100],
                      opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                      duration: 2.5 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Floating bouncing icon */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FaFileAlt className="text-6xl text-cosmic-cyan drop-shadow-lg" />
                </motion.div>
              </motion.div>

              {/* Title */}
              <span className="text-lg text-primary font-semibold block mt-4 mb-3">
                {note.title}
              </span>

              {/* Buttons */}
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => window.open(note.link, "_blank")}
                  className="px-4 py-2 rounded-lg bg-cosmic-purple/80 text-white 
                  text-sm font-semibold shadow-md hover:bg-cosmic-cyan/90 transition"
                >
                  View
                </button>

                <button
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = note.link;
                    a.download = note.title.replace(/\s+/g, "_") + ".pdf";
                    a.click();
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm 
                  font-semibold shadow-md hover:bg-gray-600 transition"
                >
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
