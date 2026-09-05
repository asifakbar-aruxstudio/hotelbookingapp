const PolicyLayout = ({ title, lastUpdated, sections }) => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gray-50 px-6 md:px-16 lg:px-24 xl:px-32 pt-32 pb-14 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h1>
        <p className="text-sm text-slate-400 mt-3">Last updated: {lastUpdated}</p>
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-14 max-w-3xl mx-auto
      flex flex-col gap-10">
        {sections.map((section, i) => (
          <div key={i}>
            <h2 className="text-lg font-semibold text-gray-800">{section.heading}</h2>
            <p className="text-slate-500 mt-3 leading-relaxed text-sm">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PolicyLayout
