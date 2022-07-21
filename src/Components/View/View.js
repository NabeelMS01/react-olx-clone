import React,{useState,useEffect,useContext} from 'react';
import { PostContext } from '../../store/PostContext';
import firebase from '../../firebase/config'
import './View.css';
 
function View() {
const [userDetails,setUserDetails]=useState()
const {postDetails} =useContext(PostContext)

useEffect(()=>{
 const { userId} = postDetails
  firebase.firestore().collection('users').where('id', '==',userId).get().then((res)=>{
    res.forEach(doc=>{
setUserDetails(doc.data())
    })
  })
},[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img style={{width:"60%",height:"60%"}}
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>Two Wheeler</p>
          <span>{postDetails.createdAt}</span>
        </div>
       
       { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
