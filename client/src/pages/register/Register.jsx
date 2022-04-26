import React from 'react'
import "./register.css"
import axios from "axios"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const username = useRef();
  const email = useRef() ; 
  const password = useRef();
  const passwordAgain = useRef();
  
  //hook for redirection operation to previous page or any other page
  //const history = useHistory()
  const navigate = useNavigate();

  const handleClick = async (e)=>{
      e.preventDefault();
      if(passwordAgain.current.value !== password.current.value){
          passwordAgain.current.setCustomValidity("Passwords dont' match")
      }
      else{
        const user = {
          username : username.current.value,
          email : email.current.value,
          password : password.current.value,
          passwordAgain: passwordAgain.current.value
        }
        try{
          await axios.post("/auth/register" ,user);
          navigate('/login');
          //history.push("/login")
        } catch(err){
          console.log(err);
        }
        
      }

  }


  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Ubiquitous</h3>
          <span className="registerDesc">Connect with people around you</span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
          <input placeholder='Username' required ref={username}  className="registerInput" />
            <input placeholder='Email' required ref={email} type="email" className="registerInput" />
            <input placeholder='Password' required ref={password} type="password" minLength="5" className="registerInput" />
            <input placeholder='Password Again' required ref={passwordAgain} type="password" minLength="5" className="registerInput" />
            
            <button className="registerButton" type="submit" >Sign Up</button>
            <button className="registerRegisterButton">Log in to account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
