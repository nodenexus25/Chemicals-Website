import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Factory } from 'lucide-react';
import defaultImages from '../../data/defaultImages';

const PlantCard = ({ plant, index = 0, isOpen, onToggle, variant = 'grid' }) => {
  const isAccordion = variant === 'accordion';
  const image = plant.image || defaultImages.plant.fallback;

  if (isAccordion) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="border border-neutral-light rounded-3xl bg-white overflow-hidden shadow-card"
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 text-left hover:bg-neutral-light/50 transition-colors duration-200"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shrink-0 bg-neutral-light">
            <img src={image} alt={plant.name} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-1.5">
              {plant.established && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-industrial-green/10 text-industrial-green text-[11px] font-semibold">
                  <Calendar size={11} />
                  Est. {plant.established}
                </span>
              )}
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-steel-blue/10 text-steel-blue text-[11px] font-semibold">
                <Factory size={11} />
                Manufacturing
              </span>
            </div>
            <h3 className="font-bold text-lg md:text-xl tracking-tight text-neutral-dark">
              {plant.name}
            </h3>
          </div>
          <div className={`w-10 h-10 rounded-full bg-neutral-light flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-industrial-green text-white' : 'text-neutral-dark/50'}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="px-5 md:px-6 pb-6 md:pb-7 pt-1 flex flex-col md:flex-row gap-5 md:gap-7">
            <div className="md:w-[42%] shrink-0 rounded-2xl overflow-hidden aspect-video md:aspect-[4/3]">
              <img src={image} alt={plant.name} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col">
              <p className="text-sm leading-relaxed text-neutral-dark/70">
                {plant.description}
              </p>
              {plant.keyHighlights && (
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {plant.keyHighlights.slice(0, 4).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-neutral-dark/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-amber mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5 pt-4 border-t border-neutral-light flex items-center gap-3">
                <Link
                  to={`/plants/${plant.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-industrial-green text-white text-sm font-semibold hover:bg-industrial-green/90 transition-colors"
                >
                  Full Details
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  to={`/contact?plant=${plant.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-light text-sm font-semibold text-neutral-dark hover:border-steel-blue hover:text-steel-blue transition-colors"
                >
                  Enquire
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
    >
      <Link to={`/plants/${plant.slug}`} className="relative block overflow-hidden">
        <div className="relative aspect-[5/3] overflow-hidden">
          <img
            src={image}
            alt={plant.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-[0.22,1,0.36,1] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/75 via-neutral-dark/10 to-transparent opacity-90" />
          <div className="absolute top-4 left-4 flex items-center gap-2 flex-wrap">
            {plant.established && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-industrial-green tracking-wide">
                <Calendar size={11} />
                {plant.established}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="flex flex-col flex-1 p-6 md:p-7">
        <Link to={`/plants/${plant.slug}`}>
          <h3 className="font-bold text-xl md:text-2xl tracking-tight text-neutral-dark group-hover:text-steel-blue transition-colors duration-300">
            {plant.name}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-relaxed text-neutral-dark/65 line-clamp-3">
          {plant.description}
        </p>
        {plant.keyHighlights && (
          <ul className="mt-5 space-y-2">
            {plant.keyHighlights.slice(0, 3).map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-dark/75">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-amber mt-2 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 pt-5 border-t border-neutral-light flex items-center justify-between">
          <Link
            to={`/plants/${plant.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-steel-blue group/link"
          >
            <span>View Plant</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default PlantCard;
