import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Empty } from 'antd';

import { log, takeParameterFromUrl, replaceFunction } from '../../../frontend/src/components/base'
import ProductCard from '../components/order/productCard';

const Search = () => {
    const [searchResult, setSearchResult] = useState()

    useEffect(() => {
        searchQuery()
    }, [])

    const query = takeParameterFromUrl('q')

    const searchQuery = async () => {
        await axios.get(`/api/productView/?slug__icontains=${query}`)
            .then(res => {
                setSearchResult(res.data)
            })
    }

    return (
        <React.Fragment>
            <div className='wrapper pb-20'>
                <h1 className='title title-center mb-5'>
                    جستجوی عبارت " {query} "
                </h1>
                
                {
                    !searchResult?.length &&
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                }
                
                {
                    searchResult?.length ?
                    <ProductCard products={searchResult} />
                    :
                    ''
                }

            </div>
        </React.Fragment>
    );
}
 
export default Search;