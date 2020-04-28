export const GET_LOGS = "GET_LOGS"
export const GET_LOGS_SUCCESS = "GET_LOGS_SUCCESS"
export const GET_LOGS_FAILED = "GET_LOGS_FAILED"

export const GET_SYS_NAME = "GET_SYS_NAME"
export const GET_SYS_NAME_SUCCESS = "GET_SYS_NAME_SUCCESS"
export const GET_SYS_NAME_FAILED = "GET_SYS_NAME_FAILED"

export function getLogs(token) {
    return {
        type: GET_LOGS,
        token: token
    };
}

export function getLogsSuccess(logs) {
    return {
        type: GET_LOGS_SUCCESS,
        logs: logs
    };
}

export function getLogsFailed(err) {
    return {
        type: GET_LOGS_FAILED,
        error: err
    };
}

export function getSysName(token) {
    return {
        type: GET_SYS_NAME,
        token: token
    };
}

export function getSysNameSuccess(name) {
    return {
        type: GET_SYS_NAME_SUCCESS,
        name: name
    };
}

export function getSysNameFailed(err) {
    return {
        type: GET_SYS_NAME_FAILED,
        error: err
    };
}