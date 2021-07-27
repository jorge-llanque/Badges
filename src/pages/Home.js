import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ParticleComponent from "../components/ParticleComponent";
import './styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ParticleComponent className="Home__ParticleComponent" />
          <div className="container">
              <div className="Home__col">
                <h1>Badges Creator</h1>
                <Link className="btn btn-primary" to="/badges">Start</Link>
              </div>
          </div>
      </div>
    );
  }
}