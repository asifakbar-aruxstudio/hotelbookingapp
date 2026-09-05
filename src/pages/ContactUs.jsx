import { useState } from 'react'

const contactInfo = [
  { label: 'Address', value: 'Gulberg III, Lahore, Punjab, Pakistan' },
  { label: 'Phone', value: '+92 300 1234567' },
  { label: 'Email', value: 'support@hotelify.com' },
  { label: 'Working Hours', value: 'Mon - Sun, 24/7 Support' },
]

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: connect this to your backend / email service
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black
      px-6 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 text-center text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <span className="relative text-xs sm:text-sm uppercase tracking-widest text-green-400 font-semibold">
          Get In Touch
        </span>
        <h1 className="relative mt-3 text-3xl md:text-5xl font-bold">Contact Us</h1>
        <p className="relative mt-4 text-gray-300 max-w-xl mx-auto">
          Have a question about a booking, a partnership, or anything else?
          We'd love to hear from you.
        </p>
      </div>

      <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-16 grid grid-cols-1
      lg:grid-cols-2 gap-12">

        {/* Contact info */}
        <div className="flex flex-col gap-6">
          {contactInfo.map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-xs uppercase tracking-wide text-green-600 font-semibold">
                {item.label}
              </p>
              <p className="text-slate-600 mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your name"
              required
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none
              focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Your email"
              required
              className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none
              focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
            />
          </div>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            required
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none
            focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your message"
            required
            className="rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none
            focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all resize-none"
          />
          <button
            type="submit"
            className="self-start px-8 py-3 rounded-full bg-green-500 hover:bg-green-600
            text-white font-medium transition-all cursor-pointer active:scale-95"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-green-600 text-sm">
              ✓ Message sent! We'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default ContactUs
