import React,{useEffect,useContext} from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import View from './Pages/ViewPost'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import firebase from './firebase/config'
import Create from './Pages/Create'
import { useNavigate } from "react-router-dom";
/**
 * ?  =====Import Components=====
 */ 
import Home from './Pages/Home';
import { AuthContext } from './store/Context';
import Post from './store/PostContext';
 
function App() {
const {user,setUser} =useContext(AuthContext)

useEffect(()=>{
 console.log(user);
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
})


  return (
    <div>
<BrowserRouter> 
<Post>  
<Routes>
          <Route path="/" element={<Home />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/sell" element={< Create/>} />
  <Route path="/view" element={< View/>} />
</Routes>
</Post>
</BrowserRouter>

      
    </div>
  );
}

export default App;
