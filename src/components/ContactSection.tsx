import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  FaEnvelope, FaTelegram, FaLinkedin, FaGithub, 
  FaFacebook, FaYoutube, FaWhatsapp, FaPhone 
} from 'react-icons/fa';

const socialLinks = [
  { icon: FaEnvelope, label: 'Email', value: 'sultan01764499956@gmail.com', href: 'mailto:sultan01764499956@gmail.com', color: 'text-primary' },
  { icon: FaTelegram, label: 'Telegram', value: '@Sultan01764499956', href: 'https://t.me/Sultan01764499956', color: 'text-cosmic-cyan' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'sultan-mahmud', href: 'https://linkedin.com/in/sultan-mahmud-1898a922a', color: 'text-blue-500' },
  { icon: FaGithub, label: 'GitHub', value: 'Sultan01764499956', href: 'https://github.com/Sultan01764499956', color: 'text-foreground' },
  { icon: FaFacebook, label: 'Facebook', value: 'Sultan', href: 'https://www.facebook.com/sultan.mahmud.153144', color: 'text-blue-600' },
  { icon: FaYoutube, label: 'YouTube', value: '@hsc-l5o', href: 'https://youtube.com/@hsc-l5o', color: 'text-red-500' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: '+880 1764499956', href: 'https://wa.me/8801764499956', color: 'text-green-500' },
  { icon: FaPhone, label: 'Phone', value: '+880 1764499956', href: 'tel:+8801764499956', color: 'text-cosmic-purple' },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold text-gradient-gold mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground">
            Share your thoughts or opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-effect p-8 rounded-2xl cosmic-border">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-cosmic-gold hover:opacity-90 text-primary-foreground shadow-[0_0_20px_hsl(45,100%,60%,0.4)]"
                >
                  Send Message 🚀
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-display font-bold text-cosmic-cyan mb-6">
              Connect With Me
            </h3>
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="glass-effect p-4 rounded-xl cosmic-border flex items-center gap-4 group"
              >
                <div className={`w-12 h-12 rounded-full bg-card/50 flex items-center justify-center ${link.color} group-hover:animate-float`}>
                  <link.icon className="text-2xl" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground/90 font-medium">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground italic">
            "Faith, effort, and sincerity — the foundation of every connection."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
