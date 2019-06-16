import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllQuestions } from '../utils/api';
import QuestionList from './QuestionList';
import { getQuestionsStatus } from '../utils/questionsUtil';

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
    return getQuestionsStatus(questions, authedUser, users);
}

export default connect(mapStateToProps)(Dashboard)