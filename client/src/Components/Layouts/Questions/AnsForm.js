import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AnsForm extends Component {
  state = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: ''
  };

  onChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onSubmitHandler = async url => {
    const res = await axios.post(`/${url}`, this.state);
    console.log(res);
  };
  render() {
    const {
      title,
      no,
      question,
      onChangeNextHandler,
      onChangePrevHandler,
      stop,
      url,
      size
    } = this.props;
    const style = {
      container: {
        margin: '80px'
      },
      button: {
        marginTop: '15px',
        display: 'flex',
        float: 'right'
      }
    };
    const text = this.state[no];
    return (
      <div className="container" style={style.container}>
        <u>
          <h2 style={{ textAlign: 'left', paddingBottom: '10px' }}>{title}</h2>
        </u>
        <h5>
          {no}. {question}
        </h5>
        <br />
        <label>Answer :</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={size}
          name={no}
          value={text}
          onChange={this.onChangeHandler}
        />
        {no !== 1 ? (
          <button
            className="btn btn-primary"
            style={{ marginTop: '15px' }}
            onClick={onChangePrevHandler}
          >
            Previous
          </button>
        ) : null}

        {no == stop ? (
          <Link
            to="/index"
            className="btn btn-success"
            style={style.button}
            onClick={this.onSubmitHandler.bind(this, url)}
          >
            Submit
          </Link>
        ) : (
          <button
            className="btn btn-primary"
            style={style.button}
            onClick={onChangeNextHandler}
          >
            Next
          </button>
        )}
      </div>
    );
  }
}

export default AnsForm;
