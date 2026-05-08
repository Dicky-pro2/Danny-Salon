import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
}

const SITE_NAME = "Danny Salon"
const SITE_URL = "https://www.dannysalon.com"
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SEO({ title, description, canonical, ogImage }: SEOProps) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL
  const image = ogImage || DEFAULT_IMAGE

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_NG" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Extra */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#C9A84C" />
    </Helmet>
  )
}