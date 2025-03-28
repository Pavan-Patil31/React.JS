import React, { useState } from "react";
import formIamge from "../assets/formImage.jpg";

const RegisterPage = () => {
    const [name, setName] =useState()
    const [email,setEmail] = useState()
    const [password, setPassword] = useState()


function handleFormData(){
    const payload = {name:name,email:email, password:password}
    console.log(payload);
    // setEmail('')
    // setPassword('')
    localStorage.setItem('user',JSON.stringify(payload))
}

console.log(email, password);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={formIamge} alt="fruit image" className="img-fluid" />
        </div>
        <div className="col">
          <form >
          <h3>Register Here</h3>
          <br></br>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                 Your Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address :
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
                Password :
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

               <button className="btn btn-primary" onClick={handleFormData}>
              Register
            </button>
            <a href=''>If already Registered</a>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default RegisterPage;