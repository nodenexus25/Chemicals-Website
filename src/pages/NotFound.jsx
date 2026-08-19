import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTAButton from '../components/shared/CTAButton';
import { Home, Search, ArrowLeft, ChevronRight, Leaf, Factory } from 'lucide-react';
import defaultImages from '../data/defaultImages';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Sanjivani Chemical Division</title>
        <meta name="description" content="The page you are looking for doesn't exist. Navigate back to Sanjivani Chemical Division's home, products, plants or contact pages." />
      </Helmet>

      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img
          src={defaultImages.pageHeaders.notFound}
          alt=""
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-neutral-light/95 to-white" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(27,94,58,0.07),transparent_55%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-green/10 text-industrial-green text-xs font-bold tracking-wider uppercase mb-8"
              >
                <Search size={12} />
                Error 404
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative inline-block mb-8"
              >
                <h1 className="text-[9rem] md:text-[13rem] lg:text-[16rem] leading-none font-black tracking-[-0.06em] bg-gradient-to-br from-industrial-green via-steel-blue to-industrial-green bg-clip-text text-transparent select-none">
                  404
                </h1>
                <div className="absolute -top-4 -right-6 md:-right-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-accent-amber/15 border border-accent-amber/30 backdrop-blur flex items-center justify-center text-accent-amber rotate-12">
                    <Leaf size={26} />
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-4 md:-left-8">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-steel-blue/10 border border-steel-blue/20 flex items-center justify-center text-steel-blue -rotate-12">
                    <Factory size={22} />
                  </div>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-5 max-w-xl"
              >
                This page has wandered into a chemical reaction.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.38 }}
                className="text-base md:text-lg text-neutral-dark/65 leading-relaxed max-w-lg mb-10"
              >
                The page you're looking for doesn't exist, has been moved, or perhaps never existed. No worries —
                here are a few trusted starting points to get you back to the Sanjivani supply chain.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex flex-wrap items-center gap-4"
              >
                <CTAButton to="/" variant="primaryGreen" size="lg">
                  <Home size={16} strokeWidth={2.2} />
                  Back to Home
                </CTAButton>
                <button
                  onClick={() => typeof window !== 'undefined' && window.history.back()}
                  className="inline-flex items-center gap-2 px-5 md:px-6 py-3 md:py-4 rounded-full bg-white text-neutral-dark font-semibold text-sm md:text-base border border-neutral-light shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <ArrowLeft size={16} />
                  Go Back
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <div className="p-7 md:p-9 lg:p-10 rounded-[2rem] bg-white border border-neutral-light shadow-card">
                <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-industrial-green mb-4">
                  Quick Navigation
                </p>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-dark mb-6">
                  Popular pages visitors explore next
                </h3>

                <nav className="space-y-2 mb-8">
                  {[
                    { to: '/products', label: 'Product Portfolio', desc: 'Ethanol, Acetic Acid, Bulk Drugs & more' },
                    { to: '/plants', label: '7 Manufacturing Plants', desc: 'Integrated circular campus, Kopargaon' },
                    { to: '/sustainability', label: 'Circular Sustainability', desc: 'ESJ ethanol · bio-gas · 12 MW co-gen' },
                    { to: '/about', label: 'About Our Division', desc: '38+ years of cooperative heritage' },
                    { to: '/achievements', label: 'Awards & Firsts', desc: 'Maharashtra\'s ESJ ethanol pioneers' },
                    { to: '/contact', label: 'Contact & Enquiry', desc: 'B2B sales desk responds in 24 hours' },
                  ].map((it, i) => (
                    <Link
                      key={it.to}
                      to={it.to}
                      className="group flex items-center justify-between gap-4 p-4 rounded-2xl border border-transparent hover:bg-neutral-light/80 hover:border-neutral-light transition-all duration-200"
                    >
                      <div className="min-w-0">
                        <p className="text-sm md:text-base font-bold text-neutral-dark group-hover:text-industrial-green transition-colors">
                          {it.label}
                        </p>
                        <p className="text-xs md:text-sm text-neutral-dark/55 mt-0.5 truncate">{it.desc}</p>
                      </div>
                      <span className="w-9 h-9 rounded-full bg-white border border-neutral-light text-neutral-dark/40 group-hover:border-industrial-green group-hover:text-industrial-green group-hover:bg-industrial-green/5 flex items-center justify-center shrink-0 transition-all">
                        <ChevronRight size={16} />
                      </span>
                    </Link>
                  ))}
                </nav>

                <div className="pt-6 border-t border-neutral-light">
                  <p className="text-xs text-neutral-dark/50 leading-relaxed mb-4">
                    Still can't find what you're looking for? Our sales team knows every plant and every product by heart —
                    drop a message and we'll respond within one business day.
                  </p>
                  <CTAButton to="/contact" variant="primary" size="md">
                    Contact Sales Desk
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
