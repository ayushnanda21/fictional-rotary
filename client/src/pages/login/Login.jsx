import React from 'react'
import { useRef } from 'react';
import "./login.css"

export default function Login() {

  const email = useRef();
  const password = useRef();
  const handleClick = (e)=>{
    e.preventDefault();
    console.log(email.current.value)
  }
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
            <input placeholder='Password' type="password" required minLength="6" className="loginInput" ref={password} />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgotten Password ? </span>
            <button className="loginRegisterButton">Create account</button>
          </form>
        </div>
      </div>
    </div>
  )
}
