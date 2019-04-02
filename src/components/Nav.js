import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/shared';

class Nav extends Component {

    handleLogout = () => {
        const { dispatch } = this.props;
        dispatch(logout());
    }

    render() {
        const { authedUser } = this.props;

        return (
            <div className="container">
                <b>Home</b> -
                <b>New Question</b> -
                <b>Leader Board</b> -
                {authedUser && <b>Hello {authedUser.name} -</b>}
                {authedUser && <button onClick={this.handleLogout}><b>Logout</b></button>}
            </div>
        );
    }
}

function mapStateToProps(authedUser) {
    return authedUser;
}

export default connect(mapStateToProps)(Nav)