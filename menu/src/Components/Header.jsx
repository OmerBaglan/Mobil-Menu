import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
const Header = ({opencategory,setOpenCategory}) => {




  return (
    <div className="header">
      <div className="navbar">
      <div className={opencategory ? "logo blur" :"logo"}>
            <img src="/İmages/fast-food-logo-emblem.png" alt="" />
        </div>
     
     
     
      </div>
     
    </div>
  )
}

export default Header