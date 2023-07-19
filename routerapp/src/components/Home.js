import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Outlet />
      This is home page
    </div>
  )
}

export default Home
