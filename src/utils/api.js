import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from './_DATA.js';

export function getAllUsers() {
  return _getUsers();
}

export function getAllQuestions() {
  return _getQuestions();
}

export function saveAnswer(obj) {
  return _saveQuestionAnswer(obj);
}

export function saveQuestion(obj) {
  return _saveQuestion(obj)
}