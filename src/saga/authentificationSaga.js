import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { create } from 'apisauce'
import { loginSuccess, loginFailed } from '../actions/authentificationActions';

const api = create({
    //TODO 28/04/2020: Configuration file
    baseURL: "http://localhost:3000",
    timeout: 5000
})
async function loginQ(user, pass) {
    var data = new FormData();
    data.append("username", user);
    data.append("password", pass);
    return api.post('/api/v1/auth/login', data)
}


function* login(parameters) {
    try {
       const response = yield call(loginQ, parameters.credentials.username, parameters.credentials.password);

       if (response.status === 200) 
       {
          yield put(loginSuccess(response.data.token, parameters.credentials.username));
       }
       else
          yield put(loginFailed(response.data.error))
    }
    catch (e) {
       console.error(e.message)
    }
 }

export default function* watchEveryAuthentification() {
    yield takeEvery('AUTH_LOGIN', login);
  }