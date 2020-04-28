import watchEveryAuthentification from './authentificationSaga'
import watchEverySystemInfo from './systemInfoSaga'
import { spawn } from 'redux-saga/effects'

export default function* rootSaga () {
    yield spawn(watchEveryAuthentification)
    yield spawn(watchEverySystemInfo)
}