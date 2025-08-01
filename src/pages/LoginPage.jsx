/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState('random@gmail.com')
    const [password,setPassword] = useState('random') 

  return (
    <div className='container w-50 mx-auto border shadow mt-5 rounded-2 p-3'>
      <form>
        <h1>Login page</h1>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default LoginPage