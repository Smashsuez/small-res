import React from 'react'

import Icon from './Icon'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div>
    <div className='flex flex-wrap items-center  w-[100vw] min-h-[100vh] px-4' >
      <div className='flex flex-wrap w-[100vw] items-center gap-10 lg:justify-evenly'>
        <div className='text-blue-900 text-[40px] font-capriola lg:w-[40%]'>
          Your Burger Destination<br/>For <p className='text-green-500 inline'> Perfect </p> Flavor
        </div>
        <div >
          <ul className='text-[30px] text-blue-900'>            
                        <li><Link   href="/">Home</Link></li>
                        <li><Link  href="/#menu">Menu</Link></li>
                        <li><Link   href="/#location">Location</Link></li>
                        <li><Link   href="/#reviews">Reviews</Link></li>
                        <li><Link   href="/cart">Cart</Link></li>
          </ul>
          
        </div>
      </div>
      <div className='font-capriola text-lg w-[100vw] h-fit text-center flex items-center justify-center'>
        Powered By <p className='text-blue-600 inline-flex items-center font-bold'>&nbsp;Breeze &nbsp;<span className='inline-block w-[50px] h-[50px] border-2 border-blue-600 rounded-full overflow-hidden'><Image alt='' src="/imgs/Breeze.jpg" width={60} height={60}/></span></p>
      </div>
      
    </div>
    </div>
  )
}

export default Footer