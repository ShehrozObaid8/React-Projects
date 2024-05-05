import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import cart from '../store/cart';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    const [showCart, setShowCart] = useState(false)
    
    const cart = useSelector(state => state.cart)

    let totalPrice = 0
    cart.map(item => {
      totalPrice += item.price
    })



    return (
        <div id='div-header'>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={''} className="navbar-brand">
                        <img src="https://www.foodpanda.com/wp-content/uploads/2023/06/foodpanda_logo_2023.svg" alt="" />
                    </Link>
                    <ol className="ul01">
                        <Link><li> Home</li></Link>
                        <Link to={"/dashboard"}><li>Dashboard</li></Link>
                        <Link><li>Newsroom</li></Link>
                        <Link><li>Panda ads</li></Link>
                        <Link><li>Contact</li></Link>
                        <Link to={'/signin'}><li>Login</li></Link>
                    </ol>
                    <button id="btn-01">Choose Location</button>

        
                    <div onClick={() => setShowCart(!showCart)}
                        style={{ position: 'absolute', right: 10,cursor:'pointer' }}>
                        <span><FontAwesomeIcon style={{ marginLeft: '5vh' }} icon={faCartShopping} size="2xl" /></span>
                        {cart.length}

                    </div>

                    {showCart && <div style={{ position: 'absolute', top: 100, right: 10, backgroundColor: 'white', width: '300px', color: 'black' }}>
                        {cart.map(item => {
                            return <div>
                                {item.item} | Rs{item.price}
                            </div>
                        })}


                        <p><b>Total Price: Rs. {totalPrice}</b></p>
                    </div>}
                </div>
            </nav>
            <br /><br /> <br />
        </div>
    );
}
