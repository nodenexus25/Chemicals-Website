export const products = [
  {
    slug: "acetic-acid",
    name: "Acetic Acid",
    tagline: "A vital industrial chemical",
    description: "Our premium grade Acetic Acid is manufactured through state-of-the-art processes ensuring consistent purity and quality. As a versatile chemical compound, it serves as a critical raw material across multiple industries including textiles, food processing, and chemical synthesis. We maintain rigorous quality control standards to meet international specifications and deliver reliable supply to our B2B partners.",
    industries: ["Textiles", "Food processing", "Chemical synthesis", "Adhesives", "Pharmaceuticals"],
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Industrial%20acetic%20acid%20manufacturing%20plant%20with%20stainless%20steel%20tanks%20and%20pipes%20chemical%20industry%20photography&image_size=landscape_16_9",
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
    tagline: "Commonly used as a solvent",
    description: "Ethyl Acetate is a high-performance organic solvent renowned for its low toxicity and excellent solvency properties. Our manufacturing process delivers a product with exceptional purity that meets the stringent requirements of pharmaceutical, paint, and adhesive industries. It is widely favored for its quick evaporation rate and compatibility with diverse resin systems.",
    industries: ["Dyes & Pigments", "Paints", "Pharma", "Plastics", "Adhesives", "Cosmetics"],
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Ethyl%20acetate%20chemical%20solvent%20industrial%20manufacturing%20facility%20storage%20tanks%20and%20refinery%20equipment&image_size=landscape_16_9",
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
    tagline: "Essential in various synthesis processes",
    description: "Acetic Anhydride is a key acetylating agent indispensable in modern chemical manufacturing. Our plant produces high-grade Acetic Anhydride used extensively in pharmaceuticals for aspirin and paracetamol synthesis, cellulose acetate for textiles and cigarette filters, and specialty plastic applications. We ensure adherence to the highest safety standards throughout production and distribution.",
    industries: ["Pharma", "Plastic", "Cellulose Acetate", "Textile", "Dyes", "Explosives"],
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Acetic%20anhydride%20chemical%20plant%20industrial%20distillation%20columns%20and%20stainless%20steel%20reactors&image_size=landscape_16_9",
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
    tagline: "Known for its versatility",
    description: "Pioneering ethanol production in Maharashtra, we are the first to manufacture ethanol directly from Enzymatic Sugar Juice (ESJ). Our fuel-grade and pharma-grade ethanol serves a diverse range of applications from renewable fuel blending to hand sanitizers and pharmaceutical excipients. The ESJ-to-ethanol process underscores our commitment to sustainable, renewable resource utilization.",
    industries: ["Fuel", "Sanitizers", "Beverages", "Pharma", "Perfumes", "Solvents"],
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Ethanol%20distillery%20plant%20renewable%20energy%20sugarcane%20processing%20industrial%20silver%20stainless%20tanks&image_size=landscape_16_9",
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
    tagline: "Crucial in pharmaceuticals",
    description: "Our Bulk Drugs division specializes in manufacturing Active Pharmaceutical Ingredients (APIs) and intermediates that form the backbone of essential medicines. Operating under strict cGMP guidelines and regulatory compliance, we deliver consistent, high-quality bulk drugs to pharmaceutical formulators across India and international markets. Our portfolio includes analgesics, anti-infectives, and specialty API intermediates.",
    industries: ["Pharmaceutical manufacturing", "Healthcare", "Contract Manufacturing"],
    image: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Pharmaceutical%20bulk%20drug%20manufacturing%20clean%20room%20API%20production%20facility%20stainless%20steel%20equipment&image_size=landscape_16_9",
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
