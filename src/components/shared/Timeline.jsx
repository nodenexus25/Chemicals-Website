import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const Timeline = ({ items }) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-industrial-green/10 via-industrial-green/40 to-industrial-green/10 md:-translate-x-px" />

      <ol className="space-y-10 md:space-y-16">
        {items.map((item, index) => {
          const Icon = LucideIcons[item.icon] || LucideIcons.Circle;
          const isLeft = index % 2 === 0;

          return (
            <li key={index} className="relative md:grid md:grid-cols-2 md:gap-10 lg:gap-16">
              <div className={`md:pb-4 ${isLeft ? 'md:pr-6 md:text-right md:col-start-1' : 'md:pl-6 md:col-start-2 md:row-start-1'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16 md:pl-0"
                >
                  <div className={`inline-flex items-center gap-3 md:mb-4 ${isLeft ? 'md:flex-row-reverse md:ml-auto' : ''}`}>
                    <span className="inline-block text-4xl md:text-5xl font-black tracking-tighter bg-gradient-to-br from-industrial-green to-steel-blue bg-clip-text text-transparent">
                      {item.year}
                    </span>
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold tracking-tight text-neutral-dark mb-2.5 md:mb-3 ${isLeft ? 'md:max-w-md md:ml-auto' : ''}`}>
                    {item.label}
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed text-neutral-dark/70 ${isLeft ? 'md:max-w-md md:ml-auto' : 'md:max-w-md'}`}>
                    {item.description}
                  </p>
                </motion.div>
              </div>

              <div className="hidden md:block" aria-hidden />

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 + 0.1, type: 'spring', stiffness: 200 }}
                className={`absolute left-6 md:left-1/2 top-0 md:top-2 -translate-x-1/2 flex flex-col items-center`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-card-hover border-4 border-white flex items-center justify-center text-industrial-green">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
              </motion.div>

              <div className={`md:hidden absolute left-6 top-0 -translate-x-1/2 flex flex-col items-center`} aria-hidden>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-card-hover border-4 border-white flex items-center justify-center text-industrial-green">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Timeline;
