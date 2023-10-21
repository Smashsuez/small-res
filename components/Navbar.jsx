import React, { Fragment ,useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import { useSelector } from "react-redux";
import Link from "next/link";
// import SmoothScroll from "smooth-scroll";


const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [showMenu, setShowMenu] = useState(false);
  const [transitionNavbar, setTransitionNavbar] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setTransitionNavbar(true);
    } else {
      setTransitionNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

//  const handleScrollTo = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     setTimeout(() => {
//       element.scrollIntoView({ behavior: "smooth" });
//     }, 500); // Wait for 1 second before scrolling to the component
//   } else {
//    // window.location.href = "/";
//     // setTimeout(() => {
//     //   const element = document.getElementById(id);
//     //   if (element) {
//     //     element.scrollIntoView({ behavior: "smooth" });
//     //   }
//     // }, 4000);
    
//     setTimeout(() => {
//       const element = document.getElementById(id);
//       element.scrollIntoView({ behavior: "smooth" });
//     }, 1000);}
//      // Wait for 2 seconds before redirecting and attempting to scroll to the component
  
// };

  
  

  

//   const scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 300
// });


const toggleNavActive = () => {
  setNavActive(!navActive);
};
const toggleNavActivee = () => {
  setNavActive(false);
};
  return (
    <Fragment >
    
      <div className="container">
      <Link href="/" passHref>
        <div className={styles.logo}>
Breeze
        </div></Link>
        <div className="x">
        <div onClick={toggleNavActive} className={`menu ${navActive ? "openmenu" : ""}`}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        <div className={`nav__menu-list ${navActive ? "active" : ""}`} onClick={toggleNavActive}>
          <div className="linkContainer">
            <div className={`link ${navActive ? "openmenu" : ""}`}>
              <div className="linkInner">
                <Link legacyBehavior href={"/"} >
                  <a>Home</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`} onClick={toggleNavActive}>
              <div className="linkInner">
                <Link legacyBehavior href={"/#menu"} onClick={toggleNavActive}>
                  <a>Menu</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`} onClick={toggleNavActive}>
              <div className="linkInner">
                <Link legacyBehavior href={"/#location"} onClick={toggleNavActive}>
                  <a>Location</a>
                </Link>
              </div>
            </div>
            <div className={`link ${navActive ? "openmenu" : ""}`} onClick={toggleNavActive} >
              <div className="linkInner">
                <Link legacyBehavior href={"/cart"}  onClick={toggleNavActive}>
                  <a>Cart</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        
        <div>
        <Link href="/cart" passHref>
        <div className={styles.item}>
        <div className={styles.cart}>
            <Image src="/imgs/cart.png" width="20" height="20" alt=""/>
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
        </Link></div>
        </div>
      </div>
      
      </Fragment>
    
  );
};

export default Navbar;

