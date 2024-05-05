import React from 'react';
import { useState, useEffect } from 'react';
import Detail from '../../Component/detail';
import { useParams } from 'react-router-dom';

const productThingStyle = {
  height: '110vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
};

const productDetailStyle = {
  width: '90%', // Adjusted width to 90% for even more width
  maxWidth: '1000px', // Increased the maximum width
  textAlign: 'center',
  padding: '10px', // Increased padding for a larger content area
  backgroundColor: 'white',
  borderRadius: '12px', // Rounded corners for a softer look
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
  boxSizing: 'border-box',
  margin: '20px',
};

const headingStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

export default function Productdetail() {
  const id = useParams();
  const [singleAds, setSingleAds] = useState();

  useEffect(() => {
    getSinglePost();
  }, []);

  async function getSinglePost() {
    try {
      const response = await fetch(`https://joyous-bracelet-colt.cyclic.app/olxAds/${id.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setSingleAds(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  if (!singleAds) {
    return <img width={100} style={{ marginTop: '200px', marginLeft: '50vw', transform: 'translateX(-50%)' }} src="https://i.gifer.com/ZZ5H.gif" alt="" />;
  }

  return (
    <div style={productThingStyle}>
      <div style={productDetailStyle}>
        <h2 style={headingStyle}></h2>
        <Detail
          ident={singleAds._id}
          image={singleAds.image_url}
          price={singleAds.Price}
          description={singleAds.description}
          title={singleAds.title}
        />
      </div>
    </div>
  );
}
