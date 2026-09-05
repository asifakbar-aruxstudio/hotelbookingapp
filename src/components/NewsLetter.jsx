import { useState } from 'react'

const NewsLetter = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!isValidEmail) {
      setError('Please enter a valid email address')
      setSubscribed(false)
      return
    }

    setError('')
    setSubscribed(true)
    setEmail('')

    // hide the success message after a few seconds
    setTimeout(() => setSubscribed(false), 4000)
  }

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-20">
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br
        from-gray-900 via-gray-800 to-black px-6 sm:px-12 md:px-20 py-14 md:py-20
        flex flex-col items-center text-center"
      >
        {/* decorative glow blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

        <span className="relative z-10 text-xs sm:text-sm uppercase tracking-widest text-orange-400 font-semibold">
          Stay in the loop
        </span>

        <h2 className="relative z-10 mt-3 text-3xl md:text-4xl font-bold text-white max-w-xl">
          Get exclusive hotel deals in your inbox
        </h2>

        <p className="relative z-10 mt-4 text-gray-300 text-sm md:text-base max-w-md">
          Subscribe to our newsletter and be the first to know about new offers,
          seasonal discounts and the best stays across Pakistan.
        </p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative z-10 mt-8 w-full max-w-md flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20
            text-white placeholder-gray-400 outline-none focus:border-orange-400
            focus:bg-white/15 transition-all duration-300"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600
            text-white font-medium whitespace-nowrap transition-all duration-300
            cursor-pointer active:scale-95"
          >
            Subscribe
          </button>
        </form>

        <div className="relative z-10 mt-3 min-h-[1.25rem]">
          {error && <p className="text-red-400 text-sm">{error}</p>}
          {subscribed && (
            <p className="text-green-400 text-sm">
              🎉 Thanks for subscribing! Check your inbox soon.
            </p>
          )}
        </div>

        <p className="relative z-10 mt-6 text-xs text-gray-500">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  )
}

export default NewsLetter