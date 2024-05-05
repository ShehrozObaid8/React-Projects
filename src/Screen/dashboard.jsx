import React, { useEffect, useState } from 'react'
import './dashboard.css'
import Card from '../Component/card'
import { getRestaurant } from '../Config/firebase'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    const [restroData, setRestroData] = useState([])
    // console.log('all restaurant',restroData)
    const navigate = useNavigate()

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        const data = await getRestaurant()
        setRestroData(data)
        // console.log('data ----->', data)
    }

    if (!restroData) {
        return <div>Loading...</div>
    }

    return (
        <div>

            <div id='div-1'>
                <img height={250} width={1050} src="https://images.deliveryhero.io/image/foodpanda/city-page/refresh-hero-city-pk.png?width=1264" alt="" />
                <h2>Food and groceries delivery from <br /> ڪراچي Karachi’s best restaurants and shops</h2>
            </div>

            <div id='div-2'>
                <h3><strong>Saaray Restaurants</strong></h3>
            </div> <br />


            <div id='div-3'>
                {
                    restroData.map(item => {
                        return <div id='div-100'>
                            <ul>
                                <li style={{ marginTop: '2vw' }}> {<Card data={item} onClick={() => navigate(`/dashboarddetail/${item.id}`)} />}</li>
                            </ul>
                        </div>
                    }

                    )
                }
            </div> <br /> <br />  <br /> <br />


            <div id='div-8'>
                <h2><strong>Food Delivery in Karachi From Only The Best Restaurants</strong></h2><br />
            </div>

            <div id='div-9'>
                <p>For those who like good food, exciting new options are now available in Karachi. Whether you live in Karachi, or are simply enjoying a holiday in the <br />area, culinary delights aplenty are now just a simple online order away. The Karachi food delivery service has enjoyed a culinary renaissance in recent<br />years, with a blossoming of new restaurants and take away eateries on almost every street; in fact, there are now literally hundreds of restaurants in <br /> Karachi, and foodpanda.com is the fastest, easiest and most reliable way of locating and ordering from the outlet of your choice. And whether you're in<br />the mood for some comfortably familiar flavours, or fancy sampling some excitingly exotic dish, the meal of your choice is now just a few button clicks<br />away, delivered fresh and piping hot to your door.</p>
            </div>

            <div id='div-10'>
                <h2><strong>Why food delivery from foodpanda?</strong></h2>
            </div>

            <div id='div-11'>
                <p>Our team of experts have paid a visit to every restaurant you’ll find here, and checked they’re up to our strict standards - only Karachi's most beloved spots are here to order from. Quickly place and pay for your order online, and find your food delivered straight to your door in no time at all.</p>
            </div>

            <div id='div-12'>
                <h2>Discover the Best Restaurants in Karachi</h2>
            </div>

            <div id='div-13'>
                <p>- Do you fancy fine, high quality food from an upscale, refined eatery? Then you'll love the Mediterranean, Italian fusion cuisine available at Okra <br /> restaurant, or Cafe Aylanto. <br />
                    - Maybe you're in the mood for a hearty, beach-style barbecue? Kolachi restaurant or BBQ Tonight are ready and willing to oblige. <br />
                    - Or perhaps you feel that spice is nice? Saffron or Dumpukht are two of the hottest Indian takeaways in town. <br />
                    - And then there is the ultimate in social food, the pizza. Swap slices of this perennial crowd-pleaser with an order from Pompei Italian Restaurant <br />Karachi, or 14th Street Pizza.</p>
            </div>
        </div>
    )
}