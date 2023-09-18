import { useState } from 'react'

import './App.css'
import DaisyNav from './Component/DaisyNav'
import Navbar from './Component/Navbar/Navbar'
import PriceOptions from './Component/PriceOptions/PriceOptions'
import LineChart from './Component/LineChart/LineChart'
import Phone from './Component/Phones/Phone'
function App() {
  

  return (
    <>
    <Navbar></Navbar>
     <DaisyNav></DaisyNav>
      {/* <h1 className='font-bold'>Vite + React</h1> */}
      <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     <Phone></Phone>
    </>
  )
}

export default App
