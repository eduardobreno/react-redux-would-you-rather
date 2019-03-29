import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { getAllUsers } from '../utils/api';
import Login from './Login';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers())
  }

  render() {
    return (
      <Router>
        <LoadingBar />
        <div className="App">
          <Route path='/' exact component={Login} />
        </div>
      </Router>
    );
  }
}

export default connect()(App)