import React, { useState } from 'react'
import './Register.css';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister(event){
    event.preventDefault();
    const payload = {
      name: userName,
      email: email,
      password: password,
    };
    console.log(payload, "payload");
    localStorage.setItem('user', JSON.stringify(payload));
    // Optionally, reset fields here
    // setUserName('');
    // setEmail('');
    // setPassword('');
  }

  return (
    <div className="outer-div">
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
          <div className="input-group">
            <form className="form" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Name"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              /><br />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              /><br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              /><br />
              <button type='submit'>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;