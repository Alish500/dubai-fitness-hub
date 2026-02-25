import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const plans = [
  {
    en: 'Basic', ar: 'أساسي', price: '199',
    featuresEn: ['Gym access (6AM–10PM)', 'Locker room access', 'Free WiFi', 'Basic fitness assessment'],
    featuresAr: ['دخول الصالة (6ص–10م)', 'غرف تبديل الملابس', 'واي فاي مجاني', 'تقييم لياقة أساسي'],
    popular: false,
  },
  {
    en: 'Pro', ar: 'برو', price: '349',
    featuresEn: ['24/7 gym access', 'Group classes included', '2 PT sessions/month', 'Nutrition consultation', 'Sauna & steam room'],
    featuresAr: ['دخول الصالة 24/7', 'فصول جماعية مشمولة', 'جلستان تدريب شخصي/شهر', 'استشارة غذائية', 'ساونا وغرفة بخار'],
    popular: true,
  },
  {
    en: 'Elite', ar: 'إليت', price: '599',
    featuresEn: ['24/7 premium access', 'Unlimited group classes', '8 PT sessions/month', 'Custom meal plan', 'Recovery & spa access', 'Priority booking'],
    featuresAr: ['دخول فاخر 24/7', 'فصول جماعية غير محدودة', '8 جلسات تدريب شخصي/شهر', 'خطة وجبات مخصصة', 'دخول الاستشفاء والسبا', 'حجز بأولوية'],
    popular: false,
  },
];

const Pricing = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            {t('Membership', 'العضوية')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide">
            {t('Choose Your ', 'اختر ')}<span className="gradient-text">{t('Plan', 'خطتك')}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative glass-card p-8 hover-lift ${plan.popular ? 'border-primary/50 ring-1 ring-primary/30' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gradient-btn px-4 py-1 text-xs rounded-full">
                    {t('Most Popular', 'الأكثر شعبية')}
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl tracking-wider mb-4">{t(plan.en, plan.ar)}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-sm text-muted-foreground">AED</span>
                  <span className="font-display text-5xl gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/ {t('month', 'شهر')}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {(t(plan.featuresEn.join('|||'), plan.featuresAr.join('|||'))).split('|||').map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'gradient-btn'
                    : 'border border-border hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                {t('Choose Plan', 'اختر الخطة')}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
