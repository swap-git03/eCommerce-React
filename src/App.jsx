/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useState } from "react";
import Register from "./pages/register";
import Login from "./pages/Login";
function App() {
  const [jobTitle, setJobTitle] = useState("FullStack developer");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user,setUser] = useState('Swap')
 

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1 className="redFont">User Logged In</h1>
        </>
      ) : (
        <>
        <h1 className="greenFont">Please Login</h1>
        </>
      )}
<button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
{isLoggedIn ? 'Logout':'Login'}
</button>
      
<h1 className={`${isLoggedIn ? 'greenBlock ' : 'blueBlock'}`}>Best Style In Focus</h1>

<h1>{isLoggedIn && <span>{user}</span>}</h1>


< Login/>
< Register/> 
    </>
  );
}

export default App;