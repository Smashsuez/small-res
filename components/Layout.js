import React, { children } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <div className='font-roboto overflow-hidden max-w-[100vw] h-fit box-content scroll-smooth'>
        <Nav/>
        { children }
        <Footer/>
    </div>
  )
}

export default Layout