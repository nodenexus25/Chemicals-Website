import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Leaf, Droplets, Flame, Zap, FlaskConical,
  ArrowUpRight, CheckCircle2, ShieldCheck,
  Award, Calendar, Factory,
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import CTAButton from '../components/CTAButton';
import AnimatedCounter from '../components/AnimatedCounter';
import defaultImages from '../data/defaultImages.js';
import { products, coreProduct } from '../data/products.js';
import ProductCard from '../components/ProductCard';

const iconMap = {
  Leaf, Droplets, FlaskConical, Factory, Flame, Zap,
};

const flagships = [
  {
    k: 'ESJ Direct Process',
    v: 'First in Maharashtra',
    tone: 'from-industrial-green to-emerald-600',
  },
  {
    k: 'Sugar Recovery Gain',
    v: '+15% Efficiency',
    tone: 'from-accent-amber to-amber-400',
  },
  {
    k: 'Anhydrous Purity',
    v: '99.9% Grade',
    tone: 'from-steel-blue to-cyan-500',
  },
  {
    k: 'BIS Certified',
    v: 'Fuel Grade Approved',
    tone: 'from-industrial-green to-steel-blue',
  },
];

const promiseRows = [
  {
    icon: Droplets,
    k: 'Feedstock Traceability',
    v: '100% traced to cooperative sugar factory — on-campus ESJ pipeline.',
  },
  {
    icon: ShieldCheck,
    k: 'Quality & Consistency',
    v: 'Continuous process + real-time NABL lab monitoring per batch.',
  },
  {
    icon: Flame,
    k: 'Low Carbon Intensity',
    v: 'Process heat from bio-gas, not fossil fuel — dramatically lower CI score.',
  },
  {
    icon: Zap,
    k: 'Supply Security',
    v: 'Integrated campus = independent feedstock, energy, and logistics.',
  },
];

const supplyChain = [
  { step: 1, label: 'Cane Arrives', detail: 'From 50,000+ cooperative farmer members', accent: 'from-emerald-500 to-industrial-green', icon: 'Leaf' },
  { step: 2, label: 'ESJ Extracted', detail: 'Enzymatic Sugar Juice — no sugar crystallization step', accent: 'from-cyan-500 to-steel-blue', icon: 'Droplets' },
  { step: 3, label: 'Fermentation', detail: 'Continuous yeast fermentation → rectified spirit', accent: 'from-amber-500 to-accent-amber', icon: 'FlaskConical' },
  { step: 4, label: 'Distillation', detail: 'Molecular sieve dehydration → 99.9% Anhydrous', accent: 'from-sky-500 to-indigo-600', icon: 'Factory' },
];

