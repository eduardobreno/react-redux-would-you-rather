import { SET_AUTHED_USER } from '../actions/authedUser'
import { SET_LOGOUT_USER } from '../actions/authedUser'

export default function authedUser(state = null, action) {
  
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.users[action.id];
    case SET_LOGOUT_USER:
      return null;
    default:
      return state;
  }
}