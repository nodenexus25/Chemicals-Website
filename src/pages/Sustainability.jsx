import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import defaultImages from '../data/defaultImages';
import CTAButton from '../components/shared/CTAButton';
import { plants } from '../data/plants';
import { products } from '../data/products';
import {
  Leaf, Droplets, Flame, Zap, Factory,
  ArrowRight, CheckCircle2, Recycle, Globe2, Trees
} from 'lucide-react';

const pillars = [
  {
    icon: Droplets,
    tag: 'Pillar 01',
    title: 'ESJ-to-Ethanol — Renewable from the Root',
    color: 'from-cyan-500 to-steel-blue',
    points: [
      'Maharashtra\'s 1st cooperative to produce ethanol directly from Enzymatic Sugar Juice',
      'Bypasses sugar crystallization — higher sugar recovery, lower energy per litre',
      'Supports India\'s EBP (Ethanol Blended Petrol) national program',
      'Produces both Anhydrous (99.9%) and Rectified (96.4%) Spirit grades',
    ],
  },
  {
    icon: Flame,
    tag: 'Pillar 02',
    title: 'Bio-Gas — Every Drop of Spent Wash',
    color: 'from-amber-500 to-accent-amber',
    points: [
      '100% of distillery spent wash & press mud anaerobically digested',
      'Raw bio-gas sweetened via amine scrubbing & Sulphur Recovery Division',
      'Clean methane fuels Acetic Anhydride plant & Co-Gen engines',
      'Eliminates organic waste landfill disposal entirely',
    ],
  },
  {
    icon: Zap,
    tag: 'Pillar 03',
    title: 'Co-Generation — Power with Purpose',
    color: 'from-sky-500 to-indigo-600',
    points: [
      '12 MW CHP plant — bagasse (seasonal) + bio-gas (year-round) + coal blend',
      'Exhaust steam used for ethanol distillation & chemical process heat',
      'Surplus electricity exported to MSEDCL grid during crushing season',
      '10,000+ rural households powered via renewable export',
    ],
  },
  {
    icon: Recycle,
    tag: 'Pillar 04',
    title: 'Sulphur Recovery — Closing the Loop',
    color: 'from-industrial-green to-emerald-600',
    points: [
      'H₂S removed from bio-gas prevents corrosion & extends engine life',
      'Recovered sulphur processed into commercial-grade elemental sulphur',
      'Enables CPCB compliance for stack emissions',
      'Every tonne of recovered sulphur avoids new mining demand',
    ],
  },
];

const metrics = [
  { icon: Globe2, v: '25,000+', l: 'Tonnes CO₂ Offset / yr' },
  { icon: Leaf, v: '100%', l: 'Organic Residues Reused' },
  { icon: Trees, v: '125,000+', l: 'Tree Equivalents Planted' },
  { icon: Factory, v: 'ZLD', l: 'Zero Liquid Discharge' },
];

