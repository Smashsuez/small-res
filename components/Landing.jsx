import React from 'react';
import Typewriter from 'typewriter-effect';
import styles from "../styles/Landing.module.css";
import Image from 'next/image';
import Icon from './Icon';
import 'animate.css';

import ReactPlayer from 'react-player';
import Link from 'next/link';
//import video from '../public/videos/ooo.mp4';
const Landing = () => {
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="min-h-[100vh] h-fit flex-row flex items-center justify-between flex-wrap">
                <div className='flex flex-col-reverse w-full md:w-fit pt-10 lg:pt-0 justify-between min-h-[70vh]  md:flex-row  md:items-center lg:justify-between flex-wrap'>
                    <div className="px-10 md:px-20 md:w-[40%] w-fit">
                    <div className='text-[25px] md:text-[30px] font-bold font-varela'>
                        <h1 className="text-blue-900 min-h-[143px] md:h-fit"><span className='text-[#059669] text-[45px]'>B</span>reeze BURGER,
                            <Typewriter
                                options={{
                                    strings: ['Burgers with a difference.', 'Try our breeze burger.'],
                                    autoStart: true,
                                    loop: true
                                }}
                            />
                        </h1>
                    </div>
                    <div>
                        <p className="">Welcome to breeze burger! Our burgers are made fresh, <br className='hidden md:visible' />cooked to perfection, and full of flavor. <br className='hidden md:visible' />
                            Come in and try one today!
                        </p>
                    </div>
                    <div className='px-3 py-1 mt-6 bg-green-600 w-fit text-white rounded-md hover:bg-white hover:text-green-500 hover:border-2 hover:border-green-600 duration-1000 cursor-pointer hover:outline-none'>
                        Menu
                    </div>
                </div>
                <div className="w-screen flex justify-center md:w-fit ">
                     <div className="w-[60vw] max-w-[600px] lg:w-[600px] px-100 ">
                        <Image className="w-[250px]" src="/imgs/klipartz.com.png" width={500} height={500}  alt="" />
                    </div>
                    {/*<div className={styles.video}>
                    <video className={styles.video} width="100%" height="100%" autoPlay loop muted>
                        <source src="/videos/ooo.mp4" type="video/mp4" />
                    </video>
                    </div> */}
                </div>
                </div>
                
                {/* <div className={styles.button}>
                    <div className={styles.mainTitle} onClick={() => handleScrollTo("menu")}>
                        <Image src="/imgs/4522591.png" alt="" width="200" height="100" />
                    </div>
                </div> */}
                <Link href={"/#menu"}>
                    <div className='w-[100vw] flex justify-center text-green-600'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>

                </div>
                </Link>
                
            </div>
        </>
    );
}

export default Landing;
