import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import PlantCard from '../components/shared/PlantCard';
import EnquiryForm from '../components/forms/EnquiryForm';
import { plants } from '../data/plants';
import { ArrowLeft, Calendar, Award, Check, ChevronRight, Image as ImageIcon } from 'lucide-react';
import CTAButton from '../components/shared/CTAButton';
import defaultImages from '../data/defaultImages';

const PlantDetail = () => {
  const { slug } = useParams();
  const plant = useMemo(() => plants.find((p) => p.slug === slug), [slug]);
  const others = useMemo(() => plants.filter((p) => p.slug !== slug).slice(0, 3), [slug]);

  if (!plant) {
    return (
      <section className="pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-black mb-4 text-neutral-dark">Plant not found</h1>
          <p className="text-neutral-dark/60 mb-8">The manufacturing plant you are looking for does not exist.</p>
          <CTAButton to="/plants" variant="primaryGreen">Back to All Plants</CTAButton>
        </div>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{plant.name} | Sanjivani Chemical Division</title>
        <meta name="description" content={`${plant.name} — ${plant.description}. Full details, gallery, key highlights, certifications and B2B enquiry for Sanjivani's integrated manufacturing plant.`} />
      </Helmet>

      <PageHeader
        title={plant.name}
        subtitle={plant.description}
        breadcrumbItems={[{ label: 'Plants', href: '/plants' }, { label: plant.name }]}
        bgImage={plant.image || defaultImages.pageHeaders.plantDetail}
        accent="blue"
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
            <Link to="/plants" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-dark/60 hover:text-steel-blue transition-colors">
              <ArrowLeft size={15} />
              Back to all plants
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8 md:space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
              >
                <div className="md:col-span-3 relative rounded-[2rem] overflow-hidden aspect-[16/9] shadow-2xl group">
                  <img src={plant.image} alt={plant.name} className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105" />
                  <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                    {plant.established && (
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-bold text-industrial-green tracking-wide">
                        <Calendar size={11} />
                        Est. {plant.established}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur text-[11px] font-bold text-steel-blue tracking-wide">
                      Capacity · {plant.capacity || 'Specialized'}
                    </span>
                  </div>
                </div>

                {plant.gallery?.map((g, i) => (
                  <div key={i} className="relative rounded-2xl overflow-hidden aspect-video shadow-card group cursor-zoom-in">
                    <img src={g} alt={`${plant.name} gallery ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3.5">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white">
                        <ImageIcon size={12} />
                        View Detail
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-5">
                  {plant.name}
                </h2>
                <p className="text-base md:text-lg text-neutral-dark/70 leading-relaxed max-w-3xl">
                  {plant.description}
                </p>
              </motion.div>

              {plant.keyHighlights && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="p-7 md:p-9 rounded-[2rem] bg-gradient-to-br from-steel-blue/[0.06] via-white to-industrial-green/[0.06] border border-steel-blue/10"
                >
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-dark mb-6 flex items-center gap-2.5">
                    <Award size={22} className="text-industrial-green" />
                    Key Highlights
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-3 md:gap-4">
                    {plant.keyHighlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 p-4 md:p-5 rounded-2xl bg-white border border-neutral-light shadow-card">
                        <div className="w-8 h-8 rounded-lg bg-industrial-green/10 flex items-center justify-center text-industrial-green shrink-0 mt-0.5">
                          <Check size={15} strokeWidth={3} />
                        </div>
                        <p className="text-sm md:text-[15px] font-medium text-neutral-dark/85 leading-snug">{h}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {plant.certifications && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="p-7 md:p-9 rounded-[2rem] bg-white border border-neutral-light shadow-card"
                >
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-dark mb-5">
                    Standards & Certifications
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {plant.certifications.map((c) => (
                      <span key={c} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-br from-industrial-green/[0.08] to-steel-blue/[0.08] border border-industrial-green/10 text-sm font-bold text-neutral-dark">
                        <Award size={14} className="text-industrial-green" />
                        {c}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-28 space-y-5"
            >
              <div className="p-6 md:p-7 rounded-3xl bg-gradient-to-br from-industrial-green to-steel-blue text-white shadow-2xl">
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-accent-amber mb-3">Plant Tour & Audit</p>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-3">
                  Schedule a plant visit or virtual audit
                </h3>
                <p className="text-sm md:text-base text-white/75 leading-relaxed mb-5">
                  We welcome B2B buyers, investors, and regulators to tour the facility or join a live online walkthrough of this specific plant.
                </p>
                <div className="flex flex-wrap gap-3">
                  <CTAButton variant="primary" size="md">Book a Visit</CTAButton>
                  <a href="#enquiry" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur border border-white/20 hover:bg-white/15 text-sm font-semibold transition-colors">
                    Enquire Online
                    <ChevronRight size={15} />
                  </a>
                </div>
              </div>

              <div id="enquiry">
                <EnquiryForm
                  variant="card"
                  title={`Enquire about ${plant.name}`}
                  subtitle="Share your product requirement, feedstock or off-take interest. Our plant-level technical team will respond within one business day."
                />
              </div>
            </motion.div>
          </div>

          {others.length > 0 && (
            <div className="mt-24 md:mt-32">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-12">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-steel-blue mb-3">Other Plants</p>
                  <h3 className="text-2xl md:text-4xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] max-w-xl">
                    Explore the rest of the integrated campus
                  </h3>
                </div>
                <Link to="/plants" className="inline-flex items-center gap-2 text-sm font-semibold text-steel-blue hover:text-industrial-green transition-colors group">
                  All 7 plants
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-7">
                {others.map((p, i) => (
                  <PlantCard key={p.slug} plant={p} index={i} variant="grid" />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PlantDetail;
