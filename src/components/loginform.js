import React, {useState} from 'react'

const Loginform = ({Login, error}) => {

    const [details, setDetails] = useState({username: "", password: ""})
    const submitHandler = e => {
        e.preventDefault()
        Login(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <h2>Login</h2>
            </div>
            <div className='form-group'>
                <label htmlFor='username'>Username:</label>
                <input type="text" name='username' id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username} />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
            </div>
            <input type="submit" value="Login"/>
            {error !== "" ? (<div className='error'>{error}</div>) : ""}
        </form>
    )
}

export default Loginform