import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import AchievementStrip from '../components/home/AchievementStrip';
import ProductGrid from '../components/home/ProductGrid';
import LeadershipQuote from '../components/home/LeadershipQuote';
import SustainabilityCallout from '../components/home/SustainabilityCallout';
import EnquiryForm from '../components/forms/EnquiryForm';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sanjivani Chemical Division | Ethanol, Bulk Drugs & Organic Chemicals — Maharashtra</title>
        <meta name="description" content="Maharashtra's pioneering integrated chemical manufacturer — ethanol from ESJ, acetic anhydride, ethyl acetate, bulk drugs, powered by circular bio-energy. B2B supplier to pharma, paints & fuel sectors." />
        <meta name="keywords" content="ethanol manufacturer Maharashtra, acetic anhydride supplier India, bulk drugs manufacturer, ethanol from ESJ, ethyl acetate supplier, Sanjivani Chemical" />
        <meta property="og:title" content="Sanjivani Chemical Division | Integrated Chemical Manufacturer" />
        <meta property="og:description" content="Ethanol, bulk drugs & specialty chemicals — Maharashtra's first ESJ-to-ethanol producer. 38+ years of cooperative industrial heritage." />
      </Helmet>

      <HeroSection />
      <AchievementStrip />
      <ProductGrid />
      <LeadershipQuote />
      <SustainabilityCallout />

      <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-br from-neutral-light via-white to-neutral-light/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-green/10 text-industrial-green text-xs font-bold tracking-wider uppercase mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-industrial-green" />
                Let's Collaborate
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-5">
                Ready to source with confidence?
              </h2>
              <p className="text-base md:text-lg text-neutral-dark/65 leading-relaxed mb-8">
                Share your grade, quantity & delivery requirements. Our B2B sales team responds within 24 hours with
                competitive pricing, specification sheets, and logistics options.
              </p>
              <div className="space-y-4 p-5 md:p-6 rounded-3xl bg-white border border-neutral-light shadow-card">
                {[
                  { k: 'Email', v: 'chemical@sanjivani.coop' },
                  { k: 'Phone', v: '+91 12345 67890' },
                  { k: 'Business Hours', v: 'Mon–Sat · 9 AM – 6 PM IST' },
                ].map((x, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-light last:pb-0 last:border-0">
                    <span className="text-xs uppercase tracking-wider font-semibold text-neutral-dark/45">{x.k}</span>
                    <span className="text-sm font-medium text-neutral-dark text-right">{x.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <EnquiryForm variant="card" compact title="Send an Enquiry" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
