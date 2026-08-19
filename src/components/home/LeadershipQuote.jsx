import { motion } from 'framer-motion';
import { Quote, Award, Users } from 'lucide-react';
import CTAButton from '../shared/CTAButton';
import defaultImages from '../../data/defaultImages';

const LeadershipQuote = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-light via-white to-neutral-light/70" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[45%] h-[140%] bg-gradient-to-r from-industrial-green/[0.04] to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-industrial-green/30 via-accent-amber/20 to-steel-blue/30 rounded-[2.5rem] blur-2xl opacity-70" />
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl bg-gradient-to-br from-neutral-light via-white to-neutral-light">
                <img
                  src={defaultImages.home.leadership}
                  alt="Hon'ble President Shri. Bipindada Kolhe Saheb"
                  loading="lazy"
                  className="w-full h-full object-contain object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 inset-x-5 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-industrial-green/10 text-industrial-green text-[10px] font-bold tracking-wider uppercase">
                      <Award size={11} />
                      President
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-amber/15 text-accent-amber text-[10px] font-bold tracking-wider uppercase">
                      <Users size={11} />
                      40+ yrs
                    </span>
                  </div>
                  <p className="text-lg font-bold tracking-tight text-neutral-dark">Shri. Bipindada Kolhe Saheb</p>
                  <p className="text-xs text-steel-blue font-semibold mt-0.5">Hon'ble President, Sanjivani Group</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-amber/15 text-accent-amber text-xs font-bold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-amber" />
              From the President's Desk
            </div>

            <div className="relative">
              <Quote
                size={72}
                className="absolute -top-6 -left-2 text-industrial-green/10 stroke-[1px]"
                strokeWidth={1}
              />
              <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.03em] text-neutral-dark leading-[1.18]">
                "We didn't build a chemical plant —{' '}
                <span className="bg-gradient-to-br from-industrial-green to-steel-blue bg-clip-text text-transparent">
                  we built a promise.
                </span>{' '}
                A promise that every grain from our farmer members returns multiplied value to our community, to industry, and to the land that feeds us."
              </h2>
            </div>

            <p className="mt-8 md:mt-10 text-base md:text-lg text-neutral-dark/65 leading-relaxed max-w-2xl">
              Under his visionary leadership, Sanjivani became Maharashtra's first cooperative sugar factory to
              manufacture ethanol directly from Enzymatic Sugar Juice — a breakthrough that linked farm prosperity to
              national energy security and positioned Sanjivani Chemical Division as a benchmark for sustainable
              industrial cooperatives across India.
            </p>

            <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 border-t border-neutral-light pt-8 md:pt-10">
              {[
                { v: '50K+', l: 'Farmer Members' },
                { v: '1985', l: 'Division Founded' },
                { v: '7', l: 'Specialized Plants' },
                { v: '8+', l: 'Export Markets' },
              ].map((s, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-2xl md:text-3xl font-black tracking-tight bg-gradient-to-br from-industrial-green to-steel-blue bg-clip-text text-transparent">{s.v}</p>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-dark/45 font-semibold leading-tight">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
              <CTAButton to="/about" variant="primaryGreen" size="md">
                Our Journey & Story
              </CTAButton>
              <CTAButton to="/contact" variant="secondary" size="md">
                Partner With Us
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipQuote;
