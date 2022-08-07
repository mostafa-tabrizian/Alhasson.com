import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Empty } from 'antd';

import { log, takeParameterFromUrl, replaceFunction } from '../../../frontend/src/components/base'
import ProductCard from '../components/order/productCard';
import ExcludeWordsToSearch from '../components/order/excludeWordsToSearch'

const Search = () => {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        searchAlgorithm()
    }, [])

    const query = takeParameterFromUrl('q')

    const searchAlgorithm = async () => {  
        const allProducts = await axios.get(`/api/productView/`)
    
        const searchedValue = query?.toLowerCase().split(' ')
        const rankResults = []

        let filteredSearchValue = []

        searchedValue.map(value => {
            if (!ExcludeWordsToSearch().includes(value.toLowerCase())) {
                filteredSearchValue.push(value)
            }
        })

        allProducts.data.map(item => {
            let itemScore = 0

            filteredSearchValue.map(value => {
                if (
                    item.title.toLowerCase().split(' ').includes(value)||
                    item.slug.toLowerCase().split(' ').includes(value)
                ){
                    itemScore += 1
                }
            })

            if (itemScore !== 0) {
                rankResults.push({itemDetail: item, score: itemScore})
            }
        })

        const sliceSortResult = rankResults.slice(0, 100).sort((a, b) => b.score - a.score)
        
        setSearchResult(Object.keys(sliceSortResult).map(key => sliceSortResult[key].itemDetail))
    }

    return (
        <React.Fragment>
            <div className='pb-20 wrapper'>
                <h1 className='mb-5 title title-center'>
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