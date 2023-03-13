import {useState} from "react"

const Counter = () =>{
    const [count,setCount]=useState(0)

  const incrementCount = () =>{
    setCount((Count)=>{
        return Count+1
    })
  }

  const decrementCount = () =>{
    setCount((Count)=>{
        return Count-1
    })
  }

    return (
        <>
      <h1> Counter : {count}</h1>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      </>
    )

}


export default Counter;
