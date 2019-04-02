import { getAllUsers } from '../utils/api';
import { receiveUsers } from './users';
import { setAuthedUser, setLogoutUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getAllUsers().then(users => {
            dispatch(receiveUsers(users));
            dispatch(hideLoading());
        })
    }
}

export function login(user_id, users) {
    return (dispatch) => {
        return dispatch(setAuthedUser(user_id, users));
    };
}

export function logout() {
    return (dispatch) => {
        return dispatch(setLogoutUser());
    };
}