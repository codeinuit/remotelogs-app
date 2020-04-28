export const AUTH_LOGIN = "AUTH_LOGIN"
export const AUTH_LOGIN_SUCCESS = "AUTH_LOGIN_SUCCESS"
export const AUTH_LOGIN_FAILED = "AUTH_LOGIN_FAILED"

export function login(username, password) {
    return {
        type: AUTH_LOGIN,
        credentials: {
            username: username,
            password: password
        }
    };
}

export function loginSuccess(token) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        logged: true,
        credentials: {
            token: token
        }
    };
}

export function loginFailed(err) {
    return {
        type: AUTH_LOGIN_FAILED,
        logged: false,
        error: "Error: invalid identifiers"
    };
}