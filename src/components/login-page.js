import React, {Component} from "react";

export default class LoginPage extends Component {
    render() {
        return(
            <div>
                <h1>Login Here.</h1>
            </div>
        )
    }
}

// import React, {useState} from 'react'

// const admin = {
//     username: "root",
//     password: "root",
//   }

//   const [user, setUser] = useState({username: "", password: ""})
//   const [error, setError] = useState("")

//   const Login = details => {
//     console.log(details)

//     if (details.username === admin.username && details.password === admin.password) {
//       console.log("Logged in.")
//       setUser( {
//         username: details.username,
//         password: details.password
//       })
//     } else {
//       console.log("Details do not match.")
//       setError("Details do not match.")
//     }
//   }

//   const Logout = () => {
//     setUser({
//       username: "",
//       password: ""
//     })
//   }

// const Loginform = ({Login, error}) => {

//     const [details, setDetails] = useState({username: "", password: ""})
//     const submitHandler = e => {
//         e.preventDefault()
//         Login(details)
//     }

//     return (
//         <form onSubmit={submitHandler}>
//             <div className='form-inner'>
//                 <h2>Login</h2>
//             </div>
//             <div className='form-group'>
//                 <label htmlFor='username'>Username:</label>
//                 <input type="text" name='username' id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
//             </div>
//             <div className='form-group'>
//                 <label htmlFor='password'>Password:</label>
//                 <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
//             </div>
//             <input type="submit" value="Login"/>
//             {error !== "" ? (<div className='error'>{error}</div>) : ""}
//         </form>
//     )
// }

// {user.username !== "" ? (
//     <div className='welcome'>
//       <h1>Welcome, <span>{user.username}</span></h1>
//       <button onClick={Logout}>Logout</button>
//     </div>
//   ) : (
//     <Loginform Login={Login} error={error}/>
//   )
//   }

// export default Loginform