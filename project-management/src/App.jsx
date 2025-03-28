import { useState } from 'react'
import FetchProjects from './FetchProjects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchProjects/>
    </>
  )
}

export default App
