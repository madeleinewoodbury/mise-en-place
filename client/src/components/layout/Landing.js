import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div id="landing" className="py-5">
        <div className="primary-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-white">
                <h1 className="display-5 mt-4 pt-4">
                  "A recipe is a story that ends with a good meal"
                </h1>
                <h3>
                  <em>- Pat Conroy</em>
                </h3>
                <p className="lead mt-3 p-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  <a href="/" className="btn btn-primary btn-lg mt-3">
                    View Recipes
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
