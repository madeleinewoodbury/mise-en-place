import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav id="main-nav" className="navbar navbar-expand-lg navbar-light py-2">
        <div className="container">
          <a href="/" className="navbar-brand">
            <i className="fas fa-utensils fa-2x align-middle" />
            <h3 className="d-inline align-middle pl-2">Mise en Place</h3>
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="recipes.html" className="nav-link">
                  Recipes
                </a>
              </li>
              <li className="nav-item">
                <a href="login.html" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="register.html" className="nav-link">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
