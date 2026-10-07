import defaultImages from '../../data/defaultImages';

const HeroSection = () => {
  const FALLBACK = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Wide%20aerial%20panoramic%20view%20of%20modern%20industrial%20chemical%20manufacturing%20complex%20at%20golden%20hour%20sunset%20distillation%20towers%20storage%20silos%20smoke%20stacks%20ethanol%20plant&image_size=landscape_16_9';

  return (
    <section
      className="relative min-h-[90svh] overflow-hidden pt-20
                 bg-cover bg-center bg-no-repeat bg-fixed md:bg-scroll"
      style={{ backgroundImage: `url(${defaultImages.home.hero})` }}
      onError={(e) => {
        if (e.currentTarget.style.backgroundImage.includes(FALLBACK)) return;
        e.currentTarget.style.backgroundImage = `url(${FALLBACK})`;
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-dark/40 via-steel-blue/20 to-industrial-green/20" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-neutral-dark/65 via-neutral-dark/5 to-neutral-dark/15" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(232,163,61,0.14),transparent_58%)]" />
    </section>
  );
};

export default HeroSection;
