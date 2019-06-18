import { showLoading, hideLoading } from 'react-redux-loading';
import { _getUsers, _getQuestions, _saveQuestionAnswer } from './_DATA.js';
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
  console.log("##### ", obj)
  return _saveQuestionAnswer(obj);
}