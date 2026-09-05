import PolicyLayout from './PolicyLayout'

const sections = [
  {
    heading: '1. What Are Cookies',
    body: 'Cookies are small text files stored on your device when you visit Hotelify. They help us remember your preferences and improve your overall experience.',
  },
  {
    heading: '2. Types of Cookies We Use',
    body: 'We use essential cookies required for the platform to function (such as keeping you logged in), performance cookies to understand how visitors use our site, and preference cookies to remember settings like your preferred currency or city.',
  },
  {
    heading: '3. Third-Party Cookies',
    body: 'Some cookies are placed by trusted third parties, such as analytics and payment providers, to help us understand usage patterns and process transactions securely.',
  },
  {
    heading: '4. Managing Cookies',
    body: 'You can control or delete cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of Hotelify, such as staying logged in or saving your search preferences.',
  },
  {
    heading: '5. Changes to This Policy',
    body: 'We may update this Cookie Policy periodically to reflect changes in technology or regulation. Updates will be posted on this page with a revised date.',
  },
  {
    heading: '6. Contact Us',
    body: 'If you have questions about how we use cookies, reach out to us at support@hotelify.com.',
  },
]

const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="September 2026" sections={sections} />
  )
}

export default CookiePolicy
