import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

    // const [username , setUsername] = useState('')

    // if(!data) {
    //     setUsername('Admin')
    // }else {
    //     setUsername(data.name)
    // }

    const LogOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }

    return (
        <div className='flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0'>
            <h1 className='text-white text-2xl font-medium'>hello <br /> <span className='text-3xl font-semibold'> {props.data ? props.data.name : 'Admin'} </span></h1>
            <button
                onClick={LogOutUser}
                className='text-white text-lg font-medium bg-red-600 px-5 py-2 rounded-sm cursor-pointer'>Log out</button>
        </div>
    )
}

export default Header