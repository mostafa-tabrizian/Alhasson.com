import Image from 'next/image'
// import Link from 'next/link'

const Encyclopedia = () => {
   return (
      <div className='py-10' id='encyclopedia'>
         <Image
            src='https://tabrizian.storage.iran.liara.space/hadith/root/marefat-allah-title.png'
            alt='#'
            width={500}
            height={1000}
            priority
            loading='eager'
            className='mx-auto mb-10 rounded-xl object-cover'
         />
         <div className='grid justify-center space-y-10'>
            <div>
               <button // Link
                  // href='#encyclopedia' // https://hadith.center/encyclopedia
                  disabled
                  className='mx-auto block w-fit rounded-full border border-black bg-gradient-to-tl from-indigo-900 px-14 py-3 text-center text-base  text-slate-200' //  font-semibold transition-transform hover:scale-105 hover:border-gray-950
               >
                  شاهد الموسوعة (قریباً)
               </button>
            </div>
            <div className='space-y-3'>
               <p className='mx-3 block max-w-screen-md text-justify text-slate-200 lg:mx-auto'>
                  تستهدف موسوعة حديث أهل البيت (علیهم السلام) تنظيم مليون بطاقة تمّ إعدادها عن طريق
                  تقطيع جميع الأحاديث من أجل خلق صور معرفيّة متكاملة، وعرض معلومات كلّ موضوع بشكل
                  منظّم ومرتّب.
               </p>
               <p className='mx-3 max-w-screen-md text-justify text-slate-200 lg:mx-auto'>
                  وأوّل موضوع اهتمّت به هذه الموسوعة معرفة الله، وهو يتضمّن 150 ألف بطاقة مقسّمة إلى
                  3000 عنوان، والمتوقّع تأليف 40 مجلّداً في معرفة الله، وتأليف 250 مجلّداً في سائر
                  المواضيع التي اهتمّ بها أهل البيت (علیهم السلام) في أحاديثهم الشريفة.
               </p>
            </div>
         </div>
      </div>
   )
}

export default Encyclopedia
