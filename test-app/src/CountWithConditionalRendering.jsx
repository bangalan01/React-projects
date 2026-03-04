import React, { useState } from 'react'


const CountWithConditionalRendering = () => {
    const[count,setCount]=useState(0)

    const incrementCount =()=>{
        setCount(count+1)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h2>counter app</h2>
        <p>count:{count}</p>
        <button onClick={incrementCount}>increase count</button>
        {count>5 && <p>Limit reached!</p>}
      
    </div>
  )
}

export default CountWithConditionalRendering
