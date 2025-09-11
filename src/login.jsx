import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './css/login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        {/* Left Panel */}
        <div className="leftPanel">
          <h2>Welcome to S201 ERP Project</h2>
          <p>Check all the ERP options here</p>
        </div>

        {/* Right Panel */}
        <div className="rightPanel">
          <div className="card">
            <input type="text" placeholder="Enter the email" />
            <input type="password" placeholder="Enter the Password" />
            <button>Login</button>
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
