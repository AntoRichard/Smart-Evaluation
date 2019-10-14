import React, { Component } from 'react';
import axios from 'axios';
import InputFeild from '../Layouts/Questions/InputFeild';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: ''
    };
  }
  onChangeHandler = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmitHandler = async () => {
    console.log(this.state);
    this.setState({
      name: '',
      email: '',
      phone: '',
      password: ''
    });
    try {
      const data = await axios.post('/register', this.state);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  render() {
    const style = {
      container: {
        padding: '30px',
        border: '2px solid #ccc',
        boxShadow: '8px 8px #eee'
      },
      button: {
        backgroundColor: '#003699',
        color: '#fff',
        padding: '6px 10px',
        borderRadius: '4px',
        width: '100%'
      }
    };
    return (
      <div className="form-container" style={style.container}>
        <h1>REGISTER PAGE</h1>
        <InputFeild
          title="NAME"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={this.state.name}
          onChangeHandler={this.onChangeHandler}
        />
        <InputFeild
          title="E-EMAIL"
          type="text"
          name="email"
          placeholder="Enter your e-mail address"
          value={this.state.email}
          onChangeHandler={this.onChangeHandler}
        />
        <InputFeild
          title="PHONE"
          type="number"
          name="phone"
          placeholder="Enter your phone number"
          value={this.state.phone}
          onChangeHandler={this.onChangeHandler}
        />
        <InputFeild
          title="PASSWORD"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={this.state.password}
          onChangeHandler={this.onChangeHandler}
        />
        <input
          type="submit"
          value="Register"
          className="btn btn-success btn-block"
          onClick={this.onSubmitHandler}
        />
      </div>
    );
  }
}

export default Register;
