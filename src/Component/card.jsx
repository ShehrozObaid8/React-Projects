import React from 'react'

export default function Card(props) {

  // const { restaurant_name, cuisine_type } = props.data
  console.log(props)
  const { restaurant_name, image_url, cuisine_type } = props.data

  return (
    <div>
      <div onClick={props.onClick} class="card" style={{ width: "20rem", }}>
        <img style={{ marginLeft: '0px' }} src={image_url} class="card-img-top" alt="..." />
        <div class="card-body">
          {/* <h5>{props.heading}</h5> */}
          <h5>{restaurant_name}</h5>
          <small class="card-text">{cuisine_type}</small>
        </div>
      </div>
      {/* <h3>{restaurant_name}</h3>
      <h5>{cuisine_type}</h5> */}
    </div>
  )
}
