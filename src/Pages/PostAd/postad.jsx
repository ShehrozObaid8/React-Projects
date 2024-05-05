import React, { useState } from 'react'
import { imgData } from '../Config/firebase'
// import { uploadImage } from '../Config/firebase'


export default function Postad() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(Number)
    const [file, setFile] = useState([])


    const postAdData = async () => {
        if (title === '' || description === '' || price === Number) {
            alert('please fill all  fields')
            return
        }
        
        const url = await imgData(file[0])

    
    fetch('https://joyous-bracelet-colt.cyclic.app/olxAds/addData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
            Price: price,
            image_url: url
        })
    }).then(res => res.json())
    .then(res => 
    alert("Your ad is posted successfully"))
        .catch(e => console.log('e --->', e))
}

    // const ad = await PostAd({ title, description, price, file: file[0] })
    return (
        <div>
            <div>
                <input onChange={(e) => setTitle(e.target.value)} name="" id="" placeholder='Write your title here' />
            </div>

            <div>
                <input onChange={(e) => setDescription(e.target.value)} name="" id="" placeholder='Write your description here' />
            </div>

            <div>
                <input onChange={(e) => setPrice(e.target.value)} type="number" name="" id="" placeholder='Write your number here' />
            </div>

            <div>
                <input onChange={(e) => setFile(e.target.files)} type='file' name="" id="" />
            </div>

            <button onClick={() => postAdData()}>Submit</button>
        </div>
    )
}
