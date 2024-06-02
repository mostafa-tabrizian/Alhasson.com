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
         {/* <!-- Google Tag Manager --> */}
         <Script id='google-tag-manager'>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
         'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
         })(window,document,'script','dataLayer','GTM-NC6Z38NL');`}</Script>
         {/* <!-- End Google Tag Manager --> */}

         <body>
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript>
               <iframe
                  src='https://www.googletagmanager.com/ns.html?id=GTM-NC6Z38NL'
                  height='0'
                  width='0'
                  style={{ display: 'none', visibility: 'hidden' }}
               ></iframe>
            </noscript>
            {/* <!-- End Google Tag Manager (noscript) --> */}

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
