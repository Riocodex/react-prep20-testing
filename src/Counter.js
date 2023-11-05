import React from 'react'
import { useState } from 'react'

export const Counter = () => {
  const [count, setCount ] = useState(0)
  return (
    <div>
        <h1 data-testid="count">{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Increase</button>
    </div>
  )
}
