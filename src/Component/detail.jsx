import React from 'react'

export default function Detail(props) {

    const { category, description, _id, image, title, price, rating } = props
    return (
        <div>
            <p>{category}</p>
            <p>{_id}</p>
            <img src={image} alt="" style={{ width: 280,  }} />
            <h4>Title: {title}</h4> <br />
            <p><b>Description: </b>{description}</p>
            <h4>Price: {price}</h4>
            <p>{rating}</p>

        </div>
    )
}
