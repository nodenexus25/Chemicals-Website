import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Tag } from 'lucide-react';
import defaultImages from '../../data/defaultImages';

const ProductCard = ({ product, index = 0, variant = 'default' }) => {
  const isCompact = variant === 'compact';
  const image = product.image || defaultImages.product.fallback;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1"
    >
      <Link to={`/products/${product.slug}`} className="relative block overflow-hidden">
        <div className={`relative ${isCompact ? 'aspect-[5/3]' : 'aspect-[5/3]'} overflow-hidden`}>
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[800ms] ease-[0.22,1,0.36,1] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/70 via-neutral-dark/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-industrial-green tracking-wide">
              <Tag size={11} />
              {product.tagline}
            </span>
          </div>
        </div>
      </Link>

      <div className={`flex flex-col flex-1 ${isCompact ? 'p-5' : 'p-6 md:p-7'}`}>
        <Link to={`/products/${product.slug}`}>
          <h3 className={`font-bold tracking-tight text-neutral-dark group-hover:text-industrial-green transition-colors duration-300 ${isCompact ? 'text-lg' : 'text-xl md:text-2xl'}`}>
            {product.name}
          </h3>
        </Link>

        {!isCompact && (
          <p className="mt-3 text-sm leading-relaxed text-neutral-dark/65 line-clamp-3">
            {product.description}
          </p>
        )}

        <div className={`flex flex-wrap gap-1.5 mt-${isCompact ? '3.5' : '4.5'}`}>
          {product.industries.slice(0, isCompact ? 2 : 3).map((ind) => (
            <span
              key={ind}
              className="inline-block px-2.5 py-1 rounded-lg bg-neutral-light text-[11px] font-medium text-steel-blue"
            >
              {ind}
            </span>
          ))}
          {product.industries.length > (isCompact ? 2 : 3) && (
            <span className="inline-block px-2.5 py-1 rounded-lg bg-neutral-light text-[11px] font-medium text-neutral-dark/40">
              +{product.industries.length - (isCompact ? 2 : 3)}
            </span>
          )}
        </div>

        <div className="mt-5 pt-5 border-t border-neutral-light flex items-center justify-between">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-industrial-green group/link"
          >
            <span>Learn More</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Link>
          <Link
            to={`/contact?product=${product.slug}`}
            className="text-xs font-semibold text-accent-amber hover:text-neutral-dark transition-colors duration-200"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
