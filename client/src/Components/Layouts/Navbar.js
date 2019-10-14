import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isAuth: false
  };
  render() {
    const NavFalse = (
      <ul style={{ float: 'right' }}>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
    const navTrue = (
      <ul style={{ float: 'right' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    );
    return (
      <div className="navbar bg-danger" style={{ height: '3rem' }}>
        <h3 className="welcome" style={{ float: 'left' }}>
          {this.props.title}
        </h3>
        {this.state.isAuth === true ? navTrue : NavFalse}
      </div>
    );
  }
}

export default Navbar;
