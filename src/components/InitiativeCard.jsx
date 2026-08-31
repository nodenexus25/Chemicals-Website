import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InitiativeCard = ({
  initiative,
  index = 0,
  to,
}) => {
  const Icon = (initiative.icon && LucideIcons[initiative.icon]) || LucideIcons.Award;

  const categoryTones = {
    Technology: 'from-steel-blue/10 to-sky-500/10',
    Advisory: 'from-accent-amber/15 to-orange-500/10',
    Finance: 'from-emerald-500/10 to-industrial-green/10',
    Sustainability: 'from-industrial-green/10 to-emerald-500/10',
    Manufacturing: 'from-steel-blue/10 to-industrial-green/10',
    default: 'from-industrial-green/10 to-accent-amber/10',
  };
  const categoryTextTones = {
    Technology: 'text-steel-blue',
    Advisory: 'text-accent-amber',
    Finance: 'text-emerald-600',
    Sustainability: 'text-industrial-green',
    Manufacturing: 'text-steel-blue',
    default: 'text-industrial-green',
  };

  const tone = categoryTones[initiative.category] || categoryTones.default;
  const textTone = categoryTextTones[initiative.category] || categoryTextTones.default;

  const Wrapper = to ? Link : 'div';
  const wrapperProps = to
    ? { to, className: 'group block' }
    : { className: 'group block' };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-3xl border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden"
    >
      <Wrapper {...wrapperProps}>
        <div className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${tone} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="relative p-7 md:p-8">
          <div className="flex items-start justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Icon size={26} strokeWidth={2.1} />
            </div>
            {initiative.category && (
              <span className={`inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold uppercase tracking-wider ${textTone} border border-neutral-light`}>
                {initiative.category}
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-dark mb-3 group-hover:text-industrial-green transition-colors duration-300">
            {initiative.title}
          </h3>
          <p className="text-sm md:text-[15px] leading-relaxed text-neutral-dark/70">
            {initiative.description}
          </p>

          <div className="mt-6 pt-5 border-t border-neutral-light flex items-center justify-between">
            <span className="text-sm font-semibold text-industrial-green inline-flex items-center gap-2 group/link">
              <span>Learn More</span>
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </span>
            {initiative.id && (
              <span className="text-[72px] font-black leading-none tracking-tighter text-neutral-light select-none pointer-events-none">
                0{index + 1}
              </span>
            )}
          </div>
        </div>
      </Wrapper>
    </motion.article>
  );
};

export default InitiativeCard;
