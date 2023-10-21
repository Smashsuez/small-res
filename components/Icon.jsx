import React from 'react'
import styles from "../styles/Icon.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faInstagram, faWhatsapp  } from "@fortawesome/free-brands-svg-icons";

const Icon = () => {
  return (
    <>
    <div className='flex w-[100px] mt-5 justify-between'>
    <a href="https://m.facebook.com/attackpaintball.suez">
    <FontAwesomeIcon icon={faFacebook}   className='w-6 h-6 text-blue-900'/>
    </a>
    <a href="https://instagram.com/smash.suez?igshid=YmMyMTA2M2Y=">
    <FontAwesomeIcon icon={faInstagram} className='w-6 h-6 text-blue-900'/>
    </a>
    <a href="https://wa.me/201020027359">
    <FontAwesomeIcon icon={faWhatsapp}  className='w-6 h-6 text-blue-900'/>
    </a>
    
    </div>
    </>
  )
}

export default Icon