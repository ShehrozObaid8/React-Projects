import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

export default function Allcategories() {
  return (
    <div className='container-fluid'>
      <div>
        <h3 id='cate1'><strong>All categories</strong></h3>
      </div>

      <div id='changing-one'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-01' className='eidt-011' src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" alt="" />
          </div>
          <span id='moving-01'><strong>Mobiles</strong></span>
        </Link>
      </div>

      <div id='changing-two'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-02' className='eidt-011' src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" alt="" />
          </div>
          <span id='moving-02'><strong>Vehicles</strong></span>
        </Link>
      </div>

      <div id='changing-three'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-03' src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" alt="" />
          </div>
          <span id='moving-03'><strong>Property For <br /> Sale</strong></span>
        </Link>
      </div>

      <div id='changing-four'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-04' className='eidt-011' src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" alt="" />
          </div>
          <span id='moving-04'><strong>Property For <br /> Rent</strong></span>
        </Link>
      </div>

      <div id='changing-five'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-05' className='eidt-011' src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png" alt="" />
          </div>
          <span id='moving-05'><strong>Electronics & <br /> Home Appliances <br /> Rent</strong></span>
        </Link>
      </div>

      <div id='changing-six'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-06' className='eidt-011' src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" alt="" />
          </div>
          <span id='moving-06'><strong>Bikes</strong></span>
        </Link>
      </div>

      <div id='changing-seven'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-07' className='eidt-011' src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png" alt="" />
          </div>
          <span id='moving-07'><strong>Business,<br /> Industrial & <br /> Agriculture</strong></span>
        </Link>
      </div>

      <div id='changing-one'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-01' className='eidt-011' src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" alt="" />
          </div>
          <span id='moving-01'><strong>Services</strong></span>
        </Link>
      </div>

      <div id='changing-two'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-02' className='eidt-011' src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" alt="" />
          </div>
          <span id='moving-02'><strong>Jobs</strong></span>
        </Link>
      </div>

      <div id='changing-three'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-03' className='eidt-011' src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" alt="" />
          </div>
          <span id='moving-03'><strong>Animals</strong></span>
        </Link>
      </div>

      <div id='changing-four-edit'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-04' className='eidt-011' src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" alt="" />
          </div>
          <span id='moving-04'><strong>Furniture &<br />Home Decor</strong></span>
        </Link>
      </div>

      <div id='changing-five'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-05' className='eidt-011' src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" alt="" />
          </div>
          <span id='moving-05'><strong>Fashion & <br /> Beauty</strong></span>
        </Link>
      </div>

      <div id='changing-six-edit'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-06' className='eidt-011' src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" alt="" />
          </div>
          <span id='moving-06-edit'><strong>Books, Sports<br />& Hobbies</strong></span>
        </Link>
      </div>

      <div id='changing-seven-edit'>
        <Link to="#">
          <div className='editing'>
            <img id='edit-07' className='eidt-011' src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" alt="" />
          </div>
          <span id='moving-07-edit'><strong>Kids</strong></span>
        </Link>
      <br /> <br /> <br /> <br />
      </div>
    </div>
  );
}
