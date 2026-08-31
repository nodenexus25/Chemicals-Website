import { Helmet } from 'react-helmet-async';

const defaults = {
  brandSuffix: 'Sanjivani Chemical Division',
  canonicalDomain: 'https://chemical.sanjivanigroup.com',
  title: 'Sanjivani Chemical Division | Ethanol, Bulk Drugs & Organic Chemicals — Maharashtra',
  description: "Maharashtra's pioneering integrated chemical manufacturer — ethanol from ESJ, acetic anhydride, ethyl acetate, acetic acid, and cGMP bulk drugs. 7 plants, 38+ years, circular bio-energy.",
  keywords: 'ethanol manufacturer Maharashtra, acetic anhydride supplier India, bulk drugs manufacturer, ethanol from ESJ, ethyl acetate supplier, Sanjivani Chemical Kopargaon',
  image: '/Chemical-Plant-scaled-1.jpeg',
  locale: 'en_IN',
  siteName: 'Sanjivani Chemical Division',
  twitterHandle: '@sanjivanigroup',
};

const SEO = ({
  title,
  description,
  keywords,
  image,
  path,
  type = 'website',
  noIndex = false,
}) => {
  const resolvedTitle = title ? `${title} | ${defaults.brandSuffix}` : defaults.title;
  const resolvedDescription = description || defaults.description;
  const resolvedKeywords = keywords
    ? `${defaults.keywords}, ${keywords}`
    : defaults.keywords;
  const resolvedImage = image || defaults.image;
  const resolvedCanonical = path
    ? `${defaults.canonicalDomain}${path}`
    : defaults.canonicalDomain;
  const ogImage = resolvedImage.startsWith('http')
    ? resolvedImage
    : `${defaults.canonicalDomain}${resolvedImage}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="keywords" content={resolvedKeywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={resolvedCanonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:locale" content={defaults.locale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={defaults.siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={defaults.twitterHandle} />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={defaults.siteName} />
    </Helmet>
  );
};

export default SEO;
