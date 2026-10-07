import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import InitiativeCard from '../components/InitiativeCard';
import CTAButton from '../components/CTAButton';
import DualContactForm from '../components/DualContactForm';
import { initiatives, categories } from '../data/programs.js';
import defaultImages from '../data/defaultImages.js';
import { SlidersHorizontal, X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const all = useMemo(() => ['All', ...categories], [categories]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return initiatives.filter((i) => {
      const matchesCategory = active === 'All' || i.category === active;
      if (!q) return matchesCategory;
      const matchesQuery =
        i.title.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        (i.category || '').toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  return (
    <>
      <SEO
        title="Programs & Initiatives | Sanjivani Chemical Division"
        description="Explore Sanjivani Chemical Division's programs, R&D initiatives, sustainability roadmap, farmer outreach, and manufacturing excellence programs. ESJ technology, Sustainability 2.0, Solar 7.5 MW, and more."
        keywords="chemical industry programs, ESJ technology program, sustainability 2.0, farmer cane program, solar rooftop 7.5 MW, R&D specialty chemicals"
        path="/programs"
      />
      <Helmet>
        <link rel="canonical" href="https://chemical.sanjivanigroup.com/programs" />
      </Helmet>

      <PageHeader
        eyebrow="Programs"
        title="Initiatives that drive long-term value for farmers, buyers, and the planet."
        subtitle="Technology, sustainability, farmer extension, R&D scale-up and long-term B2B partnerships. Dedicated cross-functional teams track every program end-to-end."
        breadcrumbItems={[{ label: 'Programs & Initiatives' }]}
        bgImage={defaultImages.pageHeaders.products}
        accent="blue"
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sticky top-20 z-30 -mx-2 md:mx-0 mb-12 md:mb-16"
          >
            <div className="p-3 md:p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-neutral-light shadow-card">
              <div className="flex flex-col lg:flex-row lg:items-center gap-3 md:gap-4">
                <div className="relative flex-1">
                  <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-dark/40" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search programs by title, category, or scope…"
                    className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-neutral-light/60 border border-transparent focus:border-industrial-green focus:bg-white focus:ring-4 focus:ring-industrial-green/10 transition-all text-sm text-neutral-dark placeholder:text-neutral-dark/35 outline-none"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-neutral-dark/10 hover:bg-neutral-dark/15 text-neutral-dark/60 flex items-center justify-center transition-colors"
                      aria-label="Clear search"
                    >
                      <X size={13} />
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2 lg:pl-3 lg:border-l lg:border-neutral-light overflow-x-auto scrollbar-none pb-0.5 -mx-1 px-1">
                  <span className="shrink-0 inline-flex items-center gap-1.5 px-2 text-[11px] font-bold uppercase tracking-wider text-neutral-dark/45">
                    <SlidersHorizontal size={13} />
                    Categories
                  </span>
                  {all.map((cat) => {
                    const isActive = active === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`shrink-0 px-3.5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? 'bg-industrial-green text-white shadow-md shadow-industrial-green/20'
                            : 'bg-neutral-light/70 text-neutral-dark/70 hover:bg-neutral-light hover:text-neutral-dark'
                        }`}
                      >
                        {cat}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key="results"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
              >
                {filtered.map((initiative, i) => (
                  <InitiativeCard
                    key={initiative.id}
                    initiative={initiative}
                    index={i}
                    to={initiative.slug ? `/plants/${initiative.slug}` : undefined}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-20 md:py-28 text-center max-w-xl mx-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral-light flex items-center justify-center text-neutral-dark/40 mx-auto mb-5">
                  <Search size={26} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">No programs match your search</h3>
                <p className="text-neutral-dark/60 mb-6 leading-relaxed">
                  Try clearing filters or contact our partnerships team with your specific collaboration requirement.
                </p>
                <button
                  onClick={() => {
                    setQuery('');
                    setActive('All');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-industrial-green text-white text-sm font-semibold hover:bg-industrial-green/90 transition-colors"
                >
                  <X size={15} />
                  Reset filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-neutral-light via-white to-neutral-light/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-blue/10 text-steel-blue text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-steel-blue" />
                Propose a Partnership
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-5">
                Have a program idea or JV proposal?
              </h2>
              <p className="text-base md:text-lg text-neutral-dark/65 leading-relaxed mb-8">
                Sanjivani Chemical Division actively pursues R&D collaborations, joint ventures, ESG co-investment, and
                custom manufacturing partnerships. Share a short brief — our strategy desk responds within 2 business days.
              </p>
              <div className="space-y-4 p-5 md:p-6 rounded-3xl bg-white border border-neutral-light shadow-card">
                {[
                  { k: 'Strategy Desk', v: 'strategy@sanjivani.coop' },
                  { k: 'R&D Office', v: '+91 12345 67890 Ext. 4' },
                  { k: 'Response SLA', v: 'Within 48 hours' },
                ].map((x, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-light last:pb-0 last:border-0">
                    <span className="text-xs uppercase tracking-wider font-semibold text-neutral-dark/45">{x.k}</span>
                    <span className="text-sm font-medium text-neutral-dark text-right">{x.v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/achievements" className="inline-flex items-center gap-2 text-sm font-semibold text-industrial-green hover:text-steel-blue transition-colors group">
                  See industry firsts
                  <span className="text-industrial-green group-hover:text-steel-blue">→</span>
                </Link>
                <Link to="/plants" className="inline-flex items-center gap-2 text-sm font-semibold text-steel-blue hover:text-industrial-green transition-colors group">
                  Explore 7 plants
                  <span className="text-steel-blue group-hover:text-industrial-green">→</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <DualContactForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
