import Link from 'next/link'

export default function NotFound() {
   return (
      <div
         className='
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
    from-indigo-950
    to-blue-950
  '
      >
         <div className='w-full py-20 bg-blue-200 rounded-md shadow-xl'>
            <div className='flex flex-col items-center'>
               <h1 className='font-bold text-blue-950 text-9xl'>۴۰۴</h1>

               <h6 className='mb-2 text-xl font-bold text-center text-gray-800 md:text-3xl'>
                  !لم يتم العثور على الصفحة
               </h6>

               <Link href='/' className='px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100'>
                  الصفحة الرئیسیة
               </Link>
            </div>
         </div>
      </div>
   )
}
