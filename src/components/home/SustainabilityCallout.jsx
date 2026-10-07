import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Leaf, Flame, Droplets, Zap, ChevronRight } from 'lucide-react';
import CTAButton from '../shared/CTAButton';
import defaultImages from '../../data/defaultImages';

const flowSteps = [
  { icon: Droplets, label: 'Enzymatic Sugar Juice', desc: 'Direct from sugar factory', accent: 'from-cyan-500 to-steel-blue' },
  { icon: Leaf, label: 'Ethanol Distillation', desc: 'ESJ → Fuel & Pharma Grade', accent: 'from-industrial-green to-emerald-600' },
  { icon: Flame, label: 'Bio-Gas Recovery', desc: 'Anaerobic digestion of residues', accent: 'from-amber-500 to-accent-amber' },
  { icon: Zap, label: 'Co-Gen Power', desc: '12 MW · Surplus to Grid', accent: 'from-sky-500 to-indigo-600' },
];

const SustainabilityCallout = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden text-white">
      <img
        src={defaultImages.home.sustainabilityCallout}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-industrial-green via-industrial-green/95 to-steel-blue" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,163,61,0.18),transparent_50%)]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.08),transparent_55%)]" />
      <svg className="absolute inset-0 w-full h-full opacity-[0.07] z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid-pat" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pat)" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-bold tracking-wider uppercase mb-5"
            >
              <Leaf size={12} />
              Circular Sustainability
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-3xl md:text-5xl lg:text-[3.25rem] font-black tracking-[-0.035em] leading-[1.05]"
            >
              Every by-product<br />
              is <span className="bg-gradient-to-r from-accent-amber via-amber-200 to-accent-amber bg-clip-text text-transparent">a resource.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 text-base md:text-lg text-white/75 leading-relaxed max-w-lg"
            >
              Sugar juice → ethanol → residues → bio-gas → process steam + grid power. Less waste. Lower emissions. Higher value for farmers, buyers and the planet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <CTAButton to="/sustainability" variant="primary" size="md">
                Sustainability Report
              </CTAButton>
              <Link
                to="/plants/bio-gas-division"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors group"
              >
                Explore Bio-Gas Plant
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-[2rem] p-6 md:p-8 lg:p-10 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/50">Circular Energy Flow</p>
                  <p className="text-lg md:text-xl font-bold mt-1.5">Sugar → Chemistry → Power</p>
                </div>
                <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent-amber/15 border border-accent-amber/30 text-accent-amber text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse" />
                  Continuous Loop
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 md:left-0 md:top-1/2 md:-translate-y-1/2 w-1 md:w-full h-full md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-cyan-400 via-industrial-green via-accent-amber to-sky-400 rounded-full opacity-60 -translate-x-1/2 md:translate-x-0" />

                <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-3">
                  {flowSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={i} className="relative flex md:block gap-4 items-start">
                        <div className={`relative z-10 shrink-0 w-14 h-14 md:mx-auto md:mb-5 rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-xl shadow-black/20 flex items-center justify-center ring-4 ring-white/10`}>
                          <Icon size={24} strokeWidth={2.1} />
                        </div>
                        {i < flowSteps.length - 1 && (
                          <div className="hidden md:flex absolute top-7 left-[70%] right-[-25%] items-center justify-center z-0">
                            <ChevronRight size={18} className="text-white/40" />
                          </div>
                        )}
                        <div className="md:text-center">
                          <p className="text-[11px] font-bold text-accent-amber tracking-wider uppercase mb-1.5">Step 0{i + 1}</p>
                          <h4 className="text-base md:text-lg font-bold leading-tight mb-1.5">{step.label}</h4>
                          <p className="text-xs md:text-sm text-white/65 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs md:text-sm text-white/60 leading-relaxed max-w-md">
                  * 100% of organic process residues are either anaerobically digested or composted back to farm soil.
                </p>
                <Link
                  to="/plants/co-generation-division"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur hover:bg-white/15 border border-white/10 text-sm font-semibold transition-colors"
                >
                  Visit Co-Gen Plant
                  <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityCallout;
