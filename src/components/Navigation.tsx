import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaGlobe, FaTimes } from 'react-icons/fa';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpeg'; // ✅ FIXED IMPORT (no curly braces)

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Rec', href: '#recomandation' },
  { name: 'Skills', href: '#skills' },
  // project
  { name: 'Achievements', href: '#achievements' },
  { name: 'Proud Moment', href: '#proud-moment' },
  { name: 'Certificates', href: '#certificates' },
  // services
  { name: 'Services', href: '#services' },
  { name: 'Journey', href: '#journey' },
  { name: "Father's Story", href: '#motivation' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'bn' as const, name: 'বাংলা', flag: '🇧🇩' },
    { code: 'ar' as const, name: 'العربية', flag: '🇸🇦' },
  ];

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* ✅ Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#hero')}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/40 shadow-md">
              <img
                src={logo}
                alt="Sultan - Md. Sultan Mahmud Dewan"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-xl font-bold text-gradient-gold tracking-wide">
              SULTAN
            </h1>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    style={{ filter: 'drop-shadow(0 0 8px hsl(45 100% 60%))' }}
                  />
                )}
              </button>
            ))}

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="w-4 h-4 text-primary" />
              ) : (
                <FaMoon className="w-4 h-4 text-cosmic-purple" />
              )}
            </motion.button>

            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors flex items-center gap-2"
                aria-label="Change language"
              >
                <FaGlobe className="w-4 h-4 text-cosmic-cyan" />
                <span className="text-xs">
                  {languages.find((l) => l.code === language)?.flag}
                </span>
              </motion.button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 glass-effect rounded-lg p-2 min-w-[150px]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors flex items-center gap-2 ${
                          language === lang.code
                            ? 'bg-primary/20 text-primary'
                            : 'hover:bg-muted/50 text-foreground'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ✅ Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass-effect absolute top-full left-0 w-full shadow-lg backdrop-blur-xl"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              <div className="flex gap-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <FaSun className="w-4 h-4 text-primary" />
                  ) : (
                    <FaMoon className="w-4 h-4 text-cosmic-purple" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                >
                  <FaGlobe className="w-4 h-4 text-cosmic-cyan" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
