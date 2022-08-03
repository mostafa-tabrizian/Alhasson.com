import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'

import ProductCard from '../components/order/productCard'
import { log } from '../../../frontend/src/components/base'
import LoadingScreen from '../../../frontend/src/components/loadingScreen'

const Index = () => {
    const [product_new, setProduct_new] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        grabData()
    }, [])

    const grabData = useCallback(
        debounce(
            async () => {
                await axios.get(`/api/productView/?limit=8&public=true`)
                    .then(res => {
                        setProduct_new(res.data.results)
                        setLoading(false)
                    })
                    .catch(err => {
                        log(err.response)
                    })
            }
        )
    )
    
    return (
        <React.Fragment>
            <LoadingScreen loading={loading} />
            
            <section className='bg-gradient-to-b py-10 wrapper from-[#0d0735] to-[#070515]'>
                <div className="grid grid-cols-2 gap-2">
                    <ProductCard products={product_new} />
                </div>
            </section>
        </React.Fragment>
    );
}
 
export default Index;