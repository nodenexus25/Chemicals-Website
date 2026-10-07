import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import Timeline from '../components/shared/Timeline';
import { timeline } from '../data/timeline';
import { Link } from 'react-router-dom';
import { Factory, Users, Leaf, Award, ArrowUpRight, Building2 } from 'lucide-react';
import CTAButton from '../components/shared/CTAButton';
import defaultImages from '../data/defaultImages';

const pillars = [
  {
    icon: Factory,
    title: 'Manufacturing Excellence',
    desc: '7 specialized plants, 38+ years continuous refinement. Process automation, on-site NABL testing, zero-discharge effluent systems.',
  },
  {
    icon: Users,
    title: 'Cooperative Stewardship',
    desc: 'Owned by 50,000+ farmer members. Every tonne manufactured returns multiplied cane-community prosperity via dividends, premiums & infrastructure.',
  },
  {
    icon: Leaf,
    title: 'Circular Sustainability',
    desc: 'Zero organic discard. Sugar juice → ethanol → residues → bio-gas → power + process heat. Maharashtra bio-refinery benchmark.',
  },
  {
    icon: Award,
    title: 'Regulatory & Quality',
    desc: 'ISO 9001 · 14001 · 50001 certified. BIS-approved ethanol, REACH-compliant specialty chemicals, cGMP pharma-grade validation.',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sanjivani Chemical Division — Maharashtra</title>
        <meta name="description" content="Discover Sanjivani Chemical Division — Maharashtra's 38-year-old cooperative chemical manufacturer. ESJ ethanol pioneer, 7 specialized plants, and 50,000+ farmer members." />
        <meta name="keywords" content="about Sanjivani Chemical, cooperative chemical manufacturer Maharashtra, ethanol plant history, ESJ ethanol pioneer" />
      </Helmet>

      <PageHeader
        title="A cooperative heritage, engineered into industrial leadership."
        subtitle="Farmer-owned Maharashtra industrial enterprise — evolved from a single 1985 plant into the state's most diversified sustainable chemical ecosystem."
        breadcrumbItems={[{ label: 'About' }]}
        bgImage={defaultImages.pageHeaders.about}
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-green/10 text-industrial-green text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-industrial-green" />
                Division Overview
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-6">
                Where sugarcane fields meet the global supply chain.
              </h2>
              <div className="space-y-5 text-neutral-dark/70 leading-relaxed">
                <p>
                  Sanjivani Chemical Division is the industrial arm of Sanjivani Group — Maharashtra's respected
                  Shingnapur, Kopargaon farmer cooperative. From a single 1985 Ethyl Acetate plant into a 7-plant
                  integrated ecosystem supplying ethanol, specialty chemicals and bulk drugs to 200+ buyers across India + 8 export markets.
                </p>
                <p>
                  Our competitive edge is vertical integration. Shared campus with our own sugar factory gives direct
                  Enzymatic Sugar Juice access for our pioneering ESJ-to-Ethanol process. Downstream residues feed Bio-Gas, Sulphur Recovery and 12 MW Co-Generation divisions.
                </p>
                <p>
                  The result: Maharashtra's first farmer-owned circular bio-refinery — consistent quality, competitive pricing, and a materially lower carbon footprint than standalone chemical manufacturers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl bg-gradient-to-br from-neutral-light via-white to-neutral-light">
                <img
                  src={defaultImages.about.divisionalImage}
                  alt="Divisional leadership portrait at Sanjivani Chemical Division"
                  loading="lazy"
                  className="w-full h-full object-contain object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 inset-x-5">
                  <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-industrial-green/10 flex items-center justify-center shrink-0 text-industrial-green">
                        <Building2 size={22} />
                      </div>
                      <div>
                        <p className="text-sm font-bold tracking-tight text-neutral-dark">Sanjivani Integrated Campus</p>
                        <p className="text-xs text-neutral-dark/60 mt-0.5">
                          Shingnapur, Tal. Kopargaon, Dist. Ahmednagar, Maharashtra · 200+ acre integrated sugar + chemical complex
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 lg:py-32 bg-neutral-light/60 border-y border-neutral-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-blue/10 text-steel-blue text-xs font-bold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-steel-blue" />
              Our Mission Pillars
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05]">
              Four commitments that guide every plant, every batch, every partnership.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white rounded-3xl p-7 md:p-9 border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-br from-industrial-green/5 via-accent-amber/5 to-transparent rounded-full -translate-y-24 translate-x-24 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="mb-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-400">
                        <Icon size={28} strokeWidth={2.1} />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-dark mb-3">{p.title}</h3>
                    <p className="text-sm md:text-[15px] leading-relaxed text-neutral-dark/70">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-amber/15 text-accent-amber text-xs font-bold tracking-wider uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-amber" />
              Milestones Timeline
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-5">
              Four decades of firsts.
            </h2>
            <p className="text-base md:text-lg text-neutral-dark/65 leading-relaxed">
              From 1985's first Ethyl Acetate reactor to pioneering ESJ ethanol — each milestone marks progress for farmer prosperity, industrial excellence and environmental leadership.
            </p>
          </div>
          <Timeline items={timeline} />
        </div>
      </section>

      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-steel-blue via-industrial-green/95 to-industrial-green" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,163,61,0.18),transparent_55%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent-amber mb-4">Parent Group</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] leading-[1.05] mb-5">
                Part of Sanjivani Group — serving Maharashtra since 1969.
              </h2>
              <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
                Sanjivani Group: sugar, distillery, chemicals, co-generation, dairy, education & healthcare — serving 50,000+ farmer members across Ahmednagar district.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <CTAButton href="https://www.sanjivanigroup.com" variant="primary" size="md">
                  Visit Sanjivani Group
                </CTAButton>
                <Link to="/plants" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors group">
                  Explore 7 Manufacturing Plants
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
