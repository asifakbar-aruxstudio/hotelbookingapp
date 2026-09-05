const stats = [
  { label: 'Hotels Listed', value: '500+' },
  { label: 'Cities Covered', value: '35+' },
  { label: 'Happy Guests', value: '50K+' },
  { label: 'Years of Service', value: '3+' },
]

const values = [
  {
    title: 'Verified Trust',
    desc: 'Every hotel on our platform is personally verified for quality, safety and accuracy before it goes live.',
  },
  {
    title: 'Best Price Guarantee',
    desc: "We negotiate directly with partner hotels so you always get the most competitive rate, no hidden charges.",
  },
  {
    title: '24/7 Support',
    desc: 'Our support team is available around the clock to help with bookings, changes, or anything in between.',
  },
]

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black
      px-6 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 text-center text-white overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <span className="relative text-xs sm:text-sm uppercase tracking-widest text-green-400 font-semibold">
          Our Story
        </span>
        <h1 className="relative mt-3 text-3xl md:text-5xl font-bold">About Hotelify</h1>
        <p className="relative mt-4 text-gray-300 max-w-xl mx-auto">
          We're on a mission to make finding and booking the perfect stay in Pakistan
          simple, transparent and affordable for every traveler.
        </p>
      </div>

      {/* Mission / Vision */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 grid grid-cols-1
      md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            Hotelify was built to remove the guesswork from booking a hotel. From
            budget rooms in Sukkur to luxury resorts in Skardu, we connect travelers
            with verified stays at honest prices, backed by a support team that
            actually picks up the phone.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="mt-4 text-slate-500 leading-relaxed">
            To become Pakistan's most trusted hotel booking platform — one where
            every listing is accurate, every price is fair, and every guest feels
            confident hitting "Book Now."
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-14 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl md:text-4xl font-bold text-green-500">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center">
          Why Travelers Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {values.map((item, i) => (
            <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm
            hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
