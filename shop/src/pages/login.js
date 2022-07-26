import React, { useEffect, useState } from "react";
import axios from 'axios';
import { message, Select } from 'antd';

import { log } from '../../../frontend/src/components/base'

const Login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [users, setUsers] = useState(null)
    
    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = async () => {
        await axios.get('/api/user/')
        .then(res => {
            setUsers(res.data)
        })
    }

    const returnUsers = () => {
        return (
            users?.map(user => {
                return (
                    <Select.Option value={`${user.username}-${user.last_name}`}>{user.rank} {user.first_name} {user.last_name}</Select.Option>
                )
            })
        )
    }

    const handleSubmit = async () => {
        const usernameSplit = username.split('-')
        try {
            const data = await axios.post('api/token/obtain/', {
                username: usernameSplit[0],
                password: password
            });

            message.loading(`به سامانه خوش آمدید آقای ${usernameSplit[1]}`, 0)
            
            axios.defaults.headers['Authorization'] = "JWT " + data.access;
            localStorage.setItem('access_token', data.data.access);
            localStorage.setItem('refresh_token', data.data.refresh);

            saveUsernameInLocalStorage(usernameSplit[0])
            
            setTimeout(() => {
                window.location.href = '/'
            }, 1500)
        } catch (error) {
            message.error('رمز وارد شده برای این کاربر اشتباه می‌باشد');
            throw error;
        }
    }

    const keyboardClicked = (event) => {
        if (event.key === 'Enter') {
            handleSubmit()
        }
    }

    const saveUsernameInLocalStorage = (username) => {
        localStorage.setItem('logged_in_user', username)
    }

    return (
        <div className="min-h-screen text-center login filter-blur-10">
            <div className=''>
                <h1 className="text-[3rem] text-center absolute top-20 text-teal-600 ">
                    سامانه ی فوریت های سایبری استان قم
                </h1>

                <form className='grid justify-center space-y-5 p-8 w-[24rem] text-[20px] rounded-lg center bg-[#dddddd66]'>
                    <label>
                        <Select
                            className='w-[17.3rem] text-lg'
                            placeholder='کاربر را انتخاب کنید '
                            onChange={(select) => setUsername(select)}
                        >
                            {returnUsers()}
                        </Select>
                    </label>
                    <label>
                        <input name="password" className='w-full p-2 rounded-lg' type="password" placeholder="رمز عبور" value={password} onKeyDown={(event) => keyboardClicked(event)} onChange={(input) => setPassword(input.target.value)} />
                    </label>
                    <button onClick={() => handleSubmit()} className='bg-[#287E7D] p-2 rounded-lg text-white font-semibold' type="button">
                        تایید
                    </button>
                </form>
            </div>
        </div>
    );
}
 
export default Login;