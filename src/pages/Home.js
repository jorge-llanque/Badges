import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ParticleComponent from "../components/ParticleComponent";
import './styles/Home.css';
import graphsLogo from "../images/gr.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ParticleComponent className="Home__ParticleComponent" />
          <div className="container">
            <div className="row">
              <div className="Home__col col-12 col-md-4">
                <h1>Badge Management System</h1>
                <Link className="btn btn-primary" to="/badges">
                  Start
                </Link>
              </div>

              <div className="Home__col d-none d-md-block col-md-8">
                <img
                  src={graphsLogo}
                  alt="Astronauts"
                  className="img-fluid p-4"
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}