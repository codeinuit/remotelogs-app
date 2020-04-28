import {
    GET_LOGS,
    GET_LOGS_SUCCESS,
    GET_LOGS_FAILED,
    GET_SYS_NAME,
    GET_SYS_NAME_SUCCESS,
    GET_SYS_NAME_FAILED
} from "../actions/systemInfoActions"

const initialState = {
    logs: [],
    name: "",
    error: ""
};

export default function authentificationReducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOGS:
            return { ...state, token: action.token, type: action.type };
        case GET_LOGS_SUCCESS:
            return { ...state, type: action.type, logs: action.logs};
        case GET_LOGS_FAILED:
            return { ...state, type: action.type, error: action.error};
        case GET_SYS_NAME:
            return { ...state, token: action.token, type: action.type };
        case GET_SYS_NAME_SUCCESS:
            return { ...state, type: action.type, name: action.name};
        case GET_SYS_NAME_FAILED:
            return { ...state, type: action.type, error: action.error};
        default:
            return state;
    }
}