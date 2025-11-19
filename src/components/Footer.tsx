import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* SULTAN acronym */}
          <div className="glass-effect inline-block px-8 py-6 rounded-2xl">
            <h3 className="text-3xl font-display font-bold text-gradient-gold mb-4">
              SULTAN
            </h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-primary font-semibold">S</span>trength
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-primary font-semibold">U</span>nity
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-primary font-semibold">L</span>eadership
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-primary font-semibold">T</span>rust
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <span className="text-primary font-semibold">A</span>chievement
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <span className="text-primary font-semibold">N</span>obility
              </motion.p>
            </div>
          </div>

          {/* Final message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <p className="text-xl font-display text-gradient-cosmic">
              "Every ending is the beginning of something greater"
            </p>
            <p className="text-lg text-foreground/80">
              Thank you for being part of my journey through the stars
            </p>
          </motion.div>

          {/* Blessing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            className="pt-6 border-t border-border/30"
          >
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              May every star that guided me light your path too
              <FaHeart className="text-primary animate-glow-pulse" />
            </p>
          </motion.div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Md. Sultan Mahmud Dewan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
