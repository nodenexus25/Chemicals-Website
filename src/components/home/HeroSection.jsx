import { motion } from 'framer-motion';
import CTAButton from '../shared/CTAButton';
import { Droplets, Factory, Leaf, ShieldCheck, ChevronDown } from 'lucide-react';
import defaultImages from '../../data/defaultImages';

const headlineText = [
  { text: 'Maharashtra’s' },
  { text: 'pioneering' },
  { text: 'integrated' },
  { text: 'chemical', accent: true },
  { text: 'manufacturer.' },
];

const trustMarks = [
  { icon: ShieldCheck, label: 'ISO 9001 & 14001' },
  { icon: Droplets, label: 'ESJ Ethanol Innovator' },
  { icon: Factory, label: '7 Specialized Plants' },
  { icon: Leaf, label: 'Circular Bio-Energy' },
];

const HeroSection = () => {
  const FALLBACK = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Wide%20aerial%20panoramic%20view%20of%20modern%20industrial%20chemical%20manufacturing%20complex%20at%20golden%20hour%20sunset%20distillation%20towers%20storage%20silos%20smoke%20stacks%20ethanol%20plant&image_size=landscape_16_9';

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden pt-20
                 bg-cover bg-center bg-no-repeat bg-fixed md:bg-scroll"
      style={{ backgroundImage: `url(${defaultImages.home.hero})` }}
      onError={(e) => {
        if (e.currentTarget.style.backgroundImage.includes(FALLBACK)) return;
        e.currentTarget.style.backgroundImage = `url(${FALLBACK})`;
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-dark/40 via-steel-blue/20 to-industrial-green/20" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-dark/65 via-neutral-dark/5 to-neutral-dark/15" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(232,163,61,0.14),transparent_58%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-24 pb-16 md:pb-24 min-h-[calc(100svh-5rem)] flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-white/90 text-xs md:text-sm font-medium w-fit mb-8 md:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-amber opacity-70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-amber" />
          </span>
          38+ Years of Industrial Heritage · Sanjivani Group Cooperative
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-black tracking-[-0.04em] text-white leading-[0.98] max-w-5xl">
          {headlineText.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-3 md:mr-4"
            >
              <span className={word.accent ? 'bg-gradient-to-r from-accent-amber via-amber-300 to-accent-amber bg-clip-text text-transparent' : ''}>
                {word.text}
              </span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-10 text-lg md:text-xl lg:text-2xl text-white/75 max-w-3xl leading-relaxed"
        >
          Ethanol, bulk drugs & specialty organic chemicals manufactured with integrated sugar-to-chemistry expertise,
          powered by an in-house <span className="text-accent-amber font-semibold">circular bio-energy ecosystem</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-12 flex flex-wrap items-center gap-3.5 md:gap-4"
        >
          <CTAButton to="/products" variant="primary" size="lg">
            Explore Products
          </CTAButton>
          <CTAButton to="/contact" variant="secondaryLight" size="lg">
            Contact Us
          </CTAButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-auto pt-16 md:pt-24"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="flex flex-wrap gap-3 md:gap-4">
              {trustMarks.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div
                    key={i}
                    className="group flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <Icon size={17} className="text-accent-amber shrink-0" strokeWidth={2.1} />
                    <span className="text-xs md:text-sm font-medium text-white/85">{t.label}</span>
                  </div>
                );
              })}
            </div>

            <a
              href="#achievement-strip"
              className="hidden lg:inline-flex items-center gap-2 text-white/55 hover:text-white transition-colors duration-200 group/scroll"
              aria-label="Scroll down"
            >
              <span className="text-xs uppercase tracking-[0.2em] font-semibold">Scroll</span>
              <span className="w-9 h-[42px] rounded-full border border-white/20 flex items-start justify-center p-2 group-hover/scroll:border-white/50 transition-colors">
                <motion.div
                  animate={{ y: [0, 14, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-1 h-2 rounded-full bg-white/60"
                />
              </span>
              <ChevronDown size={14} className="animate-bounce" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
