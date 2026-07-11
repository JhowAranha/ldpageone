import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ldpageone.vercel.app', // URL da sua Home
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Adicione outras páginas institucionais aqui se criar no futuro (ex: /about, /pricing)
  ]
}