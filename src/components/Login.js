import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dropdown, Button, Form } from 'semantic-ui-react'

import { login } from '../actions/shared';

class Login extends Component {
    state = { user_id: null }

    handleChange = (e, { value }) => {
        const user_id = value;
        this.setState(() => ({
            user_id
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { user_id } = this.state;
        const { dispatch } = this.props
        dispatch(login(user_id));

    }

    componentDidUpdate() {
        const { history, authedUser, location } = this.props;
        let path = "home";
        if (location.state) {
            path = location.state.redirectTo.pathname;
        }

        if (authedUser) {
            history.push(path, { ...location.state, redirectTo: null });
        }
    }

    render() {
        const { users } = this.props;
        const usersKey = Object.keys(users);
        const optMsg = usersKey.length ? "Select a user" : "Wait while loading";

        const usersOptions = usersKey.map((key) => {
            return {
                key: users[key].id,
                text: users[key].name,
                value: users[key].id,
                image: { avatar: true, src: users[key].avatarURL },
            }
        });

        return (
            <div className="containerLogin" style={{ textAlign: 'center' }}>
                <h3>Welcome to the Would You Rather App!</h3>
                <h5>Please sign in to continue</h5>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>

                        <Dropdown
                            onChange={this.handleChange}
                            placeholder={optMsg}
                            fluid
                            selection
                            options={usersOptions}
                        />
                    </Form.Field>

                    <Button
                        type="submit"
                        color='blue'
                        fluid
                        content='Sing in' />
                </Form>
            </div>
        );
    }
}

function mapStateToProps(users) {
    return users;
}

export default connect(mapStateToProps)(Login)