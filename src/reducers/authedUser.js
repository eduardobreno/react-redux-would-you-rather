import { SET_AUTHED_USER, SET_LOGOUT_USER } from '../actions/authedUser';
import { ADD_ANSWER } from '../actions/questions';

export default function authedUser(state = null, action) {

  switch (action.type) {
    case SET_AUTHED_USER:
      return action.users[action.id];
    case SET_LOGOUT_USER:
      return null;
    case ADD_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.qid]: action.answer
        }
      }
    default:
      return state;
  }
}
