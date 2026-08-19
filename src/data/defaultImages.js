const IMG = (prompt, size = 'landscape_16_9') =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(prompt)}&image_size=${size}`;

const defaultImages = {
  home: {
    hero: '/Chemical-Plant-scaled-1.jpeg',
    leadership: '/Kolhe_Bipindada_Photo_2-scaled-removebg-preview.png',
    sustainabilityCallout: IMG(
      'Aerial drone view of integrated bio-refinery with green sugarcane fields, circular economy closed loop, ethanol plant, bio-gas domes, solar panels, water reflection, sustainable industry sunrise Maharashtra'
    ),
    leadershipBadge: IMG(
      'Kopargaon sugar cooperative factory building at golden hour, historical architecture with modern chemical plant backdrop, Maharashtra rural industry, warm nostalgic tones'
    ),
  },

  about: {
    divisionalImage: '/vivek-sir.avif',
    leadershipSection: IMG(
      'Group of Indian farmers shaking hands with chemical plant managers at cooperative factory gates, sugarcane loaded trucks in background, Maharashtra rural cooperative leadership, documentary photography'
    ),
  },

  pageHeaders: {
    fallback: IMG(
      'Industrial chemical manufacturing plant at golden hour, stainless steel pipework, distillation columns, safety railings, Maharashtra industrial complex, cinematic wide landscape'
    ),
    about: IMG(
      'Aerial drone view of 200 acre integrated cooperative industrial campus, sugar factory, chemical plant, ethanol distillery, green sugarcane fields surrounding, Kopargaon Maharashtra, sunrise mist, 38 years heritage'
    ),
    products: IMG(
      'Industrial chemical product portfolio still life: stainless steel barrels, ethanol drums, API pharma raw material glass flasks, laboratory glassware with colorful liquids, professional industrial product photography, dramatic warm studio lighting'
    ),
    plants: IMG(
      'Ultra wide aerial panoramic of 7 interconnected chemical manufacturing plants on single integrated campus, distillation towers, storage silos, power plant chimney, pipe rack corridors connecting units, golden hour sunset industrial landscape'
    ),
    achievements: IMG(
      'Industrial awards ceremony stage with ISO 9001 14001 50001 certification plaques, trophies, medals, cooperative leadership acceptance ceremony, Maharashtra chemical industry firsts, elegant corporate lighting'
    ),
    sustainability: IMG(
      'Beautiful aerial drone view green sugarcane fields with distant industrial chemical plant circular economy sustainability sunrise mist, lush green monsoon landscape, ESJ ethanol bio-gas zero waste concept, Maharashtra India'
    ),
    contact: IMG(
      'Modern chemical plant logistics gate with shipping containers, tanker trucks, branded cooperative office building entrance, logistics connectivity depot, morning operations Maharashtra industrial park'
    ),
    productDetail: IMG(
      'High end industrial chemical manufacturing interior: stainless steel reactor vessels, automated SCADA control screens, clean process piping, precision valves, industrial quality control lab photography'
    ),
    plantDetail: IMG(
      'Close up industrial chemical plant equipment: distillation column valves, pressure gauges, stainless steel pipework flange connections, safety signage, process technology detail, golden hour side lighting'
    ),
    notFound: IMG(
      'Industrial warehouse aisle with missing empty storage bay, vintage signage, dramatic side lighting, cooperative factory storage complex, cinematic lost-and-found concept Maharashtra'
    ),
  },

  product: {
    fallback: IMG(
      'Generic industrial chemical manufacturing plant with stainless steel tanks and pipes, chemical industry photography, industrial processing equipment'
    ),
  },

  plant: {
    fallback: IMG(
      'Industrial chemical plant exterior with storage tanks, pipework, process equipment, industrial district photography'
    ),
    galleryFallback: [
      IMG('Chemical plant control room operators monitoring production dashboards, SCADA screens, industrial automation control center'),
      IMG('Industrial quality assurance laboratory with scientists testing chemical samples in glass beakers, pharma grade clean room'),
      IMG('Packaging line drums and tanker loading bay at chemical plant logistics yard, industrial shipping operations'),
    ],
  },
};

export default defaultImages;
