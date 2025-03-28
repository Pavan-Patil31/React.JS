import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserList from './components/UserList'
import UserDetails from './components/UserDetails'
// import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <BrowserRouter> 
     <div className='d-flex'>
     <div className='customNavbar w-25 bg-dark text-white'>
     <UserList></UserList>
     </div>
     <div className='customDetail w-50'>
     <Routes>
        <Route path='/' element={<p>User Details will show here</p>}></Route>
         <Route path='/user/:ID' element={<UserDetails />}></Route>
     </Routes>
      </div>
      </div>

     </BrowserRouter>
    </>
  );
}

export default App
