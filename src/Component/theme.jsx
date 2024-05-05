import { useDispatch } from 'react-redux'
import React from 'react'
import './theme.css'
import { updateTheme } from '../store/theme'


export default function Theme() {
    const dispatch = useDispatch()

    return (
        <div className='theme-box'>
            <div onClick={() => dispatch(updateTheme('red-theme'))} className='red-theme'></div>
            <div onClick={() => dispatch(updateTheme('black-theme'))} className='black-theme'></div>
            <div onClick={() => dispatch(updateTheme('white-theme'))} className='white-theme'></div>

        </div>
    )
}
