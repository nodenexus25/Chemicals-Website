import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import defaultImages from '../../data/defaultImages';

const PageHeader = ({ title, subtitle, breadcrumbItems = [], bgImage, accent = 'green' }) => {
  const location = useLocation();
  const resolvedBg = bgImage || defaultImages.pageHeaders.fallback;

  const defaultBackground = accent === 'green'
    ? 'from-industrial-green via-industrial-green/95 to-steel-blue'
    : 'from-steel-blue via-steel-blue/95 to-industrial-green';

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {resolvedBg && (
        <>
          <img
            src={resolvedBg}
            alt=""
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className={`absolute inset-0 z-0 bg-gradient-to-br ${defaultBackground} mix-blend-multiply opacity-92`} />
        </>
      )}
      {!resolvedBg && (
        <div className={`absolute inset-0 z-0 bg-gradient-to-br ${defaultBackground}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,163,61,0.15),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_55%)]" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.nav
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2 text-sm text-white/70 mb-6"
        >
          <Link to="/" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
            <Home size={14} />
            <span>Home</span>
          </Link>
          {breadcrumbItems.slice(0, -1).map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <ChevronRight size={13} className="opacity-50" />
              {item.href ? (
                <Link to={item.href} className="hover:text-white transition-colors">{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          ))}
          {breadcrumbItems.length > 0 && (
            <div className="flex items-center gap-2 text-white">
              <ChevronRight size={13} className="opacity-50" />
              <span className="text-white/95">{breadcrumbItems[breadcrumbItems.length - 1].label}</span>
            </div>
          )}
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.05]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 md:mt-6 text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
