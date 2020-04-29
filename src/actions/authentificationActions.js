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

export function loginSuccess(token, user) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        logged: true,
        credentials: {
            token: token,
            username: user
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