import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Sprout, Factory, Droplets, FlaskConical, Zap, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Plants = lazy(() => import('./pages/Plants'));
const PlantDetail = lazy(() => import('./pages/PlantDetail'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Sustainability = lazy(() => import('./pages/Sustainability'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Brand = lazy(() => import('./pages/Brand'));
const Programs = lazy(() => import('./pages/Programs'));
const Impact = lazy(() => import('./pages/Impact'));

const Loader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-industrial-green/15" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-industrial-green animate-spin" />
      </div>
      <p className="text-xs uppercase tracking-[0.25em] font-bold text-neutral-dark/45">Loading</p>
    </div>
  </div>
);

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -6 }}
    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);
  return null;
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-dark antialiased selection:bg-industrial-green selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 relative z-0">
        <AnimatePresence mode="wait">
          <PageWrapper key={location.pathname}>
            <Suspense fallback={<Loader />}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/plants" element={<Plants />} />
                <Route path="/plants/:slug" element={<PlantDetail />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/sustainability" element={<Sustainability />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/brand" element={<Brand />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </PageWrapper>
        </AnimatePresence>
      </main>
      <Footer />
      <section className="relative bg-neutral-dark border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(232,163,61,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(45,106,79,0.14),transparent_55%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 md:pt-24 pb-16 md:pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] md:text-xs font-bold tracking-[0.32em] uppercase text-accent-amber mb-6 md:mb-8">
              SANJIVANI GROUP ECOSYSTEM
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[3.5rem] font-black text-white tracking-[-0.03em] leading-[1.05] mb-6 md:mb-8">
              Group Ecosystem — One Supply Chain
            </h2>
            <p className="text-base md:text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-14 md:mb-16">
              Our sugarcane by-products feed directly into the Chemical Division's Ethanol and ESJ-to-Ethanol operations — a closed-loop model from farm to fuel.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 lg:gap-6 mb-14 md:mb-16">
            {[
              { icon: Sprout, label: 'Farm' },
              { icon: Factory, label: 'Sugar Factory' },
              { icon: Droplets, label: 'Molasses / ESJ' },
              { icon: FlaskConical, label: 'Chemical Division' },
              { icon: Zap, label: 'Fuel & Consumer' },
            ].map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={node.label} className="flex items-center gap-3 md:gap-5 lg:gap-6">
                  <div className="flex flex-col items-center gap-3 md:gap-4">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.75rem] bg-white/5 border border-white/10 flex items-center justify-center text-industrial-green backdrop-blur-xl hover:bg-white/10 hover:border-industrial-green/30 transition-all duration-300">
                      <Icon size={26} strokeWidth={2} />
                    </div>
                    <p className="text-sm md:text-base font-semibold text-white/85 tracking-tight">{node.label}</p>
                  </div>
                  {i < 4 && (
                    <ArrowRight size={20} className="text-white/35 shrink-0 md:size-6" strokeWidth={2} />
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-[1.125rem] rounded-full bg-industrial-green text-white font-bold text-base md:text-lg tracking-tight shadow-lg shadow-industrial-green/20 hover:bg-emerald-600 transition-all duration-300"
            >
              Visit Chemical Division
              <ArrowRight size={18} strokeWidth={2.3} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
