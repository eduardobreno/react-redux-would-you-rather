import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {

  render() {
    const { users } = this.props;
    const usersKey = Object.keys(users); 
    const optMsg = usersKey.length ? "Select a user" : "Wait while loading";
    return (
      <div className="App">
        <select>
          <option key="0">{optMsg}</option>
          {usersKey.map(function (key) {
            return <option value={users[key].id} key={users[key].id}>{users[key].name}</option>
          })
          }
        </select>
      </div>
    );
  }
}

function mapStateToProps(users) {
  return users;
}

export default connect(mapStateToProps)(Login)