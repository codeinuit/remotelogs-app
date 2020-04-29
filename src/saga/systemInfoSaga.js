import { call, put, takeEvery } from 'redux-saga/effects'
import { create } from 'apisauce'
import { getLogsSuccess, getLogsFailed, getSysNameSuccess, getSysNameFailed } from '../actions/systemInfoActions';


const api = create({
    //TODO 28/04/2020: Configuration file
    baseURL: "http://localhost:3000",
    timeout: 5000
})

async function getLogsQuery(token) {
    api.setHeader('Authorization', 'Bearer ' + token)
   return api.get('/api/v1/system/logs')
}

async function getSystemNameQuery(token) {
    api.setHeader('Authorization', 'Bearer ' + token)
   return api.get('/api/v1/system/name')
}


function* getLogs(parameters) {
    try {
       const response = yield call(getLogsQuery, parameters.token);

       if (response.status === 200) 
       {
          yield put(getLogsSuccess(response.data.logs));
       }
       else
          yield put(getLogsFailed(response.data.error))
    }
    catch (e) {
       console.error(e.message)
    }
}

function* getSystemName(parameters) {
    try {
       const response = yield call(getSystemNameQuery, parameters.token);

       if (response.status === 200) 
       {
          yield put(getSysNameSuccess(response.data.name));
       }
       else
          yield put(getSysNameFailed(response.data.error))
    }
    catch (e) {
       console.error(e.message)
    }
 }

export default function* watchEverySystemInfo() {
    yield takeEvery('GET_LOGS', getLogs);
    yield takeEvery('GET_SYS_NAME', getSystemName);
  }