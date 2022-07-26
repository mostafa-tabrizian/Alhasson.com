import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { log } from '../components/base'

const Clips = () => {
    const [clipsData, setClipsData] = useState()

    useEffect(() => {
        getClipData()
    }, []);

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
                    <div className='grid grid-cols-1 md:flex md:space-x-5 md:space-x-reverse space-y-5 border-b border-[#7467cc] md:border-none pb-5'>
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
        <div className='pb-20 wrapper'>
            <h1 className='title title-center'>
                المحاضرات
            </h1>
            <div className='space-y-5'>
                {returnClipData()}
            </div>
        </div>
    );
}
 
export default Clips;