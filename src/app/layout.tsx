import Script from 'next/script'

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
         {/* <!-- Google tag (gtag.js) --> */}
         <Script src='https://www.googletagmanager.com/gtag/js?id=G-86K78MJCE1' />
         <Script id='google-analytics'>
            {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
            
               gtag('config', 'G-86K78MJCE1');
            `}
         </Script>
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
