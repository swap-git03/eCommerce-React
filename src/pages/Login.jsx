import React from 'react'
import './Login.css';


const Login = () => {
  return (
    <>
    <div>
    <div className="outer-div">
        <div className="pink-box">
            <h1>Login Form</h1>
                <div className="btns">
                <button className="active">Login</button>
                <button>Signup</button>
            </div>
            <form className="form">
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="password" />
            <button type="submit" className="Login" >Login</button>
            <a href="">Forgot Password?</a>
        </form>
            <p className="member">Not a member? <a href="#">Signup Now</a></p>
            </div>
        </div>
        </div>
  </>
  )
}

export default Login
