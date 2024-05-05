import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Landing from '../Screen/landing'
import Header from '../Screen/header'
import Footer from '../Screen/footer'
import Error from '../Screen/error'
import Dashboard from '../Screen/dashboard'
import Login from '../Screen/signin'
import Restaurant from '../Screen/restaurant'
import DashboardDetail from '../Screen/dashboardDetail'
import Theme from '../Component/theme'

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [

                {
                    path: '/',
                    element: <Landing />,
                },

                {
                    path: '/dashboard',
                    element: <Dashboard />
                },

                {
                    path: '/signin',
                    element: <Login />
                },


                {
                    path: '/restaurant',
                    element: <Restaurant />
                },

                {
                    path: '/dashboarddetail/:id',
                    element: <DashboardDetail />
                },

                {
                    path: '/theme',
                    element: <Theme />
                },
                {
                    path: '*',
                    element: <Error />,
                },

            ],
        }])

    return <RouterProvider router={router} />
}

function Main() {

    return <div>
        <Header />
        {/* {cart} */}
        <Outlet />
        <Footer />


    </div>
}