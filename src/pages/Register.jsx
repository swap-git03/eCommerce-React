import React from 'react'

const register = () => {
  return (

    <div className="outer-div" >
        <div className="green-box">
          <div className="white">
                  <div className="blue">
                    <h1>Welcome Back!</h1>
                    <p>Provide all your personal details to use all features</p>
                    <button>Sign In</button>
                  </div>
                  <h2>Register With</h2>
                  <i className="fa-brands fa-google-plus-g"></i>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-linkedin"></i>
                  <h3>Or</h3>
                <form className="form" />
                    <div className="input-group">
                    <p className="form-text">Fill out the below information to register</p>
                    <input type="text" placeholder="Name" /><br />
                    <input type="email" placeholder="Email" /><br />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
                </div>
                </div>
            </div>
        </div>
  

)}  

export default register
