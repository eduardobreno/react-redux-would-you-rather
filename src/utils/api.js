import { showLoading, hideLoading } from 'react-redux-loading';
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA.js';
import { receiveUsers } from '../actions/users';
import { receiveQuestions } from '../actions/questions';


export function getAllUsers() {
  return (dispatch) => {
    dispatch(showLoading())
    return _getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}

export function getAllQuestions() {
  return (dispatch) => {
    dispatch(showLoading())
    return _getQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function saveAnswer(obj) {
  return _saveQuestionAnswer(obj);
}

export function saveQuestion(obj) {
  return _saveQuestion(obj)
}