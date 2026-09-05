import { Link } from 'react-router-dom'

const openings = [
  {
    title: 'Frontend Developer (React)',
    department: 'Engineering',
    location: 'Karachi / Remote',
    type: 'Full-time',
  },
  {
    title: 'Backend Developer (Node.js)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Customer Support Executive',
    department: 'Support',
    location: 'Lahore',
    type: 'Full-time',
  },
  {
    title: 'Hotel Partnerships Manager',
    department: 'Business Development',
    location: 'Islamabad',
    type: 'Full-time',
  },
]

const perks = [
  'Flexible & remote-friendly work culture',
  'Health insurance for you and your family',
  'Learning & development budget every year',
  'Team retreats and travel discounts',
]

const Careers = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black
      px-6 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 text-center text-white overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <span className="relative text-xs sm:text-sm uppercase tracking-widest text-green-400 font-semibold">
          Careers
        </span>
        <h1 className="relative mt-3 text-3xl md:text-5xl font-bold">Join Our Team</h1>
        <p className="relative mt-4 text-gray-300 max-w-xl mx-auto">
          Help us build the future of hotel booking in Pakistan. We're always
          looking for curious, driven people to join us.
        </p>
      </div>

      {/* Perks */}
      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Why Work With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
          {perks.map((perk, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-5 h-5 mt-0.5 rounded-full
              bg-green-100 text-green-600 text-xs shrink-0">✓</span>
              <p className="text-slate-500 text-sm">{perk}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-gray-50 px-6 md:px-16 lg:px-24 xl:px-32 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Open Positions
        </h2>
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {openings.map((job, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between
              gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100
              hover:shadow-md transition-all"
            >
              <div>
                <p className="font-semibold text-gray-800">{job.title}</p>
                <p className="text-sm text-slate-500 mt-1">
                  {job.department} · {job.location} · {job.type}
                </p>
              </div>
              <Link
                to="/contact"
                className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-600
                text-white text-sm font-medium text-center transition-all"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Careers
