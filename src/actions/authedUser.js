export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SET_LOGOUT_USER = 'SET_LOGOUT_USER';

export function setAuthedUser(id) {
    return (dispatch, getState) => {
        const { users } = getState();
        dispatch({
            type: SET_AUTHED_USER,
            id,
            users
        });
    }
}

export function setLogoutUser() {
    return {
        type: SET_LOGOUT_USER
    }
}