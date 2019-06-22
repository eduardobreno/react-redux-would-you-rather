import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';

import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'


import Login from './Login';
import Nav from './Nav';
import Dashboard from './Dashboard';
import PrivateRoute from '../utils/PrivateRoute';
import Leaderboard from './Leaderboard';
import QuestionDetail from './QuestionDetail';
import QuestionAdd from './QuestionAdd';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Grid style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "800px" }}>
          <Grid.Column>
            <Nav />
            <LoadingBar />
            <div className="App">
              <Switch>
                <Route path='/' exact component={Login} />
                <PrivateRoute path='/home' exact component={Dashboard} />
                <PrivateRoute path='/leaderboard' exact component={Leaderboard} />
                <PrivateRoute path='/add' exact component={QuestionAdd} />
                <PrivateRoute path='/questions/:id' exact component={QuestionDetail} />
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