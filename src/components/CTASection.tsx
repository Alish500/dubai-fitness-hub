import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              {t('Start Today', 'ابدأ اليوم')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide mb-4">
              {t('Begin Your ', 'ابدأ رحلة ')}<span className="gradient-text">{t('Journey', 'التحول')}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t(
                'Take the first step towards your best self. Join APEX FITNESS today and experience Dubai\'s premier fitness destination.',
                'اتخذ الخطوة الأولى نحو أفضل نسخة منك. انضم إلى APEX FITNESS اليوم واختبر أفضل وجهة لياقة في دبي.'
              )}
            </p>
            <div className="glass-card inline-block px-4 py-2 text-sm">
              <span className="text-primary font-semibold">🔥 {t('Limited slots available this month!', 'أماكن محدودة متاحة هذا الشهر!')}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {submitted ? (
              <div className="glass-card p-12 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-display text-2xl mb-2">{t('Welcome to APEX!', 'مرحباً في APEX!')}</h3>
                <p className="text-muted-foreground">{t('We\'ll be in touch within 24 hours.', 'سنتواصل معك خلال 24 ساعة.')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">{t('Full Name', 'الاسم الكامل')}</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder={t('Enter your name', 'أدخل اسمك')}
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">{t('Phone', 'الهاتف')}</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder={t('+971 XX XXX XXXX', '+971 XX XXX XXXX')}
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">{t('Email', 'البريد الإلكتروني')}</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder={t('your@email.com', 'بريدك@email.com')}
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">{t('Preferred Plan', 'الخطة المفضلة')}</label>
                  <select className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all">
                    <option value="basic">{t('Basic — AED 199/mo', 'أساسي — 199 درهم/شهر')}</option>
                    <option value="pro">{t('Pro — AED 349/mo', 'برو — 349 درهم/شهر')}</option>
                    <option value="elite">{t('Elite — AED 599/mo', 'إليت — 599 درهم/شهر')}</option>
                  </select>
                </div>
                <button type="submit" className="w-full gradient-btn py-4 text-base">
                  {t('Start Your Fitness Journey', 'ابدأ رحلة لياقتك')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
