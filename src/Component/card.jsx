import React from 'react'
import './card.css'
export default function Card(props) {


    const { image_url, title, Price, onClick } = props
    return (
        <div onClick={onClick} class="card" style={{ width: "18rem;", }}>
            <img id='img-00' src={image_url} class="card-img-top" alt="..." />
            <div style={{ cursor: 'pointer' }} class="card-body">
                <h5 class="card-title">{title}</h5>
                {/* <p class="card-text">{description}</p> */}
                <p class="card-text">Rs {Price}</p>

            </div>
        </div>

    )
}
