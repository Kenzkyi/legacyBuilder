import React from 'react'
import Header from '../pages/kenz/Header'
import Footer from '../pages/kenz/Footer'
import { Outlet } from 'react-router-dom'

const MainHolder = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainHolder
