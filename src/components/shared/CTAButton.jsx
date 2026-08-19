import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const CTAButton = ({
  to,
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 md:px-6 py-3 text-sm gap-2',
    lg: 'px-7 md:px-8 py-3.5 md:py-4 text-base gap-2.5',
  }[size];

  const variantClasses = {
    primary: 'bg-accent-amber text-neutral-dark hover:bg-accent-amber/90 shadow-lg hover:shadow-xl hover:shadow-accent-amber/20',
    primaryGreen: 'bg-industrial-green text-white hover:bg-industrial-green/90 shadow-lg hover:shadow-xl hover:shadow-industrial-green/20',
    secondary: 'bg-white text-neutral-dark hover:bg-neutral-light border border-neutral-light shadow-sm',
    secondaryLight: 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20',
    ghost: 'text-steel-blue hover:bg-neutral-light',
    dark: 'bg-neutral-dark text-white hover:bg-neutral-dark/90 shadow-lg',
    outline: 'bg-transparent border-2 border-industrial-green text-industrial-green hover:bg-industrial-green hover:text-white',
    outlineLight: 'bg-transparent border-2 border-white/80 text-white hover:bg-white hover:text-steel-blue',
  }[variant];

  const ArrowIcon = icon === 'external' ? ArrowUpRight : ArrowRight;

  const content = (
    <>
      <span className="font-semibold tracking-tight">{children}</span>
      <ArrowIcon
        size={size === 'lg' ? 19 : size === 'sm' ? 14 : 16}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </>
  );

  const baseClasses = `group inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-[0.97] ${sizeClasses} ${variantClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={baseClasses} {...props}>
        {content}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={baseClasses} {...props}>
      {content}
    </button>
  );
};

export default CTAButton;
