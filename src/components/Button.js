import React from 'react'

export const Button = ({ color, text, onClick }) => {
    return (
        <button className='btn' style={{ background: color }} onClick={onClick}>{text}</button>
    )
}
