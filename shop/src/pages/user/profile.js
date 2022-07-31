import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet";
import { Link, useLocation } from 'react-router-dom'

import { log } from '../../../../frontend/src/components/base'
import UserProfileDetail from '../../components/user/userProfileDetail';

const Profile = () => {
    const [user, setUser] = useState(null)
    const [loaded, setLoaded] = useState(false)
    
    const location = useLocation()

    useEffect(() => {
        getUserDetail()
        setLoaded(true)
    }, [location])

    const getUserDetail = async () => {
        setUser(await UserProfileDetail())
        // const now = new Date().getTime()
        // return await axiosInstance.get(`/api/userView/?username=${username}&is_active=true&timestamp=${now}`)
        //     .then( async res => {
        //         if (res.data.length == 0) {
        //             return null
        //         } else {
        //             const userDetail = res.data[0]
        //             setUser(userDetail)
        //             return userDetail
        //         }
        //     })
    }

    return (
        <React.Fragment>

            <Helmet>
                <title>کوییزلند | پروفایل</title>
                <link rel='canonical' to={`https://www.quizzland.net/profile/${user?.username}`} />
            </Helmet>

            {
                loaded ?
                <div className='mx-4 space-y-10 md:mx-auto md:w-4/5'>
                    <div className={`space-y-5 py-8 px-4 mb-20 shadow-[0_1px_10px_#690D11] border-4 border-[#690D11] rounded-lg`}>
                        <div>
                            <div className="flex items-center mb-5 space-x-2 space-x-reverse">
                                <h2>{user?.first_name }&nbsp;{user?.last_name}</h2>
                            </div>
                        </div>
                    </div>
                    {/* <div className='space-y-5 py-8 px-4 shadow-[0_1px_10px_#690D11] border-4 bg-[#0e0202d4] border-[#690D11] rounded-lg'>
                        <div className="flex justify-between">
                            <h2>کوییز های منتشرشده</h2>
                            <Link aria-label="کوییز های منتشرشده" to={`/post/${user?.uesrname}`}>
                                ⬅
                            </Link>
                        </div>
                    </div> */}
                    {/* <div className='space-y-5 py-8 px-4 shadow-[0_1px_10px_#690D11] border-4 bg-[#0e0202d4] border-[#690D11] rounded-lg'>
                        <div className="flex justify-between">
                            <h2>جوایز</h2>
                            <Link aria-label="دیدن تمام جوایز" to={`/trophies/${user?.uesrname}`}>
                                ⬅
                            </Link>
                        </div>
                    </div> */}
                </div>
                :
                <div>Loading...</div>
            }

        </React.Fragment>
    );
}
 
export default Profile;