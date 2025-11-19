import { motion } from "framer-motion";
import { FaBookOpen, FaLaptopCode, FaMapMarkedAlt } from "react-icons/fa";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-gradient-gold mb-4">
            Services — Bridging Knowledge & Innovation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A blend of education, technology, and real-world surveying experience.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="grid lg:grid-cols-3 gap-12">

          {/* 01. Tutoring & Mentorship */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 border border-cosmic-purple/30 hover:-translate-y-2 hover:shadow-cosmic-cyan/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaBookOpen className="text-cosmic-cyan text-3xl" />
              <h3 className="text-2xl font-semibold text-primary">Tutoring & Mentorship</h3>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="text-primary font-semibold mb-1">Subjects I Teach</h4>
                <ul className="list-disc ml-6">
                  <li>Mathematics</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>ICT</li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-1">Who I Teach</h4>
                <ul className="list-disc ml-6">
                  <li>SSC & HSC students</li>
                  <li>BUET/CUET/RUET/IUT admission candidates</li>
                  <li>University admission candidates</li>
                  <li>Olympiad learners</li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-1">How I Teach</h4>
                <ul className="list-disc ml-6">
                  <li>Clear & slow-paced explanations</li>
                  <li>Concept-based deep learning</li>
                  <li>Step-by-step problem-solving</li>
                  <li>Personalized guidance</li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-1">What I Provide</h4>
                <ul className="list-disc ml-6">
                  <li>Handwritten & digital notes</li>
                  <li>Model tests & chapter-wise problems</li>
                  <li>Live online doubt-solving sessions</li>
                  <li>Admission short syllabus strategy</li>
                </ul>
              </div>

              <p className="italic text-foreground pt-2">
                “Building strong concepts, confidence & analytical thinking.”
              </p>
            </div>
          </motion.div>

          {/* 02. Technological Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 border border-cosmic-purple/30 hover:-translate-y-2 hover:shadow-cosmic-cyan/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaLaptopCode className="text-cosmic-purple text-3xl" />
              <h3 className="text-2xl font-semibold text-primary">Technological Services</h3>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="text-primary font-semibold mb-1">Web & Tech Development</h4>
                <ul className="list-disc ml-6">
                  <li>Responsive websites</li>
                  <li>Frontend UI/UX</li>
                  <li>Bug fixing & optimization</li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-1">Digital Content</h4>
                <ul className="list-disc ml-6">
                  <li>Educational notes & diagrams</li>
                  <li>YouTube class content</li>
                  <li>Visual learning tools</li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-1">Tech Consultation</h4>
                <ul className="list-disc ml-6">
                  <li>Portfolio & branding guidance</li>
                  <li>Career roadmap</li>
                  <li>Coding mentorship</li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-1">EdTech Integration</h4>
                <ul className="list-disc ml-6">
                  <li>PhET simulations</li>
                  <li>Google Classroom</li>
                  <li>Canva learning materials</li>
                </ul>
              </div>

              <p className="italic text-foreground pt-2">
                “Making learning interactive & accessible.”
              </p>
            </div>
          </motion.div>

          {/* 03. Land Surveying Services */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8 border border-cosmic-purple/30 hover:-translate-y-2 hover:shadow-cosmic-cyan/30 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaMapMarkedAlt className="text-cosmic-gold text-3xl" />
              <h3 className="text-2xl font-semibold text-primary">Land Surveying Services</h3>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="text-primary font-semibold mb-1">Professional Land Work</h4>
                <ul className="list-disc ml-6">
                  <li>Accurate land measurement</li>
                  <li>A+ Aminship certified services</li>
                  <li>Boundary marking & verification</li>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-semibold mb-1">Mapping & Legal Support</h4>
                <ul className="list-disc ml-6">
                  <li>Map preparation</li>
                  <li>Property record verification</li>
                </ul>
              </div>

              <p className="italic text-foreground pt-2">
                “Precision, honesty & transparency in every measurement.”
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
