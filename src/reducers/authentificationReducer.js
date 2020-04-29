import {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILED
} from "../actions/authentificationActions"

const authInitialState = {
    logged: false,
    error: "",
    type: "",
    credentials: {
        password: "",
        username: "",
        token: ""
    }
};

export default function authentificationReducer(state = authInitialState, action) {
    switch (action.type) {
        case AUTH_LOGIN:
            return { ...state, type: action.type };
        case AUTH_LOGIN_SUCCESS:
            return { ...state, type: action.type, credentials: action.credentials, logged: true};
        case AUTH_LOGIN_FAILED:
            return { ...state, type: action.type, error: action.error};
        default:
            return state;
    }
}