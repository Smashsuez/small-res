'use client'
import React, {useState} from 'react'
import Link from 'next/link';

const NavLink = () => {
    const [navActive, setNavActive] = useState(false);
    const toggleNavActive = () => {
            setNavActive(!navActive);
            };
  return (
    
        <>
        <div onClick={toggleNavActive} className={`menu ${navActive ? "openmenu" : ""}`} >
            <span className="line-1"></span>
            <span className="line-2"></span>
            <span className="line-3"></span>
         </div>
        <div className={`nav__menu-list ${navActive ? "active" : ""}`} >
          <div className="linkContainer">
            
            {/* <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className={`linkInner `}>
                <Link legacyBehavior href={"/profile/server"}>
                  <a>Profile</a>
                </Link>
              </div>
            </div> */}
            <div className={`link ${navActive ? "openmenu" : ""} `} onClick={toggleNavActive}>
              
                <Link legacyBehavior href={"/"}>
                  <div className={`linkInner activeLink`}>
                    <a>Home</a>
                  </div>
                </Link>
              
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`} onClick={toggleNavActive}>
              <Link legacyBehavior href={"/about"}>
                <div className="linkInner">
                  <a>About Us</a>
                </div>
              </Link>
            </div>
            
            <div className={`link ${navActive ? "openmenu" : ""}`} onClick={toggleNavActive}>
              <Link legacyBehavior href={"/#menu"}>
                <div className="linkInner">
                  <a>Services</a>
                </div>
              </Link>
              
            </div>

            <div className={`link ${navActive ? "openmenu" : ""}`} onClick={toggleNavActive}>
              <Link legacyBehavior href={"/#according"} >
                <div className="linkInner">
                  <a>FAQ</a>
                </div>
              </Link>
            </div>

            <div className={`link ${navActive ? "openmenu" : ""}`} onClick={toggleNavActive}>
              <Link legacyBehavior href={"/contactUs"}>
                <div className="linkInner">
                    <a>Contact Us</a>
                </div>
              </Link>
              
            </div>

            

          </div>
        </div> 
        </>
  )
}

export default NavLink