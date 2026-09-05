import PolicyLayout from './PolicyLayout'

const sections = [
  {
    heading: '1. Acceptance of Terms',
    body: 'By accessing or using Hotelify, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our platform.',
  },
  {
    heading: '2. Booking & Payments',
    body: 'All bookings made through Hotelify are subject to availability and confirmation by the respective hotel. Prices shown include applicable fees and taxes unless stated otherwise. Payments are processed securely through our supported payment partners.',
  },
  {
    heading: '3. Cancellations & Refunds',
    body: 'Cancellation policies vary by hotel and rate plan and are shown clearly before you confirm a booking. Refunds, where applicable, are processed within 7-10 business days to your original payment method.',
  },
  {
    heading: '4. User Responsibilities',
    body: 'You agree to provide accurate information when creating an account or making a booking, and to use the platform only for lawful purposes. You are responsible for maintaining the confidentiality of your account credentials.',
  },
  {
    heading: '5. Limitation of Liability',
    body: 'Hotelify acts as an intermediary between guests and hotels. We are not liable for the quality of accommodation, acts, or omissions of the listed hotels beyond what is reasonably within our control.',
  },
  {
    heading: '6. Changes to These Terms',
    body: 'We may revise these Terms of Service at any time. Continued use of Hotelify after changes are posted constitutes acceptance of the updated terms.',
  },
  {
    heading: '7. Contact Us',
    body: 'For any questions regarding these Terms of Service, contact us at support@hotelify.com.',
  },
]

const TermsOfService = () => {
  return (
    <PolicyLayout title="Terms of Service" lastUpdated="September 2026" sections={sections} />
  )
}

export default TermsOfService
