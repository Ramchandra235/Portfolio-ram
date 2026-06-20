function SectionTitle({ badge, title, description }) {
  return (
    <>
      <p className="text-cyan-400 mb-4">
        {badge}
      </p>

      <h2 className="text-5xl font-bold mb-6">
        {title}
      </h2>

      <p className="text-gray-400 mb-16 max-w-2xl">
        {description}
      </p>
    </>
  );
}

export default SectionTitle;