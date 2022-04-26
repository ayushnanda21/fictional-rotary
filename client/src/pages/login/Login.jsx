import React from 'react'
import { useContext, useRef } from 'react';
import "./login.css"


import {loginCall} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@mui/material"

export default function Login() {

  const email = useRef();
  const password = useRef();
  const {user, isFetching ,error, dispatch} = useContext(AuthContext);
  const handleClick = (e)=>{
    e.preventDefault();
    loginCall({email: email.current.value ,password: password.current.value}, dispatch)
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Ubiquitous</h3>
          <span className="loginDesc">Connect with people around you</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder='Email' type="email" required className="loginInput" ref={email} />
            <input placeholder='Password' type="password" required minLength="5" className="loginInput" ref={password} />
            <button className="loginButton" type="submit" disabled={isFetching} >{isFetching ? (<CircularProgress  color="secondary"  /> ) : ( "Log In" )} </button>
            <span className="loginForgot">Forgotten Password ? </span>
            <button className="loginRegisterButton">{isFetching ? (<CircularProgress /> ) :( "Create account" )}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
