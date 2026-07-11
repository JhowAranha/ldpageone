import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',          // Bloqueia rotas de API internas
        '/_next/',        // Bloqueia arquivos internos de build do Next.js
        '/dashboard/',    // Bloqueia painéis privados (se houver no futuro)
        '/admin/',        // Bloqueia páginas de administração
      ],
    },

    sitemap: 'https://ldpageone.vercel.app/sitemap.xml', 
  }
}