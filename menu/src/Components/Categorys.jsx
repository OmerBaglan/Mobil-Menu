import React, { useState } from 'react'

const Categorys = () => {

  const [openhamburger,setOpenHamburger]=useState(true)
  const [openpizza,setOpenPizza]=useState(false)
  const [openhatdog,setOpenHatdog]=useState(false)
  const [opendonas,setOpenDonas]=useState(false)

    const OpenCategoryButton=(category)=>{
        if(category ==="hamburger"){
            setOpenHamburger(true)
            setOpenPizza(false)
            setOpenHatdog(false)
            setOpenDonas(false)
        }
        if(category ==="pizza"){
            setOpenHamburger(false)
            setOpenPizza(true)
            setOpenHatdog(false)
            setOpenDonas(false)
        }
        if(category ==="hatdog"){
            setOpenHamburger(false)
            setOpenPizza(false)
            setOpenHatdog(true)
            setOpenDonas(false)
        }
        if(category ==="donas"){
            setOpenHamburger(false)
            setOpenPizza(false)
            setOpenHatdog(false)
            setOpenDonas(true)
        }
    }
  return (

    <div className="categorys">
      
          <div className="category-list">
            <div className={openhamburger ?"category opencategory":"category"} onClick={()=> OpenCategoryButton("hamburger")}  >
            Hamburger
            </div>
            <div className={openpizza ?"category opencategory":"category"}  onClick={()=> OpenCategoryButton("pizza")} >
              Pizza
            </div>
            <div className={openhatdog ?"category opencategory":"category"} onClick={()=> OpenCategoryButton("hatdog")} >
              Hatdog
            </div>
            <div className={opendonas ?"category opencategory":"category"} onClick={()=> OpenCategoryButton("donas")}>
                Donas
            </div>
           
         
          </div>

      
        </div> 

  )
}

export default Categorys