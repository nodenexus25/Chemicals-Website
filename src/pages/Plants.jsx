import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import PlantCard from '../components/shared/PlantCard';
import { plants } from '../data/plants';
import { LayoutGrid, ListTree } from 'lucide-react';
import defaultImages from '../data/defaultImages';

const Plants = () => {
  const [view, setView] = useState('grid');
  const [openSlug, setOpenSlug] = useState(plants[0]?.slug || null);

  return (
    <>
      <Helmet>
        <title>Manufacturing Plants | Sanjivani Chemical Division</title>
        <meta name="description" content="Explore Sanjivani's 7 specialized manufacturing plants: Ethyl Acetate, Acetic Anhydride, ESJ Ethanol, Bio-Gas, Sulphur Recovery, 12 MW Co-Generation, and TEO/EMME Specialty." />
        <meta name="keywords" content="chemical plant Maharashtra, ethanol plant Kopargaon, acetic anhydride plant, bio-gas plant, co-generation 12 MW" />
      </Helmet>

      <PageHeader
        title="7 specialized plants. One integrated 200+ acre campus."
        subtitle="Every Shingnapur campus plant is engineered for a specific chemistry — and interconnected for shared feedstock, shared energy and shared waste recovery."
        breadcrumbItems={[{ label: 'Plants' }]}
        bgImage={defaultImages.pageHeaders.plants}
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="sticky top-20 z-30 -mx-2 md:mx-0 mb-10 md:mb-14">
            <div className="p-3 rounded-3xl bg-white/95 backdrop-blur-xl border border-neutral-light shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-neutral-dark/45">Plant Index</p>
                <p className="text-sm md:text-base font-semibold text-neutral-dark mt-0.5">
                  <span className="text-industrial-green font-black">{plants.length}</span> plants · established{' '}
                  <span className="font-black text-industrial-green">1985</span> onwards
                </p>
              </div>
              <div className="inline-flex items-center p-1 rounded-2xl bg-neutral-light">
                <button
                  onClick={() => setView('grid')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                    view === 'grid'
                      ? 'bg-white text-industrial-green shadow-md'
                      : 'text-neutral-dark/55 hover:text-neutral-dark'
                  }`}
                >
                  <LayoutGrid size={14} />
                  Grid View
                </button>
                <button
                  onClick={() => setView('accordion')}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                    view === 'accordion'
                      ? 'bg-white text-industrial-green shadow-md'
                      : 'text-neutral-dark/55 hover:text-neutral-dark'
                  }`}
                >
                  <ListTree size={14} />
                  Accordion
                </button>
              </div>
            </div>
          </div>

          {view === 'grid' ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
            >
              {plants.map((p, i) => (
                <PlantCard key={p.slug} plant={p} index={i} variant="grid" />
              ))}
            </motion.div>
          ) : (
            <motion.div layout className="space-y-4 md:space-y-5 max-w-5xl mx-auto">
              {plants.map((p, i) => (
                <PlantCard
                  key={p.slug}
                  plant={p}
                  index={i}
                  variant="accordion"
                  isOpen={openSlug === p.slug}
                  onToggle={() => setOpenSlug(openSlug === p.slug ? null : p.slug)}
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Plants;
