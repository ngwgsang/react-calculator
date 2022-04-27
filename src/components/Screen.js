import React from 'react'
import { useState } from 'react'

export default function Screen() {
    // const [ calc, setCalc] = useState("") 
    // const [ result, setResult] = useState("") 
    // const updateCalc = (val) => {
    //     setCalc ( calc +  val )
    // }



  return (
    <div className='screen'>
        {/* { result ? <span>(0)</span> :  "" }
        { calc || "0" } */}

        <span>(0)</span>
        0
    </div>
  )
}
