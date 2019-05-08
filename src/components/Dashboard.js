import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllQuestions } from '../utils/api';
import QuestionList from './QuestionList';

class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(getAllQuestions())
    }

    render() {
        const { answered, unanswered } = this.props;
        return (
            <div className="container">
                <QuestionList answered={answered} unanswered={unanswered} />
            </div>
        );
    }
}

function mapStateToProps({ questions, authedUser }) {
    let answered = [];
    let unanswered = [];
    Object.keys(questions).forEach(key => {
        if (questions[key].optionOne.votes.indexOf(authedUser.id) !== -1 ||
            questions[key].optionTwo.votes.indexOf(authedUser.id) !== -1) {
            answered.push(questions[key]);
        }

        if (questions[key].optionOne.votes.indexOf(authedUser.id) === -1 &&
            questions[key].optionTwo.votes.indexOf(authedUser.id) === -1) {
            unanswered.push(questions[key]);
        }
    });
    return { unanswered, answered };
}

export default connect(mapStateToProps)(Dashboard)