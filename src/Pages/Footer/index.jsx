import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './index.css';

export default function Footer() {
  return (
    <div id='changed-002'>
      <div className='changed-00'>
        <div>
          <ul className='unorder-01'>
            <li><strong>POPULAR CATEGORIES</strong></li>
            <li><Link to="">Cars</Link></li>
            <li><Link to="">Flats for rent</Link></li>
            <li><Link to="">Mobile Phones</Link></li>
            <li><Link to="">Jobs</Link></li>
          </ul>
        </div>
      </div>

      <div className='changed-00'>
        <div className='div0001'>
          <ul className='unorder-01'>
            <li><strong>TRENDING SEARCHES</strong></li>
            <li><Link to="">Bikes</Link></li>
            <li><Link to="">Watches</Link></li>
              <li><Link to="">Books</Link></li>
            <li><Link to="">Dogs</Link></li>
          </ul>
        </div>
      </div>

      <div className='changed-00'>
        <div className='div0002'>
          <ul className='unorder-01'>
            <li><strong>ABOUT US</strong></li>
            <li><Link to="">About Dubizzle Group</Link></li>
            <li><Link to="">OLX Blog</Link></li>
            <li><Link to="">Contact Us</Link></li>
            <li><Link to="">OLX for Businesses</Link></li>
          </ul>
        </div>
      </div>

      <div className='changed-00'>
        <div className='div0003'>
          <ul className='unorder-01'>
            <li><strong>OLX</strong></li>
            <li><Link to="">Help</Link></li>
            <li><Link to="">Sitemap</Link></li>
            <li><Link to="">Terms of use</Link></li>
            <li><Link to="">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className='div-00001'>
        <h6 id='head-100'><strong>FOLLOW US</strong></h6>
      </div>

      <div className='div-00002'>
        <Link to=""><img width={33} id='img-100001' src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg" alt="Twitter" /></Link>
        <Link to=""><img width={33} src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg" alt="Facebook" /></Link>
        <Link to=""><img width={33} src="https://www.olx.com.pk/assets/iconYoutube_noinline.c85bd6801ec83d6a3b498059550bef26.svg" alt="YouTube" /></Link>
        <Link to=""><img width={33} src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg" alt="Instagram" /></Link>
      </div>

      <div className='div-00003'>
        <Link to="/"><img width={90} src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt="App Store" /></Link>
        <Link to=""><img width={90} src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="Google Play" /></Link>
        <Link to=""><img width={90} src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="App Gallery" /></Link>
      </div>
    </div>
  );
}
