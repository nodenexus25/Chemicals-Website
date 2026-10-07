import defaultImages from '../../data/defaultImages';

const PageHeader = ({ title, subtitle, breadcrumbItems = [], bgImage, accent = 'green' }) => {
  const resolvedBg = bgImage || defaultImages.pageHeaders.fallback;

  return (
    <section className="relative pt-20 md:pt-24 min-h-[77svh] md:min-h-[71svh] overflow-hidden">
      {resolvedBg && (
        <img
          src={resolvedBg}
          alt=""
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}
    </section>
  );
};

export default PageHeader;
