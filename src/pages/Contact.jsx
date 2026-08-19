import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import EnquiryForm from '../components/forms/EnquiryForm';
import {
  MapPin, Phone, Mail, Clock, Globe2,
  Share2, Globe, Users, Send,
  Truck, FileCheck, Headphones, Factory
} from 'lucide-react';
import defaultImages from '../data/defaultImages';

const contactDetails = [
  {
    icon: Factory,
    title: 'Plant & Works',
    lines: ['Sanjivani Chemical Division', 'Sanjivani Sahakari Sakhar Karkhana Ltd.', 'Shingnapur, Tal. Kopargaon', 'Dist. Ahmednagar, Maharashtra 423605'],
    tone: 'green',
  },
  {
    icon: Truck,
    title: 'Logistics Connectivity',
    lines: ['12 km from Kopargaon (NH-160)', '32 km from Shirdi Airport', '45 km from Ahmednagar RTO', '90 km from Manmad Junction (Rail)'],
    tone: 'blue',
  },
  {
    icon: FileCheck,
    title: 'Commercial & Billing',
    lines: ['GSTIN: 27AAACS1234F1Z5', 'PAN: AAACS1234F', 'MSME / UAM: MH12A0012345', 'IE Code: INB27AAACS1234F'],
    tone: 'amber',
  },
];

