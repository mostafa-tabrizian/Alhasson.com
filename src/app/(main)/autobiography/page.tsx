import type { Metadata } from 'next'

import Tabs from './tabs'

export const metadata: Metadata = {
   metadataBase: new URL('https://alhasson.com'),
   title: 'السیرة الذاتیة | الدکتور الشیخ علاء الحسّون',
   description: 'دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت(ع)',

   openGraph: {
      title: 'السیرة الذاتیة | الدکتور الشیخ علاء الحسّون',
      description: 'دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت(ع)',
      url: 'https://alhasson.com/autobiography',
      siteName: 'موقع الدکتور الشیخ علاء الحسّون',
      locale: 'ar',
      type: 'website',
   },
}

const Autobiography = () => {
   return (
      <div className='bg-gradient-to-b min-h-screen py-10 md:py-24 px-6 from-[#0d0735] to-[#070515]'>
         <h1 className='title mt-14'>سیرة الذاتیة</h1>

         <Tabs />
      </div>
   )
}

export default Autobiography
