import { showLoading, hideLoading } from 'react-redux-loading';
import { _getUsers } from './_DATA.js';
import { receiveUsers } from '../actions/users';


export function getAllUsers () {
    return (dispatch) => {
      dispatch(showLoading())
      return _getUsers()
        .then((users) => {
          dispatch(receiveUsers(users))
          dispatch(hideLoading())
        })
    }
}