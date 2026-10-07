import { achievements } from './achievements.js';
import { plants } from './plants.js';

export const stats = [
  { id: 1, value: '38+', suffix: '', prefix: '', label: 'Years of Operation', description: 'Continuous heritage since 1985' },
  { id: 2, value: '7', suffix: '', prefix: '', label: 'Specialized Plants', description: 'Single 200+ acre integrated campus' },
  { id: 3, value: '50,000+', suffix: '', prefix: '', label: 'Farmer Members', description: '100% Maharashtra cooperative-owned' },
  { id: 4, value: '12', suffix: ' MW', prefix: '', label: 'Co-Gen Capacity', description: 'Seasonal renewable grid export' },
  { id: 5, value: '25,000+', suffix: ' T', prefix: '', label: 'CO₂ Offset / yr', description: 'Circular bio-energy ecosystem' },
  { id: 6, value: '200+', suffix: '', prefix: '', label: 'B2B Clients', description: 'Pharma, paints, textiles, fuels' },
];

export const ecosystemFlow = {
  title: 'Circular Energy Flow',
  description: 'Sugarcane field to product delivery — every by-product cycles back into our 4-step integrated bio-refinery model.',
  flow: [
    { step: 1, label: 'Enzymatic Sugar Juice', icon: 'Droplets', detail: 'Direct from on-site sugar factory', accent: 'from-cyan-500 to-steel-blue' },
    { step: 2, label: 'Ethanol Distillation', icon: 'Leaf', detail: 'ESJ → Fuel Grade + Pharma Grade', accent: 'from-industrial-green to-emerald-600' },
    { step: 3, label: 'Bio-Gas Recovery', icon: 'Flame', detail: 'Anaerobic digestion of residues', accent: 'from-amber-500 to-accent-amber' },
    { step: 4, label: 'Co-Gen Power', icon: 'Zap', detail: '12 MW · Surplus to MSEDCL grid', accent: 'from-sky-500 to-indigo-600' },
  ],
  ctaLabel: 'Explore Sustainability Report',
  ctaLink: '/impact',
};

export const contactInfo = {
  headquarters: {
    name: 'Sanjivani Chemical Division — Plant & Works',
    address: 'Sanjivani Sahakari Sakhar Karkhana Ltd., Shingnapur, Tal. Kopargaon, Dist. Ahmednagar, Maharashtra 423605',
    phone: ['+91 12345 67890'],
    email: ['chemical@sanjivani.coop'],
    workingHours: 'Mon–Sat · 9 AM – 6 PM IST (Plant Ops: 24×7 · 365 days)',
  },
  secondaryOffice: {
    name: 'Sanjivani Group Corporate',
    phone: ['+91 12345 67890'],
    email: ['info@sanjivanigroup.com'],
    officer: 'Group HQ — Shingnapur, Kopargaon',
  },
  logistics: {
    road: '12 km from Kopargaon (NH-160)',
    air: '32 km from Shirdi Airport',
    rail: '90 km from Manmad Junction',
    rto: '45 km from Ahmednagar RTO',
  },
  commercial: {
    gstin: '27AAACS1234F1Z5',
    pan: 'AAACS1234F',
    msme: 'MH12A0012345',
    ieCode: 'INB27AAACS1234F',
  },
  mapEmbed: 'https://www.google.com/maps?q=Kopargaon%20Ahmednagar%20Maharashtra&output=embed',
  mapDirections: 'https://www.google.com/maps/dir/?api=1&destination=Kopargaon+Ahmednagar+Maharashtra',
};

export const certifications = [
  { name: 'ISO 9001:2015', category: 'Quality Management' },
  { name: 'ISO 14001:2015', category: 'Environmental Management' },
  { name: 'ISO 50001', category: 'Energy Management' },
  { name: 'BIS Certified', category: 'Fuel Grade Ethanol' },
  { name: 'REACH Compliant', category: 'EU Chemical Regulation' },
  { name: 'cGMP', category: 'Pharmaceutical Manufacturing' },
  { name: 'NABL', category: 'Testing Laboratory' },
  { name: 'DSIR Recognized', category: 'R&D Unit' },
];

export default {
  stats,
  ecosystemFlow,
  contactInfo,
  certifications,
  achievements,
  plants,
};
