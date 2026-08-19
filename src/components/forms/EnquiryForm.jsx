import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Building2, User, Mail, MessageSquare, Package } from 'lucide-react';
import { products } from '../../data/products';

const EnquiryForm = ({ variant = 'inline', compact = false, title, subtitle }) => {
  const [searchParams] = useSearchParams();
  const preselectedProduct = searchParams.get('product');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitted: formSubmitted },
  } = useForm({
    defaultValues: {
      product: preselectedProduct || '',
    },
    mode: 'onTouched',
  });

  useEffect(() => {
    if (preselectedProduct) {
      setValue('product', preselectedProduct, { shouldValidate: true });
    }
  }, [preselectedProduct, setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  const inputBase = `w-full px-4 py-3.5 rounded-2xl bg-white border transition-all duration-200 text-sm text-neutral-dark placeholder:text-neutral-dark/35 focus:outline-none focus:ring-4`;
  const inputState = `border-neutral-light focus:border-industrial-green focus:ring-industrial-green/10`;
  const inputError = `border-red-300 focus:border-red-400 focus:ring-red-100 bg-red-50/40`;

  if (variant === 'modal') return null;

  const wrapperBg = variant === 'card'
    ? 'bg-white rounded-3xl shadow-card border border-neutral-light'
    : 'bg-transparent';

  return (
    <div className={`${wrapperBg} ${compact ? 'p-6 md:p-7' : 'p-8 md:p-10 lg:p-12'} overflow-hidden`}>
      {!compact && (
        <div className="mb-8 md:mb-10 max-w-xl">
          {title && (
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-dark mb-3">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-base md:text-lg text-neutral-dark/65 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="py-8 md:py-12 flex flex-col items-center text-center max-w-lg mx-auto"
          >
            <div className="w-20 h-20 rounded-full bg-industrial-green/10 flex items-center justify-center mb-6">
              <CheckCircle2 size={44} className="text-industrial-green" strokeWidth={2} />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-dark mb-2.5">
              Enquiry sent successfully
            </h4>
            <p className="text-neutral-dark/65 leading-relaxed">
              Thank you for reaching out. Our B2B sales team will review your requirements and respond within 24 hours with tailored specifications and pricing.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 md:space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-dark/55 mb-2">
                  <User size={12} />
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rajesh Kumar"
                  className={`${inputBase} ${errors.name ? inputError : inputState}`}
                  {...register('name', {
                    required: 'Please enter your full name',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' },
                  })}
                />
                {errors.name && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-medium">
                    <AlertCircle size={12} />
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-dark/55 mb-2">
                  <Building2 size={12} />
                  Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kumar Pharma Ltd."
                  className={`${inputBase} ${errors.company ? inputError : inputState}`}
                  {...register('company', {
                    required: 'Company name is required',
                  })}
                />
                {errors.company && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-medium">
                    <AlertCircle size={12} />
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-dark/55 mb-2">
                  <Mail size={12} />
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className={`${inputBase} ${errors.email ? inputError : inputState}`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-medium">
                    <AlertCircle size={12} />
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-dark/55 mb-2">
                  <Package size={12} />
                  Product of Interest
                </label>
                <div className="relative">
                  <select
                    defaultValue=""
                    className={`${inputBase} appearance-none pr-11 cursor-pointer ${errors.product ? inputError : inputState}`}
                    {...register('product', {
                      required: 'Please select a product',
                    })}
                  >
                    <option value="" disabled>Select a product…</option>
                    {products.map((p) => (
                      <option key={p.slug} value={p.slug}>{p.name}</option>
                    ))}
                    <option value="other">Other / Custom Requirement</option>
                  </select>
                  <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-dark/35" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {errors.product && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-medium">
                    <AlertCircle size={12} />
                    {errors.product.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-dark/55 mb-2">
                <MessageSquare size={12} />
                Message & Requirements
              </label>
              <textarea
                rows={5}
                placeholder="Share your required grade, quantity, delivery timeline, destination, or any custom specifications…"
                className={`${inputBase} resize-none ${errors.message ? inputError : inputState}`}
                {...register('message', {
                  required: 'Please share your requirements',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' },
                })}
              />
              {errors.message && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500 font-medium">
                  <AlertCircle size={12} />
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer max-w-md">
                <input
                  type="checkbox"
                  className="mt-0.5 w-4 h-4 rounded border-neutral-light text-industrial-green focus:ring-industrial-green/30 cursor-pointer"
                  {...register('consent', {
                    required: 'Please confirm to proceed',
                  })}
                />
                <span className="text-xs text-neutral-dark/55 leading-relaxed">
                  I agree to Sanjivani Chemicals processing my details to respond to this enquiry in line with our privacy policy.
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 md:px-8 py-3.5 md:py-4 rounded-full bg-industrial-green text-white font-semibold text-sm md:text-base shadow-lg shadow-industrial-green/20 hover:bg-industrial-green/90 hover:shadow-xl hover:shadow-industrial-green/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 active:scale-[0.98] min-w-[180px]"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-0.5 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
                      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    Send Enquiry
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnquiryForm;
