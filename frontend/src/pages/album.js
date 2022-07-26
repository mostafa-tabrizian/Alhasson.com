import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Image } from 'antd';

import { log, isItMobile } from '../components/base'

const Album = () => {
    const [albumImages, setAlbumImages] = useState()

    useEffect(() => {
        getAlbum()
    }, [])

    const getAlbum = async () => {
        await axios.get('/api/albumView/')
            .then(res => {
                setAlbumImages(res.data)
            })
    }

    const returnAlbum = () => {
        return (
            albumImages?.map(image => {
                return (
                    <div className='mb-5 md:mb-10'>
                        <Image
                            width={isItMobile() ? 150 :250}
                            src={image.source}
                            alt={image.title}
                        />
                        <h4 className='text-black'>
                            {image.title}
                        </h4>
                    </div>
                )
            })
        )
    }

    return (
        <React.Fragment>
            <div className='pb-20 wrapper'>
                <h1 className="title title-center">
                    الصور
                </h1>
                <div className='z-0 flex flex-wrap justify-center p-4 pt-10 space-x-5 space-x-reverse rounded-lg bg-slate-200 md:p-20 shadow-large'>
                    <Image.PreviewGroup>
                        {returnAlbum()}
                    </Image.PreviewGroup>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Album;