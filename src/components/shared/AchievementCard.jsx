import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const AchievementCard = ({ achievement, index = 0, variant = 'default' }) => {
  const Icon = LucideIcons[achievement.icon] || LucideIcons.Award;
  const isCompact = variant === 'strip';

  if (isCompact) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="relative p-6 md:p-8 rounded-3xl bg-white/95 backdrop-blur border border-white/60 shadow-card overflow-hidden group hover:shadow-card-hover transition-all duration-400 hover:-translate-y-0.5"
      >
        <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-industrial-green/10 to-accent-amber/10 blur-2xl group-hover:from-industrial-green/15 group-hover:to-accent-amber/15 transition-colors duration-500" />
        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center text-white shadow-md mb-5 group-hover:scale-105 transition-transform duration-300">
            <Icon size={26} strokeWidth={2} />
          </div>
          <h3 className="text-lg md:text-xl font-bold tracking-tight text-neutral-dark mb-2.5 leading-snug">
            {achievement.title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-dark/65">
            {achievement.description}
          </p>
          {achievement.stats && (
            <div className="mt-5 pt-4 border-t border-neutral-light grid grid-cols-2 gap-3">
              {achievement.stats.map((s, i) => (
                <div key={i}>
                  <p className="text-xl md:text-2xl font-black tracking-tight text-industrial-green">{s.value}</p>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-dark/45 font-semibold mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white rounded-3xl p-8 md:p-10 border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-52 h-52 bg-gradient-to-br from-industrial-green/5 via-accent-amber/5 to-transparent rounded-full -translate-y-24 translate-x-24 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="flex items-start justify-between mb-7">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-industrial-green via-industrial-green/95 to-steel-blue flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-400">
            <Icon size={30} strokeWidth={2.1} />
          </div>
          <span className="text-[72px] font-black leading-none tracking-tighter text-neutral-light select-none pointer-events-none">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-dark mb-4 leading-tight">
          {achievement.title}
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-neutral-dark/70">
          {achievement.description}
        </p>

        {achievement.stats && (
          <div className="mt-8 pt-6 border-t border-neutral-light grid grid-cols-2 gap-6">
            {achievement.stats.map((s, i) => (
              <div key={i} className="relative">
                <p className="text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-br from-industrial-green to-steel-blue bg-clip-text text-transparent">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-neutral-dark/50 font-semibold mt-1.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default AchievementCard;
