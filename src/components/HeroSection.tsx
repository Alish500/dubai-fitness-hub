import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const AnimatedCounter = ({ target, suffix = '' }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: 5, suffix: '+', en: 'Years Experience', ar: 'سنوات خبرة' },
    { value: 1000, suffix: '+', en: 'Members', ar: 'عضو' },
    { value: 25, suffix: '+', en: 'Expert Trainers', ar: 'مدرب خبير' },
    { value: 95, suffix: '%', en: 'Satisfaction', ar: 'رضا العملاء' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Premium gym interior" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative container-max section-padding pt-32 sm:pt-40">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-semibold tracking-widest uppercase text-sm mb-4"
          >
            {t('Premium Fitness Club in Dubai', 'نادي اللياقة الفاخر في دبي')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl leading-none tracking-wide mb-6"
          >
            {t('Push Beyond', 'تجاوز')}{' '}
            <span className="gradient-text">{t('Limits', 'الحدود')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-xl mb-8 leading-relaxed"
          >
            {t(
              'Transform your body and mind with world-class equipment, expert trainers, and a community that pushes you to achieve greatness.',
              'حوّل جسدك وعقلك مع معدات عالمية المستوى ومدربين خبراء ومجتمع يدفعك لتحقيق العظمة.'
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="gradient-btn px-8 py-4 text-base">
              {t('Join Now', 'انضم الآن')}
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 text-base font-semibold border border-border rounded-xl hover:bg-secondary transition-colors duration-300"
            >
              {t('View Memberships', 'عرض العضويات')}
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-5 text-center">
              <div className="font-display text-3xl sm:text-4xl gradient-text">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-sm mt-1">{t(stat.en, stat.ar)}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
