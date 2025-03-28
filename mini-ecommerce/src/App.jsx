import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './ProductList'
import Fruits from './Fruits'

function App() {

  return (
    <>
    <br></br>
    <Fruits />
    <br></br>
      <ProductList />
    </>
  )
}

export default App