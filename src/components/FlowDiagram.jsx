import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const FlowDiagram = ({
  flow = [],
  title,
  description,
  badge,
  variant = 'linear',
}) => {
  if (flow.length === 0) return null;

  return (
    <div className="relative rounded-[2rem] p-6 md:p-8 lg:p-10 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl">
      {(title || badge) && (
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            {badge && (
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-white/50 mb-1.5">
                {badge}
              </p>
            )}
            {title && (
              <p className="text-lg md:text-xl font-bold text-white mt-1.5">{title}</p>
            )}
            {description && (
              <p className="text-sm text-white/60 mt-2 max-w-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="relative">
        <div className="absolute left-1/2 md:left-0 md:top-1/2 md:-translate-y-1/2 w-1 md:w-full h-full md:h-1 bg-gradient-to-b md:bg-gradient-to-r from-cyan-400 via-industrial-green via-accent-amber to-sky-400 rounded-full opacity-60 -translate-x-1/2 md:translate-x-0" />

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-3">
          {flow.map((step, i) => {
            const Icon = (step.icon && LucideIcons[step.icon]) || LucideIcons.Circle;
            const accent = step.accent || 'from-industrial-green to-steel-blue';
            return (
              <motion.div
                key={step.step || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex md:block gap-4 items-start"
              >
                <div className={`relative z-10 shrink-0 w-14 h-14 md:mx-auto md:mb-5 rounded-2xl bg-gradient-to-br ${accent} text-white shadow-xl shadow-black/20 flex items-center justify-center ring-4 ring-white/10`}>
                  <Icon size={24} strokeWidth={2.1} />
                </div>
                {i < flow.length - 1 && (
                  <div className="hidden md:flex absolute top-7 left-[70%] right-[-25%] items-center justify-center z-0">
                    <ChevronRight size={18} className="text-white/40" />
                  </div>
                )}
                <div className="md:text-center">
                  <p className="text-[11px] font-bold text-accent-amber tracking-wider uppercase mb-1.5">
                    Step 0{i + 1}
                  </p>
                  <h4 className="text-base md:text-lg font-bold leading-tight text-white mb-1.5">
                    {step.label}
                  </h4>
                  {step.detail && (
                    <p className="text-xs md:text-sm text-white/65 leading-relaxed">
                      {step.detail}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;
