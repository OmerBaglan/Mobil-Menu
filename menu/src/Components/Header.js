import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
const Header = () => {

  const [opencategory,setOpenCategory]=useState(false)

  useEffect(()=>{
    console.log(opencategory);
  },[opencategory])

  return (
    <div className="header">
      <div className="navbar">
      <div className="logo">
            <img src="/İmages/fast-food-logo-emblem.png" alt="" />
        </div>
        {
      opencategory ? (
        <div className='categorys'>
          <div className="category-list">
            <div className="category" onClick={()=>setOpenCategory(false)} >
            Hamburger
            </div>
            <div className="category" onClick={()=>setOpenCategory(false)} >
              Pizza
            </div>
            <div className="category" onClick={()=>setOpenCategory(false)}>
              Hatdog
            </div>
            <div className="category" onClick={()=>setOpenCategory(false)}>
                Donas
            </div>
          
          </div>
          <div className="close-bar">
      <IoIosClose onClick={()=>setOpenCategory(false)}/>
      </div>
        </div> ):(  <div className="bar">
      <FaBars onClick={()=>setOpenCategory(true)}/>
      </div>)
    }
 
     
      </div>
    </div>
  )
}

export default Header