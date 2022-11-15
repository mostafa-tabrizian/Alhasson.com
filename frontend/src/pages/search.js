import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Helmet } from "react-helmet";

import { log, takeParameterFromUrl } from '../components/base'

const Search = () => {
    const [searchResult_Books, setSearchResult_Books] = useState()
    const [searchResult_Clips, setSearchResult_Clips] = useState()

    useEffect(() => {
        searchQuery()
    }, [])

    const query = takeParameterFromUrl('q')
    const options = { year: 'numeric', month: 'long', day: 'numeric' }

    const searchQuery = async () => {
        await axios.get(`/api/bookView/?slug__icontains=${query}&limits=6`)
            .then(res => {
                setSearchResult_Books(res.data)
            })
        await axios.get(`/api/clip/?slug__icontains=${query}&limits=6`)
            .then(res => {
                setSearchResult_Clips(res.data)
            })
    }

    const returnSearchResult_Books = () => {
        return (
            searchResult_Books?.map(book => {
                return (
                    <article className="hoverGold w-[16rem] max-w-max mr-5 my-3">
                        <Link to={`/books/${book.title_url}`}>
                            <img className='rounded' type='image/webp' src={book?.thumbnail} alt={book?.title} />
                        </Link>
                    </article> 
                )
            })
        )
    }

    const returnSearchResult_Clips = () => {
        return (
            searchResult_Clips?.map(clip => {
                return (
                    <div className='flex space-x-5 space-x-reverse'>
                        <div dangerouslySetInnerHTML={{ __html: clip.source }}></div>
                        <div>
                            <h2>
                                {clip.title}
                                <br />
                                {new Date(clip.date_created).toLocaleDateString('ar-EG', options)}
                            </h2>
                            <h4 dangerouslySetInnerHTML={{ __html: clip.description }}></h4>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <React.Fragment>
            <Helmet>
                <title>‌الحسون |  بحث عن "{query}"</title>
            </Helmet>
            <div className='py-20 wrapper'>
                <h1 className='title title-center'>
                    بحث عن "{query}"
                </h1>
                
                {
                    !searchResult_Books?.length && !searchResult_Clips?.length &&
                    <h1 className='my-[50%] text-center'>لم يتم العثور على شيء</h1>
                }
                
                {
                    searchResult_Books?.length ?
                    <div>
                        <h1>
                            المؤلفات
                        </h1>
                        <div className='p-5'>
                            {returnSearchResult_Books()}
                        </div>
                    </div>
                    :
                    ''
                }

                {
                    searchResult_Clips?.length ?
                    <div className='mt-20'>
                        <h1>
                            المحاضرات
                        </h1>
                        <div className='space-y-5 wrapper'>
                            {returnSearchResult_Clips()}
                        </div>
                    </div>
                    :
                    ''
                }

            </div>
        </React.Fragment>
    );
}
 
export default Search;