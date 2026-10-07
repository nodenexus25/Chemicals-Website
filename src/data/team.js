import defaultImages from './defaultImages.js';

export const leadership = [
  {
    id: 1,
    name: 'Shri. Bipindada Kolhe Saheb',
    role: "Hon'ble President — Sanjivani Group",
    bio: "Visionary steward of 50,000+ farmer members. Led Maharashtra's first cooperative ESJ-to-ethanol plant, linking cane-farm prosperity directly to national energy security.",
    photo: defaultImages.home.leadership,
    values: ['Cooperative First', 'Farmer Prosperity', 'Industrial Excellence', 'Environmental Stewardship'],
    years: '40+ years',
  },
];

export const foundingStory = {
  title: 'A cooperative heritage, engineered into industrial leadership.',
  subtitle: "Maharashtra sugar-heartland cooperative that grew from a 1985 Ethyl Acetate plant into the state's most diversified farmer-owned chemical manufacturing ecosystem.",
  paragraphs: [
    "Sanjivani Chemical Division is the industrial arm of Sanjivani Group — Maharashtra's respected Shingnapur, Kopargaon farmer cooperative. Founded 1985 with one Ethyl Acetate plant, today a 7-plant integrated ecosystem supplying ethanol, specialty chemicals and bulk drugs to 200+ buyers across India + 8 export markets.",
    "Vertical integration defines us. Shared campus with our own sugar factory gives direct Enzymatic Sugar Juice access for our pioneering ESJ-to-Ethanol process. Downstream residues fuel Bio-Gas, Sulphur Recovery and 12 MW Co-Generation divisions.",
    "Result: Maharashtra's first farmer-owned circular bio-refinery. Consistent quality, competitive pricing, and a materially lower carbon footprint than standalone chemical manufacturers.",
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
    description: 'Sanjivani Group: sugar, distillery, chemicals, co-generation, dairy, education & healthcare — 50,000+ farmer members across Ahmednagar district.',
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
      desc: '7 specialized plants with 38+ years of continuous refinement. Process automation, on-site NABL testing and zero-discharge effluent systems.',
      stats: [{ v: '7', l: 'Plants' }, { v: '38+', l: 'Years Ops' }],
    },
    {
      id: 2,
      icon: 'Users',
      title: 'Cooperative Stewardship',
      desc: 'Owned by 50,000+ farmer members. Every tonne manufactured returns multiplied cane-community prosperity via dividends, premiums and infrastructure.',
      stats: [{ v: '50K+', l: 'Farmers' }, { v: '100%', l: 'Farmer-owned' }],
    },
    {
      id: 3,
      icon: 'Leaf',
      title: 'Circular Sustainability',
      desc: 'Zero organic discard. Sugar juice → ethanol → residues → bio-gas → power + process heat. Maharashtra integrated bio-refinery benchmark.',
      stats: [{ v: '100%', l: 'Waste Reused' }, { v: '25K T', l: 'CO₂ / yr' }],
    },
    {
      id: 4,
      icon: 'Award',
      title: 'Regulatory & Quality',
      desc: 'ISO 9001 / 14001 / 50001 certified. BIS-approved ethanol, REACH-compliant specialty chemicals and cGMP pharma-grade validation.',
      stats: [{ v: '8+', l: 'Certifications' }, { v: 'cGMP', l: 'Pharma Grade' }],
    },
  ],
};

export default {
  leadership,
  foundingStory,
};
