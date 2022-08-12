import React, { useState } from 'react'
import { Helmet } from "react-helmet";

import { isItMobile, isItDesktop } from '../components/base'

const HadithProject = () => {
    const [bookmark, setBookmark] = useState(false)

    return (
        <React.Fragment>
            <Helmet>
                <title>‌الحسون | موسوعة حدیث أهل البیت</title>
            </Helmet>
            <div className='pt-10 pb-20 mt-10 md:mt-0'>
                <button
                    className='md:hidden fixed p-2 bg-[#0d0735] rounded-lg'
                    onClick={() => bookmark ? setBookmark(false) : setBookmark(true)}
                >
                    <svg class="h-12 w-12 text-[#e0bd87]"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2" /></svg>
                </button>

                <div className={`${bookmark && isItMobile() || isItDesktop() ? 'translate-x-0' : 'translate-x-[120%]'} transition-transform duration-500 ease-in-out flex flex-col fixed p-6 mr-6 mt-20 md:mt-0 rounded-lg leading-8 bg-gradient-to-tr from-[#3e328b] to-[#0d0735]`}>
                    <h5 className="">الفهرس</h5>
                    <a href="#1">التعريف بمشروع</a>
                    <a href="#2">مراحل عمل</a>
                    <a href="#3">طريقة تنظيم بطاقات</a>
                    <a href="#4">مجال استثمار بطاقات</a>
                </div>

                <div className="wrapper-p">
                    <h1 className='pr-12 md:pr-0' id="1">التعريف بمشروع إحياء حديث أهل البيت (علیهم السلام) </h1>
                    <p>مرّ حديث أهل البيت (علیهم السلام) بعد صدوره بمراحل ازدهار، ومراحل ركود، وأبرز مراحل الازدهار التي شهدها الحديث بعد عصر حضور الأئمّة (علیهم السلام) عبارة عن:</p>
                    <p>المرحلة الأُولى: مرحلة ظهور الجوامع الأوّليّة للحديث، وهي المرحلة التي شارك فيها العديد من المحدّثين والعلماء، أبرزهم: الشيخ الكليني  (ت ٣٢٩ هـ)، والشيخ الصدوق  (ت ٣٨١ هـ)، والشيخ الطوسي  (ت ٤٦٠ هـ)، وذلك عن طريق تدوين الجوامع الحديثيّة المعروفة.</p>
                    <p>المرحلة الثانيّة: مرحلة تدوين الجوامع الثانويّة للحديث، حيث عاد النشاط في هذه المرحلة مرّة أُخرى إلى تصنيف الحديث والاهتمام به، وازدهرت فيه مصنّفات الحديث على يدّ العلّامة الملّا محمّد محسن فيض الكاشاني  (ت ١٠٩١ هـ)، والعلّامة محمّد بن الحسن الحرّ العاملي  (ت ١١٠٤ هـ)، والعلّامة محمّد باقر المجلسي  (ت ١١١١ هـ).</p>
                    <p>ويُعدّ سرّ نجاح مرحلة تدوين الجوامع الأوّليّة هو الاهتمام بتقطيع الأحاديث وتنظيمها وتبويبها الموضوعي، وسرّ نجاح مرحلة تدوين الجوامع الثانويّة هو شموليّتها، وابتكار الطرق الجديدة في عرضها.</p>
                    <p>ولو تأمّلنا فإنّنا نرى إمكانيّة تطوير نجاح هاتين المرحلتين لإبداع مرحلة جديدة، تُوفّر الأجواء والأرضيّة المناسبة لتوسيع دائرة تلقّي العلم والمعرفة من حديث أهل البيت (علیهم السلام).</p>
                    <p>وهذا ما تسعى إليه هذه المنهجيّة الجديدة التي تعتمد في مختلف المجالات العلميّة على طريقة تقطيع وتنظيم المعلومات لخلق الصور المعرفيّة الشاملة من حديث أهل البيت (علیهم السلام).</p>
                    <p>وتُعدّ طريقة (التقطيع) من الطرق المتعارفة التي اتّبعها جميع المحدّثين في مصنّفاتهم الحديثيّة، وهي عبارة عن: «تقطيع المصنّف الحديث الواحد في مصنَّفه، بأن يُفرّقه على الأبواب اللائقة به للاحتجاج المناسب في كلّ مسألة، مع مراعاة ما سبق من تماميّة معنى المقطوع، وقد فعله أئمّة الحديث منّا ومن الجمهور، ولا مانع منه» [مقباس الهداية ٢: ٣٠٠].</p>
                    <p>والفرق بين (التقطيع) المتّبع في هذه الموسوعة عن غيره، أنّ المحدّثين القدماء والمعاصرين قاموا بالتقطيع الكلّي، وتبديل المقطع الكبير من كلام أهل البيت (علیهم السلام) إلى أحاديث مختلفة، وجعل كلّ حديث في الباب الخاص به، لكنّ المنهجيّة المتّبعة هنا هي التقطيع الجزئي، بحيث يقتصر المقطع الواحد على موضوع وحكم واحد، مع اشتماله على أقلّ قدر ممكن من المتعلّقات والتوابع، ثمّ يتبع ذلك تنظيم وترتيب هذه المقاطع بصورة مترابطة ومنسجمة حسب المواضيع الفرعيّة.</p>
                    <p>وما تمتاز به هذه المنهجيّة أنّها تُقدّم للقارئ الصور المعرفيّة الواضحة من خلال تقطيع وتنظيم الأجزاء المترابطة من حديث أهل البيت (علیهم السلام) حول الموضوع الفرعي الواحد، من أجل الوصول إلى الصورة العلميّة المتكاملة المرتبطة بذلك الموضوع.</p>
                    <h1 id="2">مراحل عمل موسوعة حديث أهل البيت (علیهم السلام)</h1>
                    <h2 id="2-1">المرحلة الأُولى: إعداد مكتبة الحديث الورقيّة </h2>
                    <p>تمّ في هذه المرحلة إعداد مكتبة تخصّصيّة تضمّنت جميع مصنّفات الشيعة المطبوعة من حديث أهل البيت (علیهم السلام)، مع التأكيد على اقتناء الطبعات المحقّقة. </p>
                    <p>وعدد المصادر التي جُمعت في هذه المكتبة هو ٢١٢ مصدراً مطبوعاً في ٣٢٥ مجلّداً، وقد أوردت أسماء هذه المصادر في «فهرس مصادر الموسوعة» المذكور في نهاية هذا المجلد. </p>
                    <h2 id="2-2">المرحلة الثانيّة: إعداد مكتبة الحديث الإلكترونيّة</h2>
                    <p>تمّ في هذه المرحلة إعداد مكتبة إلكترونيّة تضمّنت جميع ملفّات المصنّفات التي أشرنا إليها في المرحلة السابقة بصيغة وورد، وذلك عن طريق تحميلها من مواقع الإنترنت أو القیام بطباعتها عند عدم العثور على ملفّاتها المطلوبة، ثمّ مقابلة المطبوع مع الكتاب الورقي للاطمئنان من صحّة الطباعة.</p>
                    <h2 id="2-3">المرحلة الثالثة: تحديد الأحاديث المكرّرة</h2>
                    <p>تمّ في هذه المرحلة تحديد الأحاديث المكرّرة؛ ليُقتصر العمل في المراحل اللاحقة على الأحاديث غير المكرّرة؛ لأنّ المنهجيّة التي اتّبعتها الموسوعة في ذكر المصادر هي الاعتماد على أقدم مصدر لكلّ حديث، ما عدا كتاب الكافي حيث تمّ تقديمه على جميع المصادر، كما تمّ في بعض الأحيان ترجيح بقيّة الكتب الأربعة وهي كتاب من لا يحضره الفقيه والتهذيبين على سائر الكتب الأخرى.</p>
                    <p>وهذا ما استدعى القيام في بداية العمل بتحديد الأحاديث المكرّرة، ليتمّ القيام خلال العمل بتقطيع كلّ حديث مرّة واحدة من المصدر الأقدم، والتجنّب من تقطيع الحديث الواحد عدّة مرّات في المصادر المتأخّرة.</p>
                    <p>وقد أُنجزت هذه العمليّة عن طريق برنامج جامع الأحاديث التابع لمركز البحوث الكمبيوتريّة للعلوم الإسلاميّة، وكانت الخطوة الأُولى في بداية هذا العمل هي القيام بتحديد نطاق البحث في البرنامج، وجعل النطاق محدوداً بالمصادر التي تكون أقدم من المصدر الذي يريد الباحث تحديد أحاديثه المكرّرة، ومبادرة الباحث بعد ذلك إلى البحث عن كلّ حديث من أحاديث الكتاب الذي بين يديه بالترتيب؛ لمعرفة الأحاديث المكرّرة من غيرها.</p>
                    <p>وتكون دائرة البحث في الأحاديث الطويلة أوسع من الأحاديث القصيرة، فلا يقتصر فيها البحث على عبارات محدودة، بل يشمل مختلف عبارات الحديث من أوّله إلى آخره، ليطمئنّ الباحث من دقّة عمله في تمييز الأحاديث المكرّرة عن غيرها.</p>
                    <p>والحالات التي يمكن تصوّرها عند البحث عن كلّ حديث في نطاق البحث لا تخلو من ثلاث حالات:</p>
                    <p>أن يكون الحديث المبحوث عنه موجوداً بعينه في المصادر السابقة، فيقوم الباحث بوضع علامة له تدلّ على أنّه من الأحاديث المكرّرة.</p>
                    <p>أن يكون الحديث المبحوث عنه غير موجود في المصادر السابقة، فيتبيّن أنّه ليس من الأحاديث المكرّرة، فيُترك على حاله لتجري عليه المراحل اللاحقة من العمل.</p>
                    <p>أن يكون الحديث المبحوث عنه موجوداً، ولكن مع اختلافات ـ ولو جزئيّة ـ بينه وبين الحديث المذكور في المصدر السابق، فتسجّل هذه الاختلافات بدقّة ليتمّ لحاظها في المراحل اللاحقة من العمل.</p>
                    <h2 id="2-4">المرحلة الرابعة: تقطيع الأحاديث </h2>
                    <p>تمّ في هذه المرحلة القيام بالتقطيع الدقيق والجزئي لجميع الأحاديث، وتبديلها إلى مقاطع وفقرات وجمل مفيدة.</p>
                    <p>ومن أهمّ الأُمور التي حاولت مراعاتها في هذه المرحلة أن لا يكون المقطع المأخوذ من الحديث متعلّقاً بما قبله أو بما بعده تعلّقاً يؤدّي قطعه إلى الإخلال بالمعنى، أو الاختلال في السياق، أو الاختلاف في المفهوم، أو الإخفاء للمدلول، أو التغيير في المقصود، أو حذف أسباب الصدور، أو ضياع القرائن المؤثّرة في المعنى، وكما لا يخفى بأنّ بعض الأحاديث مقطّعة بذاتها؛ لأنّها مشتملة على جمل متعدّدة لا تعلّق لإحداها بالأُخرى، فيكون التقطيع في هذه الحالة تقطيعاً بين ما كان من البداية بمنزلة عبارات منفصلة، ومواضيع مختلفة، ومعان متغايرة، وأخبار لا علاقة لأحدها بالأخرى. </p>
                    <p>وتمّ بعد الانتهاء من تقطيع كلّ حديث وضع علامة التنصيص «» لكلّ مقطع من أجل الإشارة إلى أنّه مأخوذ من نصّ الحديث من دون أيّ تغيير.</p>
                    <p>وقد تطلّب الأمر بعض الأحيان القيام بحذف كلمة أو كلمتين أو كلمات من وسط مقطع الحديث، فوُضعت ثلاث نقاط (...) بدل ذلك، للإشارة إلى وقوع هذا الحذف، وقد وضعت هذه النقاط أيضاً في بداية المقطع أو نهايته للدلالة على أنّ للمقطع بداية أو تكملة لم تُذكر في المقام.</p>
                    <p>وذُكر في ذيل كلّ مقطع مصدره الكامل وفق الطريقة المتعارفة المتضمّنة لاسم الكتاب، ورقم الصفحة، واسم المؤلّف عند تطلّب الأمر، ورقم الجزء، والفصل، والباب، والحديث عند وجود الرقم، وعنوان الفصل والباب عند استدعاء الأمر.</p>
                    <p>وأُشير في نهاية المصدر إلى صلة المقطع بالمعصوم بين قوسين، كالأمثلة التالية:</p>
                    <p>مثال: (الإمام علي (علیه السلام))، الدالّ على أنّ المقطع من قول الإمام علي (علیه السلام).</p>
                    <p>مثال: (تقرير الإمام علي (علیه السلام))، الدالّ على أنّ المقطع ليس من قول الإمام علي (علیه السلام)، بل هو قول غيره، وقد قرّره (علیه السلام).</p>
                    <p>مثال: (فعل الإمام علي (علیه السلام))، الدالّ على أنّ المقطع من كلام الراوي، وأنّه يتضمّن بيان فعل الإمام علي (علیه السلام)، وقد يرد ضمن المقطع كلام الإمام علي (علیه السلام) أو كلام معصوم آخر، لكن حيث كانت بداية المقطع من كلام الراوي، فلهذا أُشير إلى المقطع بأنّه من فعل الإمام (علیه السلام)؛ لئلّا يُوهم أوّله بأنّه من كلام المعصوم.</p>
                    <p>مثال: (أهل البيت (علیهم السلام))، الدالّ على أنّ المقطع من قول المعصوم، ولكنّه مأخوذ من حديث مُضمر لم يُذكر فيه اسم المعصوم.</p>
                    <p>لم يُذكر في نهاية بعض المصادر اسم المعصوم لوضوح ذلك، من قبيل: الصحيفة السجّاديّة، ونهج البلاغة، ومناجاة مولانا أمير المؤمنين (علیه السلام) إن لم يكن المقطع فيه منقولاً عن رسول الله ’.</p>
                    <h2>المرحلة الخامسة: تبيين معاني المفردات الصعبة</h2>
                    <p>تمّ في هذه المرحلة تبيين معاني المفردات التي احتملتُ استعصاء فهمها على بعض القرّاء، أو إشكال معرفة معناها عليهم.</p>
                    <p>واستُخرجت هذه المعاني من أهمّ معاجم اللغة العربيّة، ولاسيّما معجم العين، للخليل بن أحمد الفراهيدي (ت ١٧٠ هـ)؛ لقدم هذا المعجم، وقربه من زمن صدور الأحاديث، ومعجم مجمع البحرين، للشيخ فخر الدين الطريحي (ت ١٠٨٥ هـ)، لاهتمام هذا المعجم بتبيين معاني مفردات أحاديث أهل البيت (علیهم السلام)، وقد وصفه المؤلّف في المقدّمة بأنّه: «کتاب کافٍ شافٍ یرفع عن غریب أحادیثنا أستارها، ویدفع عن غیر الجلي منها غبارها».</p>
                    <h2>المرحلة السادسة: عَنونة المقاطع </h2>
                    <p>تمّ في هذه المرحلة كتابة عناوين الموضوعات المرتبطة بكلّ مقطع، وكانت الحالة الغالبة لكلّ مقطع تضمّنه لعدّة عناوين، فكُتبت جميع هذه العناوين فوق المقطع.</p>
                    <h2>المرحلة السابعة: تقويم نصّ المقاطع </h2>
                    <p>يكون تقويم النصّ بشكل عامّ بعد الانتهاء من عمليّة التأليف عادةً، ولكن تمّ في هذه الموسوعة القيام بتقويم نصّ مقاطع الحديث في هذه المرحلة، ثمّ القيام بتقويم نصّ بقيّة النصوص في المرحلة النهائية؛ لأنّ المقطع الواحد من الحديث سيتمّ نسخه بعد هذه المرحلة، وجعله في عدّة بطاقات بحسب عدد عناوين المقطع، فإن لم يُقوّم نصّ المقطع في هذه المرحلة، فإنّ ذلك سيستلزم القيام لاحقاً بتقويم نصّه عدّة مرّات في البطاقات الموزّعة حسب مختلف المواضيع.</p>
                    <p>وحيث إنّ المقاطع التي يُقوّم نصّها في هذه المرحلة مأخوذة من حديث أهل البيت (علیهم السلام)، ولا يمكن إجراء أيّ تغيير عليها، كان تقويم النصّ ـ في هذه المرحلة ـ هو الاقتصار على القيام بالموارد التالية: </p>
                    <p>أوّلاً: علامات التشكيل: وهي عبارة عن علامات تُرسم فوق الحروف أو تحتها؛ من أجل تبيين طريقة نُطقها بشكل صحيح، وتُسمّى أيضاً بعلامات الإعراب، وهي من قبیل:</p>
                    <p>الحركات، وهي الفتحة والضمّة والكسرة، ويُضاف إليها السكون، كما أنّ الحركة لا تظهر على كلّ معرب، فتظهر بعض الأحیان على شکل علامات إعراب كالواو أو الألف أو الياء، أو حذف النون أو حذف حرف العلّة.</p>
                    <p>التنوين، وهو تنوين الضمّ، وتنوين الفتح، وتنوين الكسر، وغير ذلك من العلامات التفصيليّة المرتبطة بهذا المجال فيما لو كان الحرف الأخير لا يقبل التنوين، أو ممنوعاً من الصرف مثلاً.</p>
                    <p>الضوابط، وهي الشدّ والمدّ والوصل والقطع.</p>
                    <p>وبطبيعة الحال لم تُوضع هذه العلامات في هذه الموسوعة على جميع الحروف، وإنّما تمّ الاكتفاء بالموارد الضروريّة، والموارد المتعارفة للقارئ الذي يجيد اللغة العربيّة.</p>
                    <p>ثانياً: علامات الترقيم: وهي عبارة عن علامات غير منطوقة ومتّفق عليها، توضع في أثناء الكتابة بين الكلمات والجمل أو في آخرها؛ من أجل تنظيم النصّ المكتوب، وتسهيل فهمه على القارئ، وتيسير قراءته، وأبرز هذه العلامات: </p>
                    <p>علامات الوقف، وهي: الفاصلة (الفارزة) (،)، الفاصلة المنقوطة (؛)، الخطّ المائل (/)، والنقطة (.).</p>
                    <p>علامات التعبير: وهي النقطتان الرأسيتان (:)، الشارحة الواحدة (ـ)، علامة الحذف (...)، علامة الاستفهام (؟)، علامة التعجّب (!).</p>
                    <p>علامات الحصر، وهي: القوسان (())، المعقوفتان ([])، علامة التنصيص («»)، الشارحتان (ـ ـ).</p>
                    <h2>المرحلة الثامنة: إعداد البطاقات</h2>
                    <p>تمّ في هذه المرحلة توزيع العناوين المتعدّدة على المقطع الواحد، عن طريق استنساخ المقطع والمصدر في برنامج الوورد، وإلصاقه تحت كلّ واحد من العناوين المكتوبة أعلاه، لتكون النتيجة الحصول على بطاقات مستقلّة، تتضمّن كلّ واحدة منها: العنوان والمقطع والمصدر. </p>
                    <h2>المرحلة التاسعة: الفرز الموضوعي للبطاقات</h2>
                    <p>تمّ في هذه المرحلة طباعة البطاقات على الورق، ثمّ رُتّبت على ضوء عناوينها حسب الحروف الألفبائيّة، ثمّ وُضِعت كلّ مجموعة مرتبطة بعنوان واحد في ملفّ أو ملفّات خاصّة بها، كما رُتّبت هذه الملفّات أيضاً حسب الحروف الألفبائيّة، ووضعت في القفصات الخاصّة بها، لتُرتّب لاحقاً حسب العناوين الكلّيّة التي تتضمّن العديد من العناوين الفرعيّة.</p>
                    <p>وترتيب الحروف الألفبائيّة عبارة عن: ء (الهمزة)، آ (الألف الممدودة)، ا (الألف)، ى (الألف المقصورة)، ب (الباء)، ت (التاء المفتوحة)، ة (التاء المربوطة)، ث (الثاء)، ج (الجيم)، ح (الحاء)، خ (الخاء)، د (الدال)، ذ (الذال)، ر (الراء)، ز (الزاي)، س (السين)، ش (الشين)، ص (الصاد)، ض (الضاد)، ط (الطاء)، ظ (الظاء)، ع (العين)، غ (الغين)، ف (الفاء)، ق (القاف)، ك (الكاف)، ل (اللام)، م (الميم)، ن (النون)، هـ (الهاء)، و (الواو)، ي (الياء).</p>
                    <h2>المرحلة العاشرة: تنظيم البطاقات</h2>
                    <p> قُمت في هذه المرحلة ـ بعد تحديد موضوع معرفة الله على سبيل المثال ـ بتحديد العناوين الثانويّة، وتقسيم البطاقات حسب ذلك، ثمّ قُمت بعد الحصول على العديد من المجموعات المقسّمة حسب العناوين الثانويّة بتحديد العناوين الفرعيّة الأُخرى لكلّ مجموعة، وقسّمتها حسب ذلك أيضاً، وقد تَطلّبت بعض العناوين تحديد العديد من العناوين الفرعيّة لها، وتقسيمها حسب ذلك. </p>
                    <p>وقُمت بعد تحديد العناوين الفرعيّة بتنظيم البطاقات المرتبطة بكلّ مجموعة بصورة منطقيّة وفنّيّة تُساعد القارئ على تلقّي المعلومات بكلّ سهولة، وليجد القارئ أمامه بعد تنظيم البطاقات صوراً معرفيّة متكاملة تتجلّى كتجلّي الصورة في الصور المقطّعة التي يقوم فيها الفرد بوضع كلّ قطعة منها في المكان الصحيح والمناسب لها، ويحاول ربط جميع الأجزاء المنفصلة، وتركيب القطع المتناثرة؛ لتجتمع اللوحة المفكّكة، ويعاد تكوينها وتشكيلها وتراصّها، فتكتمل الصورة النهائيّة، وتتجلّى حقيقتها، ويظهر جمالها من خلال تنظيم هذه القطع التركيبيّة المتفرّقة التي قد ساهم كلّ جزء منها في دعم وإثراء هذه اللوحة الكاملة.</p>
                    <p>وتمّ ـ في أكثر الأحيان ـ كتابة مضمون المقطع قبله بشكل ينسجم مع العنوان المختار لتلك المجموعة من البطاقات، ليسهل على القارئ الإلمام بالمعلومات التي يتضمّنها المقطع، ويجدها أمامه بنسق وترتيب موحّد من دون الحاجة إلى استخراج المعلومة من المقاطع التي تتضمّن المعلومات المرتبطة بالموضوع الواحد بأشكال مختلفة.</p>
                    <p>وأضفتُ ـ بعض الأحيان ـ مصدراً آخر لبعض المصادر في البطاقات خلال عمليّة التنظيم؛ لأنّ منهجيّة الموسوعة ـ كما أشرت إلى ذلك سابقاً ـ هي الاعتماد على المصدر الأقدم تقريباً، وقد يتضمّن هذا المصدر بعض نقاط الضعف، فيتطلّب تقويته.</p>
                    <p>ومن هذه الموارد أن يكون المصدر الأقدم غير معروف، فيُضاف له أوّل مصدر معروف يأتي من بعده، فتؤدّي هذه الإضافة إلى دعم المصدر السابق، أو أن يكون المصدر الأقدم مأخوذاً من حديث مضمر، فيضاف له أوّل مصدر غير مضمر عند العثور عليه من بين المصادر اللاحقة، فتكون هذه الإضافة سبباً في رفع نقص المصدر الأقدم. </p>
                    <p>ویُکتب أحیاناً قبل المصدر المضاف کلمة (انظر:) للدلالة على وجود اختلاف قليل وجزئي عند مقارنته مع المقطع الموجود في المصدر الأوّل.</p>
                    <p>ولم أتّبع الطريقة السائدة في ذكر عبارة (نفس المصدر)، أو (المصدر السابق) عندما يكون المصدر مشابهاً للمصدر السابق؛ لأنّ الكتاب سينشر في مختلف البرامج أوالمواقع الإلكترونيّة، وقد يبتغي الباحث نسخ مقطع دون قبله، فيشمل النسخ للمقطع ومصدره، ولا يستدعي منه الأمر إصلاح المصدر عند كتابة عبارة (نفس المصدر السابق).</p>
                    <h1 id="3">طريقة تنظيم بطاقات موضوع معرفة الله</h1>
                    <p>كُتبت عناوين البطاقات المرتبطة بموضوع معرفة الله من البداية على شكل (الله/عنوان الموضوع)، وتمّ بعد فرز البطاقات حسب العناوين، القيام بتقسيم المواضيع حسب الحروف الألفبائيّة، فكانت ما يقارب ٣٠٠٠ موضوعاً، بيّنت ٢٥٦٥ موضوعاً منها في فهرس الموضوعات في نهاية هذا المجلد، والبقيّة ترتبط بصفات الله التنزيهيّة التي سيتمّ تبيينها في نهاية هذه الدورة المرتبطة بمعرفة الله إن شاء الله.</p>
                    <p>ورأيت بعد فرز البطاقات بأنّ أفضل طريقة لترتيب هذه الموضوعات عند عرض معلوماتها في الموسوعة هو التسلسل حسب الحروف الألفبائيّة، وسيكتب في عطف كلّ مجلد من هذه المجلدات الموضوع الأوّل الذي يبدأ به ذلك المجلد.</p>
                    <p>ورأيت خلال ترتيب المواضيع أنّ بعضها مرتبطة بأفعال الله، وهي المعنونة على شكل مصدر الفعل الموجود في الحديث، مشتركة في (المادّة) ومختلفة في (الهيئة)، فارتأيت أولوية الجمع بين هذه الأفعال في موضوع واحد عند اشتراكها في المعنى وعدم تركها لتتناثر حسب ترتيب الحروف الألفبائيّة، فاستدعى الأمر اختيار موضوع أصلي ومواضيع فرعيّة من بين هذه المواضيع، فجعلتُ الملاك في تحديد الموضوع الأصلي هو الموضوع الأكبر حجماً من ناحية عدد البطاقات، وإرجاع المواضيع الفرعيّة الأُخرى إليه، كما يكون تسلسل المواضيع الفرعيّة بعد الموضوع الأصلي أيضاً حسب عدد بطاقاتها، فيُقدّم الموضوع ذو البطاقات الأكثر على الموضوع ذي البطاقات الأقل.</p>
                    <p>وذكرت في هامش كلّ موضوع أصلي الموضوع أو المواضيع الفرعيّة التي يتضمّنها نتيجة الاشتراك في المادّة، كما بيّنت ذلك بشكل مفصّل في فهرس إرجاعات مواضيع معرفة الله المذكور في نهاية هذا الجزء.</p>
                    <h2>المرحلة الحادية عشرة: الطباعة </h2>
                    <p>يتمّ في هذه المرحلة طباعة الكتاب المتشكّل من البطاقات التي تمّ تنظيمها وترتيبها، وهذه البطاقات هي التي سُحبت على الورق في المراحل السابقة، ولكنّها أصبحت حالياً بصورة منظّمة ومرتّبة ومتضمّنة لكتابات يدويّة تشتمل على العناوين الفرعيّة والكتابات المقتبسة من الحديث في بداية أكثر المقاطع، فيقوم الطبّاع بطباعة الكتابات اليدويّة، والبحث عن نصّ المقاطع في الملفّات المطبوعة سابقاً لنسخها وإلصاقها في محلّها.</p>
                    <h2>المرحلة الثانية عشرة: المقابلة </h2>
                    <p>وهي من أساليب التدقيق، وتعني: المقارنة بين المطبوع والبطاقات الورقيّة، وتتابع الفروق وموارد الاختلاف بينهما من أجل تصحيح المطبوع لاحقاً.</p>
                    <h2>المرحلة الثالثة عشرة: التدقيق اللغوي </h2>
                    <p>يتمّ في هذه المرحلة تقويم نصّ العبارات التي أضيفت إلى البطاقات في مرحلة التنظيم، وأمّا مقاطع الحديث فقد تمّ تقويم نصّها سابقاً. </p>
                    <p>ويتضمّن التدقيق اللغوي في هذه المرحلة إعادة النظر والفحص الدقيق والمتكرّر للنصوص المكتوبة من أجل التأكّد من سلامتها اللغويّة من ناحية الصرف والنحو والإملاء، والأخطاء المطبعيّة، والتأكّد من سلامة استخدام علامات التشكيل، وعلامات الترقيم، مع الإشارة إلى مواطن ضعف بعض العبارات، ليعيد المؤلّف النظر فيها، ويقوم بإعادة صياغتها.</p>
                    <h2>المرحلة الرابعة عشرة: المراجعة النهائية</h2>
                    <p>يتمّ في هذه المرحلة المراجعة الأخيرة للكتاب بنظرة شمولية ولحاظ جميع جوانب العمل، ولا يخفى أنّ المراجعة للعمل تكون مستمرة في جميع مراحل العمل، وتتكرّر من المؤلّف بين الحين والآخر؛ من أجل رفع مستوى العمل، وإنّما تكون المراجعة النهائيّة للعمل بمثابة إلقاء النظرة الأخيرة للكتاب قبل النشر؛ للتأكّد النهائي والاطمئنان من سلامة الصورة الكلّيّة للعمل.</p>
                    <p>ويتبع هذه المراحل إرسال الكتاب للنشر بعد إخراجه الفنّي، وإعداد الغلاف المناسب له؛ ليأخذ طريقه بعد ذلك إلى الطباعة والنشر والتوزيع بأوسع نطاق ممكن في دور النشر المختلفة في أنحاء العالم.</p>
                    <h1 id="4">مجال استثمار بطاقات حديث أهل البيت (علیهم السلام)</h1>
                    <h2>المجال الأوّل: طريقة التنظيم</h2>
                    <p>تعتمد هذه الطريقة على تنظيم البطاقات وفق المنهجيّة المتّبعة في هذا الكتاب، والمتوقّع تصنيف عشرات المجلّدات بهذه الطريقة ـ إن شاء الله ـ في مختلف المواضيع العقائديّة، الفكريّة، الأخلاقيّة، التربويّة، الثقافيّة، الفقهيّة، وغيرها من المواضيع التي بيّنها أهل البيت (علیهم السلام) في أحاديثهم.</p>
                    <h2>المجال الثاني: طريقة التأليف</h2>
                    <p>يكون العمل في هذا المجال عن طريق كتابة عبارات تتشكّل فقراتها من مقاطع كلام أهل البيت (علیهم السلام)، وهي المقاطع التي تكون متوفّرة بين يدي الباحث على شكل تطبيق كمبيوتري مخصّص لهذا العمل، بحيث تُتيح له إمكانيّة العثور على البطاقات التي يحتاج إليها في تكميل بحثه.</p>
                    <p>ومجال التأليف واسع عن هذا الطريق، ويمكن ذلك على شكل مقالات أو إجابة عن مختلف الأسئلة، فيقوم الباحث بكتابة المقال أو الإجابة عن السؤال عن طريق صياغة العبارات المأخوذة من أحاديث أهل البيت (علیهم السلام) حول الموضوع المرتبط بالبحث الذي يبتغي الكتابة فيه، ونموذج ذلك النص التالي الذي ألّفته من ٧٢ مقطعاً أخذتها نصّاً أو اقتباساً من عشرات الأحاديث الواردة عن أهل البيت (علیهم السلام) في مختلف كتب الحديث:</p>
                    <p>إنّ الأئمّة (علیهم السلام) مواضع معرفة الله، ولسان توحيد الله، والدليل للعباد على الله، بهم نهج الله سبيل الدلالة عليه، فأقامهم دلائل على توحيده، وجعلهم سبيله الذي مَن سلكه وصل إليه تعالى؛ وذلك لأنّ الله اختارهم وانتجبهم وارتضاهم واصطفاهم وانتقاهم، ليكونوا حججه وأُمناءه وسفراءه وتراجمة أمره ولسانه الناطق في خلقه، وبابه الذي لا يُؤتى إلّا منه، فأعلى بهم كلمته، وأقامهم عَلَماً لعباده، ومناراً في بلاده.</p>
                    <p>ومن هذا المنطلق أودعهم الله علمه، وأحصى فيهم علم كلّ شيء، بل اختصّهم من خالص علمه، وائتمنهم على سرّه، ولم يحجب عنهم خبر السماء، وأعلمهم بكلّ ما علّمه ملائكته وأنبياءه ورسله (علیهم السلام)، وجعلهم أُمناءه على ما أهبط من علم، ومكّنهم بالعلم بعد رسوله ’، فأخذوا علم الرسول ’، وأصبحوا ورثة علمه، بل ورثة علم الأوّلين والآخرين، وأصبحوا باب علم الله، وحملة علم الله، ومعدن علم الله، وخزنة علم الله، وحفظة علم الله، ومستقرّ علمه تعالى.</p>
                    <p>ولمّا آتاهم الله العلم نصبهم هداة لخلقه، وجعلهم نوره الزاهر، المضيء المبين الذي يخرق به الظُلَم، وينقذ به الناس من الجهل والضلالة، فهم نور لمَن تبعهم، ونور لمَن اقتدى بهم، وهم النور الذي أمرنا الله باتّباعه، فمَن جهلهم جهل الله، ومَن لم يعرفهم كان كمَن مثله في الظلمات ليس بخارج منها.</p>
                    <p>ومن هنا أصبح الحقّ معهم وفيهم ومنهم وإليهم، وأصبحت لهم راية الحقّ، مَن تمسّك بها نجا، ومَن تخلّف عنها هلك؛ ولهذا أوجب الله ولاية الأئمّة (علیهم السلام)، وأمر بمعرفتهم، والردّ إليهم والتسليم لهم، والاقتداء بهم، وكلّفنا الاستمساك بعروتهم واتّباع منهجهم. </p>
                    <p>وهذا ما يُحتّم على مَن يبتغي معرفة الله الرجوع إليهم (علیهم السلام)؛ لأنّهم أركان توحيد الله، والسبيل الوحيد إلى الله، وقادة العباد إلى الله، والدلائل على ما يُستدلّ بوحدانيّته تعالى، وأبواب الله بينه عزّ وجلّ وبين خلقه، مَن عَرفهم عرف الله، وبهم نتوجّه إلى معرفة الله، بل لا يُعرف الله إلّا عن طريق معرفتهم، ولولاهم ما عُرف الله، بل لا يَهتدي هادٍ إلّا بهداهم.</p>
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default HadithProject;