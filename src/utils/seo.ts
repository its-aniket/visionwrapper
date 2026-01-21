export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonical?: string
  author?: string
  jsonLd?: Record<string, any>
}

export function useSEO(metadata: SEOMetadata) {
  // Set document title
  document.title = metadata.title

  // Remove existing meta tags that we'll be updating
  const metaTags = document.querySelectorAll('meta[name], meta[property]')
  metaTags.forEach(tag => {
    const name = tag.getAttribute('name') || tag.getAttribute('property')
    if (
      name &&
      [
        'description',
        'keywords',
        'author',
        'og:title',
        'og:description',
        'og:image',
        'og:url',
        'twitter:card',
        'twitter:title',
        'twitter:description',
        'twitter:image',
      ].includes(name)
    ) {
      tag.remove()
    }
  })

  // Remove existing canonical link
  const existingCanonical = document.querySelector('link[rel="canonical"]')
  if (existingCanonical) {
    existingCanonical.remove()
  }

  // Set meta description
  if (metadata.description) {
    const descriptionMeta = document.createElement('meta')
    descriptionMeta.name = 'description'
    descriptionMeta.content = metadata.description
    document.head.appendChild(descriptionMeta)
  }

  // Set meta keywords
  if (metadata.keywords && metadata.keywords.length > 0) {
    const keywordsMeta = document.createElement('meta')
    keywordsMeta.name = 'keywords'
    keywordsMeta.content = metadata.keywords.join(', ')
    document.head.appendChild(keywordsMeta)
  }

  // Set author
  if (metadata.author) {
    const authorMeta = document.createElement('meta')
    authorMeta.name = 'author'
    authorMeta.content = metadata.author
    document.head.appendChild(authorMeta)
  }

  // Set Open Graph tags
  if (metadata.ogTitle) {
    const ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.content = metadata.ogTitle
    document.head.appendChild(ogTitle)
  }

  if (metadata.ogDescription) {
    const ogDescription = document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.content = metadata.ogDescription
    document.head.appendChild(ogDescription)
  }

  if (metadata.ogImage) {
    const ogImage = document.createElement('meta')
    ogImage.setAttribute('property', 'og:image')
    ogImage.content = metadata.ogImage
    document.head.appendChild(ogImage)
  }

  if (metadata.ogUrl) {
    const ogUrl = document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.content = metadata.ogUrl
    document.head.appendChild(ogUrl)
  }

  // Set Twitter Card tags
  if (metadata.twitterCard) {
    const twitterCard = document.createElement('meta')
    twitterCard.name = 'twitter:card'
    twitterCard.content = metadata.twitterCard
    document.head.appendChild(twitterCard)
  }

  if (metadata.twitterTitle) {
    const twitterTitle = document.createElement('meta')
    twitterTitle.name = 'twitter:title'
    twitterTitle.content = metadata.twitterTitle
    document.head.appendChild(twitterTitle)
  }

  if (metadata.twitterDescription) {
    const twitterDescription = document.createElement('meta')
    twitterDescription.name = 'twitter:description'
    twitterDescription.content = metadata.twitterDescription
    document.head.appendChild(twitterDescription)
  }

  if (metadata.twitterImage) {
    const twitterImage = document.createElement('meta')
    twitterImage.name = 'twitter:image'
    twitterImage.content = metadata.twitterImage
    document.head.appendChild(twitterImage)
  }

  // Set canonical URL
  if (metadata.canonical) {
    const canonicalLink = document.createElement('link')
    canonicalLink.rel = 'canonical'
    canonicalLink.href = metadata.canonical
    document.head.appendChild(canonicalLink)
  }

  // Set JSON-LD structured data
  if (metadata.jsonLd) {
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]')
    if (existingJsonLd) {
      existingJsonLd.remove()
    }

    const jsonLdScript = document.createElement('script')
    jsonLdScript.type = 'application/ld+json'
    jsonLdScript.textContent = JSON.stringify(metadata.jsonLd)
    document.head.appendChild(jsonLdScript)
  }
}
