import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  { nameEn: 'Ahmed Al Maktoum', nameAr: 'أحمد المكتوم', rating: 5, en: 'APEX FITNESS transformed my lifestyle. The trainers are world-class and the facility is unmatched in Dubai.', ar: 'غيّر APEX FITNESS نمط حياتي. المدربون على مستوى عالمي والمرافق لا مثيل لها في دبي.' },
  { nameEn: 'Sarah Mitchell', nameAr: 'سارة ميتشل', rating: 5, en: 'Lost 15kg in 4 months with their personalized program. The nutrition coaching made all the difference.', ar: 'فقدت 15 كجم في 4 أشهر مع برنامجهم المخصص. التدريب الغذائي أحدث فرقاً كبيراً.' },
  { nameEn: 'Rashid Al Noor', nameAr: 'راشد النور', rating: 5, en: 'Premium experience from start to finish. The elite membership is worth every dirham.', ar: 'تجربة فاخرة من البداية للنهاية. عضوية إليت تستحق كل درهم.' },
];

const Testimonials = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {t('Testimonials', 'آراء العملاء')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            {t('What Members ', 'ماذا يقول ')}<span className="gradient-text">{t('Say', 'أعضاؤنا')}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="glass-card p-8 sm:p-12">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg sm:text-xl leading-relaxed mb-6 text-muted-foreground italic">
              "{t(testimonials[current].en, testimonials[current].ar)}"
            </p>
            <p className="font-semibold text-foreground">
              {t(testimonials[current].nameEn, testimonials[current].nameAr)}
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
