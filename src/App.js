import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink,Routes } from "react-router-dom";

import SignInForm from "./components/SignInForm";
import image from "./img/secu.jpg"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <div className="appAside">
          <h2> WELCOME ! </h2>
            <img src={image} alt="secu"/>
              
            </div>
            
          <div className="appForm">
            

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>
             </div>

           <Routes>
            <Route path="/sign-in" element={<SignInForm/>} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
