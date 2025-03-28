// import  React ,{ useState, useEffect } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage.jsx'
import data from './data.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import MainNavbar from './components/MainNavbar.jsx'

function App() {

  // const [count, setCount] = useState(0)
  return (
    <>
    <BrowserRouter>
    {/* <MainNavbar/> */}
    <Routes>
      <Route path='/login' element={<LoginPage />}></Route>
      <Route path='/register' element={<RegisterPage />}></Route>
      <Route path='/home' element={<HomePage  data={data}/>}></Route>
    </Routes>
    
    
    
    </BrowserRouter>
      <RegisterPage />

      <LoginPage />
      <HomePage data={data} />
    </>
  )
}

export default App