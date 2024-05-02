import './App.css';
import Categorys from './Components/Categorys';
import Header from './Components/Header';
import Menü from './Components/Menü';
import React, { useEffect, useState } from 'react'

function App() {
  const [opencategory,setOpenCategory]=useState(false)

  return (
    <div className="wrapper">
      <Header opencategory={opencategory} setOpenCategory={setOpenCategory} />
      <Categorys opencategory={opencategory} setOpenCategory={setOpenCategory}/>
      <Menü opencategory={opencategory} setOpenCategory={setOpenCategory}/>
    </div>
  );
}

export default App;
