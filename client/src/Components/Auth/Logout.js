import React, { Component } from 'react';

export default class Logout extends Component {
  componentDidMount() {
    localStorage.setItem('token', null);
    this.props.history.push('/login');
  }
  render() {
    return <div></div>;
  }
}
