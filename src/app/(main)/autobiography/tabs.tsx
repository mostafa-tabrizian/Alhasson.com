'use client'

import { useState } from 'react'
const Tabs = () => {
   const [selectedOption, setSelectedOption] = useState('a')
   const [fadeOption, changeFadeOption] = useState('fadeIn')

   const changeContentTo = (contentId: string) => {
      changeFadeOption('fadeOut')
      setTimeout(() => {
         setSelectedOption(contentId)
      }, 500)
      setTimeout(() => {
         changeFadeOption('fadeIn')
      }, 500)
   }

   const aboutContent = () => {
      switch (selectedOption) {
         case 'a':
            return (
               <p className='text-justify border-r border-[#e5c698] pr-5'>
                  مكان وسنة الولادة: العراق، مدينة النجف الأشرف، ١٣٩٤هـ /١٩٧٥م.
                  <br />
                  الوالد: المرحوم الحاج عبد الحسين محمّد علي الحسّون، مؤلّف كتاب طبائع الأحياء (pdf)
                  (word)، كان معروفاً بالزهد والتقوى، تخرّج من كلّية الزراعة في العراق، مدينة النجف
                  الأشرف، وعمل مهندساً زراعياً مدّة عشر سنوات، ثمّ اهتم بالدراسة الدينيّة وتحقيق
                  التراث بعد الهجرة الي ايران عام ١٩٨٠م، وعمل في العديد من المؤسّسات الدينيّة منها:
                  موسّسة آل البيت (فرع مدينة مشهد المقدّسة)، مؤسّسة الوحيد البهبهاني{' '}
                  <a
                     href='https://www.pazhuhesh.ir/index.aspx?fkeyid=&siteid=16&fkeyid=&siteid=16&pageid=18321'
                     target='_blank'
                     rel='noreferrer'
                  >
                     {' '}
                     ومؤسّسة آية الله العظمى البروجردي{' '}
                  </a>{' '}
                  في مدينة قم المقدّسة، توفّي عام ١٤٣٤هـ، ودفن في مقبرة الأسرة في وادي السلام في
                  مدينة النجف الأشرف.
                  <br />
                  الوالدة: فاطمة جعفر محمّد حسين الحسّون، اهتمت بالدراسة الدينيّة حتي حصلت على إجازة
                  الرواية من آية اللّه العظمى السيّد المرعشي النجفي، ثمّ شاركت في المجالات العلميّة
                  مع العديد من المؤسّسات منها:{' '}
                  <a href='https://www.darolzahra.com/' target='_blank' rel='noreferrer'>
                     {' '}
                     دار الزهراء الثقافيّة،
                  </a>{' '}
                  <a href='https://www.aqaed.com/' target='_blank' rel='noreferrer'>
                     {' '}
                     مركز الأبحاث العقائديّة{' '}
                  </a>
                  .
               </p>
            )

         case 'b':
            return (
               <p className='text-justify border-r border-[#e5c698] pr-5'>
                  أكمل الشيخ علاء الحسّون المرحلة الثانويّة في مدينة مشهد المقدّسة، ثمّ انتقل إلى
                  مدينة قم المقدّسة، واهتمّ بالدراسة الحوزويّة في مدرسة الإمام المهدي (عجل اللّه
                  فرجه) عام ١٤١٤هـ، وبقى فيها مدّة ست سنوات حتى أنهى مرحلة المقدّمات، ثمّ واصل
                  دراسته في مرحلة السطوح في حوزة قم العلميّة.
               </p>
            )

         case 'c':
            return (
               <div className='border-r border-[#e5c698] pr-5'>
                  <p className='text-justify'>
                     البكالوريوس:{' '}
                     <a target='_blank' rel='noreferrer' href='https://iki.ac.ir/'>
                        مؤسّسة الإمام الخميني للتعليم والأبحاث
                     </a>
                     ، فرع العقائد والكلام، ايران، قم، 1431 هـ/2010 م.
                  </p>

                  <p>
                     الماجستير:{' '}
                     <a target='_blank' rel='noreferrer' href='https://www.qhu.ac.ir/'>
                        جامعة القرآن والحديث
                     </a>
                     ، فرع العقائد و الكلام، ايران، قم، 1435 هـ/2014 م.
                  </p>

                  <p>
                     الدكتوراه:{' '}
                     <a target='_blank' rel='noreferrer' href='https://www.qhu.ac.ir/'>
                        جامعة القرآن والحديث
                     </a>
                     ، فرع كلام الإماميّة، ايران، قم، 1422 هـ/2020 م.
                  </p>
               </div>
            )

         case 'd':
            return (
               <p className='text-justify border-r border-[#e5c698] pr-5'>
                  ١ ـ العمل في مختلف نشاطات{' '}
                  <a href='https://www.aqaed.com/' target='_blank' rel='noreferrer'>
                     {' '}
                     مركز الأبحاث العقائديّة{' '}
                  </a>{' '}
                  ، منها المشاركة في تأليف موسوعة الرأي الآخر، و{' '}
                  <a href='https://www.aqaed.com/book/607/' target='_blank' rel='noreferrer'>
                     {' '}
                     موسوعة حديث الثقلين{' '}
                  </a>
                  ، و
                  <a href='https://www.aqaed.com/book/462/' target='_blank' rel='noreferrer'>
                     {' '}
                     موسوعة الإمام المهدي{' '}
                  </a>{' '}
                  ، و
                  <a href='https://www.aqaed.com/book/468/' target='_blank' rel='noreferrer'>
                     {' '}
                     موسوعة من حياة المستبصرين{' '}
                  </a>{' '}
                  (١٤١٩ ـ ١٤٣٠ﻫ).
                  <br />۲ ـ تدوين المتون الدراسيّة في{' '}
                  <a href='https://www.qhu.ac.ir/' target='_blank' rel='noreferrer'>
                     {' '}
                     جامعة القرآن و الحديث{' '}
                  </a>{' '}
                  في مدينة قم المقدّسة. (١٤٢٨ ـ ١٤٢٩ﻫ)
                  <br /> ۳ ـ تأليف المضامين العلميّة ل
                  <a
                     href='https://www.mawsoah.org/index.php/component/jshopping/product/view/1/26?Itemid=0'
                     target='_blank'
                     rel='noreferrer'
                  >
                     برنامج الأخلاق{' '}
                  </a>
                  التابع لل موسوعة الاسلاميّة الكمبيوتريّة المنشور على شكل قرص مضغوط (١٤٢١ و١٤٢٢ﻫ).
                  <br />٤ ـ المشاركة في تقييم المقالات العلميّة في مؤتمر العلّامة شرف الدين(١٤٢٦ﻫ).
                  <br />٥ ـ التعاون العلمي مع{' '}
                  <a href='https://tousi.miu.ac.ir/' target='_blank' rel='noreferrer'>
                     {' '}
                     مهرجان الشيخ الطوسي{' '}
                  </a>{' '}
                  في مدينة قم المقدّسة الخاص بطلبة الحوزة غير الإيرانيين (١٤٢٦ﻫ).
                  <br />٦ ـ التعاون مع{' '}
                  <a href='https://www.ahl-ul-bayt.org/ar/' target='_blank' rel='noreferrer'>
                     {' '}
                     المجمع العالمي لأهل البيت{' '}
                  </a>
                  لإدارة الحوارات الدينيّة وردّ الشبهات العقائديّة عبر الإنترنت (برنامج البالتوك)
                  (١٤٢٧ﻫ).
                  <br />٧ ـ المشاركة في برنامج بساتين العلماء للتعريف بكتب علماء الشيعة التراثيّة في{' '}
                  <a href='https://arabicradio.net/' target='_blank' rel='noreferrer'>
                     {' '}
                     إذاعة طهران العربيّة{' '}
                  </a>{' '}
                  (١٤٢٩ﻫ).
                  <br />۸ ـ كتابة البرامج الدينيّة ل
                  <a href='https://www.alkawthartv.ir/' target='_blank' rel='noreferrer'>
                     قناة الكوثر الفضائيّة{' '}
                  </a>{' '}
                  (١٤٢٩ﻫ).
                  <br />
                  ۹ ـ التبليغ في محافظة خوزستان، مدينتي شوش وخرمشهر (المحمّرة) (عشرة محرّم سنوات
                  ١٤١٨ ـ ١٤٢٤ﻫ).
                  <br />
                  ۱۰ ـ الإشراف على إعداد الفهرس الموضوعي لبحوث الإمامة،{' '}
                  <a href='https://www.emamat.ir/' target='_blank' rel='noreferrer'>
                     {' '}
                     مركز الدراسات التخصّصيّة في الإمامة{' '}
                  </a>{' '}
                  (١٤٢٩ﻫ).
                  <br />
                  ۱۱ ـ المشاركة في المؤتمرات والمهرجانات الدوليّة، منها:{' '}
                  <a
                     href='https://www.ayandehroshan.ir/mahdaviatconference'
                     target='_blank'
                     rel='noreferrer'
                  >
                     {' '}
                     مهرجان العقيدة المهدويّة{' '}
                  </a>{' '}
                  في طهران، ومهرجان ربيع الشهادة العالمي في كربلاء المقدّسة .
               </p>
            )

         case 'e':
            return (
               <p className='text-justify border-r border-[#e5c698] pr-5'>
                  ١ ـ مسؤوليّة بعض أقسام{' '}
                  <a href='https://www.aqaed.com/' target='_blank' rel='noreferrer'>
                     {' '}
                     مركز الأبحاث العقائديّة{' '}
                  </a>{' '}
                  ، أبرزها قسم المستبصرين، وقسم تأليف موسوعة من حياة المستبصرين (١٤٢٠ ـ ١٤٣٠هـ).
                  <br />۲ ـ مسؤوليّة لجنة تأسيس موقع المبلّغ على الانترنت، التابع ل
                  <a href='https://icro.ir/' target='_blank' rel='noreferrer'>
                     منظمة الثقافة والعلاقات الدوليّة{' '}
                  </a>{' '}
                  (١٤٢٧ ـ ١٤٢٨هـ).
                  <br />۳ ـ مسؤوليّة قسم ردّ الشبهات الوهابيّة في ّ
                  <a href='https://hzrc.ac.ir/' target='_blank' rel='noreferrer'>
                     {' '}
                     مركز بحوث الحج{' '}
                  </a>{' '}
                  (١٤٣٠ ـ ١٤٣١هـ).
                  <br />٤ ـ مسؤوليّة قسم عقائد الأئمة الأطهار
                  <a href='https://www.markazfeqhi.com/main/' target='_blank' rel='noreferrer'>
                     {' '}
                     مركز فقه الأئمة الأطهار{' '}
                  </a>{' '}
                  في{' '}
                  <a href='https://www.markazfeqhi.com/main/' target='_blank' rel='noreferrer'>
                     {' '}
                     مركز فقه الأئمة الأطهار{' '}
                  </a>{' '}
                  (١٤٣٢هـ ـ ١٤٣٥هـ)
                  <br />٥ ـ مدير{' '}
                  <a
                     href='https://alhasson.com/about/about_hadith'
                     target='_blank'
                     rel='noreferrer'
                  >
                     {' '}
                     مركز حديث أهل البيت{' '}
                  </a>{' '}
                  (علیه السلام) (١٤٣٥هـ ـ لحد الآن)
               </p>
            )

         case 'f':
            return (
               <p className='text-justify border-r border-[#e5c698] pr-5'>
                  ١ ـ{' '}
                  <a href='http://localhost:3000/%20%D8%AA%D9%86%D9%85%D9%8A%D8%A9%20%D8%A7%D9%84%D9%88%D8%B9%D9%8A'>
                     تنمية الوعي
                  </a>
                  ، منهج في ارتقاء المستوى الفكري وتشييد العقليّة الواعيّة، الناشر: دار الغدير، قم،
                  الطبعة الأولى، ١٤٢٤هـ، والطبعة الثانيّة، ١٤٢٦هـ.
                  <br />٢ ـ{' '}
                  <a href='http://localhost:3000/%D8%A7%D9%84%D8%AA%D8%AD%D9%88%D9%84%20%D8%A7%D9%84%D9%85%D8%B0%D9%87%D8%A8%DB%8C'>
                     التحوّل المذهبي
                  </a>
                  ، بحث تحليلي حول رحلة المستبصرين إلى مذهب أهل البيت ، الناشر: قلم الشرق، قم،
                  الطبعة الأولى، ١٤٢٦هـ.
                  <br />٣ ـ{' '}
                  <a href='http://localhost:3000/%D8%A7%D9%84%D8%B9%D8%AF%D9%84%20%D8%B9%D9%86%D8%AF%20%D9%85%D8%B0%D9%87%D8%A8%20%D8%A3%D9%87%D9%84%20%D8%A7%D9%84%D8%A8%DB%8C%D8%AA'>
                     العدل عند مذهب أهل البيت
                  </a>
                  ، الناشر:{' '}
                  <a href='https://www.ahl-ul-bayt.org/fa/' target='_blank' rel='noreferrer'>
                     {' '}
                     المجمع العالمي لأهل البيت{' '}
                  </a>
                  ، الطبعة الأولى، ١٤٣٢هـ، والطبعة الثانية، ١٤٣٢هـ.
                  <br />٤ ـ{' '}
                  <a href='http://localhost:3000/%D8%AA%D9%88%D8%AD%D9%8A%D8%AF%20%D8%B9%D9%86%D8%AF%20%D9%85%D8%B0%D9%87%D8%A8%20%D8%A3%D9%87%D9%84%20%D8%A7%D9%84%D8%A8%DB%8C%D8%AA'>
                     التوحيد عند مذهب أهل البيت
                  </a>
                  ، الناشر:{' '}
                  <a href='https://hzrc.ac.ir/' target='_blank' rel='noreferrer'>
                     {' '}
                     مركز بحوث الحجّ{' '}
                  </a>
                  ، الطبعة الأولى، ١٤٣۳هـ.
                  <br />٥ ـ ، <a href='https://www.hadith.center/books/marefat-allah'>
                     معرفة الله
                  </a>{' '}
                  (مجلدان)، الناشر: مركز فقه الأئمة الأطهار
                  <a href='https://www.markazfeqhi.com/main/' target='_blank' rel='noreferrer'>
                     {' '}
                     موسوعة عقائد الأئمة الأطهار{' '}
                  </a>{' '}
                  ، الطبعة الأولى، ١٤٣۳هـ.
                  <br />٦ ـ{' '}
                  <a href='http://localhost:3000/%D9%85%D8%B9%D8%A7%D8%B1%D9%81%20%D8%A7%D9%84%D8%B5%D8%AD%DB%8C%D9%81%D8%A9%20%D8%A7%D9%84%D8%B3%D8%AC%D8%A7%D8%AF%DB%8C%D8%A9'>
                     معارف الصحيفة السجّاديّة،
                  </a>{' '}
                  الناشر:{' '}
                  <a href='https://www.chaponashr.ir/alrafed' target='_blank' rel='noreferrer'>
                     {' '}
                     الرافد{' '}
                  </a>{' '}
                  ، إصدار: مركز الهادي ، الطبعة الأولى، ١٤٣٦هـ.
                  <br />٧ ـ{' '}
                  <a href='http://localhost:3000/%D8%A7%D9%84%D8%AC%D8%AF%D8%A7%D9%88%D9%84%20%D8%A7%D9%84%D9%81%D9%82%D9%87%DB%8C%D8%A9%20%D9%84%D9%84%D9%85%D8%B3%D8%A7%D8%A6%D9%84%20%D8%A7%D9%84%D9%85%D9%86%D8%AA%D8%AE%D8%A8%D8%A9'>
                     الجداول الفقهيّة للمسائل المنتخبة
                  </a>
                  ، وفقاً لفتاوى{' '}
                  <a href='https://www.sistani.org/' target='_blank' rel='noreferrer'>
                     {' '}
                     سماحة آية الله العظمى السيّد علي السيستاني (دام ظلّه){' '}
                  </a>
                  <br />۸ - <a href='https://www.hadith.center/books/marefat-allah'>صحة الحديث</a> ،
                  الناشر:{' '}
                  <a href='https://www.hadith.center'>مركز حديث أهل البيت (عليهم السلام) </a> ،
                  الطبعة الأولى، ١٤٤٣ هـ
               </p>
            )

         case 'g':
            return (
               <div>
                  <h2> الموسوعات التي شارك الشيخ علاء الحسّون في تألیفها:</h2>
                  <p className='text-justify border-r border-[#e5c698] pr-5'>
                     ١ ـ{' '}
                     <a href='https://www.aqaed.com/book/468/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ١{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون والشيخ محمّد اللبان، الشيخ طاهر السلامي. ٦١٩ صفحة،
                     وهو يختص بالمستبصرين المعاصرين، ويحتوي على ترجمة خمسين مستبصراً.
                     <br />٢ ـ{' '}
                     <a href='https://www.aqaed.com/book/469/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ٢{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون والشيخ صادق الحسّون. ٥٨٣ صفحة، وهو يختص بالمستبصرين
                     الذين لهم مؤلّفات، ويحتوي على ترجمة ثلاثة وعشرين مستبصراً.
                     <br />٣ ـ{' '}
                     <a href='https://www.aqaed.com/book/577/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ٣{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون والشيخ صادق الحسّون. ٦٠٥ صفحة، وهو أيضاً يختص
                     بالمستبصرين الذين لهم مؤلّفات، ويحتوي على ترجمة ستة وعشرين مستبصراً.
                     <br />٤ ـ{' '}
                     <a href='https://www.aqaed.com/book/471/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ٤{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون. ٥٨١ صفحة، وهو يحتوي على ترجمة مائة وثمانية وسبعين
                     مستبصراً من إثيوبيا، الأرجنتين، الأردن، إسبانيا، استراليا، أفغانستان، ألمانيا،
                     الإمارات العربيّة، وأمريكا.
                     <br />٥ ـ{' '}
                     <a href='https://www.aqaed.com/book/532/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ٥{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون، الشيخ صادق الحسّون. ٦٠٠ صفحة، وهو يحتوي على ترجمة
                     مائة وواحد وثلاثين مستبصراً من أندونيسيا، أوزبكستان، أوغندا، إيران، وإيطاليا.
                     <br />٦ ـ{' '}
                     <a href='https://www.aqaed.com/book/536/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ٦{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون، الشيخ صادق الحسّون، السيّد مرتضى الشيرازي، الشيخ
                     محمّد مهدي الجواهري. ٥٨٨ صفحة، وهو يحتوي على ترجمة مائة واثنين وثلاثين مستبصراً
                     من باكستان، البحرين، بريطانيا، بلجيكا، بلغاريا، بنغلادش، بنين، بوركينافاسو،
                     بورندي، البوسنة والهرسك، بولندا، بيرو، تايلند، تركمنستان، تركيا، تنزانيا، توغو،
                     وتونس.
                     <br />٧ ـ{' '}
                     <a href='https://www.aqaed.com/book/555/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ٧{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون، الشيخ صادق الحسّون، السيّد مرتضى الشيرازي، الشيخ
                     محمّد مهدي الجواهري. ٥٦٥ صفحة، وهو يحتوي على ترجمة سبعة وثمانين مستبصراً من
                     تونس، الجزائر، جزر القمر، افريقيا، روسيا، زائير، ساحل العاج، السعوديّة،
                     والسنغال.
                     <br />٨ ـ{' '}
                     <a href='https://www.aqaed.com/book/619/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ٨{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون، السيّد مرتضى الشيرازي، الشيخ محمّد مهدي الجواهري.
                     ٥٥٠ صفحة، وهو يحتوي على ترجمة ثمانية وسبعين مستبصراً من السودان، سوريا، السويد،
                     سويسرا، سيراليون، سيرلانكا، والصين.
                     <br />٩ ـ{' '}
                     <a href='https://www.aqaed.com/book/624/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ٩{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون، السيّد مرتضى الشيرازي، الشيخ محمّد مهدي الجواهري.
                     ٦٣٩ صفحة، وهو يحتوي على ترجمة مائة وأربعة عشر مستبصراً من العراق.
                     <br />
                     ١٠ ـ{' '}
                     <a href='https://www.aqaed.com/book/625/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة من حياة المستبصرين ج ١٠{' '}
                     </a>
                     تأليف: الشيخ علاء الحسّون، السيّد مرتضى الشيرازي، الشيخ محمّد مهدي الجواهري،
                     السيّد محمّد الرضوي. ٥٧٦ صفحة، وهو يحتوي على ترجمة ثمانين مستبصراً من العراق،
                     عمان، غانا، غويانا، غينيا وكوناكري. واستمر تأليف هذه الموسوعة بعد ذلك في مركز
                     الأبحاث العقائديّة، ثمّ توقّفت عند المجلد الرابع عشر.
                     <br />
                     ۱۱ ـ{' '}
                     <a href='https://www.aqaed.com/book/462/' target='_blank' rel='noreferrer'>
                        {' '}
                        موسوعة الإمام المهدي{' '}
                     </a>
                     تأليف: السيّد هاشم الميلاني والشيخ علاء الحسّون في مركز الأبحاث العقائديّة.
                     <br />
                     ۱۲ ـ موسوعة الرأى الآخر (٨ مجلدات)، وهي موسوعة تتضمّن جمع وتنظيم أهم الشبهات
                     المطروحة ضدّ مذهب أهل البيت (علیهم السلام)، وقد تمّ تأليف هذه الموسوعة في مركز
                     الأبحاث العقائديّة، لتكون المنطلق لعمل المركز في الإجابة على الشبهات
                     العقائديّة، ولم يطبع من هذه الموسوعة سوى عشر دورات قام المركز بتوزيعها بين
                     الجهات المعنيّة والمهتمة بردّ الشبهات فحسب. وكان في طليعة أعضاء اللجنة العلميّة
                     التي قامت بتأليف هذه الموسوعة: السيّد هاشم الميلاني، الشيخ محمّد رضا السلامي،
                     الشيخ علاء الحسّون.
                  </p>
               </div>
            )
      }
   }

   return (
      <>
         <ul className='justify-center max-w-screen-md rtl mx-auto items-center mt-10 space-x-5 space-x-reverse space-y-3 flex flex-wrap mb-5'>
            <li
               className={`py-1 mt-3 px-3 rounded-md ${
                  selectedOption == 'a' ? 'about_option_selected' : 'border border-white'
               }`}
            >
               <button
                  type='button'
                  onClick={() => {
                     changeContentTo('a')
                  }}
               >
                  الولادة و النشأة
               </button>
            </li>
            <li
               className={`py-1 px-3 rounded-md ${
                  selectedOption == 'b' ? 'about_option_selected' : 'border border-white'
               }`}
            >
               <button
                  type='button'
                  onClick={() => {
                     changeContentTo('b')
                  }}
               >
                  الدراسة الحوزويّة
               </button>
            </li>
            <li
               className={`py-1 px-3 rounded-md ${
                  selectedOption == 'c' ? 'about_option_selected' : 'border border-white'
               }`}
            >
               <button
                  type='button'
                  onClick={() => {
                     changeContentTo('c')
                  }}
               >
                  الدراسة الجامعيّة
               </button>
            </li>
            <li
               className={`py-1 px-3 rounded-md ${
                  selectedOption == 'd' ? 'about_option_selected' : 'border border-white'
               }`}
            >
               <button
                  type='button'
                  onClick={() => {
                     changeContentTo('d')
                  }}
               >
                  النشاطات العلمیة
               </button>
            </li>
            <li
               className={`py-1 px-3 rounded-md ${
                  selectedOption == 'e' ? 'about_option_selected' : 'border border-white'
               }`}
            >
               <button
                  type='button'
                  onClick={() => {
                     changeContentTo('e')
                  }}
               >
                  المسؤوليات
               </button>
            </li>
            <li
               className={`py-1 px-3 rounded-md ${
                  selectedOption == 'f' ? 'about_option_selected' : 'border border-white'
               }`}
            >
               <button
                  type='button'
                  onClick={() => {
                     changeContentTo('f')
                  }}
               >
                  المؤلفات
               </button>
            </li>
            <li
               className={`py-1 px-3 rounded-md ${
                  selectedOption == 'g' ? 'about_option_selected' : 'border border-white'
               }`}
            >
               <button
                  type='button'
                  onClick={() => {
                     changeContentTo('g')
                  }}
               >
                  الموسوعات
               </button>
            </li>
         </ul>

         <div className={`flex max-w-screen-md mx-auto justify-center my-20 ${fadeOption}`}>
            {aboutContent()}
         </div>
      </>
   )
}

export default Tabs
