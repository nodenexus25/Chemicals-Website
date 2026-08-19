import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

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
      <main className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
