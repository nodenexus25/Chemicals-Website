import { motion } from 'framer-motion';
import ProductCard from '../shared/ProductCard';
import { products } from '../../data/products';
import CTAButton from '../shared/CTAButton';

const ProductGrid = () => {
  return (
    <section className="relative py-20 md:py-28 lg:py-32 bg-neutral-light/60">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-dark/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-blue/10 text-steel-blue text-xs font-bold tracking-wider uppercase mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-steel-blue" />
              Product Portfolio
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-3xl md:text-5xl lg:text-[3.5rem] font-black tracking-[-0.035em] text-neutral-dark leading-[1.05]"
            >
              Industrial chemicals{' '}
              <span className="bg-gradient-to-br from-steel-blue to-industrial-green bg-clip-text text-transparent">
                that power modern manufacturing.
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <CTAButton to="/products" variant="primaryGreen" size="md">
              Full Product Range
            </CTAButton>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
