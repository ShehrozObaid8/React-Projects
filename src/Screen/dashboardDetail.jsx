import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleRestaurant } from '../Config/firebase'
import { useDispatch } from 'react-redux'
import { addCartToStore, removeCartToStore } from '../store/cart'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'



export default function DashboardDetail() {

  const { id } = useParams()
  // console.log('param id', id)
  const [restaurantData, setRestaurantData] = useState()
  console.log(restaurantData)
  const dispatch = useDispatch()



  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await getSingleRestaurant(id)
    setRestaurantData(data)
  }

  if (!restaurantData) {
    return <img style={{ marginLeft: '45vw' }} width={100} src="https://i.gifer.com/ZKZg.gif" alt="" />
  }


  const { opening_hours, menu_categories, restaurant_name, image_url } = restaurantData

  const open_hrs = []

  for (let key in opening_hours) {
    open_hrs.push(`${key}: ${opening_hours[key]}`)
  }


  const addToCartItem = (item) => {
    dispatch(addCartToStore(item))
  }

  console.log("menu_categories" + menu_categories)

  const deleteButton = (item) => {
    dispatch(removeCartToStore(item))
  }


  return (

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <img style={{ borderRadius: '1vw' }} src={image_url} />
      <h1>{restaurant_name}</h1>

      <h3>Timings</h3>

      <div style={{ border: "1px solid gray", width: "350px" }}>
        {
          open_hrs.map(item => <i><p style={{ display: 'flex', justifyContent: 'center', }}>{item}</p></i>)
        }
      </div>

      <br />
      <Tabs>
        <TabList style={{ backgroundColor: "rgb(216, 56, 102)", width: '1220px', display: 'flex', justifyContent: 'center' }}>
          {menu_categories.map(item => {
            return <Tab>{item.category_name}</Tab>
          })}
        </TabList>

        {menu_categories.map(item => {
          return <TabPanel> {item.items.map(subitem => {
            return <Tab> <strong>{subitem.item}</strong>{<img style={{ marginTop: '5vh', marginLeft: '5vh', borderRadius: '1vh' }} width={200} height={130} src={subitem.item_image_url} alt="" />}
              <button style={{
                color: 'white',
                background: 'rgb(216, 56, 102)',
                padding: '8px',
                borderRadius: '15px',
                marginTop: '5px',
                marginRight: '2vw',
                marginLeft: '2vw',
                border: 'none',

              }} onClick={() => addToCartItem(subitem)}>Add To Cart</button>

              <button style={{
                color: 'white',
                background: 'rgb(216, 56, 102)',
                padding: '8px',
                borderRadius: '6px',
                marginTop: '5px',
                // position:'relative',
                // right:'8vw',
                border: 'none',

              }} onClick={() => deleteButton(subitem)}><FontAwesomeIcon icon={faSquareMinus} /></button>
            </Tab>
          })} </TabPanel>
        })}

      </Tabs>

    </div>

  )
}