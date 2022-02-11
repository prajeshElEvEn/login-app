import React, {Component} from "react";
// import axios from "axios";

export default class LoginPage extends Component {

    // constructor(props) {
    //     super(props)

    //     this.onChangeUsername = this.onChangeUsername.bind(this)
    //     this.onChangePassword = this.onChangePassword.bind(this)
    //     this.onSubmit = this.onSubmit.bind(this)

    //     this.state = {
    //         username: '',
    //         password: '',
    //         users: []
    //     }
    // }
    // onChangeUsername(e) {
    //     this.setState({
    //         username: e.target.value
    //     })
    // }
    // onChangePassword(e) {
    //     this.setState({
    //         password: e.target.value
    //     })
    // }
    // onSubmit(e) {
    //     e.preventDefault()

    //     const user = {
    //         username: this.state.username,
    //         password: this.state.password,
    //     }

    //     // console.log(user)

    //     axios.get('http://localhost:5000/users/', user)
    //     .then(res => console.log(res.data))

    //     this.setState({
    //         users: this.state.users.filter(el => el.username !== username)
    //     })

    //     // window.location = '/'
    //     this.setState({
    //         username: "",
    //         password: ""
    //     }) 
    // }

    render() {
        return(
            <div>
                <h1>Login Here.</h1>
                {/* <form onSubmit={this.onSubmit} className="form">
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.onChangeUsername}
                            value={this.state.username}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            required
                            className="form-control"
                            onChange={this.onChangePassword}
                            value={this.state.password}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Login"
                        />
                    </div>
                </form> */}
            </div>
        )
    }
}