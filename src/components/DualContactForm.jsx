import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Briefcase, Handshake } from 'lucide-react';
import EnquiryForm from './EnquiryForm';

const DualContactForm = ({
  titleA = 'Business Enquiry',
  subtitleA = 'For sourcing, bulk orders, and supply chain partnerships.',
  iconA = Building2,
  titleB = 'Partner / Vendor Enquiry',
  subtitleB = 'For JVs, R&D collaborations, vendor onboarding, and community programs.',
  iconB = Users,
  compact = false,
}) => {
  const [tab, setTab] = useState('A');
  const IconA = iconA;
  const IconB = iconB;

  return (
    <div className={`${compact ? 'p-6 md:p-7' : 'p-8 md:p-10 lg:p-12'} bg-white rounded-3xl shadow-card border border-neutral-light overflow-hidden`}>
      <div className="mb-7 md:mb-9">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-dark mb-3">
          {tab === 'A' ? titleA : titleB}
        </h3>
        <p className="text-base md:text-lg text-neutral-dark/65 leading-relaxed max-w-2xl">
          {tab === 'A' ? subtitleA : subtitleB}
        </p>
      </div>

      <div className="relative p-1.5 rounded-3xl bg-neutral-light mb-8 grid grid-cols-2 gap-2">
        <motion.div
          layoutId="dual-tab-pill"
          className={`absolute inset-y-1.5 rounded-2xl shadow-md ${
            tab === 'A' ? 'left-1.5 right-[calc(50%-2px)]' : 'left-[calc(50%+2px)] right-1.5'
          } bg-industrial-green transition-all`}
          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        />
        <button
          onClick={() => setTab('A')}
          className={`relative z-10 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-bold transition-colors duration-200 ${
            tab === 'A' ? 'text-white' : 'text-neutral-dark/60 hover:text-neutral-dark'
          }`}
        >
          <IconA size={17} />
          <span>Business</span>
        </button>
        <button
          onClick={() => setTab('B')}
          className={`relative z-10 inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-bold transition-colors duration-200 ${
            tab === 'B' ? 'text-white' : 'text-neutral-dark/60 hover:text-neutral-dark'
          }`}
        >
          <IconB size={17} />
          <span>Partners</span>
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {tab === 'A' ? (
            <EnquiryForm variant="inline" compact title={null} subtitle={null} />
          ) : (
            <EnquiryForm variant="inline" compact title={null} subtitle={null} />
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 pt-7 border-t border-neutral-light grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { I: Briefcase, k: 'Quotes', v: 'Within 24 hours' },
          { I: Handshake, k: 'Audits', v: 'Plant tours available' },
          { I: Building2, k: 'Logistics', v: 'Truck · Rail · Container' },
        ].map(({ I, k, v }) => (
          <div key={k} className="p-4 rounded-2xl bg-neutral-light/60">
            <div className="w-9 h-9 rounded-xl bg-industrial-green/10 flex items-center justify-center text-industrial-green mb-2.5">
              <I size={16} />
            </div>
            <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-dark/45">{k}</p>
            <p className="text-sm font-semibold text-neutral-dark mt-0.5">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DualContactForm;
