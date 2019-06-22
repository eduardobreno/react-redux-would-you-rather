import { showLoading, hideLoading } from 'react-redux-loading';
import { getAllUsers, saveAnswer, saveQuestion, getAllQuestions } from '../utils/api';
import { receiveUsers, addQuestionUser } from './users';
import { setAuthedUser, setLogoutUser } from './authedUser';
import { addAnswerQuestion, addQuestion, receiveQuestions } from './questions';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        Promise.all([
            getAllUsers(),
            getAllQuestions()
        ]).then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    }
}

export function login(user_id) {
    return (dispatch) => {
        return dispatch(setAuthedUser(user_id));
    };
}

export function logout() {
    return (dispatch) => {
        return dispatch(setLogoutUser());
    };
}

export function addAnswer(authedUser, qid, answer) {
    const obj = {
        authedUser: authedUser.id,
        qid,
        answer
    }
    return (dispatch) => {
        dispatch(showLoading());
        saveAnswer(obj).then(() => {
            dispatch(addAnswerQuestion(authedUser, qid, answer));
            dispatch(hideLoading());
        });
    }
}

export function addQuestionByUser(authedUser, optionOne, optionTwo) {
    return (dispatch) => {
        dispatch(showLoading());
        saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser.id
        }).then(question => {
            dispatch(hideLoading());
            dispatch(addQuestionUser(question));
            dispatch(addQuestion(question));
        });
    }
}