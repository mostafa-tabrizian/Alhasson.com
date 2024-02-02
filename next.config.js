/** @type {import('next').NextConfig} */

const nextConfig = {
    async headers() {
       return [
          {
             source: '/(.*)',
             headers: [
                {
                   key: 'X-Frame-Options',
                   value: 'SAMEORIGIN',
                },
                {
                   key: 'X-Content-Type-Options',
                   value: 'nosniff',
                },
                {
                   key: 'Strict-Transport-Security',
                   value: 'max-age=3571000; includeSubDomains; preload',
                },
             ],
          },
       ]
    },
    images: {
       formats: ['image/avif', 'image/webp'],
       minimumCacheTTL: 7 * 24 * 60 * 60
    },
    output: 'standalone',
 }
 
 module.exports = nextConfig
 