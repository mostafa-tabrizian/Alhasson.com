import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from 'react-router-dom'
import { ScrollingCarousel  } from '@trendyol-js/react-carousel';
import { Skeleton } from 'antd'
import { replaceFunction } from '../components/base'

const landPage = () => {
    const [books, setBooks] = useState()
    const [clipsData, setClipsData] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getBooks()
        getClipData()
        setLoading(false)
    }, [])
    
    const getBooks = async () => {
        await axios.get(`/api/bookView/`)
            .then(book => {
                setBooks(book?.data)
            })
    }

    const returnBooks = () => {
        return (
            books?.map(book => {
                return (
                    <article className="my-3 mr-5 hoverGold">
                        <Link to={`/books/${replaceFunction(book.title, ' ', '-')}`}>
                            <img className='rounded w-[11rem] md:w-[15rem] max-w-max' type='image/webp' src={book?.thumbnail} alt={book?.title} />
                        </Link>
                    </article>
                )
            })
        )
    }

    const getClipData = async () => {
        await axios.get('/api/clipView/')
            .then(res => {
                setClipsData(res.data)
            })
    }

    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    const returnClipData = () => {
        return (
            clipsData?.map(clip => {
                return (
                    <div className='ml-10'>
                        <div className="mb-5" dangerouslySetInnerHTML={{ __html: clip.source }}></div>
                        <div>
                            <h2>
                                {clip.title}
                                <br />
                                {new Date(clip.date_created).toLocaleDateString('ar-EG', options)}
                            </h2>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>موقع الدکتور الشیخ علاء الحسّون</title>
                <meta name="keywords" content="الدکتور شیخ علاء الحسون, الشیخ علاء الحسون, علاء الحسون, علا تبریزیان, الدکتور شیخ علا الحسون, الشیخ علا الحسون, علا الحسون" />
                <meta name="description" content="دكتوراه في علوم الحديث، ومهتم حالياً بتأليف موسوعة حديث أهل البيت(ع)" />
            </Helmet>

            <div>
                <img className="hidden w-full md:block" src='/static/img/mainBg.jpg' alt="الدکتور-الشیخ-علاء-الحسّون" />
                <img className="block w-full md:hidden" src='/static/img/main-Mobile.jpg' alt="الدکتور-الشیخ-علاء-الحسّون" />
            </div>

            <section className='bg-gradient-to-b py-10 wrapper from-[#0d0735] to-[#070515]'>
                <div className='flex justify-between'>
                    <h1>المؤلفات</h1>
                    <div>
                        <Link className='underlineHover' to='books'>
                            مشاهدة الجمیع
                        </Link>
                    </div>
                </div>
                <div className='p-5'>
                {
                    loading ?
                    <div className='flex gap-8 wrapper'>
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                    </div>
                    :
                    <ScrollingCarousel>
                        {returnBooks()}
                    </ScrollingCarousel>
                }
                </div>
            </section>

            <section className='bg-gradient-to-b py-10 wrapper from-[#070515] to-[#0d0735]'>
                <div className='flex justify-between'>
                    <h1>المحاضرات</h1>
                    <div>
                        <Link className='underlineHover' to='lectures'>
                            مشاهدة الجمیع
                        </Link>
                    </div>
                </div>
                <div className='p-5'>
                    {
                        loading ?
                        <div className='flex gap-8 wrapper'>
                            <Skeleton.Avatar active={true} size={300} shape={'default'} loading={true} />
                            <Skeleton.Avatar active={true} size={300} shape={'default'} loading={true} />
                            <Skeleton.Avatar active={true} size={300} shape={'default'} loading={true} />
                        </div>
                        :
                        <div className='flex flex-wrap'>
                            {returnClipData()}
                        </div>
                    }
                </div>
            </section>

            <section className='bg-gradient-to-b to-[#070515] from-[#0d0735] pb-20 flex justify-center'>
                <div className="grid space-y-10 md:flex wrapper-p">
                    <div className="flex justify-center ml-5 ">
                        <img className="w-[15rem] md:w-[60rem] rounded-lg" src="/static/img/marefe.jpg" alt="الدکتور-الشیخ-علاء-الحسّون" />
                    </div>
                    <div className="">
                        <div className='rightBorder'>
                            <h1 className='colorPr'>
                                التعريف بمشروع إحياء حديث أهل البيت
                                <span className="hadithTextSalam">
                                    (علیهم السلام)
                                </span>
                            </h1>
                            <p>
                                يستهدف هذا المشروع عرض معلومات حديث أهـل البيـت (علیهم السلام) وفـق منهجية خـلق الصـور المعرفية الشامـلة والمــتكاملة عن طـريق تـنظيـم المقـاطع الجزئيـة المترابـطة التي بيّـنها أهل البيـت (علیهم السلام) في مختلف المواضيع.
                                <button className='flex justify-end w-full colorPr'>
                                    <Link to="hadith-ahl-al-bayt" className="more_p3 pos-abs">للمزید ...</Link>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}

export default landPage;