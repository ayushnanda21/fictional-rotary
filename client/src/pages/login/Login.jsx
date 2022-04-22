import React from 'react'
import "./login.css"

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Ubiquitous</h3>
          <span className="loginDesc">Connect with people around you</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder='Email' type="email" className="loginInput" />
            <input placeholder='Password' type="password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgotten Password ? </span>
            <button className="loginRegisterButton">Create account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
