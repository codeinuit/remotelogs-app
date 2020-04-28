import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { create } from 'apisauce'
import { getLogsSuccess, getLogsFailed } from '../actions/systemInfoActions';

const api = create({
    //TODO 28/04/2020: Configuration file
    baseURL: "http://localhost:3000",
    timeout: 5000
})
async function getLogsQuery(token) {
    api.setHeader('Authorization', 'Bearer ' + token)
   return api.get('/api/v1/system/logs')
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

export default function* watchEverySystemInfo() {
    yield takeEvery('GET_LOGS', getLogs);
  }