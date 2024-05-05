import React from 'react'
// import "./index.css"
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../../Component/card'
import { Link } from 'react-router-dom'
import Categories from '../Categories'
import FirstImage from '../Firstimage'
import Allcategories from '../Categories/allcategories'
import Footerads from '../Firstimage/app';
import { useNavigate } from 'react-router-dom'

export default function Product() {
  const [adsData, setAdsData] = useState([])
  // console.log(adsData)

  useEffect(() => {
    getAdsCollection()
  }, [])

  async function getAdsCollection() {
    const getAds = await fetch('https://joyous-bracelet-colt.cyclic.app/olxAds')
    const ads = await getAds.json()
    setAdsData(ads.data)
  }

  const navigate = useNavigate()

  if (!adsData) {
    return <img width={100} style={{ marginTop: '200px', marginLeft: '620px' }} src="https://i.gifer.com/ZZ5H.gif" alt="" />
  }
  return (
    <div>
      <Categories />
      <FirstImage />
      <Allcategories />


      {adsData.map((item) => (
        <Card
          onClick={item.onClick = () => navigate(`/productdetail/${item._id}`)} image_url={item.image_url} title={item.title} Price={item.Price} />
        //   <div key={product._id} onClick={() => navigate(`/postad ${product._id}`)}>
        //     <div>
        //       <img width={500}
        //         src={product.image_url}
        //       />
        //     </div>
        //     <div>
        //       <div>
        //         <h3>
        //           <a href={product.href}>
        //             <span />
        //             {product.title}
        //           </a>
        //         </h3>
        //         <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        //       </div>
        //       <p className="text-sm font-medium text-gray-900">{product.price}</p>
        //     </div>
        //   </div>
      ))}



      <Footerads />

    </div>


  )
}
