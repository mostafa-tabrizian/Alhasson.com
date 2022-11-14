import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Skeleton } from 'antd'
import { replaceFunction } from '../components/base'
import { Helmet } from "react-helmet";

const Books = () => {
    const [books, setBooks] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getBooks()
        setLoading(false)
    }, [])
    
    const getBooks = async () => {
        await axios.get(`/api/bookView/`)
            .then(book => {
                setBooks(book.data)
            })
    }

    const returnBooks = () => {
        return (
            books?.map(book => {
                return (
                    <article className="hoverGold w-[11rem] md:w-[16rem] max-w-max md:mr-5 my-3">
                        <Link to={`/books/${replaceFunction(book.title, ' ', '-')}`}>
                            <img type='image/webp' className='rounded' src={book?.cover} alt={book?.title} />
                        </Link>
                    </article> 
                )
            })
        )
    }

    return (  
        <React.Fragment>
            <Helmet>
                <title>‌الحسون | المؤلفات</title>
            </Helmet>
            <div className='mt-5 mb-20'>
                <h1 className='title title-center'>
                    المؤلفات
                </h1>
                {
                    loading ?
                    <div className='flex flex-wrap gap-8 wrapper'>
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                        <Skeleton.Avatar active={true} size={250} shape={'default'} loading={true} />
                    </div>
                    :
                    <div className='flex flex-wrap gap-x-4 wrapper'>
                        {
                            returnBooks()
                        }
                    </div>
                }
            </div>
        </React.Fragment>
    );
}
 
export default Books;