import React, { useEffect } from 'react'
import { postRestaurants } from '../Config/firebase'




export default function Restaurant() {
    const restButton = () => {
        const button = postRestaurants()
    }
    return (
        <div>
            <button onClick={restButton}>Restaurant</button>
        </div>
    )

}
