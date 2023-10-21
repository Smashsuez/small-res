import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from "next/router";
import UseReadingProgress from '@/hooks/UseReadingProgresslatest';
import { useSelector } from 'react-redux';
import Image from 'next/image';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const quantity = useSelector((state) => state.cart.quantity);
    const completion = UseReadingProgress()
    const router = useRouter();
    const {pathname} = router;
    const inactiveLink = 'hover:bg-green-500 hover:text-white bg-gray-200 text-gray-500 w-[100%] md:max-w-[100px]  text-center p-1 rounded-md';
    const activeLink = "hover:bg-green-500 hover:text-white bg-gray-200 w-[100%] md:max-w-[100px]  text-center p-1 rounded-md bg-green-600 text-white text-white text-white";

    function toggleMenu() {
        setOpenMenu(!openMenu)
    }

    

    
  return (
    <header className='z-50 bg-white py-2  text-blue-900 w-[100vw] shadow-md fixed top-0'>
        <nav className='flex justify-between items-center w-[92%] mx-auto'>
            <Link href="/">
                <div className='font-capriola text-[30px] font-bold'>
                <span className='text-[#059669] '>B</span>reeze
            </div>
            </Link>
            
            <div className={`absolute md:static duration-1000 bg-white min-h-[100vh] md:min-h-fit  ${openMenu === false ? 'left-[-100%]' : 'left-0'} top-[100%] right-0 w-[100vw] md:w-[60vw] flex justify-center px-5`}>
                <ul className='flex md:flex-row flex-col w-[80vw] items-center justify-start md:justify-center md:items-center text-[25px] md:text-[18px] md:gap-[3vw] gap-8 pt-20 md:pt-0'>

                    <Link  href='/' className='w-[100%]' onClick={toggleMenu}>
                    <div className='overflow-hidden w-[100%] h-[45.5px] md:h-fit relative md:static'>
                        <li className={`${pathname === '/' ? activeLink : inactiveLink} duration-1000 absolute md:static top-0 z- ${openMenu === true ? "top-0" : "top-[100%]"}`}>
                            Home
                        </li>
                    </div>
                    </Link>
                    
                    <Link  href='/#menu' className='w-[100%]' onClick={toggleMenu}>
                    <div className='overflow-hidden w-[100%] h-[45.5px] md:h-fit relative'>
                        <li className={`${pathname.includes("/#menu") ? activeLink : inactiveLink } duration-1000 absolute md:static top-0 z- ${openMenu === true ? "top-0" : "top-[100%]"}`}>
                        
                            Menu
                        
                    </li>
                    </div>
                    </Link>

                    <Link href='/#location' className='w-[100%]' onClick={toggleMenu}>
                    <div className='overflow-hidden w-[100%] h-[45.5px] md:h-fit relative'>
                        <li className={`${pathname.includes("/#location") ? activeLink : inactiveLink } duration-1000 absolute md:static top-0 z- ${openMenu === true ? "top-0" : "top-[100%]"}`}>
                        
                            Location
                        
                    </li>
                    </div>
                    </Link><Link href='#reviews' className='w-[100%]' onClick={toggleMenu}>
                    <div className='overflow-hidden w-[100%] h-[45.5px] md:h-fit relative'>
                        <li className={`${pathname.includes("#reviews") ? activeLink : inactiveLink } duration-1000 absolute md:static top-0 z- ${openMenu === true ? "top-0" : "top-[100%]"}`}>
                        
                            Reviews
                        
                    </li>
                    </div>
                    </Link>

                    <div className='md:hidden font-capriola text-lg w-[100vw] text-center mb-10 flex items-center justify-center'>
        Powered By <p className='text-blue-600 inline-flex items-center font-bold'>&nbsp;Breeze &nbsp;<span className='inline-block w-[50px] h-[50px] border-2 border-blue-600 rounded-full overflow-hidden'><Image alt='' src="/imgs/Breeze.jpg" width={60} height={60}/></span></p>
      </div>
                </ul>
            </div>
            <div className='flex items-center gap-6'>
                <Link href="/cart">
                <div className='relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>
{quantity !== 0 && <div className="absolute top-[-13px] right-0 text-green-600">{quantity}</div>}
                </div>
                </Link>
                
            

<div className='md:hidden' onClick={toggleMenu}>
    {!openMenu && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 cursor-pointer md:hidden">
        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>}
    {openMenu && <span className='cursor-pointer '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </span>}
</div>


            </div>
        </nav>
        <span style={{transform: `translateX(${completion - 100}%)`}} className='h-[1px] outline outline-1 outline-green-500 w-full absolute bottom-0 bg-green-500'/>
    </header>
  )
}

export default Nav