import { Helmet } from 'react-helmet-async'

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "name": "Danny Salon",
    "description": "Premium barbershop and hair salon in Lagos offering expert haircuts, beard sculpting, hot towel shaves and grooming services.",
    "url": "https://www.dannysalon.com",
    "logo": "https://www.dannysalon.com/logo.png",
    "image": "https://www.dannysalon.com/og-image.jpg",
    "telephone": "+2348012345678",
    "email": "hello@dannysalon.com",
    "priceRange": "₦₦",
    "currenciesAccepted": "NGN",
    "paymentAccepted": "Cash, Bank Transfer",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Broad Street",
      "addressLocality": "Victoria Island",
      "addressRegion": "Lagos",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.4281,
      "longitude": 3.4219
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/dannysalon.ng",
      "https://www.facebook.com/dannysalon.ng",
      "https://twitter.com/dannysalon_ng"
    ],
    "hasMap": "https://maps.google.com/?q=Danny+Salon+Victoria+Island+Lagos",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "320",
      "bestRating": "5"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}