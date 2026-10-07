import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import ProductCard from '../components/shared/ProductCard';
import { products } from '../data/products';
import { Search, X } from 'lucide-react';
import defaultImages from '../data/defaultImages';

const Products = () => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.industries.some((i) => i.toLowerCase().includes(q));
      return matchesQuery;
    });
  }, [query]);

  return (
    <>
      <Helmet>
        <title>Products | Ethanol, Acetic Acid, Bulk Drugs — Sanjivani Chemicals</title>
        <meta name="description" content="Sanjeevani Chemicals: ESJ fuel & pharma-grade ethanol, acetic acid, ethyl acetate, acetic anhydride, cGMP bulk drugs. Full specs, packaging, B2B enquiry." />
        <meta name="keywords" content="ethanol supplier Maharashtra, acetic acid India, ethyl acetate supplier, acetic anhydride manufacturer, bulk drugs API, Sanjivani products" />
      </Helmet>

      <PageHeader
        title="Industrial chemicals manufactured to consistent, trusted specifications."
        subtitle="Five flagship product lines for pharma, paints, textiles and fuels. 38+ years process engineering, on-site labs and integrated supply reliability."
        breadcrumbItems={[{ label: 'Products' }]}
        bgImage={defaultImages.pageHeaders.products}
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sticky top-20 z-30 -mx-2 md:mx-0 mb-10 md:mb-14"
          >
            <div className="p-3 md:p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-neutral-light shadow-card">
              <div className="relative w-full">
                <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-dark/40" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products by name, industry, application…"
                  className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-neutral-light/60 border border-transparent focus:border-industrial-green focus:bg-white focus:ring-4 focus:ring-industrial-green/10 transition-all text-sm text-neutral-dark placeholder:text-neutral-dark/35 outline-none"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-neutral-dark/10 hover:bg-neutral-dark/15 text-neutral-dark/60 flex items-center justify-center transition-colors"
                    aria-label="Clear search"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <motion.div
                key="results"
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
              >
                {filtered.map((p, i) => (
                  <ProductCard key={p.slug} product={p} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-20 md:py-28 text-center max-w-xl mx-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-neutral-light flex items-center justify-center text-neutral-dark/40 mx-auto mb-5">
                  <Search size={26} />
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark mb-2">No products match your search</h3>
                <p className="text-neutral-dark/60 mb-6 leading-relaxed">
                  Try a different keyword or contact our team for custom chemical requirements.
                </p>
                <button
                  onClick={() => {
                    setQuery('');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-industrial-green text-white text-sm font-semibold hover:bg-industrial-green/90 transition-colors"
                >
                  <X size={15} />
                  Clear search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Products;
