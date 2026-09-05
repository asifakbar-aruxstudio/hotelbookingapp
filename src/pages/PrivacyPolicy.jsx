import PolicyLayout from './PolicyLayout'

const sections = [
  {
    heading: '1. Information We Collect',
    body: 'We collect information you provide directly to us, such as your name, email address, phone number, and payment details when you create an account or make a booking. We also collect information automatically, including device data, IP address, and browsing behavior on Hotelify.',
  },
  {
    heading: '2. How We Use Your Information',
    body: 'We use your information to process bookings, communicate with you about your reservations, improve our platform, personalize your experience, and send you offers you can opt out of at any time.',
  },
  {
    heading: '3. Sharing Your Information',
    body: 'We share booking details with the relevant hotel to fulfill your reservation. We do not sell your personal data to third parties. We may share limited data with payment processors and analytics providers strictly to operate our services.',
  },
  {
    heading: '4. Data Security',
    body: 'We use industry-standard encryption and security practices to protect your data. While no system is 100% secure, we continuously monitor and update our safeguards to reduce risk.',
  },
  {
    heading: '5. Your Rights',
    body: 'You can access, update, or request deletion of your personal data at any time by contacting our support team. You may also opt out of marketing communications from your account settings.',
  },
  {
    heading: '6. Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.',
  },
  {
    heading: '7. Contact Us',
    body: 'If you have any questions about this Privacy Policy, please reach out to us at support@hotelify.com.',
  },
]

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="September 2026" sections={sections} />
  )
}

export default PrivacyPolicy
