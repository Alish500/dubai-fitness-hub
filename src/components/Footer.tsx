import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import crypticaLogo from '@/assets/cryptica-digital.svg';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { en: 'Home', ar: 'الرئيسية', href: '#home' },
    { en: 'Programs', ar: 'البرامج', href: '#programs' },
    { en: 'Pricing', ar: 'الأسعار', href: '#pricing' },
    { en: 'Contact', ar: 'تواصل', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container-max section-padding py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl tracking-wider mb-4">
              APEX <span className="gradient-text">FITNESS</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "Dubai's premier luxury fitness destination. Push beyond limits, transform your life.",
                'وجهة اللياقة الفاخرة الأولى في دبي. تجاوز الحدود، حوّل حياتك.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('Quick Links', 'روابط سريعة')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {t(link.en, link.ar)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t('Contact', 'تواصل')}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                {t('Dubai Marina, UAE', 'دبي مارينا، الإمارات')}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +971 4 XXX XXXX
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                info@apexfitness.ae
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">{t('Follow Us', 'تابعنا')}</h4>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 APEX FITNESS. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}</p>
          <div className="flex items-center gap-2 text-xs">
            <span>{t('Made by', 'صنع بواسطة')}</span>
            <img src={crypticaLogo} alt="Cryptica Digital" className="h-5 inline-block" />
            <span className="font-semibold text-foreground">Cryptica Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
