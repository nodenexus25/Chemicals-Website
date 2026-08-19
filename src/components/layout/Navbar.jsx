import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/plants', label: 'Plants' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-neutral-light'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-industrial-green to-steel-blue flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
            <span className="text-white font-bold text-lg tracking-tight">S</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-base tracking-tight transition-colors duration-300 ${scrolled ? 'text-neutral-dark' : 'text-white'}`}>
              Sanjivani
            </span>
            <span className={`text-[11px] tracking-widest uppercase font-medium transition-colors duration-300 ${scrolled ? 'text-industrial-green' : 'text-accent-amber'}`}>
              Chemical Division
            </span>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  isActive
                    ? scrolled
                      ? 'text-industrial-green bg-industrial-green/5'
                      : 'text-white bg-white/10 backdrop-blur-sm'
                    : scrolled
                    ? 'text-neutral-dark/70 hover:text-neutral-dark hover:bg-neutral-light'
                    : 'text-white/85 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.sanjivanigroup.com"
            target="_blank"
            rel="noreferrer"
            className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 group ${
              scrolled
                ? 'border-neutral-light text-steel-blue hover:border-industrial-green/30 hover:text-industrial-green hover:bg-industrial-green/5'
                : 'border-white/20 text-white/90 hover:border-white/40 hover:text-white hover:bg-white/10 backdrop-blur-sm'
            }`}
          >
            <span>Sanjivani Group</span>
            <ExternalLink size={14} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`xl:hidden w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
              scrolled ? 'bg-neutral-light text-neutral-dark' : 'bg-white/10 text-white backdrop-blur-sm'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden bg-white/95 backdrop-blur-2xl border-t border-neutral-light overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3.5 rounded-2xl text-base font-medium transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'bg-industrial-green text-white shadow-md'
                        : 'text-neutral-dark/80 hover:bg-neutral-light hover:text-neutral-dark'
                    }`
                  }
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  <span>{link.label}</span>
                  <span className="opacity-40">→</span>
                </NavLink>
              ))}
              <div className="pt-4 mt-2 border-t border-neutral-light">
                <a
                  href="https://www.sanjivanigroup.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl bg-gradient-to-r from-steel-blue/5 to-industrial-green/5 border border-steel-blue/10 text-steel-blue font-semibold group"
                >
                  <span>Sanjivani Group Corporate</span>
                  <ExternalLink size={16} className="opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
