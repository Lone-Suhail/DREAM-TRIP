import { MetadataRoute } from 'next'
import { packages } from '@/data/packages' // ✅ IMPORT YOUR DATA

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dreamtrip.co.in'

  // 1. Generate URLs for every single package automatically
  const packageUrls: MetadataRoute.Sitemap = packages.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9, // High priority because these are what you sell!
  }))

  // 2. Define your static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/plan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },

    {
      url: `${baseUrl}/book-taxi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
     priority: 0.8,
    },
  ]

  // 3. Combine them
  return [...staticPages, ...packageUrls]
}