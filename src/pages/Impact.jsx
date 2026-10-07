import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTAButton from '../components/CTAButton';
import FlowDiagram from '../components/FlowDiagram';
import {
  Leaf, Droplets, Flame, Zap, Recycle,
  ArrowRight, CheckCircle2,
} from 'lucide-react';
import defaultImages from '../data/defaultImages.js';
import { plants } from '../data/plants.js';
import { ecosystemFlow } from '../data/siteData.js';

const pillars = [
  {
    icon: Droplets,
    tag: 'Pillar 01',
    title: 'ESJ-to-Ethanol — Renewable from the Root',
    color: 'from-cyan-500 to-steel-blue',
    slug: 'esj-to-ethanol',
    points: [
      "Maharashtra's 1st cooperative producing ethanol directly from Enzymatic Sugar Juice",
      'Bypasses sugar crystallization — higher recovery, lower energy per litre',
      "Supports India's EBP Ethanol Blended Petrol national program",
      'Produces Anhydrous 99.9% and Rectified 96.4% Spirit grades',
    ],
  },
  {
    icon: Flame,
    tag: 'Pillar 02',
    title: 'Bio-Gas — Every Drop of Spent Wash',
    color: 'from-amber-500 to-accent-amber',
    slug: 'bio-gas-division',
    points: [
      '100% of distillery spent wash & press mud anaerobically digested',
      'Raw bio-gas sweetened via amine scrubbing + Sulphur Recovery Division',
      'Clean methane fuels Acetic Anhydride plant + Co-Gen engines',
      'Zero organic waste to landfill',
    ],
  },
  {
    icon: Zap,
    tag: 'Pillar 03',
    title: 'Co-Generation — Power with Purpose',
    color: 'from-sky-500 to-indigo-600',
    slug: 'co-generation-division',
    points: [
      '12 MW CHP plant — bagasse (seasonal) + bio-gas + coal blend',
      'Exhaust steam heats ethanol distillation & chemical processes',
      'Seasonal surplus electricity exported to MSEDCL grid',
      'Powers 10,000+ rural households via renewable export',
    ],
  },
  {
    icon: Recycle,
    tag: 'Pillar 04',
    title: 'Sulphur Recovery — Closing the Loop',
    color: 'from-industrial-green to-emerald-600',
    slug: 'sulphur-recovery',
    points: [
      'H₂S removal from bio-gas prevents corrosion & extends engine life',
      'Recovered sulphur processed into commercial elemental grade',
      'Meets CPCB stack emission compliance',
      'Every recovered tonne avoids virgin mining demand',
    ],
  },
];

const Impact = () => {
  return (
    <>
      <SEO
        title="Impact & Sustainability | Sanjivani Chemical Division — Circular Bio-Energy"
        description="Sanjivani's 4-pillar Circular Bio-Energy Model: ESJ ethanol, bio-gas, 12 MW co-gen, sulphur recovery. 25,000+ tonnes CO₂ offset/yr — Net-Zero 2038 Roadmap."
        keywords="circular economy chemical industry, ESJ ethanol sustainability, bio-gas power, zero liquid discharge, carbon offset Maharashtra, net-zero 2038"
        path="/impact"
      />
      <Helmet>
        <link rel="canonical" href="https://chemical.sanjivanigroup.com/impact" />
      </Helmet>

      <PageHeader
        eyebrow="Sustainability · Impact · ESG"
        title="A chemical complex that returns more than it takes."
        subtitle="4-pillar Circular Bio-Energy Model: sugarcane → ethanol, residues → bio-gas, bio-gas → electricity. Maharashtra's integrated benchmark for industrial sustainability."
        breadcrumbItems={[{ label: 'Impact & Sustainability' }]}
        bgImage={defaultImages.pageHeaders.sustainability}
        accent="green"
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              We don't have "waste" — only streams we haven't yet found a purpose for. See how the four sustainability pillars below turn conventional outputs into the next system's input.
            </p>
          </div>

          <div className="relative py-10 md:py-14 mb-16 md:mb-20 overflow-hidden rounded-[2.5rem] text-white">
            <img
              src={defaultImages.home.sustainabilityCallout}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-20"
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-industrial-green via-industrial-green/95 to-steel-blue" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,163,61,0.18),transparent_50%)]" />
            <div className="relative z-10 px-6 md:px-10 lg:px-14">
              <FlowDiagram
                flow={ecosystemFlow.flow}
                title={ecosystemFlow.title}
                description={ecosystemFlow.description}
                badge="Sugar → Chemistry → Power · Continuous Loop"
                variant="linear"
              />
            </div>
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
                  className={`relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-7 md:p-10 lg:p-12 rounded-[2.5rem] bg-white border border-neutral-light shadow-card overflow-hidden`}
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
                      <CTAButton to={`/plants/${p.slug}`} variant="primaryGreen" size="md">
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
                Sustainability 2.0 roadmap: 42% scope 1 & 2 emission cut by 2030, net-zero process emissions by 2038. Fully aligned with India's Panchamrit climate pledges.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-7 md:p-9 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-6">ESG Focus Areas · FY 2025–2030</h3>
                <div className="mt-2 pt-2 flex flex-wrap items-center justify-between gap-4">
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

export default Impact;
