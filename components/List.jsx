import React from 'react'
import styles from "../styles/List.module.css"
import Card from "../components/Card"
import Aos from 'aos'


const List = ({list}) => {
  return (
    <div className="bg-gray-200 min-h-[500px] py-6 px-9" id='menu'>
        <div className={styles.heading}>
          <span className="font-capriola text-[30px] text-blue-900">Our  <span className='text-green-600'>Menu</span></span>
        </div>
        <div className={styles.wrapper}data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
      {list.map((list) => (
        <Card key={list.id} list={list}/>
      ))}
        </div> 
        {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
  AOS.init();
</script> */}
    </div>
  )
}

export default List;