import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { logout } from '../actions/shared';

class Nav extends Component {
    state = { activeItem: '/' }

    handleLogout = () => {
        const { dispatch } = this.props;
        this.setState({ activeItem: 'logout' })
        dispatch(logout());
        this.handleNavigation("/");
    }

    handleNavigation = (url) => {
        const { history } = this.props;
        this.setState({ activeItem: url })
        history.push(url);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
        const { activeItem } = this.state
        const { authedUser } = this.props;

        return (

            <Menu pointing secondary>
                <Menu.Item name='home'
                    active={activeItem === '/home'}
                    onClick={() => { this.handleNavigation("/home") }}
                />
                <Menu.Item
                    name='New Question'
                    active={activeItem === '/add'}
                    onClick={() => { this.handleNavigation("/add") }}
                />
                <Menu.Item
                    name='LeaderBoard'
                    active={activeItem === '/leaderboard'}
                    onClick={() => { this.handleNavigation("/leaderboard") }}
                />
                {authedUser &&
                    <Menu.Menu color="purple" position='right'>
                        <Menu.Item
                            name={`Hello, ${authedUser.name}`}
                        />
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleLogout}
                        />
                    </Menu.Menu>}
            </Menu>
        );
    }
}

function mapStateToProps(authedUser) {
    return authedUser;
}

export default withRouter(connect(mapStateToProps)(Nav))