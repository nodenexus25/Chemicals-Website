import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import ProductCard from '../components/shared/ProductCard';
import EnquiryForm from '../components/forms/EnquiryForm';
import { products } from '../data/products';
import { ArrowLeft, Check, Package, FileText, Warehouse, ChevronRight } from 'lucide-react';
import CTAButton from '../components/shared/CTAButton';
import defaultImages from '../data/defaultImages';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.slug !== product.slug).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <section className="pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-black mb-4 text-neutral-dark">Product not found</h1>
          <p className="text-neutral-dark/60 mb-8">The product you are looking for does not exist or has been moved.</p>
          <CTAButton to="/products" variant="primaryGreen">Back to Products</CTAButton>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | Sanjivani Chemical Division</title>
        <meta name="description" content={`${product.tagline}. ${product.name} manufactured by Sanjivani Chemical Division — Maharashtra, India. Specifications, industries served, packaging, and B2B enquiry.`} />
        <meta name="keywords" content={`${product.name} supplier, ${product.slug} manufacturer India, Sanjivani ${product.name}`} />
      </Helmet>

      <PageHeader
        title={product.name}
        subtitle={product.tagline + ' — consistent purity, integrated supply, and B2B delivery from Maharashtra\'s leading chemical cooperative.'}
        breadcrumbItems={[{ label: 'Products', href: '/products' }, { label: product.name }]}
        bgImage={product.image || defaultImages.pageHeaders.productDetail}
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-12"
          >
            <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-dark/60 hover:text-industrial-green transition-colors">
              <ArrowLeft size={15} />
              Back to all products
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-7"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-[16/10] shadow-2xl">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-bold text-industrial-green tracking-wide">
                    <Package size={11} />
                    {product.tagline}
                  </span>
                </div>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-5">
                  {product.name}
                </h2>
                <p className="text-base md:text-lg text-neutral-dark/70 leading-relaxed max-w-3xl">
                  {product.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5 pt-2">
                {[
                  { icon: FileText, title: 'Specifications', items: product.specifications },
                  { icon: Warehouse, title: 'Packaging Options', items: Object.fromEntries(product.packaging.map((p) => [p, 'Available'])) },
                  { icon: Check, title: 'Industries Served', items: Object.fromEntries(product.industries.map((i) => [i, '✓'])) },
                ].map((block, bi) => {
                  const Icon = block.icon;
                  return (
                    <div key={bi} className="p-6 md:p-7 rounded-3xl bg-white border border-neutral-light shadow-card">
                      <div className="w-11 h-11 rounded-xl bg-industrial-green/10 flex items-center justify-center text-industrial-green mb-4">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-bold text-neutral-dark mb-4">{block.title}</h4>
                      <dl className="space-y-2.5">
                        {Object.entries(block.items).map(([k, v]) => (
                          <div key={k} className="flex items-start justify-between gap-3 pb-2 border-b border-neutral-light/70 last:border-0 last:pb-0">
                            <dt className="text-xs md:text-sm text-neutral-dark/75 leading-snug">{k}</dt>
                            <dd className="text-xs md:text-sm font-semibold text-industrial-green shrink-0 text-right">
                              {typeof v === 'string' && v.length < 8 ? v : ''}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-industrial-green/[0.06] via-white to-accent-amber/[0.06] border border-industrial-green/10">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-dark mb-4">
                  Applications & Typical Use Cases
                </h3>
                <ul className="grid md:grid-cols-2 gap-3 md:gap-3.5">
                  {product.industries.map((ind, i) => (
                    <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-neutral-light">
                      <div className="w-7 h-7 rounded-lg bg-industrial-green/10 flex items-center justify-center text-industrial-green shrink-0 mt-0.5">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-dark text-sm">{ind}</p>
                        <p className="text-xs text-neutral-dark/55 mt-1 leading-relaxed">
                          Supplied with grade-specific certification, logistics & technical support.
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <EnquiryForm
                variant="card"
                title={`Request a quote for ${product.name}`}
                subtitle="Share grade, quantity, delivery location. Sales desk replies within one business day with CoA, pricing, logistics."
              />
            </motion.div>
          </div>

          <div className="mt-24 md:mt-32">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-industrial-green mb-3">Related Products</p>
                <h3 className="text-2xl md:text-4xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] max-w-xl">
                  Clients who bought {product.name} also enquired about
                </h3>
              </div>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-steel-blue hover:text-industrial-green transition-colors group">
                View all products
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
