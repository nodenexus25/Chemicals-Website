export const products = [
  {
    slug: "acetic-acid",
    name: "Acetic Acid",
    tagline: "A core industrial chemical",
    description: "Consistent-purity Acetic Acid manufactured with process automation, NABL QC, and integrated feedstock supply. Critical raw material for textiles, food processing, adhesives and chemical synthesis. Reliable B2B supply to international specifications.",
    industries: ["Textiles", "Food processing", "Chemical synthesis", "Adhesives", "Pharmaceuticals"],
    image: "/products/1.png",
    specifications: {
      "Purity": "99.85% min",
      "Appearance": "Clear colorless liquid",
      "Boiling Point": "118.1°C",
      "Density": "1.049 g/cm³ at 25°C"
    },
    packaging: ["250 L HDPE Drums", "ISO Tank Containers", "Flexi Tanks", "Bulk Road Tankers"]
  },
  {
    slug: "ethyl-acetate",
    name: "Ethyl Acetate",
    tagline: "High-performance organic solvent",
    description: "Low-toxicity, quick-evaporating Ethyl Acetate with high solvency for pharma, paint, adhesive and cosmetics grades. Continuous process automation with on-site quality labs delivering consistent purity to client specifications.",
    industries: ["Dyes & Pigments", "Paints", "Pharma", "Plastics", "Adhesives", "Cosmetics"],
    image: "/products/2.png",
    specifications: {
      "Purity": "99.5% min",
      "Appearance": "Clear colorless liquid",
      "Boiling Point": "77.1°C",
      "Density": "0.902 g/cm³ at 20°C"
    },
    packaging: ["200 L MS Drums", "25 L Carboys", "ISO Tank Containers", "Bulk Rail Tankers"]
  },
  {
    slug: "acetic-anhydride",
    name: "Acetic Anhydride",
    tagline: "Key acetylating agent",
    description: "High-grade Acetic Anhydride for pharma (aspirin / paracetamol synthesis), cellulose acetate, textiles and specialty plastics. Powered by on-site bio-gas process fuel with strict safety and closed-loop protocols.",
    industries: ["Pharma", "Plastic", "Cellulose Acetate", "Textile", "Dyes", "Explosives"],
    image: "/products/3.png",
    specifications: {
      "Purity": "99.0% min",
      "Appearance": "Clear colorless liquid",
      "Boiling Point": "139.8°C",
      "Density": "1.082 g/cm³ at 20°C"
    },
    packaging: ["250 L SS Drums", "ISO Tank Containers", "Bulk Road Tankers", "Specialized Containers"]
  },
  {
    slug: "ethanol",
    name: "Ethanol",
    tagline: "ESJ-direct renewable ethanol",
    description: "Maharashtra's first Enzymatic Sugar Juice (ESJ) ethanol — bypasses sugar crystallization for +15% recovery and lower specific energy. Fuel-grade Anhydrous 99.9%, Rectified 96.4%, and pharma-grade excipient grades.",
    industries: ["Fuel", "Sanitizers", "Beverages", "Pharma", "Perfumes", "Solvents"],
    image: "/products/4.png",
    specifications: {
      "Purity": "99.9% (Anhydrous) / 96.4% (Rectified)",
      "Appearance": "Clear colorless liquid",
      "Boiling Point": "78.3°C",
      "Density": "0.789 g/cm³ at 20°C"
    },
    packaging: ["200 L HDPE Drums", "Tank Trucks", "Rail Tank Wagons", "ISO Containers"]
  },
  {
    slug: "bulk-drugs",
    name: "Bulk Drugs",
    tagline: "cGMP API manufacturing",
    description: "Active Pharmaceutical Ingredients (APIs) and intermediates under strict cGMP / Schedule M / USFDA audits. Analgesics, anti-infectives and specialty intermediates supplied to Indian and export pharma formulators with validated batches.",
    industries: ["Pharmaceutical manufacturing", "Healthcare", "Contract Manufacturing"],
    image: "/products/5.png",
    specifications: {
      "Quality Standard": "IP / BP / USP / EP",
      "cGMP Compliance": "Yes",
      "Regulatory Audits": "Schedule M, USFDA",
      "Packaging Cleanliness": "Class 100,000 Environment"
    },
    packaging: ["25 kg Fiber Drums", "50 kg HDPE Bags", "100 kg Drums", "Custom Bulk Packaging"]
  }
];

export const coreProduct = products.find((p) => p.slug === 'ethanol') || products[0];

export const productCatalog = products;

export default products;
