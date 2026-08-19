import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Share2, Globe, Users, Send, ArrowUpRight } from 'lucide-react';
import { products } from '../../data/products';
import { plants } from '../../data/plants';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white pt-20 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center shadow-lg group-hover:shadow-industrial-green/20 transition-all duration-300">
                <span className="text-white font-bold text-xl tracking-tight">S</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-tight">Sanjivani</span>
                <span className="text-[11px] tracking-[0.18em] uppercase text-accent-amber font-medium">
                  Chemical Division
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Maharashtra's pioneering integrated chemical manufacturer — ethanol, bulk drugs, and organic chemicals, powered by a 38-year legacy of industrial innovation, farmer partnership, and renewable circular energy.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              {[Share2, Globe, Users, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-industrial-green hover:scale-105 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/products', label: 'Products' },
                { to: '/plants', label: 'Manufacturing' },
                { to: '/achievements', label: 'Achievements' },
                { to: '/sustainability', label: 'Sustainability' },
                { to: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-5">
              Product Portfolio
            </h4>
            <ul className="space-y-3">
              {products.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="group inline-flex items-start gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-amber mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    <span>{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-white mb-5">
              Reach Us
            </h4>
            <div className="space-y-4">
              <a href="#" className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-industrial-green/80 flex items-center justify-center shrink-0 text-white/70 group-hover:text-white transition-all duration-300">
                  <MapPin size={16} />
                </div>
                <div className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                  <p className="font-medium text-white/90">Sanjivani Factory Campus</p>
                  <p>Shingnapur, Tal. Kopargaon,<br />Dist. Ahmednagar, Maharashtra 423605</p>
                </div>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-industrial-green/80 flex items-center justify-center shrink-0 text-white/70 group-hover:text-white transition-all duration-300">
                  <Phone size={16} />
                </div>
                <div className="text-sm">
                  <p className="text-white/45 text-[11px] uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-white/90 font-medium">+91 12345 67890</p>
                </div>
              </a>
              <a href="mailto:chemical@sanjivani.coop" className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-white/5 group-hover:bg-industrial-green/80 flex items-center justify-center shrink-0 text-white/70 group-hover:text-white transition-all duration-300">
                  <Mail size={16} />
                </div>
                <div className="text-sm">
                  <p className="text-white/45 text-[11px] uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-white/90 font-medium">chemical@sanjivani.coop</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <p className="text-sm text-white/45">
              © {new Date().getFullYear()} Sanjivani Group — Chemical Division. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/45">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href="https://www.sanjivanigroup.com" target="_blank" rel="noreferrer" className="hover:text-accent-amber transition-colors inline-flex items-center gap-1.5">
              Sanjivani Group Corporate
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
