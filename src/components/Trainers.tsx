import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import trainer1 from '@/assets/trainer1.jpg';
import trainer2 from '@/assets/trainer2.jpg';
import trainer3 from '@/assets/trainer3.jpg';

const trainers = [
  { img: trainer1, en: 'Marcus Reid', ar: 'ماركوس ريد', roleEn: 'Strength Coach', roleAr: 'مدرب قوة', specEn: '10+ years in competitive powerlifting', specAr: 'أكثر من 10 سنوات في رفع الأثقال التنافسي' },
  { img: trainer2, en: 'Layla Hassan', ar: 'ليلى حسن', roleEn: 'Fat Loss Expert', roleAr: 'خبيرة فقدان الدهون', specEn: 'Certified nutritionist & HIIT specialist', specAr: 'أخصائية تغذية معتمدة ومتخصصة في HIIT' },
  { img: trainer3, en: 'Omar Khalil', ar: 'عمر خليل', roleEn: 'Mobility Trainer', roleAr: 'مدرب مرونة', specEn: 'Functional movement & injury prevention', specAr: 'حركة وظيفية والوقاية من الإصابات' },
];

const Trainers = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="trainers" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {t('Our Team', 'فريقنا')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            {t('Meet Our ', 'تعرف على ')}<span className="gradient-text">{t('Trainers', 'مدربينا')}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((tr, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={tr.img}
                  alt={t(tr.en, tr.ar)}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                    {t(tr.roleEn, tr.roleAr)}
                  </span>
                </div>
              </div>
              <h3 className="font-semibold text-xl">{t(tr.en, tr.ar)}</h3>
              <p className="text-muted-foreground text-sm mt-1">{t(tr.specEn, tr.specAr)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
