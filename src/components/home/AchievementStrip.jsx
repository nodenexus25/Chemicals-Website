import { motion } from 'framer-motion';
import AchievementCard from '../shared/AchievementCard';
import { achievements } from '../../data/achievements';
import CTAButton from '../shared/CTAButton';

const AchievementStrip = () => {
  const featured = achievements.slice(0, 3);

  return (
    <section id="achievement-strip" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-light/40 to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-industrial-green/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-industrial-green/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-green/10 text-industrial-green text-xs font-bold tracking-wider uppercase mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-industrial-green" />
            Industry Firsts
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl md:text-5xl lg:text-[3.5rem] font-black tracking-[-0.035em] text-neutral-dark leading-[1.05]"
          >
            Milestones that defined{' '}
            <span className="bg-gradient-to-br from-industrial-green to-steel-blue bg-clip-text text-transparent">
              Maharashtra's chemical heritage.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 md:mt-6 text-base md:text-lg text-neutral-dark/65 leading-relaxed max-w-2xl"
          >
            From pioneering ESJ-to-ethanol in the state to standing up during national emergencies — our cooperative has
            consistently delivered industry-defining firsts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-7 mb-12 md:mb-14">
          {featured.map((a, i) => (
            <AchievementCard key={a.title} achievement={a} index={i} variant="strip" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <CTAButton to="/achievements" variant="outline" size="md">
            View All Achievements
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementStrip;
