import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dumbbell, Users, ClipboardList, Apple } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const features = [
  { icon: Dumbbell, en: 'Expert Personal Trainers', ar: 'مدربون شخصيون خبراء', descEn: 'Certified professionals who design programs tailored to your unique goals and fitness level.', descAr: 'محترفون معتمدون يصممون برامج مخصصة لأهدافك ومستوى لياقتك.' },
  { icon: Users, en: 'Premium Equipment', ar: 'معدات فاخرة', descEn: 'State-of-the-art machines and free weights from the world\'s top fitness brands.', descAr: 'أحدث الأجهزة والأوزان الحرة من أفضل العلامات التجارية العالمية.' },
  { icon: ClipboardList, en: 'Custom Workout Plans', ar: 'خطط تمرين مخصصة', descEn: 'Personalized training programs that evolve with your progress and keep you challenged.', descAr: 'برامج تدريب شخصية تتطور مع تقدمك وتبقيك متحفزاً.' },
  { icon: Apple, en: 'Nutrition Guidance', ar: 'إرشاد غذائي', descEn: 'Expert nutrition advice and meal plans to fuel your transformation journey.', descAr: 'نصائح غذائية متخصصة وخطط وجبات لدعم رحلة التحول.' },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-us" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {t('Why Choose Us', 'لماذا تختارنا')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            {t('Built for ', 'مصمم من أجل ')}<span className="gradient-text">{t('Results', 'النتائج')}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t(f.en, f.ar)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(f.descEn, f.descAr)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
