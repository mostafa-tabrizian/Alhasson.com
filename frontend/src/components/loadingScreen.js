import React, { useState, useEffect } from 'react'

import { log } from './base'

const LoadingScreen = () => {
    const [hideLoadingScreen, setHideLoadingScreen] = useState('fadeIn')
    const [showLoadingInDom, setShowLoadingInDom] = useState(true)

    useEffect(() => {
        setHideLoadingScreen('fadeOut')
        setTimeout(() => {
            setShowLoadingInDom(false)
        }, 540)
    }, [])

    return (
        showLoadingInDom &&
        <div className={`fixed grid justify-center top-1/2 items-center h-screen w-screen bg-teal-900 ${hideLoadingScreen}`}>
            <div className='space-y-5'>
                <h2 className='text-white text-center'>
                    در حال بارگزاری
                </h2>
            </div>
        </div>
    )
}

export default LoadingScreen;