import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import CountWithUseEffect from './CountWithUseEffect'
import CountReducer from './components/CountReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountReducer/>
      {/* <CountWithUseEffect/> */}
        
    </>
  )
}

export default App
