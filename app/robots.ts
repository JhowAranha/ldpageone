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
    // Altere para o domínio real do seu projeto quando fizer o deploy
    sitemap: 'https://shiftflow.com/sitemap.xml', 
  }
}