import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='text-white bg-black px-4 py-1.5 font-bold rounded-[5px] text-[14px]'>{children}</button>
    )
}

export default Button