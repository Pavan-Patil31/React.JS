import React, { useEffect, useState } from "react";
import formIamge from "../assets/formImage.jpg";
import HomePage from "./HomePage";
import './LoginPage.css'
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()
    const [loggedUser, setLoggedUser] = useState()
    const [isLoggedIn,setIsLoghgedIn] = useState(false)


    useEffect(()=>{
      const loggedInUser = JSON.parse(localStorage.getItem('user'))
      setLoggedUser(loggedInUser);
    },[])

console.log(loggedUser);



function handleFormSubmit(event){
    event.preventDefault();
    if(email == loggedUser.email && password == loggedUser.password){
      toast.success('Yov have logged in suceesfully')
      setIsLoghgedIn(true);
    }else{
      toast.error('credentials inValid')
    }

}
console.log(email, password);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={formIamge} alt="fruit image" className="img-fluid" />
        </div>
        <div className="col">
          <form onSubmit={handleFormSubmit}>
            <h3>Login </h3>
            <br></br>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <a href="">If Not Registered</a>

          </form>
        </div>
      </div>
  
  {isLoggedIn ? <p>logged In</p>    : <p>Please Log in</p>}

  <br></br>

  {isLoggedIn && <HomePage />}
  <ToastContainer />
    </div>
  );
};

export default LoginPage;