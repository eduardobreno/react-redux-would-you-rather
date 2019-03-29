import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import { getAllUsers } from '../utils/api';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getAllUsers())
  }

  render() {
    const { list } = this.props;
    return (
      <div className="App">
        <LoadingBar />

        {Object.keys(list).map(function (key) {
          return list[key].name
        })
        }
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    list: users
  }
}

export default connect(mapStateToProps)(App)