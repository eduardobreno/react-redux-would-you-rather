import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props;
        return <Route {...rest} render={(props) => {
            return (
                !!rest.authedUser
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/',
                        state: { redirectTo: props.location }
                    }} />
            )
        }} />
    }
}

function mapStateToProps(users) {
    return users;
}

export default connect(mapStateToProps)(PrivateRoute);