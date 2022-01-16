import React, {Component} from "react";
import axios from "axios";

const User = props => ( 
    <tr>
        <td>
            {props.user.username}
        </td>
        <td>
            {props.user.password}
        </td>
        <td>
            <button className="btn btn-primary" onClick={() => {props.deleteUser(props.user._id)}}>Delete</button>
        </td>
    </tr>
)

export default class ShowUsers extends Component {
    constructor(props) {
        super(props)

        this.deleteUser = this.deleteUser.bind(this)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
        .then(response => {
            this.setState({ users: response.data})
        })
        .catch((error) => {
            console.log(error)
        })
    }

    deleteUser(id) {
        axios.delete('http://localhost:5000/users/'+id)
        .then(res => console.log(res.data))

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    userList() {
        return this.state.users.map(currentuser => {
            return <User user={currentuser} deleteUser={this.deleteUser} key={currentuser._id} />
        })
    }

    render() {
        return(
            <div className="showUsers">
                <h1>All Users.</h1>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>
        )
    }
}