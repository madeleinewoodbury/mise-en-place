import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div id="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto py-3">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your Mise en Place account
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
