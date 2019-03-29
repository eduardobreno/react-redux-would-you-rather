import { getAllUsers } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getAllUsers()
      .then(users => {
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}