import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import AchievementCard from '../components/shared/AchievementCard';
import CTAButton from '../components/shared/CTAButton';
import { achievements, certifications } from '../data/achievements';
import { ShieldCheck, Award } from 'lucide-react';
import defaultImages from '../data/defaultImages';

const certificationImages = [
  '/certifications/Screenshot 2026-10-07 122249.png',
  '/certifications/Screenshot 2026-10-07 122258.png',
  '/certifications/Screenshot 2026-10-07 122308.png',
  '/certifications/Screenshot 2026-10-07 122314.png',
  '/certifications/Screenshot 2026-10-07 122324.png',
  '/certifications/Screenshot 2026-10-07 122331.png',
  '/certifications/Screenshot 2026-10-07 122343.png',
  '/certifications/Screenshot 2026-10-07 122356.png',
];

const Achievements = () => {
  return (
    <>
      <Helmet>
        <title>Achievements & Awards | Sanjivani Chemical Division</title>
        <meta name="description" content="Industry firsts — Maharashtra's ESJ ethanol pioneer, India's largest cooperative hand sanitizer producer, circular bio-energy, and 8+ international certifications." />
        <meta name="keywords" content="chemical industry awards Maharashtra, ethanol innovation India, Sanjivani achievements, ISO certifications" />
      </Helmet>

      <PageHeader
        title="Industry firsts, built on cooperative heritage."
        subtitle="Milestones where Sanjivani Chemical raised the bar — for Maharashtra cooperatives, for Indian industry, and for sustainable manufacturing."
        breadcrumbItems={[{ label: 'Achievements' }]}
        bgImage={defaultImages.pageHeaders.achievements}
        accent="amber"
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {achievements.map((a, i) => (
              <AchievementCard key={a.title} achievement={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-neutral-light/60 border-y border-neutral-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-blue/10 text-steel-blue text-xs font-bold tracking-wider uppercase mb-5">
              <ShieldCheck size={12} />
              Certifications & Compliance
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-5">
              International standards. Verified. Documented. Audited.
            </h2>
            <p className="text-base md:text-lg text-neutral-dark/65 leading-relaxed">
              Our plants, laboratories and supply chain undergo rigorous third-party audits. Every certificate reflects
              a commitment to quality management, environmental stewardship, and operator safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {certifications.map((c, i) => {
              const imgSrc = certificationImages[i % certificationImages.length];
              return (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white rounded-3xl border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-0.5 overflow-hidden"
                >
                  <div className="aspect-[40/39] w-full overflow-hidden bg-neutral-light/70">
                    <img
                      src={imgSrc}
                      alt={`${c.name} certification`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector('.cert-fallback')) {
                          const fb = document.createElement('div');
                          fb.className = 'cert-fallback w-full h-full flex items-center justify-center';
                          fb.innerHTML = `
                            <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center text-white shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                            </div>
                          `;
                          parent.appendChild(fb);
                        }
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 lg:p-16 text-white bg-gradient-to-br from-industrial-green via-industrial-green/95 to-steel-blue"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,163,61,0.18),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent-amber/10 blur-3xl -translate-y-24 translate-x-24" />

            <div className="relative grid md:grid-cols-12 gap-8 md:gap-10 items-center">
              <div className="md:col-span-8">
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent-amber mb-4">
                  Awards & Partnerships
                </p>
                <h3 className="text-3xl md:text-5xl font-black tracking-[-0.035em] leading-[1.05] mb-4">
                  Have an award nomination, JV proposal, or R&D collaboration?
                </h3>
                <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">
                  Sanjivani Chemical Division actively partners with national research bodies, industry associations,
                  and state agencies on innovation, ESG reporting, and policy advocacy initiatives.
                </p>
              </div>
              <div className="md:col-span-4 md:flex md:justify-end">
                <CTAButton to="/contact" variant="primary" size="lg">
                  Partner With Us
                </CTAButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Achievements;
