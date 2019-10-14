import React, { Component } from 'react';
import Navbar from './Components/Layouts/Navbar';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import Index from './Components/Index';
import TwoMarks from './Components/Questions/TwoMarks';
import ThirteenMarks from './Components/Questions/ThirteenMarks';
import FifteenMarks from './Components/Questions/FifteenMarks';
import Result from './Components/Results/Result';
import Logout from './Components/Auth/Logout';
import Student from './Components/Performance/Student';
import UploadQue from './Components/upload/Questions/UploadQes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar title="Smart Evaluation" />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Index} />
            <Route exact path="/twomarks" component={TwoMarks} />
            <Route exact path="/thirteenmarks" component={ThirteenMarks} />
            <Route exact path="/fifteenmarks" component={FifteenMarks} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/logout" component={Logout} />
            <Route
              exact
              path="/result/:student"
              render={props => <Student {...props} />}
            />
            <Route exact path="/upload" component={UploadQue} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
