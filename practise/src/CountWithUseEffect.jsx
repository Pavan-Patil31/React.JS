import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import React, {useEffect, useState}from "react";

 const CountWithUseEffect =() => {
    const[count, setCount] = useState(0)

    function handleIncrement(){
        setTimeout(() => {
            setCount((count) => count + 1);


        }, 1000)
    }

    useEffect(() =>{
        handleIncrement();
        console.log("happy learning")
    },[setCount])

    console.log(count)
  return (
    <div>
      hello 
    </div>
  )
}

export default CountWithUseEffect
