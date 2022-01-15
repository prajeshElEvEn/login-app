import React, {useState} from 'react';
import Loginform from "./components/loginform.js"
import './App.css';

function App() {
  const admin = {
    username: "root",
    password: "root",
  }

  const [user, setUser] = useState({username: "", password: ""})
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)

    if (details.username === admin.username && details.password === admin.password) {
      console.log("Logged in.")
      setUser( {
        username: details.username,
        password: details.password
      })
    } else {
      console.log("Details do not match.")
      setError("Details do not match.")
    }
  }

  const Logout = () => {
    setUser({
      username: "",
      password: ""
    })
  }

  return (
    <div className="container">
      {user.username !== "" ? (
        <div className='welcome'>
          <h1>Welcome, <span>{user.username}</span></h1>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Loginform Login={Login} error={error}/>
      )
      }
    </div>
  );
}

export default App;
