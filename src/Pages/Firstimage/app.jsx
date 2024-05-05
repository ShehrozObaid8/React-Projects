import React from 'react'
import { Link } from 'react-router-dom'

export default function Footerads() {
  return (
    <div>
      <div>
        <img id='end-01' width={910} src="https://s0.2mdn.net/dfp/90931/5040129548/1692869566063/bg.png" alt="" />

      </div>


      <div className='div-0001'>
        <img id='end-02' src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" alt="" />
        <h6 id='head-001'>GET YOUR APP TODAY</h6>
        <Link to=""><img id='img-1001' width={130} src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="" /></Link>
        <Link to=""><img id='img-1002' width={130} src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" /></Link>
        <Link to=""><img id='img-1003' width={130} src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" /></Link>
      </div>
    </div>
  )
}
