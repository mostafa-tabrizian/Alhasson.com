import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";

import { log, fadeOut } from '../components/base'

const About = () => {
    const [selectedOption, setSelectedOption] = useState('a')
    const [fadeOption, changeFadeOption] = useState('fadeIn')

    const changeContentTo = (contentId) => {
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
                    <p className="rightBorder">
                        مكان وسنة الولادة: العراق، مدينة النجف الأشرف، ١٣٩٤هـ /١٩٧٥م.
                        <br/>الوالد:
                        المرحوم الحاج عبد الحسين محمّد علي الحسّون، مؤلّف كتاب طبائع الأحياء (pdf)  (word)، كان معروفاً بالزهد والتقوى، تخرّج من كلّية الزراعة في العراق، مدينة النجف الأشرف، وعمل مهندساً زراعياً مدّة عشر سنوات، ثمّ اهتم بالدراسة الدينيّة وتحقيق التراث بعد الهجرة الي ايران عام ١٩٨٠م، وعمل في العديد من المؤسّسات الدينيّة منها: موسّسة آل البيت  (فرع مدينة مشهد المقدّسة)، مؤسّسة الوحيد البهبهاني <a href="https://www.pazhuhesh.ir/index.aspx?fkeyid=&siteid=16&fkeyid=&siteid=16&pageid=18321" target="_blank"> ومؤسّسة آية الله العظمى البروجردي </a> في مدينة قم المقدّسة، توفّي عام ١٤٣٤هـ، ودفن في مقبرة الأسرة في وادي السلام في مدينة النجف الأشرف.
                        <br/>الوالدة:
                        فاطمة جعفر محمّد حسين الحسّون، اهتمت بالدراسة الدينيّة حتي حصلت على إجازة الرواية من آية اللّه العظمى السيّد المرعشي النجفي، ثمّ شاركت في المجالات العلميّة مع العديد من المؤسّسات منها: <a href="https://www.darolzahra.com/" target="_blank"> دار الزهراء الثقافيّة،</a> <a href="https://www.aqaed.com/" target="_blank"> مركز الأبحاث العقائديّة </a>.
                    </p>
                )

            case 'b':
                return(
                    <p className="rightBorder">
                        أكمل الشيخ علاء الحسّون المرحلة الثانويّة في مدينة مشهد المقدّسة، ثمّ انتقل إلى مدينة قم المقدّسة، واهتمّ بالدراسة الحوزويّة في مدرسة الإمام المهدي (عجل اللّه فرجه) عام ١٤١٤هـ، وبقى فيها مدّة ست سنوات حتى أنهى مرحلة المقدّمات، ثمّ واصل دراسته في مرحلة السطوح في حوزة قم العلميّة.
                    </p>
                )

            case 'c':
                return(
                    <p className="rightBorder">
                        واصل الشيخ علاء الحسّون دراسته الجامعية في مدينة قم المقدّسة تزامناً مع دراسته الحوزوية وفق المراحل التالية:
                        <a href="https://iki.ac.ir/" target="_blank"> جامعة الإمام الخميني </a> البكالوريوس : حصل عام ١٤٣١هـ /٢٠١٠ م على شهادة البكالوريوس في العقائد والكلام من
                        <a href="https://www.qhu.ac.ir/" target="_blank"> كلّية علوم الحديث </a>الماجستير: حصل عام ١٤٣٥هـ /٢٠١٤ م على شهادة الماجستير في علوم الحديث فرع العقائد والكلام من
                        الدكتوراه: حصل عام ١٤٤٢هـ /٢٠٢٠ م على شهادة الدكتوراه في علوم الحديث فرع كلام الإماميّة من<a href="https://www.qhu.ac.ir/" target="_blank"> جامعة القرآن والحديث </a>
                    </p>
                )

            case 'd':
                return(
                    <p className="rightBorder">
                        ١ ـ العمل في مختلف نشاطات  <a href="http://www.aqaed.com/" target="_blank"> مركز الأبحاث العقائديّة </a> ، منها المشاركة في تأليف موسوعة الرأي الآخر، و <a href="http://www.aqaed.com/book/607/" target="_blank"> موسوعة حديث الثقلين </a>، و<a href="http://www.aqaed.com/book/462/"target="_blank"> موسوعة الإمام المهدي </a> ، و<a href="http://www.aqaed.com/book/468/" target="_blank"> موسوعة من حياة المستبصرين </a> (١٤١٩ ـ ١٤٣٠ﻫ).
                        <br/>٢ ـ عضو لجنة الرقابة على الكتب الدينيّة ومنع الكتب المحذورة عقائدياً في <a href="https://www.tibf.ir/fa" target="_blank"> معرض كتاب طهران الدولي </a>(١٤٢٠ـ ١٤٢٧ﻫ)، ومسؤول هذه اللجنة عام ١٤٢٨ﻫ.
                        <br/> ٣ ـ تدوين المتون الدراسيّة في <a href="http://www.qhu.ac.ir/" target="_blank"> كلّية علوم الحديث </a> في مدينة قم المقدّسة. (١٤٢٨ ـ ١٤٢٩ﻫ)
                        <br/> ٤ ـ تأليف المضامين العلميّة ل<a href="http://www.mawsoah.org/index.php/component/jshopping/product/view/1/26?Itemid=0" target="_blank">برنامج الأخلاق </a>التابع لل<a href="http://www.mawsoah.org/" target="_blank">موسوعة الاسلاميّة الكمبيوتريّة </a>المنشور على شكل قرص مضغوط (١٤٢١ و١٤٢٢ﻫ).
                        <br/>٥ ـ المشاركة في تقييم المقالات العلميّة في مؤتمر العلّامة شرف الدين(١٤٢٦ﻫ).
                        <br/>٦ ـ التعاون العلمي مع <a href="http://tousi.miu.ac.ir/" target="_blank"> مهرجان الشيخ الطوسي </a> في مدينة قم المقدّسة الخاص بطلبة الحوزة غير الإيرانيين (١٤٢٦ﻫ).
                        <br/>٧ ـ التعاون مع <a href="http://www.ahl-ul-bayt.org/ar/" target="_blank"> المجمع العالمي لأهل البيت </a>لإدارة الحوارات الدينيّة وردّ الشبهات العقائديّة عبر الإنترنت (برنامج البالتوك) (١٤٢٧ﻫ).
                        <br/>٨ ـ المشاركة في برنامج بساتين العلماء للتعريف بكتب علماء الشيعة التراثيّة في <a href="http://arabicradio.net/" target="_blank"> إذاعة طهران العربيّة </a> (١٤٢٩ﻫ).
                        <br/>٩ ـ كتابة البرامج الدينيّة ل<a href="https://www.alkawthartv.com/" target="_blank">قناة الكوثر الفضائيّة </a> (١٤٢٩ﻫ).
                        <br/>١٠ ـ التبليغ في محافظة خوزستان، مدينتي شوش وخرمشهر (المحمّرة) (عشرة محرّم سنوات ١٤١٨ ـ ١٤٢٤ﻫ).
                        <br/>١١ ـ الإشراف على إعداد الفهرس الموضوعي لبحوث الإمامة، <a href="http://www.emamat.ir/" target="_blank"> مركز الدراسات التخصّصيّة في الإمامة </a> (١٤٢٩ﻫ).
                        <br/>١٢ ـ المشاركة في المؤتمرات والمهرجانات الدوليّة، منها: <a href="https://rabee.alkafeel.net/index.php" target="_blank"> مهرجان العقيدة المهدويّة </a> في طهران، ومهرجان ربيع الشهادة العالمي في كربلاء المقدّسة .
                    </p>
                )

            case 'e':
                return(
                    <p className="rightBorder">
                        ١ ـ مسؤوليّة بعض أقسام <a href="http://www.aqaed.com/" target="_blank"> مركز الأبحاث العقائديّة </a> ، أبرزها قسم المستبصرين، وقسم تأليف موسوعة من حياة المستبصرين (١٤٢٠ ـ ١٤٣٠هـ).
                        <br/>٢ ـ مسؤوليّة لجنة الرقابة على الكتب الدينيّة ومنع الكتب المحذورة عقائدياً في <a href="https://www.tibf.ir/fa" target="_blank"> معرض كتاب طهران الدولي </a>  (١٤٢٨هـ).
                        <br/>٣ ـ مسؤوليّة لجنة تأسيس موقع المبلّغ على الانترنت، التابع ل<a href="http://icro.ir/" target="_blank">منظمة الثقافة والعلاقات الدوليّة </a> (١٤٢٧ ـ ١٤٢٨هـ).
                        <br/>٤ ـ مسؤوليّة قسم ردّ الشبهات الوهابيّة في ّ<a href="http://hzrc.ac.ir/" target="_blank"> مركز بحوث الحج </a> (١٤٣٠ ـ ١٤٣١هـ).
                        <br/>٥ ـ مسؤوليّة قسم عقائد الأئمة الأطهار<a href="http://www.markazfeqhi.com/main/" target="_blank"> مركز فقه الأئمة الأطهار </a>  في <a href="http://www.markazfeqhi.com/main/" target="_blank"> مركز فقه الأئمة الأطهار </a> (١٤٣٢هـ ـ ١٤٣٥هـ)
                        <br/>٦ ـ مدير <a href="http://alhasson.com/about/about_hadith" target="_blank"> مركز حديث أهل البيت </a> (علیه السلام) (١٤٣٥هـ ـ لحد الآن)
                    </p>
                )

            case 'f':
                return(
                    <p className="rightBorder">
                        ١ ـ تنمية الوعي، منهج في ارتقاء المستوى الفكري وتشييد العقليّة الواعيّة، الناشر: دار الغدير، قم، الطبعة الأولى، ١٤٢٤هـ، والطبعة الثانيّة، ١٤٢٦هـ.
                        <br/>٢ ـ التحوّل المذهبي، بحث تحليلي حول رحلة المستبصرين إلى مذهب أهل البيت ، الناشر: قلم الشرق، قم، الطبعة الأولى، ١٤٢٦هـ.
                        <br/>٣ ـ العدل عند مذهب أهل البيت، الناشر: <a href="http://www.ahl-ul-bayt.org/fa/" target="_blank"> المجمع العالمي لأهل البيت </a>، الطبعة الأولى، ١٤٣٢هـ، والطبعة الثانية، ١٤٣٢هـ.
                        <br/>٤ ـ التوحيد عند مذهب أهل البيت، الناشر: <a href="http://hzrc.ac.ir/" target="_blank"> مركز بحوث الحجّ </a>، الطبعة الأولى، ١٤٣۳هـ.
                        <br/>٥ ـ ، معرفة الله (مجلدان)، الناشر: مركز فقه الأئمة الأطهار<a href="http://www.markazfeqhi.com/main/" target="_blank"> موسوعة عقائد الأئمة الأطهار </a> ، الطبعة الأولى، ١٤٣۳هـ.
                        <br/>٦ ـ معارف الصحيفة السجّاديّة، الناشر: <a href="http://www.chaponashr.ir/alrafed" target="_blank"> الرافد </a> ، إصدار: مركز الهادي ، الطبعة الأولى، ١٤٣٦هـ.
                        <br/>٧ ـ الجداول الفقهيّة للمسائل المنتخبة، وفقاً لفتاوى <a href="https://www.sistani.org/" target="_blank"> سماحة آية الله العظمى السيّد علي السيستاني (دام ظلّه) </a>، بمشاركة الشيخ مصطفى الجواهري، الناشر: دار التفسير، الطبعة الأولى، ١٤٣٨ هـ.
                    </p>
                )

            case 'g':
                return(
                    <div>
                        <h2> الموسوعات التي شارك الشيخ علاء الحسّون في تألیفها:</h2>
                        <p className="rightBorder">
                            ١ ـ  <a href="http://www.aqaed.com/book/468/" target="_blank"> موسوعة من حياة المستبصرين ج ١ </a>
                            تأليف: الشيخ علاء الحسّون والشيخ محمّد اللبان، الشيخ طاهر السلامي.
                            ٦١٩ صفحة، وهو يختص بالمستبصرين المعاصرين، ويحتوي على ترجمة خمسين مستبصراً.
                            <br/>٢ ـ  <a href="http://www.aqaed.com/book/469/" target="_blank"> موسوعة من حياة المستبصرين ج ٢ </a>
                            تأليف: الشيخ علاء الحسّون والشيخ صادق الحسّون.
                            ٥٨٣ صفحة، وهو يختص بالمستبصرين الذين لهم مؤلّفات، ويحتوي على ترجمة ثلاثة وعشرين مستبصراً.
                            <br/>٣ ـ  <a href="http://www.aqaed.com/book/577/" target="_blank"> موسوعة من حياة المستبصرين ج ٣ </a>
                            تأليف: الشيخ علاء الحسّون والشيخ صادق الحسّون.
                            ٦٠٥ صفحة، وهو أيضاً يختص بالمستبصرين الذين لهم مؤلّفات، ويحتوي على ترجمة ستة وعشرين مستبصراً.
                            <br/>٤ ـ  <a href="http://www.aqaed.com/book/471/" target="_blank"> موسوعة من حياة المستبصرين ج ٤ </a>
                            تأليف: الشيخ علاء الحسّون.
                            ٥٨١ صفحة، وهو يحتوي على ترجمة مائة وثمانية وسبعين مستبصراً من إثيوبيا، الأرجنتين، الأردن، إسبانيا، استراليا، أفغانستان، ألمانيا، الإمارات العربيّة، وأمريكا.
                            <br/>٥ ـ  <a href="http://www.aqaed.com/book/532/" target="_blank"> موسوعة من حياة المستبصرين ج ٥ </a>
                            تأليف: الشيخ علاء الحسّون، الشيخ صادق الحسّون.
                            ٦٠٠ صفحة، وهو يحتوي على ترجمة مائة وواحد وثلاثين مستبصراً من أندونيسيا، أوزبكستان، أوغندا، إيران، وإيطاليا.
                            <br/>٦ ـ  <a href="http://www.aqaed.com/book/536/" target="_blank"> موسوعة من حياة المستبصرين ج ٦ </a>
                            تأليف: الشيخ علاء الحسّون، الشيخ صادق الحسّون، السيّد مرتضى الشيرازي، الشيخ محمّد مهدي الجواهري.
                            ٥٨٨ صفحة، وهو يحتوي على ترجمة مائة واثنين وثلاثين مستبصراً من باكستان، البحرين، بريطانيا، بلجيكا، بلغاريا، بنغلادش، بنين، بوركينافاسو، بورندي، البوسنة والهرسك، بولندا، بيرو، تايلند، تركمنستان، تركيا، تنزانيا، توغو، وتونس.
                            <br/>٧ ـ  <a href="http://www.aqaed.com/book/555/" target="_blank"> موسوعة من حياة المستبصرين ج ٧ </a>
                            تأليف: الشيخ علاء الحسّون، الشيخ صادق الحسّون، السيّد مرتضى الشيرازي، الشيخ محمّد مهدي الجواهري.
                            ٥٦٥ صفحة، وهو يحتوي على ترجمة سبعة وثمانين مستبصراً من تونس، الجزائر، جزر القمر، افريقيا، روسيا، زائير، ساحل العاج، السعوديّة، والسنغال.
                            <br/>٨ ـ  <a href="http://www.aqaed.com/book/619/" target="_blank"> موسوعة من حياة المستبصرين ج ٨ </a>
                            تأليف: الشيخ علاء الحسّون، السيّد مرتضى الشيرازي، الشيخ محمّد مهدي الجواهري.
                            ٥٥٠ صفحة، وهو يحتوي على ترجمة ثمانية وسبعين مستبصراً من السودان، سوريا، السويد، سويسرا، سيراليون، سيرلانكا، والصين.
                            <br/>٩ ـ  <a href="http://www.aqaed.com/book/624/" target="_blank"> موسوعة من حياة المستبصرين ج ٩ </a>
                            تأليف: الشيخ علاء الحسّون، السيّد مرتضى الشيرازي، الشيخ محمّد مهدي الجواهري.
                            ٦٣٩ صفحة، وهو يحتوي على ترجمة مائة وأربعة عشر مستبصراً من العراق.
                            <br/>١٠ ـ  <a href="http://www.aqaed.com/book/625/" target="_blank"> موسوعة من حياة المستبصرين ج ١٠ </a>
                            تأليف: الشيخ علاء الحسّون، السيّد مرتضى الشيرازي، الشيخ محمّد مهدي الجواهري، السيّد محمّد الرضوي.
                            ٥٧٦ صفحة، وهو يحتوي على ترجمة ثمانين مستبصراً من العراق، عمان، غانا، غويانا، غينيا وكوناكري.
                            واستمر تأليف هذه الموسوعة بعد ذلك في مركز الأبحاث العقائديّة، ثمّ توقّفت عند المجلد الرابع عشر.
                            <br/>١١ ـ <a href="http://www.aqaed.com/book/607/" target="_blank"> موسوعة حديث الثقلين </a> قسم دلالات حديث الثقلين، تأليف: الشيخ علاء الحسّون في مركز الأبحاث العقائدية.
                            طُبع من هذه الموسوعة قسمان:
                            القسم الأوّل: موسوعة حديث الثقلين في مصنفات الإماميّة من القرن الأول إلى القرن العاشر الهجري (مجلدان) <a href="http://www.aqaed.com/book/607/" target="_blank"> (ج ١) </a> و <a href="http://www.aqaed.com/book/608/" target="_blank"> (ج ٢) </a>: تأليف: الشيخ محمّد رضا السلامي.
                            القسم الثاني: <a href="http://www.aqaed.com/book/609/" target="_blank"> موسوعة حديث الثقلين في مصنفات الزيديّة </a> و <a href="http://www.aqaed.com/book/610/" target="_blank"> الأسماعيليّة </a>  من القرن الأول إلى القرن العاشر الهجري (مجلدان): تأليف: الشيخ رافد التميمي.
                            ثمّ توقّف العمل، ولم يؤلّف قسم حديث الثقلين في مصنفات أهل السنّة، ولم يطبع قسم دلالات حديث الثقلين.
                            <br/>١٢ ـ <a href="http://www.aqaed.com/book/462/" target="_blank"> موسوعة الإمام المهدي </a>
                            تأليف: السيّد هاشم الميلاني والشيخ علاء الحسّون في مركز الأبحاث العقائديّة.
                            <br/>١٣ ـ موسوعة الرأى الآخر (٨ مجلدات)، وهي موسوعة تتضمّن جمع وتنظيم أهم الشبهات المطروحة ضدّ مذهب أهل البيت ^، وقد تمّ تأليف هذه الموسوعة في مركز الأبحاث العقائديّة، لتكون المنطلق لعمل المركز في الإجابة على الشبهات العقائديّة، ولم يطبع من هذه الموسوعة سوى عشر دورات قام المركز بتوزيعها بين الجهات المعنيّة والمهتمة بردّ الشبهات فحسب.
                            وكان في طليعة أعضاء اللجنة العلميّة التي قامت بتأليف هذه الموسوعة: السيّد هاشم الميلاني، الشيخ محمّد رضا السلامي، الشيخ علاء الحسّون.<br/><br/><br/><br/><br/>
                        </p>
                    </div>
                )
            }
    }

    return (
        <React.Fragment>
            {/* <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
             */}
            <div className='min-h-screen mt-16'>
                <h1 className='title title-center'>
                    سیرة الذاتیة
                </h1>
                <ul className="justify-center space-x-5 space-x-reverse space-y-3 flex flex-wrap mb-5">
                    <li className={`py-1 px-3 mt-4 rounded-md ${selectedOption == 'a' ? 'about_option_selected' : 'border border-white'}`}><button type="button" onClick={() => {changeContentTo('a')}}>الولادة و النشأة</button></li>
                    <li className={`py-1 px-3 rounded-md ${selectedOption == 'b' ? 'about_option_selected' : 'border border-white'}`}><button type="button" onClick={() => {changeContentTo('b')}}>الدراسة الحوزويّة</button></li>
                    <li className={`py-1 px-3 rounded-md ${selectedOption == 'c' ? 'about_option_selected' : 'border border-white'}`}><button type="button" onClick={() => {changeContentTo('c')}}>الدراسة الجامعيّة</button></li>
                    <li className={`py-1 px-3 rounded-md ${selectedOption == 'd' ? 'about_option_selected' : 'border border-white'}`}><button type="button" onClick={() => {changeContentTo('d')}}>النشاطات العلمیة</button></li>
                    <li className={`py-1 px-3 rounded-md ${selectedOption == 'e' ? 'about_option_selected' : 'border border-white'}`}><button type="button" onClick={() => {changeContentTo('e')}}>المسؤوليات</button></li>
                    <li className={`py-1 px-3 rounded-md ${selectedOption == 'f' ? 'about_option_selected' : 'border border-white'}`}><button type="button" onClick={() => {changeContentTo('f')}}>المؤلفات</button></li>
                    <li className={`py-1 px-3 rounded-md ${selectedOption == 'g' ? 'about_option_selected' : 'border border-white'}`}><button type="button" onClick={() => {changeContentTo('g')}}>الموسوعات</button></li>
                </ul>

                <div className={`flex justify-center wrapper-p my-10 ${fadeOption}`}>
                   {aboutContent()}
                </div>
            </div>

        </React.Fragment>
    )
}
 
export default About;