import { achievements } from './achievements.js';
import { plants } from './plants.js';

const achievementToInitiative = (a, idx) => ({
  id: `ach-${idx + 1}`,
  icon: a.icon,
  title: a.title,
  description: a.description,
  category: idx % 2 === 0 ? 'Technology' : idx % 3 === 0 ? 'Sustainability' : 'Manufacturing',
  stats: a.stats || [],
});

const plantToInitiative = (p, idx) => ({
  id: `plant-${idx + 1}`,
  icon: 'Factory',
  title: p.name,
  description: p.description,
  category: 'Manufacturing',
  established: p.established,
  capacity: p.capacity,
  slug: p.slug,
});

const programInitiatives = [
  {
    id: 'prog-1',
    icon: 'Droplets',
    title: 'ESJ-to-Ethanol Technology Program',
    description: "Maharashtra's first Enzymatic Sugar Juice to ethanol manufacturing program — bypasses sugar crystallization step for higher recovery efficiency and faster production cycles.",
    category: 'Technology',
  },
  {
    id: 'prog-2',
    icon: 'Leaf',
    title: 'Sustainability 2.0 — Net-Zero 2038',
    description: 'Division-wide roadmap targeting 42% reduction in scope 1 & 2 emissions by 2030 and net-zero process emissions by 2038, fully aligned with India Panchamrit climate pledges.',
    category: 'Sustainability',
  },
  {
    id: 'prog-3',
    icon: 'Users',
    title: 'Farmer Sustainable Cane Program',
    description: 'Extension program enrolling 60%+ of farmer members in sustainable sugarcane cultivation practices — improved water use, reduced chemical input, higher cane quality & farm-gate premiums.',
    category: 'Advisory',
  },
  {
    id: 'prog-4',
    icon: 'FlaskConical',
    title: 'R&D — Specialty Intermediates Scale-up',
    description: 'DSIR-recognized R&D unit piloting TEO & EMME pharma intermediates with custom synthesis pathways and seamless pilot-to-commercial scale-up capability.',
    category: 'Technology',
  },
  {
    id: 'prog-5',
    icon: 'Zap',
    title: 'Solar Rooftop Expansion — 7.5 MW',
    description: 'Division-wide rooftop solar addition targeting 7.5 MW peak capacity to offset process electricity and support 50%+ renewable energy ratio across the integrated campus.',
    category: 'Sustainability',
  },
  {
    id: 'prog-6',
    icon: 'Handshake',
    title: 'B2B Long-Term Supply Partnerships',
    description: 'Structured annual-contract program for pharma, paints & fuel clients — guaranteed offtake, locked pricing, quality assurance, and dedicated relationship management.',
    category: 'Finance',
  },
];

export const initiatives = [
  ...programInitiatives,
  ...achievements.slice(0, 4).map(achievementToInitiative),
  ...plants.slice(0, 2).map(plantToInitiative),
];

export const categories = Array.from(
  new Set(initiatives.map((i) => i.category).filter(Boolean))
).sort();

export const initiativeOptions = initiatives.map((i) => ({
  value: i.id,
  label: i.title,
}));

export default {
  initiatives,
  categories,
  initiativeOptions,
};
