import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Contact, Donation, Education, Home , Aboutus, Login, Signup} from "./Pages/index.js"



const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/donation',
        element:<Donation/>
      },
      {
        path:'/education',
        element:<Education/>
      },
      {


        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/aboutus',
        element:<Aboutus/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<Signup/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
