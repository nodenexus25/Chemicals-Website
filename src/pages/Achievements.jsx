import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import AchievementCard from '../components/shared/AchievementCard';
import CTAButton from '../components/shared/CTAButton';
import { achievements, certifications } from '../data/achievements';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import defaultImages from '../data/defaultImages';

const Achievements = () => {
  return (
    <>
      <Helmet>
        <title>Achievements & Awards | Sanjivani Chemical Division</title>
        <meta name="description" content="Industry firsts — Maharashtra's ESJ ethanol pioneer, India's largest cooperative hand sanitizer producer, circular bio-energy, and 8+ international certifications." />
        <meta name="keywords" content="chemical industry awards Maharashtra, ethanol innovation India, Sanjivani achievements, ISO certifications" />
      </Helmet>

      <PageHeader
        title="A history of firsts, in service of Maharashtra."
        subtitle="Every achievement below represents a milestone where Sanjivani Chemical Division raised the bar — for cooperatives, for Maharashtra industry, and for sustainable manufacturing in India."
        breadcrumbItems={[{ label: 'Achievements' }]}
        bgImage={defaultImages.pageHeaders.achievements}
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white rounded-3xl p-6 md:p-7 border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-400 hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-industrial-green/10 to-steel-blue/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center text-white shadow-lg mb-5 group-hover:scale-105 transition-transform duration-300">
                    <Award size={24} strokeWidth={2.1} />
                  </div>
                  <p className="text-lg md:text-xl font-black tracking-tight text-neutral-dark mb-1.5 leading-tight">
                    {c.name}
                  </p>
                  <p className="text-xs md:text-sm text-neutral-dark/55 font-semibold uppercase tracking-wider mt-1">
                    {c.category}
                  </p>
                  <div className="mt-5 pt-4 border-t border-neutral-light flex items-center gap-2 text-xs font-semibold text-industrial-green">
                    <CheckCircle2 size={13} strokeWidth={3} />
                    Valid & Current
                  </div>
                </div>
              </motion.div>
            ))}
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
