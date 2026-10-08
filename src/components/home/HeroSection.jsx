import { useState, useEffect } from 'react';

const HERO_SLIDES = [
  '/home1.png',
  '/home2.png',
  '/home3.png',
];
const ROTATE_MS = 4000;

const HeroSection = () => {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState(() => Array(HERO_SLIDES.length).fill(false));

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % HERO_SLIDES.length);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  const markLoaded = (i) => {
    setLoaded((arr) => {
      if (arr[i]) return arr;
      const next = arr.slice();
      next[i] = true;
      return next;
    });
  };

  return (
    <section
      className="relative min-h-[104svh] overflow-hidden pt-20 bg-neutral-dark"
    >
      <div className="absolute inset-0">
        {HERO_SLIDES.map((src, i) => {
          const active = i === idx;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                active ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
              }`}
              aria-hidden={!active}
            >
              <img
                src={src}
                alt={`Hero banner ${i + 1}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                onLoad={() => markLoaded(i)}
                className={`absolute inset-0 w-full h-full object-cover object-center ${
                  loaded[i] ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5 md:gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative h-[3px] rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              i === idx
                ? 'w-10 md:w-12 bg-white/90'
                : 'w-5 md:w-6 bg-white/30 hover:bg-white/55'
            }`}
          >
            {i === idx && (
              <span
                className="absolute inset-y-0 left-0 bg-white/60 rounded-full origin-left"
                style={{ animation: `heroProgress ${ROTATE_MS}ms linear forwards` }}
              />
            )}
          </button>
        ))}
      </div>

      <style>{`
        @keyframes heroProgress {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
