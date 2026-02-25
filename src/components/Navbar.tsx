import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const navLinks = [
  { en: 'Home', ar: 'الرئيسية', href: '#home' },
  { en: 'Why Us', ar: 'لماذا نحن', href: '#why-us' },
  { en: 'Programs', ar: 'البرامج', href: '#programs' },
  { en: 'Trainers', ar: 'المدربون', href: '#trainers' },
  { en: 'Pricing', ar: 'الأسعار', href: '#pricing' },
  { en: 'Testimonials', ar: 'الآراء', href: '#testimonials' },
  { en: 'Contact', ar: 'تواصل', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggleLang, lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-display text-2xl sm:text-3xl tracking-wider">
          APEX <span className="gradient-text">FITNESS</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {t(link.en, link.ar)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <a href="#contact" className="gradient-btn px-5 py-2.5 text-sm">
            {t('Join Now', 'انضم الآن')}
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button onClick={toggleLang} className="text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(link.en, link.ar)}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="gradient-btn block text-center px-5 py-3">
                {t('Join Now', 'انضم الآن')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
