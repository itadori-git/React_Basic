import React, { useState } from 'react'
import Button from './Button'

function Home() {
    // var count = 0
    const state = useState(0)
    const firstItem = state[0]
    const secondItem = state[1]
    const increseCount = () => {
        secondItem(firstItem + 1)
        
    }
  return (
      <div>
        <h1>{firstItem}</h1>

        <button onClick={increseCount}>+</button>
    </div>
  )
}

export default Home


