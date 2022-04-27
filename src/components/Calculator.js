import React from 'react'
import Screen from './Screen'
import Operators from './Operators'
import Digits from './Digits'



export default function Calculator() {
  return (
    <div className='calculator'>
        <Screen></Screen>
        <Operators></Operators>
        <Digits></Digits>
    </div>
  )
}
