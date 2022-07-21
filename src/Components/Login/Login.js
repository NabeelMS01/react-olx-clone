import React, { useState,useContext } from "react";
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from "react-router-dom";
import firebase from '../../firebase/config'



function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [message,setMessage]=useState('')
 const navigate =useNavigate()

  const handleSubmit =(e)=>{ 
e.preventDefault()
    console.log(email+password);
firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
 
  navigate('/')

}).catch((error)=>{
 
  setMessage("no user available")

})



  }
  


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
      
        <form onSubmit={handleSubmit}>
        <span style={{color:"red"}} >{message}</span> <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
          onChange={(e)=> setEmail(e.target.value)}
          value={email}
            className="input"
            type="email"
            id="fname"
            name="email"
     
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
          onChange={(e)=> setPassword(e.target.value)}
          value={password}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{
          navigate('/signup')
        }} >Signup</a>
      </div>
    </div>
  );
}

export default Login;
