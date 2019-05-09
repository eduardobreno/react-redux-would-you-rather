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

function mapStateToProps({ questions, authedUser, users }) {
    let answered = [];
    let unanswered = [];
    Object.keys(questions).forEach(key => {
        if (questions[key].optionOne.votes.indexOf(authedUser.id) !== -1 ||
            questions[key].optionTwo.votes.indexOf(authedUser.id) !== -1) {
            answered.push(formatQuestionObject(questions[key], users));
        }

        if (questions[key].optionOne.votes.indexOf(authedUser.id) === -1 &&
            questions[key].optionTwo.votes.indexOf(authedUser.id) === -1) {
            unanswered.push(formatQuestionObject(questions[key], users));
        }
    });
    return { unanswered, answered };
}

function formatQuestionObject(question, users) {
    return { ...question, avatarURL: users[question.author].avatarURL };
}


export default connect(mapStateToProps)(Dashboard)