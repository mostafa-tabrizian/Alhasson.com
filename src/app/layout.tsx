import '@/app/style/globals.scss'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
   const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      id: 'https://alhasson.com/#webSite',
      name: 'موقع الدکتور الشیخ علاء الحسّون',
      url: 'https://alhasson.com',
   }

   return (
      <html lang='ar'>
         <body>
            <Header />
            <main>{children}</main>
            <Footer />
            <script
               type='application/ld+json'
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
         </body>
      </html>
   )
}