const Brand = () => {
  const ethanolProduct = coreProduct;

  return (
    <>
      <SEO
        title="ESJ Ethanol — Flagship Brand | Sanjivani Chemical Division"
        description="Maharashtra's first ESJ-to-Ethanol flagship brand. Fuel-grade & pharma-grade ethanol, 15% higher sugar recovery, circular bio-energy powered. Trusted by OMCs, pharma, and sanitizer partners."
        keywords="ESJ ethanol brand, Maharashtra flagship ethanol, Sanjivani ethanol brand, fuel grade ethanol supplier, pharma grade excipient ethanol India"
        path="/brand"
      />
      <Helmet>
        <link rel="canonical" href="https://chemical.sanjivanigroup.com/brand" />
      </Helmet>

      <PageHeader
        eyebrow="Flagship Brand"
        title="ESJ Ethanol — The renewable fuel that started it all."
        subtitle="Pioneered in Maharashtra. Powered directly by Enzymatic Sugar Juice. Supplied to OMCs, pharma partners, and emergency response programs. This is the flagship process that put Sanjivani Chemical Division on India's renewable chemistry map."
        breadcrumbItems={[{ label: 'Flagship Brand' }]}
        bgImage={defaultImages.pageHeaders.products}
        accent="green"
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-7"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-amber/15 text-accent-amber text-xs font-bold tracking-wider uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-amber" />
                  Flagship Innovation · Est. 2019
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-6">
                  Why ESJ ethanol is different.{' '}
                  <span className="bg-gradient-to-br from-industrial-green to-steel-blue bg-clip-text text-transparent">
                    From cane to pump, without the detour.
                  </span>
                </h2>
                <div className="space-y-5 text-neutral-dark/70 leading-relaxed">
                  <p>
                    Conventional ethanol routes require sugar crystallization first — then re-melting and re-processing
                    sugar back into fermentation feedstock. In 2019, Sanjivani became the first cooperative sugar factory
                    in Maharashtra to bypass that entire step, channeling Enzymatic Sugar Juice directly into continuous
                    hydrolysis and fermentation.
                  </p>
                  <p>
                    The result: <span className="font-semibold text-neutral-dark">15% higher sugar recovery per tonne
                    of cane</span>, shorter production cycles, dramatically lower specific energy consumption, and a
                    finished fuel-grade ethanol with one of the lowest carbon-intensity scores in India's cooperative sector.
                  </p>
                  <p>
                    Our ESJ ethanol powers the national Ethanol Blended Petrol (EBP) program, serves as feedstock for
                    pharma-grade excipient alcohol, and became the backbone of India's largest cooperative-sector hand
                    sanitizer production during the 2020 national emergency.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                {flagships.map((f, i) => (
                  <motion.div
                    key={f.k}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative p-5 md:p-6 rounded-3xl bg-white border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-0.5 overflow-hidden"
                  >
                    <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${f.tone} opacity-15 group-hover:opacity-25 transition-opacity duration-500`} />
                    <p className="relative text-xs uppercase tracking-wider font-bold text-neutral-dark/45 mb-2">{f.k}</p>
                    <p className="relative text-lg md:text-xl font-black tracking-tight bg-gradient-to-br from-industrial-green to-steel-blue bg-clip-text text-transparent leading-tight">
                      {f.v}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-4 md:gap-5 max-w-2xl pt-4">
                {[
                  { n: '2019', l: 'ESJ Innovation Year' },
                  { n: '5M+', l: 'Sanitizer Units · 2020' },
                  { n: '99.9%', l: 'Anhydrous Purity' },
                ].map((s, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-2xl md:text-3xl font-black tracking-tight text-industrial-green">
                      <AnimatedCounter value={s.n} />
                    </p>
                    <p className="text-[11px] uppercase tracking-wider text-neutral-dark/45 font-bold leading-tight">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src={ethanolProduct?.image || defaultImages.product.fallback}
                  alt="ESJ-to-Ethanol flagship manufacturing process"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/70 via-neutral-dark/20 to-transparent" />
                <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-bold text-industrial-green tracking-wide">
                    <Award size={11} />
                    Industry First
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-amber/95 backdrop-blur text-[11px] font-bold text-neutral-dark tracking-wide">
                    <Calendar size={11} />
                    2019
                  </span>
                </div>
                <div className="absolute bottom-5 inset-x-5 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center shrink-0 text-white">
                      <Factory size={22} />
                    </div>
                    <div>
                      <p className="font-bold tracking-tight text-neutral-dark">ESJ-to-Ethanol Plant</p>
                      <p className="text-xs text-neutral-dark/60 mt-0.5 leading-relaxed">
                        Integrated directly with Sanjivani Sugar Factory · Kopargaon Campus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 lg:py-32 bg-neutral-light/60 border-y border-neutral-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-14 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-green/10 text-industrial-green text-xs font-bold tracking-wider uppercase mb-5">
              <Leaf size={12} />
              Brand Promise
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05]">
              Four guarantees that come with every drop of ESJ ethanol.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7 mb-16 md:mb-20">
            {promiseRows.map((row, i) => {
              const Icon = row.icon;
              return (
                <motion.div
                  key={row.k}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white rounded-3xl p-7 md:p-9 border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-br from-industrial-green/5 via-accent-amber/5 to-transparent rounded-full -translate-y-24 translate-x-24 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-105 transition-transform duration-400">
                      <Icon size={28} strokeWidth={2.1} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-dark mb-3">{row.k}</h3>
                    <p className="text-sm md:text-[15px] leading-relaxed text-neutral-dark/70">{row.v}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-white bg-gradient-to-br from-industrial-green via-industrial-green/95 to-steel-blue">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,163,61,0.2),transparent_55%)]" />
            <div className="relative z-10 max-w-3xl mb-12">
              <p className="text-[11px] uppercase tracking-[0.22em] font-bold text-accent-amber mb-4">
                ESJ Process Flow
              </p>
              <h3 className="text-3xl md:text-5xl font-black tracking-[-0.035em] leading-[1.05]">
                Cane to combustion — <span className="text-accent-amber">4 linked steps.</span> No sugar detour.
              </h3>
            </div>
            <div className="relative z-10">
              <div className="absolute left-6 md:left-1/2 md:top-1/2 md:-translate-y-1/2 w-1 md:w-full h-full md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-cyan-400 via-industrial-green via-accent-amber to-sky-400 rounded-full opacity-60 -translate-x-1/2 md:translate-x-0" />
              <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-3">
                {supplyChain.map((step, i) => {
                  const Icon = iconMap[step.icon] || Factory;
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="relative flex md:block gap-4 items-start"
                    >
                      <div className={`relative z-10 shrink-0 w-14 h-14 md:mx-auto md:mb-5 rounded-2xl bg-gradient-to-br ${step.accent} text-white shadow-xl shadow-black/20 flex items-center justify-center ring-4 ring-white/10`}>
                        <Icon size={24} strokeWidth={2.1} />
                      </div>
                      <div className="md:text-center">
                        <p className="text-[11px] font-bold text-accent-amber tracking-wider uppercase mb-1.5">Step 0{i + 1}</p>
                        <h4 className="text-base md:text-lg font-bold leading-tight text-white mb-1.5">{step.label}</h4>
                        <p className="text-xs md:text-sm text-white/70 leading-relaxed">{step.detail}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-blue/10 text-steel-blue text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-steel-blue" />
                Also by Sanjivani
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05]">
                Explore the rest of our <span className="bg-gradient-to-br from-steel-blue to-industrial-green bg-clip-text text-transparent">chemical portfolio.</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-steel-blue hover:text-industrial-green transition-colors group"
            >
              View all products
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
            {productCatalog.filter((p) => p.slug !== ethanolProduct?.slug).slice(0, 3).map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-steel-blue via-neutral-dark to-industrial-green" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,163,61,0.2),transparent_55%)]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="md:col-span-8">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent-amber mb-4">Partner with the ESJ pioneer</p>
              <h3 className="text-3xl md:text-5xl font-black tracking-[-0.035em] leading-[1.05] mb-5">
                Looking for a long-term ethanol supply partner your procurement team can trust?
              </h3>
              <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
                Request a sample Certificate of Analysis, audit our Kopargaon ESJ plant, or sit down with our technical
                sales engineers — every ESJ ethanol partnership starts with transparency and a full spec sheet.
              </p>
              <div className="flex flex-wrap gap-4">
                <CTAButton to="/contact" variant="primary" size="lg">
                  Book ESJ Plant Audit
                </CTAButton>
                <Link to={`/plants/esj-to-ethanol`} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-white transition-colors group">
                  Explore ESJ Plant Detail
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                {[
                  { l: 'BIS Certified', v: '✓' },
                  { l: 'cGMP Grade', v: '✓' },
                  { l: 'EBP Program', v: '✓' },
                  { l: 'Tank Truck · Rail', v: '✓' },
                ].map((s, i) => (
                  <div key={i} className="p-5 md:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <CheckCircle2 size={20} className="text-accent-amber mb-3" />
                    <p className="text-sm font-semibold text-white leading-tight">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
