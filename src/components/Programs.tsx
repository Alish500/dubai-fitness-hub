import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Target, UserCheck, Users, Zap, Apple } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const programs = [
  { icon: Flame, en: 'Strength Training', ar: 'تدريب القوة', descEn: 'Build raw power and muscle mass with proven progressive overload methods.', descAr: 'ابنِ القوة والكتلة العضلية مع أساليب التحميل التدريجي المثبتة.' },
  { icon: Target, en: 'Weight Loss', ar: 'فقدان الوزن', descEn: 'Science-backed fat loss programs combining cardio, strength, and nutrition.', descAr: 'برامج فقدان الدهون المبنية على العلم تجمع بين الكارديو والقوة والتغذية.' },
  { icon: UserCheck, en: 'Personal Training', ar: 'تدريب شخصي', descEn: 'One-on-one sessions with dedicated coaches for accelerated results.', descAr: 'جلسات فردية مع مدربين مخصصين لنتائج سريعة.' },
  { icon: Users, en: 'Group Classes', ar: 'فصول جماعية', descEn: 'High-energy group sessions from HIIT to yoga in a motivating environment.', descAr: 'جلسات جماعية عالية الطاقة من HIIT إلى اليوغا في بيئة محفزة.' },
  { icon: Zap, en: 'Functional Fitness', ar: 'اللياقة الوظيفية', descEn: 'Train movements, not muscles — improve everyday performance and mobility.', descAr: 'تدرب على الحركات وليس العضلات — حسّن أدائك اليومي وحركتك.' },
  { icon: Apple, en: 'Nutrition Coaching', ar: 'تدريب غذائي', descEn: 'Customized meal plans and ongoing support from certified nutritionists.', descAr: 'خطط وجبات مخصصة ودعم مستمر من أخصائيي تغذية معتمدين.' },
];

const Programs = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="programs" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {t('Our Programs', 'برامجنا')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            {t('Train Your ', 'درّب ')}<span className="gradient-text">{t('Way', 'بطريقتك')}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 hover-lift group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t(p.en, p.ar)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(p.descEn, p.descAr)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
