import React, { Component } from 'react';
import Search from './Search';
import Show from './Show';
import User from './User';
import Spinner from '../Layouts/Spinner/Spinner';
import Alert from '../Layouts/Alert';
import axios from 'axios';

class Result extends Component {
  state = {
    details: null,
    user: null,
    isSearch: false,
    loading: true,
    alert: false
  };
  componentDidMount = async () => {
    const response = await axios.get('/getdata');
    this.setState({ details: response.data, loading: false });
  };
  searchValue = name => {
    const { details } = this.state;
    const user = details.filter(usr => usr.name === name);
    if (user.length) {
      this.setState({ user });
      this.setState({ isSearch: true });
    } else {
      this.setState({ alert: true });
      setTimeout(() => {
        this.setState({ alert: false });
      }, 2000);
    }
  };
  clearHandler = () => {
    this.setState({ isSearch: false });
  };
  render() {
    const { isSearch, details, loading, user, alert } = this.state;
    let show = null;
    if (isSearch) {
      show = (
        <User
          user={user}
          clear={this.clearHandler}
          history={this.props.history}
        />
      );
    } else {
      show = <Show details={details} history={this.props.history} />;
    }
    return (
      <div className="container">
        <Alert alert={alert} />
        <Search SearchValue={this.searchValue} />
        {loading ? Spinner : show}
      </div>
    );
  }
}

export default Result;
