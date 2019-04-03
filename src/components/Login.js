import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/shared';

class Login extends Component {
    state = { user_id: null }

    handleChange = (e) => {
        const user_id = e.target.value;
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
        if (this.props.authedUser) {
            this.props.history.push('home')
        }
    }

    render() {
        const { users } = this.props;
        const usersKey = Object.keys(users);
        const optMsg = usersKey.length ? "Select a user" : "Wait while loading";
        return (
            <div className="container">
                <h2>Sing in</h2>
                <form onSubmit={this.handleSubmit}>
                    <select onChange={this.handleChange}>
                        <option key="0">{optMsg}</option>
                        {usersKey.map(function (key) {
                            return <option value={users[key].id} key={users[key].id}>{users[key].name}</option>
                        })
                        }
                    </select>
                    <input type="submit" value="Sing in" />
                </form>
            </div>
        );
    }
}

function mapStateToProps(users) {
    return users;
}

export default connect(mapStateToProps)(Login)