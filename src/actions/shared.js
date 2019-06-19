import { showLoading, hideLoading } from 'react-redux-loading';
import { getAllUsers, saveAnswer, saveQuestion } from '../utils/api';
import { receiveUsers, addQuestionUser } from './users';
import { setAuthedUser, setLogoutUser } from './authedUser';
import { addAnswerQuestion } from './questions';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getAllUsers().then(users => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        })
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

export function addQuestion(authedUser, optionOne, optionTwo) {
    return (dispatch) => {
        dispatch(showLoading());
        saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: authedUser.id
        }).then(question => {
            dispatch(hideLoading());
            dispatch(addQuestionUser(question));
        });
    }
}