import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from '../Header'
import Productdetail from '../Ad details/productdetail'
import Footer from '../Footer'
import Product from '../Ad details/product'
import Login from '../Log in'
import Signup from '../Sign up'
import Postad from '../PostAd/postad'

export default function Router() {
    const router = createBrowserRouter([

        {
            path: '/login',
            element: <Login />,
        },

        {
            path: '/signup',
            element: <Signup />,
        },


        {
            path: '/',
            element: <Main />,
            children: [

                {
                    path: '/',
                    element: <Product />,
                },

                {
                    path: '/productdetail/:id',
                    element: <Productdetail />,
                },

                {
                    path: '/postad',
                    element: <Postad />,
                },

                {
                    path: '/footer',
                    element: <Footer />,
                },

            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

function Main() {

    return <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
}
