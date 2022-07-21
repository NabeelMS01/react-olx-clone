import React from "react";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { useContext } from "react";
import { AuthContext } from "../../store/Context";
import firebase from '../../firebase/config'
import { Navigate, useNavigate } from "react-router-dom";

function Header() {
  const { user } = useContext(AuthContext);
  const navigate= useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={()=>{
          navigate('/')
        }} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
     
         {
       user?   <span > {user ? user.displayName : "Login"}</span>: <span onClick={()=>{navigate('login')}} > {user ? user.displayName : "Login"}</span>
         }


          <hr />
       
          <hr />
        </div>
        { user &&<span onClick={()=>{
          firebase.auth().signOut().then((e)=>{
            navigate('/')
          })
        }} > Logout </span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div onClick={()=>{
            navigate('/sell')
          }} className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