const quickFacts = [
  { v: '24h', l: 'Quote Response', icon: Headphones },
  { v: 'Pan-India', l: 'Truck / Rail Delivery', icon: Truck },
  { v: '8+', l: 'Export Countries', icon: Globe2 },
  { v: 'ISO', l: '9001 · 14001 · 50001', icon: FileCheck },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Sanjivani Chemical Division — Maharashtra</title>
        <meta name="description" content="Contact Sanjivani Chemical Division for ethanol, acetic anhydride, ethyl acetate, bulk drugs & custom chemical enquiries. Plant location in Kopargaon, Ahmednagar, Maharashtra." />
        <meta name="keywords" content="Sanjivani Chemical contact, ethanol supplier Mumbai, chemical B2B enquiry Maharashtra, Kopargaon chemical plant address" />
      </Helmet>

      <PageHeader
        title="Let's build a long-term supply partnership."
        subtitle="Share your grade, quantity, and delivery timeline. Our B2B sales desk — based in the Kopargaon plant campus — responds within 24 hours with quotes, specification sheets, and logistics options."
        breadcrumbItems={[{ label: 'Contact' }]}
        accent="blue"
        bgImage={defaultImages.pageHeaders.contact}
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-20">
            {contactDetails.map((c, i) => {
              const Icon = c.icon;
              const toneMap = {
                green: { bg: 'from-industrial-green/10 to-emerald-500/10', ring: 'bg-industrial-green text-white', text: 'text-industrial-green' },
                blue: { bg: 'from-steel-blue/10 to-sky-500/10', ring: 'bg-steel-blue text-white', text: 'text-steel-blue' },
                amber: { bg: 'from-accent-amber/15 to-orange-500/10', ring: 'bg-accent-amber text-neutral-dark', text: 'text-accent-amber' },
              }[c.tone];
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative bg-white rounded-3xl p-7 md:p-8 border border-neutral-light shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${toneMap.bg} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-2xl ${toneMap.ring} flex items-center justify-center shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={26} strokeWidth={2.1} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-neutral-dark mb-4">{c.title}</h3>
                    <address className="space-y-1.5 not-italic">
                      {c.lines.map((l, j) => (
                        <p key={j} className="text-sm leading-relaxed text-neutral-dark/70">{l}</p>
                      ))}
                    </address>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16 md:mb-20">
            {quickFacts.map((q, i) => {
              const Icon = q.icon;
              return (
                <motion.div
                  key={q.l}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="p-5 md:p-6 rounded-3xl bg-neutral-light/60 border border-neutral-light text-center hover:bg-white hover:shadow-card transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white mx-auto flex items-center justify-center text-industrial-green shadow-sm mb-3.5">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <p className="text-xl md:text-2xl font-black tracking-tight text-neutral-dark">{q.v}</p>
                  <p className="text-[11px] uppercase tracking-wider text-neutral-dark/45 font-semibold mt-1 leading-tight">{q.l}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-industrial-green/10 text-industrial-green text-xs font-bold tracking-wider uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrial-green" />
                  Reach Out Directly
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.035em] text-neutral-dark leading-[1.05] mb-5 max-w-md">
                  A single point of contact for every enquiry.
                </h2>
                <p className="text-base md:text-lg text-neutral-dark/65 leading-relaxed max-w-md">
                  No call centers. Our technical sales engineers work from the plant campus and coordinate directly with
                  production, QC, and logistics teams for accurate quotes & on-time delivery.
                </p>
              </div>

              <div className="space-y-3">
                <a href="tel:+911234567890" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-light hover:border-industrial-green/30 hover:shadow-card transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-industrial-green/10 flex items-center justify-center text-industrial-green group-hover:bg-industrial-green group-hover:text-white transition-all duration-300 shrink-0">
                    <Phone size={19} strokeWidth={2.1} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-neutral-dark/40 mb-0.5">Call the Plant Desk</p>
                    <p className="text-lg font-bold tracking-tight text-neutral-dark">+91 12345 67890</p>
                  </div>
                </a>

                <a href="mailto:chemical@sanjivani.coop" className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-neutral-light hover:border-industrial-green/30 hover:shadow-card transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-steel-blue/10 flex items-center justify-center text-steel-blue group-hover:bg-steel-blue group-hover:text-white transition-all duration-300 shrink-0">
                    <Mail size={19} strokeWidth={2.1} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-neutral-dark/40 mb-0.5">Email Sales</p>
                    <p className="text-lg font-bold tracking-tight text-neutral-dark">chemical@sanjivani.coop</p>
                  </div>
                </a>

                <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-neutral-light hover:border-industrial-green/30 hover:shadow-card transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-accent-amber/15 flex items-center justify-center text-accent-amber group-hover:bg-accent-amber group-hover:text-neutral-dark transition-all duration-300 shrink-0">
                    <Clock size={19} strokeWidth={2.1} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] font-bold text-neutral-dark/40 mb-0.5">Business Hours</p>
                    <p className="text-sm md:text-base font-semibold text-neutral-dark leading-relaxed">
                      Monday – Saturday · 9:00 AM – 6:00 PM IST<br />
                      <span className="font-normal text-neutral-dark/55">Plant Operations: 24×7 (365 days)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-light/70 border border-neutral-light">
                <p className="text-xs uppercase tracking-wider font-bold text-neutral-dark/45 mb-3">Follow Sanjivani Group</p>
                <div className="flex items-center gap-2.5">
                  {[
                    { i: Share2, l: 'Share' },
                    { i: Globe, l: 'Website' },
                    { i: Users, l: 'Community' },
                    { i: Send, l: 'Newsletter' },
                  ].map((s) => {
                    const SI = s.i;
                    return (
                      <a
                        key={s.l}
                        href="#"
                        aria-label={s.l}
                        className="w-10 h-10 rounded-xl bg-white border border-neutral-light hover:border-industrial-green/30 hover:text-industrial-green text-neutral-dark/60 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                      >
                        <SI size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[2rem] overflow-hidden shadow-card border border-neutral-light">
                <div className="aspect-[16/9] bg-neutral-light">
                  <iframe
                    title="Sanjivani Chemical Division — Plant Location"
                    src="https://www.google.com/maps?q=Kopargaon%20Ahmednagar%20Maharashtra&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5 md:p-6 bg-white flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-industrial-green/10 flex items-center justify-center text-industrial-green shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-dark">Sanjivani Chemical Division</p>
                      <p className="text-xs text-neutral-dark/55 mt-0.5">Shingnapur, Kopargaon · Ahmednagar (MH) 423605</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Kopargaon+Ahmednagar+Maharashtra"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-dark text-white text-xs font-bold hover:bg-neutral-dark/90 transition-colors"
                  >
                    Get Directions
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7"
            >
              <EnquiryForm
                variant="card"
                title="Send an Enquiry"
                subtitle="Tell us about your product, grade, packaging, and destination. We respond within 24 hours with commercial offer, COA samples, and logistics options."
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
