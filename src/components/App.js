import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'

import { getAllUsers } from '../utils/api';
import Login from './Login';
import Nav from './Nav';
import Dashboard from './Dashboard';
import PrivateRoute from '../utils/PrivateRoute';
import Leaderboard from './Leaderboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers())
  }

  render() {
    return (
      <Router>
        <Grid centered columns={2}>
          <Grid.Column>
            <Nav />
            <LoadingBar />
            <div className="App">
              <Switch>
                <Route path='/' exact component={Login} />
                <PrivateRoute path='/home' exact component={Dashboard} />
                <PrivateRoute path='/leaderboard' exact component={Leaderboard} />
                <Route component={Login} />
              </Switch>
            </div>
          </Grid.Column>
        </Grid>
      </Router>
    );
  }
}

export default connect()(App)