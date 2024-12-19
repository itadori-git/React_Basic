import React, { useEffect, useState } from 'react'
import { use } from 'react'
import Button from './Button'
function UseEffect() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    //first type of useeffect
    // useEffect(() => {
    //     console.log("Hello inside from useEffect")
    // })

    //second type of useeffect
    // useEffect(()=>{
    //     console.log("Hello I am groot")
    // },[count,count2])



    //third type of useeffect
    useEffect(()=>{
        console.log("Third type of useeffect")
    })
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{count2}</h1>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
    </div>
  )
}

export default UseEffect
