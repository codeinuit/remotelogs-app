export const GET_LOGS = "GET_LOGS"
export const GET_LOGS_SUCCESS = "GET_LOGS_SUCCESS"
export const GET_LOGS_FAILED = "GET_LOGS_FAILED"

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