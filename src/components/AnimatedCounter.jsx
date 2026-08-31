import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({
  value,
  suffix = '',
  prefix = '',
  duration = 2000,
  decimals = 0,
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const startTime = performance.now();
    const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) || 0 : value;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * eased;
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplayValue(numericValue);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, duration]);

  const formatted = (() => {
    const raw = typeof value === 'string' ? value : displayValue.toFixed(decimals);
    if (typeof value === 'string') {
      const hasComma = value.includes(',');
      const num = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
      const pct = Math.min(1, displayValue / Math.max(num, 1));
      if (hasComma) {
        const parts = value.split(/(\d+[,\d]*\.?\d*)/);
        if (parts.length >= 3) {
          const scaledNum = Math.round(num * pct).toLocaleString('en-IN');
          return value.replace(/\d+[,\d]*\.?\d*/, scaledNum);
        }
      }
      return prefix + (displayValue >= 1000
        ? Math.round(displayValue).toLocaleString('en-IN')
        : decimals > 0
          ? displayValue.toFixed(decimals)
          : Math.round(displayValue).toString()) + suffix;
    }
    return prefix + (numeric >= 1000
      ? Math.round(displayValue).toLocaleString('en-IN')
      : decimals > 0
        ? displayValue.toFixed(decimals)
        : Math.round(displayValue).toString()) + suffix;
  })();

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}
    >
      {formatted}
    </motion.span>
  );
};

export default AnimatedCounter;
