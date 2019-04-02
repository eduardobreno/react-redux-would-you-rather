import { getAllUsers } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getAllUsers()
            .then(users => {
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