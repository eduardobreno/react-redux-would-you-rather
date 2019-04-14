import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import { getAllUsers } from '../utils/api';
import Login from './Login';
import Nav from './Nav';
import Dashboard from './Dashboard';
import PrivateRoute from '../utils/PrivateRoute';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers())
  }

  render() {
    return (
      <Router>
        <Nav />
        <LoadingBar />
        <div className="App">
          <Switch>
            <Route path='/' exact component={Login} />
            <PrivateRoute path='/home' exact component={Dashboard} />
            {/* when none of the above match, <NoMatch> will be rendered */}
            <Route component={Login} />
          </Switch>


        </div>
      </Router>
    );
  }
}

export default connect()(App)