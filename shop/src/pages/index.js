import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ProductCard from '../components/productCard'
import { log } from '../../../frontend/src/components/base'

const Index = () => {
    const [product_new, setProduct_new] = useState([])

    useEffect(() => {
        grabData()
    }, [])

    const grabData = async () => {
        await axios.get(`/api/productView/?limit=8&public=true`)
            .then(res => {
                setProduct_new(res.data.results)
            })
            .catch(err => {
                log(err.response)
            })
    }
    
    return (
        <React.Fragment>
            <section className='bg-gradient-to-b py-10 wrapper from-[#0d0735] to-[#070515]'>
                <div className="grid grid-cols-2">
                    <ProductCard products={product_new} />
                </div>
            </section>
            <section className='bg-gradient-to-b py-10 wrapper from-[#070515] to-[#0d0735]'>
            </section>
        </React.Fragment>
    );
}
 
export default Index;