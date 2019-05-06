import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllQuestions } from '../utils/api';

class Leaderboard extends Component {

    componentDidMount() {
        this.props.dispatch(getAllQuestions())
    }

    render() {
        const { leaderBoard } = this.props;
        return (
            <div className="container">
                {leaderBoard.map(user => {
                    return (
                        <ol>
                            <li>
                                <img src={user.avatarURL} /><br />
                                {user.name} <br />
                                answered: {user.answered} <br />
                                asked: {user.asked}</li>
                        </ol>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    const usersKey = Object.keys(users);
    const leaderBoard = usersKey.map((keyUser) => {
        return {
            ...users[keyUser],
            asked: users[keyUser].questions.length,
            answered: Object.keys(users[keyUser].answers).length
        };
    });
    leaderBoard.sort((a, b) => {
        return b.asked - a.asked || b.answered - a.answered;

    });
    return { leaderBoard };
}

export default connect(mapStateToProps)(Leaderboard)