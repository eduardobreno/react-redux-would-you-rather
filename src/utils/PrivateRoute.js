import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;
        return <Route {...rest} render={(props) => (
            !!rest.authedUser
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    }
}

function mapStateToProps(users) {
    return users;
}

export default connect(mapStateToProps)(PrivateRoute);