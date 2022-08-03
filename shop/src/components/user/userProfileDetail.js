import axiosInstance from '../axiosApi'
import { log, getCookie } from '../../../../frontend/src/components/base'

const UserProfileDetail = () => {

    const refreshToken = async () => {
        const localRefreshToken = getCookie('USER_REFRESH_TOKEN')
            
        return (
            localRefreshToken &&
            await axiosInstance.post('/api/token/refresh/', {refresh: localRefreshToken})
                .then(res => {
                    document.cookie = `USER_ACCESS_TOKEN=${res.data.access}; path=/;`
                    document.cookie = `USER_REFRESH_TOKEN=${res.data.refresh}; path=/;`
                    
                    window.location.reload()
                })
                .catch(err => {
                    log('refresh error')
                    log(err.response)
                })
        )
    }

    const fetchUserProfile = async () => {
        const localAccessToken = getCookie('USER_ACCESS_TOKEN')
        const now = new Date().getTime()
        if (localAccessToken) {
            const payload = {
                access_token: localAccessToken,
            }
            
            return await axiosInstance.post(`/shop/api/user?timestamp=${now}`, payload)
                .then (res => {
                    if (res.data.is_active) {
                        return res.data
                    } else {
                        return 'inactive'
                    }
                })
                .catch(err => {
                    refreshToken()
                })
        }
    }

    return fetchUserProfile()

    // const fetchUserProfileUpdate = async (at) => {
    //     return await axiosInstance.get(`/api/login?at=${at}`)
    //         .then (res => {
    //             log('return profile 2')
    //             log(res.data)
    //             return res.data
    //         })
    //         .catch(err => {
    //             log(err)
    //             log(err.response)
    //             log('refresh again!!!!!')
    //         })
    // }
}
 
export default UserProfileDetail;