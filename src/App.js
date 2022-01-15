import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css"

import Navbar from './components/navbar.js'
import RegisterPage from './components/register-page.js'
import LoginPage from './components/login-page.js'
import ShowUsers from './components/show-users.js'

function App() {

  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path = "/" exact element={<RegisterPage />}></Route>
          <Route path = "/login" element={<LoginPage />}></Route>
          <Route path = "/show" element={<ShowUsers />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