const Sustainability = () => {
  return (
    <>
      <Helmet>
        <title>Sustainability | Sanjivani Chemical Division — Circular Bio-Energy</title>
        <meta name="description" content="Sanjivani's 4-pillar circular bio-energy model: ESJ ethanol, bio-gas digestion, 12 MW co-generation, and sulphur recovery. 25,000+ tonnes CO₂ offset per year." />
        <meta name="keywords" content="circular economy chemical industry, ESJ ethanol sustainability, bio-gas power, zero liquid discharge, carbon offset Maharashtra" />
      </Helmet>

      <PageHeader
        title="A chemical complex that returns more than it takes."
        subtitle="Our 4-pillar Circular Bio-Energy Model turns sugarcane into ethanol, residues into bio-gas, bio-gas into electricity — and every waste stream back into productive value. Maharashtra's integrated benchmark for industrial sustainability."
        breadcrumbItems={[{ label: 'Sustainability' }]}
        accent="green"
        bgImage={defaultImages.pageHeaders.sustainability}
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-20 md:mb-28">
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.l}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative p-6 md:p-8 rounded-3xl bg-white border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-gradient-to-br from-industrial-green/8 to-accent-amber/8 opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center text-white mb-5 group-hover:scale-105 transition-transform duration-300">
                      <Icon size={22} strokeWidth={2.1} />
                    </div>
                    <p className="text-3xl md:text-4xl font-black tracking-tighter bg-gradient-to-br from-industrial-green to-steel-blue bg-clip-text text-transparent">
                      {m.v}
                    </p>
                    <p className="text-[11px] md:text-xs uppercase tracking-wider text-neutral-dark/45 font-bold mt-1.5 leading-tight">
                      {m.l}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="max-w-3xl mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-green/10 text-industrial-green text-xs font-bold tracking-wider uppercase mb-5">
              <Leaf size={12} />
              Four Pillar Model
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-5">
              From soil to shelf —{' '}
              <span className="bg-gradient-to-br from-industrial-green to-steel-blue bg-clip-text text-transparent">
                every stage is circular.
              </span>
            </h2>
            <p className="text-base md:text-lg text-neutral-dark/65 leading-relaxed">
              We don't have "waste" — only streams we haven't yet found a purpose for. Explore how each of the four
              sustainability pillars below turns a conventional "output" into the next system's input.
            </p>
          </div>

          <div className="space-y-6 md:space-y-7">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              const isReversed = i % 2 === 1;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.75, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-7 md:p-10 lg:p-12 rounded-[2.5rem] bg-white border border-neutral-light shadow-card overflow-hidden ${isReversed ? '' : ''}`}
                >
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className={`relative rounded-[2rem] overflow-hidden aspect-[5/4] shadow-xl`}>
                      <img
                        src={plants[i % plants.length].image}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1000ms] hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/60 via-transparent to-transparent" />
                      <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-bold tracking-wide">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${p.color}`} />
                        {p.tag}
                      </div>
                    </div>
                  </div>

                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${p.color} bg-opacity-10 mb-4`}>
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-md`}>
                        <Icon size={18} strokeWidth={2.2} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-dark/75 pl-1">{p.tag.replace('Pillar ', 'Pillar · ')}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-[-0.03em] text-neutral-dark leading-[1.1] mb-5 max-w-2xl">
                      {p.title}
                    </h3>
                    <ul className="space-y-3 md:space-y-3.5 max-w-2xl">
                      {p.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-3.5">
                          <span className="w-6 h-6 rounded-lg bg-industrial-green/10 flex items-center justify-center text-industrial-green shrink-0 mt-0.5">
                            <CheckCircle2 size={14} strokeWidth={3} />
                          </span>
                          <span className="text-sm md:text-[15px] leading-relaxed text-neutral-dark/75">{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <CTAButton to={`/plants/${['esj-to-ethanol', 'bio-gas-division', 'co-generation-division', 'sulphur-recovery'][i]}`} variant="primaryGreen" size="md">
                        Explore the Plant
                      </CTAButton>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-dark/55 group cursor-pointer">
                        Read Technical Whitepaper
                        <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-steel-blue to-industrial-green" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,163,61,0.2),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.06),transparent_55%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-amber" />
                Environmental Commitment
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] leading-[1.05] mb-6">
                Our commitment: <span className="bg-gradient-to-r from-accent-amber to-amber-200 bg-clip-text text-transparent">net-zero process emissions by 2038</span>.
              </h2>
              <p className="text-base md:text-lg text-white/75 leading-relaxed mb-8 max-w-2xl">
                The Sustainability 2.0 roadmap commits the Chemical Division to a 42% reduction in scope 1 & 2 emissions
                by 2030 and net-zero process emissions by 2038 — fully aligned with India's Panchamrit climate pledges.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  { v: '-42%', l: 'Emissions by 2030' },
                  { v: '50%', l: 'Renewable Energy' },
                  { v: 'ZLD', l: 'Zero Liquid Discharge' },
                ].map((s, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <p className="text-2xl md:text-3xl font-black tracking-tight text-accent-amber">{s.v}</p>
                    <p className="text-[11px] uppercase tracking-wider text-white/60 font-semibold mt-1 leading-tight">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-7 md:p-9 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-6">ESG Focus Areas · FY 2025–2030</h3>
                <div className="space-y-4">
                  {[
                    { k: 'Solar Rooftop Addition', v: 75, l: '7.5 MW Target' },
                    { k: 'Process Steam Electrification', v: 30, l: '30% by 2028' },
                    { k: 'Carbon Accounting (ISO 14064)', v: 100, l: 'Full Plant Coverage' },
                    { k: 'Farmer Sustainable Cane Program', v: 60, l: '60% Members Enrolled' },
                  ].map((bar, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold text-white/90">{bar.k}</p>
                        <p className="text-xs text-accent-amber font-bold">{bar.l}</p>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.v}%` }}
                          viewport={{ once: true, margin: '-40px' }}
                          transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            i === 0 ? 'from-accent-amber to-amber-300' :
                            i === 1 ? 'from-sky-400 to-indigo-400' :
                            i === 2 ? 'from-industrial-green to-emerald-400' :
                            'from-steel-blue to-cyan-400'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-sm text-white/65 max-w-md">
                    Download the complete ESG & Sustainability Report (PDF · 2.1 MB) for audited scope 1-3 emissions, water stewardship & community impact data.
                  </p>
                  <CTAButton variant="primary" size="md">
                    Download PDF Report
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sustainability;
