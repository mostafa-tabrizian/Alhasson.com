import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Skeleton } from 'antd'

import { log, replaceFunction } from '../components/base'

const Book = () => {
    const [bookDetail, setBookDetail] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getBookDetail()
        setLoading(false)
    }, [])
    
    const getBookDetail = async () => {
        const bookTitleFromUrl = replaceFunction(window.location.pathname.split('/')[2], '-', '+')
        await axios.get(`/api/bookView/?title__icontains=${bookTitleFromUrl}`)
            .then(book => {
                setBookDetail(book.data[0])
            })
    }

    const currentUrl = () => {
        if (bookDetail?.title) {
            return `https://www.alhasson.com/المؤلفات/${bookDetail?.title}}`
        }
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>{bookDetail?.title}</title>
                <meta name="description" content={bookDetail?.description} />
                <meta name="keywords" content={bookDetail?.title} />
                <meta name="msapplication-TileImage" content={bookDetail?.cover} />
                <meta property="og:site_name" content={bookDetail?.title} />
                <meta property="og:title" content={bookDetail?.title} />
                <meta property="og:description" content={bookDetail?.description} />
                <meta property="og:image" content={bookDetail?.cover} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={currentUrl()} />

                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Article",
                            "headline": "${bookDetail?.title}",
                            "image": [
                                "${bookDetail?.cover}",
                            ],
                            "author": {
                                "@type": "Person",
                                "name": "الدکتور الشیخ علاء الحسّون",
                                "url": "https://www.alhasson.com"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "الدکتور الشیخ علاء الحسّون",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://www.alhasson.com"
                                }
                            }
                        }
                    `}
                </script>
            </Helmet>

            <div className="block md:flex wrapper max-w-[75rem] pb-20 pt-10">
                {
                    loading ?
                    <Skeleton active={true} loading={true} />
                    :
                    <React.Fragment>
                        <div className="max-w-[15rem] md:max-w-none">
                            <img className='w-[40rem] rounded md:sticky top-8 mb-5 md:mb-0' alt={bookDetail?.title} src={bookDetail?.cover} />
                        </div>
                        <div className="md:w-[50rem] md:mr-8 mx-4">
                            <h1 className="mt-0 title"> {bookDetail?.title} </h1>
                            <div className="flex space-x-20 space-x-reverse">
                                <div>
                                    <h5 className="">الناشر:</h5>
                                    <h4 className="">{bookDetail?.publisher}</h4>
                                </div>
    
                                <div>
                                    <h5 className="">تاريخ النشر:</h5>
                                    <h4 className="">{bookDetail?.year_published}</h4>
                                </div>
    
                                <div>
                                    <h5 className="">عدد الصفحات:</h5>
                                    <h4 className="">{bookDetail?.pages}</h4>
                                </div>
                            </div>
                            <div className='flex items-center mt-5 space-x-1 space-x-reverse'>
                                {
                                    bookDetail?.word_file &&
                                    <a href={bookDetail?.word_file} target="_blank">
                                        <img alt="word-link" src={"/static/img/icon-word.png"} />
                                    </a>
                                }
                                {
                                    bookDetail?.pdf_file &&
                                    <a href={bookDetail?.pdf_file} target="_blank">
                                        <img alt="pdf-link" src={"/static/img/icon-pdf.png"} />
                                    </a>
                                }
                                {
                                    bookDetail?.html_file &&
                                    <a href={bookDetail?.html_file} target="_blank">
                                        <img alt="html-link" src={"/static/img/icon-html.png"} />
                                    </a>
                                }
                            </div>
                            <br/>
                            <p>
                                <span>هذا الکتاب:</span>
                                <br/>
                                <div dangerouslySetInnerHTML={{ __html: bookDetail?.description }}></div>
                            </p>

                        </div>
                    </React.Fragment>
                }
            </div>
        
        </React.Fragment>
    );
}
 
export default Book;