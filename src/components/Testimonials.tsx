import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import member1 from '@/assets/member1.jpg';
import member2 from '@/assets/member2.jpg';
import member3 from '@/assets/member3.jpg';
import member4 from '@/assets/member4.jpg';
import member5 from '@/assets/member5.jpg';
import member6 from '@/assets/member6.jpg';

const testimonials = [
  { img: member1, nameEn: 'Khalid Farooq', nameAr: 'خالد فاروق', rating: 5, en: 'APEX FITNESS transformed my lifestyle. The trainers are world-class and the facility is unmatched in Dubai. I\'ve never felt more motivated and supported in my fitness journey.', ar: 'غيّر APEX FITNESS نمط حياتي. المدربون على مستوى عالمي والمرافق لا مثيل لها في دبي. لم أشعر أبداً بمزيد من التحفيز والدعم في رحلة لياقتي.' },
  { img: member2, nameEn: 'Elena Torres', nameAr: 'إيلينا توريس', rating: 5, en: 'Lost 15kg in 4 months with their personalized program. The nutrition coaching made all the difference. Highly recommend to anyone serious about results.', ar: 'فقدت 15 كجم في 4 أشهر مع برنامجهم المخصص. التدريب الغذائي أحدث فرقاً كبيراً. أنصح به بشدة لكل من يريد نتائج حقيقية.' },
  { img: member3, nameEn: 'David Chen', nameAr: 'ديفيد تشين', rating: 5, en: 'Premium experience from start to finish. The elite membership is worth every dirham. The coaches truly care about your progress.', ar: 'تجربة فاخرة من البداية للنهاية. عضوية إليت تستحق كل درهم. المدربون يهتمون حقاً بتقدمك.' },
  { img: member4, nameEn: 'Priya Sharma', nameAr: 'بريا شارما', rating: 5, en: 'The group classes are incredible — high energy and so well structured. I look forward to every session. Best gym experience I\'ve had anywhere.', ar: 'الفصول الجماعية رائعة — طاقة عالية ومنظمة بشكل ممتاز. أتطلع لكل جلسة. أفضل تجربة صالة رياضية مررت بها.' },
  { img: member5, nameEn: 'James Walker', nameAr: 'جيمس ووكر', rating: 5, en: 'Gained 8kg of lean muscle in 6 months. The strength coaching here is next level. Clean facility, great vibes, and results that speak for themselves.', ar: 'اكتسبت 8 كجم من العضلات في 6 أشهر. تدريب القوة هنا على مستوى آخر. مرافق نظيفة وأجواء رائعة ونتائج تتحدث عن نفسها.' },
  { img: member6, nameEn: 'Linda Hoffmann', nameAr: 'ليندا هوفمان', rating: 5, en: 'As a busy professional, I needed a gym that respects my time. APEX delivers — efficient sessions, zero waiting, and trainers who maximize every minute.', ar: 'كمحترفة مشغولة، كنت أحتاج صالة تحترم وقتي. APEX يقدم ذلك — جلسات فعالة، بدون انتظار، ومدربون يستغلون كل دقيقة.' },
];

const GROUP_SIZE = 3;

const Testimonials = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);

  const groupIndex = Math.floor(current / GROUP_SIZE);
  const groupStart = groupIndex * GROUP_SIZE;
  const currentGroup = testimonials.slice(groupStart, groupStart + GROUP_SIZE);
  const indexInGroup = current % GROUP_SIZE;

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const positions = [
    { top: '0%', left: '25%' },
    { top: '40%', left: '0%' },
    { top: '40%', left: '55%' },
  ];

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {t('Reviews', 'آراء العملاء')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            {t('YOUR ', 'آراء ')}<span className="gradient-text">{t('OPINIONS', 'أعضائنا')}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-[auto_1fr] gap-10 items-center"
        >
          {/* Avatar cluster */}
          <div className="relative w-64 h-64 mx-auto md:mx-0 shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {currentGroup.map((item, i) => (
                  <button
                    key={groupStart + i}
                    onClick={() => setCurrent(groupStart + i)}
                    className={`absolute w-24 h-24 rounded-full overflow-hidden border-4 transition-all duration-300 ${
                      i === indexInGroup
                        ? 'border-primary scale-110 ring-4 ring-primary/20 z-10'
                        : 'border-border hover:border-primary/40 z-0'
                    }`}
                    style={{ top: positions[i].top, left: positions[i].left }}
                  >
                    <img
                      src={item.img}
                      alt={t(item.nameEn, item.nameAr)}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial content */}
          <div className="min-h-[200px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-semibold text-xl mb-1">
                  {t(testimonials[current].nameEn, testimonials[current].nameAr)}
                </h3>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  "{t(testimonials[current].en, testimonials[current].ar)}"
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
