import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div className='div-01'>
      <ul className='cate1'>
        <Link id='link-01' to={''}><li>All categories</li></Link>
        <Link id='link-02' to={''}><li>Mobile Phones</li></Link>
        <Link id='link-03' to={''}><li>Cars</li></Link>
        <Link id='link-04' to={''}><li>Motorcycles</li></Link>
        <Link id='link-05' to={''}><li>House</li></Link>
        <Link id='link-06' to={''}><li>Tv-Video-Audio</li></Link>
        <Link id='link-07' to={''}><li>Tablets</li></Link>
        <Link id='link-08' to={''}><li>land and Plots</li></Link>
      </ul>
    </div>
  )
}