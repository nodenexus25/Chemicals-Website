import defaultImages from './defaultImages.js';

export const leadership = [
  {
    id: 1,
    name: 'Shri. Bipindada Kolhe Saheb',
    role: "Hon'ble President — Sanjivani Group",
    bio: "Visionary steward of 50,000+ farmer members. Under his leadership Sanjivani became Maharashtra's first cooperative sugar factory to manufacture ethanol directly from Enzymatic Sugar Juice, linking farm prosperity to national energy security.",
    photo: defaultImages.home.leadership,
    values: ['Cooperative First', 'Farmer Prosperity', 'Industrial Excellence', 'Environmental Stewardship'],
    years: '40+ years',
  },
];

export const foundingStory = {
  title: 'A cooperative heritage, engineered into industrial leadership.',
  subtitle: "Founded in the cooperative ethos of Maharashtra's sugar heartland, Sanjivani Chemical Division is a farmer-owned industrial enterprise that has evolved into one of the state's most diversified and sustainable chemical manufacturing ecosystems.",
  paragraphs: [
    "Sanjivani Chemical Division is the industrial arm of the Sanjivani Group — one of Maharashtra's most respected farmer cooperatives headquartered at Shingnapur, Kopargaon. What began in 1985 with a single Ethyl Acetate plant has grown into a 7-plant integrated chemical manufacturing ecosystem that today supplies ethanol, specialty organic chemicals, and bulk drugs to 200+ industrial buyers across India and 8+ export markets.",
    "Our defining competitive advantage is vertical integration. Because we share the campus with our own sugar factory, we have direct access to Enzymatic Sugar Juice — the feedstock for our pioneering ESJ-to-Ethanol process. Every downstream residue from the chemical plants then feeds our Bio-Gas, Sulphur Recovery, and 12 MW Co-Generation divisions.",
    "The result: a farmer-owned circular bio-refinery — the first in Maharashtra — that delivers consistent quality, competitive pricing, and a dramatically lower carbon footprint than comparable standalone chemical manufacturers.",
  ],
  founder: {
    name: 'Shri. Bipindada Kolhe Saheb',
    epithet: "Hon'ble President · 40+ years of cooperative leadership",
    photo: defaultImages.home.leadership,
  },
  stats: [
    { v: '1985', l: 'Division Founded' },
    { v: '7', l: 'Specialized Plants' },
    { v: '12 MW', l: 'Co-Gen Capacity' },
    { v: '50K+', l: 'Farmer Owners' },
  ],
  parentGroup: {
    tagline: 'Serving Maharashtra since 1969.',
    description: 'The Sanjivani Group encompasses sugar, distillery, chemicals, co-generation, dairy, education & healthcare — serving 50,000+ farmer members across Ahmednagar district and beyond.',
    website: 'https://www.sanjivanigroup.com',
    stats: [
      { l: 'Sugar', v: '5000 TCD' },
      { l: 'Chemicals', v: '7 Plants' },
      { l: 'Co-Gen', v: '12 MW' },
      { l: 'Education', v: '8 Institutes' },
    ],
  },
  missionPillars: [
    {
      id: 1,
      icon: 'Factory',
      title: 'Manufacturing Excellence',
      desc: '7 specialized plants with 38+ years of continuous operational refinement. Continuous process automation, on-site NABL testing, and zero-discharge effluent systems.',
      stats: [{ v: '7', l: 'Plants' }, { v: '38+', l: 'Years Ops' }],
    },
    {
      id: 2,
      icon: 'Users',
      title: 'Cooperative Stewardship',
      desc: 'Owned by 50,000+ farmer members. Every tonne of chemical we produce returns multiplied prosperity to Maharashtra’s cane-growing communities through dividends, premiums & infrastructure.',
      stats: [{ v: '50K+', l: 'Farmers' }, { v: '100%', l: 'Farmer-owned' }],
    },
    {
      id: 3,
      icon: 'Leaf',
      title: 'Circular Sustainability',
      desc: 'Zero organic residue discard. Sugar juice → ethanol → residues → bio-gas → power & process heat. Maharashtra’s benchmark for integrated bio-refinery cooperatives.',
      stats: [{ v: '100%', l: 'Waste Reused' }, { v: '25K T', l: 'CO₂ / yr' }],
    },
    {
      id: 4,
      icon: 'Award',
      title: 'Regulatory & Quality',
      desc: 'ISO 9001, ISO 14001 & ISO 50001 certified. BIS-approved ethanol, REACH-compliant specialty chemicals, and cGMP bulk drug operations with pharma-grade validation.',
      stats: [{ v: '8+', l: 'Certifications' }, { v: 'cGMP', l: 'Pharma Grade' }],
    },
  ],
};

export default {
  leadership,
  foundingStory,
};
