import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA.js';
import { showLoading, hideLoading } from 'react-redux-loading';
import { receiveQuestions } from '../actions/questions.js';

export function getAllUsers() {
  return _getUsers();
}

export function getAllQuestionsAfterLogin() {
  return (dispatch) => {
    dispatch(showLoading())
    return getAllQuestions()
      .then((questions) => {
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function getAllQuestions() {
  return _getQuestions()
}

export function saveAnswer(obj) {
  return _saveQuestionAnswer(obj);
}

export function saveQuestion(obj) {
  return _saveQuestion(obj)
}