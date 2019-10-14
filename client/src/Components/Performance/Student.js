import React, { Component } from 'react';
import Performance from '../Layouts/Performance/Performance';
import axios from 'axios';

class Student extends Component {
  state = {
    usr: {}
  };
  componentDidMount = async () => {
    const id = this.props.match.params.student;
    const response = await axios(`/getuser/${id}`);
    this.setState({ usr: response.data.usr });
    console.log(this.state);
  };
  render() {
    const { usr } = this.state;
    return (
      <div>
        <Performance info={usr} />
      </div>
    );
  }
}

export default Student;
