import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Lander from './components/Lander/Lander'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Explore from './components/Explore/Explore'
import Watchlist from './components/Watchlist/Watchlist'
import Details from './components/Details/Details'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'

function App() {
  const routes = createBrowserRouter([
    {path: '/', element: <Lander/> },
    {path: '/signup', element: <Register />},
    {path: '/login', element: <Login />},

    {element: <Layout />, children: [
      {path: '/home', element: <Home />},
      {path: '/shows', element: <Explore />},
      {path: '/watchlist', element: <Watchlist type='show' />},
      {path: '/details/:id', element: <Details />},      
    ]},
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App