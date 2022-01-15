import React, {Component} from "react";
import {Link} from "react-router-dom"

export default class Navbar extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Login App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button> 
                <div>
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Register</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/show">Show All Users</Link>
                    </li>
                  </ul>
                </div>
                </nav>
            </div>
        )
    }
}