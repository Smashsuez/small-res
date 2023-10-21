import React from 'react'
import styles from "../styles/Card.module.css"
import Image from 'next/image'
import Link from 'next/link';


const Card = ({list}) => {
    return (
    <>
    <Link href={`/product/${list._id}`} passHref>
    <div className="w-[220px] h-[270px] flex flex-wrap mb-14 shadow-md bg-white items-center flex-col rounded-lg overflow-hidden justify-between pt-[20px]">
        <Image className="max-h-[50px] overflow-hidden" src={list.img} width="50" height="50" alt=""/>
        <h1 className="text-[18px] font-bold text-blue-900 font-varela" style={{ textDecoration: 'none' }}>{list.title}</h1>
        <p className="w-[60%] text-sm text-center text-gray-500 h-fit truncate " style={{ textDecoration: 'none' }}>
        {list.desc}
        </p> 
        <span>
            Start from: {list.sizesOption[0].price} <p className='text-green-600 inline'> £</p>
        </span>
        <div className='w-full flex justify-evenly items-center text-left bg-green-600  h-[40px] text-white underline decoration-green-600'>
            Go to product
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 animate-goLeft">
  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>

        </div>
        {/* <button style={{textDecoration: 'none'}} className='bg-green-600 text-white px-2 py-1 rounded-md decoration-green-600'>
            Go to product page
        </button> */}
    </div> 
   
    </Link>
    </>
    
    )
}

export default Card;