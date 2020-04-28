import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import watchEveryAuthentification from './saga/authentificationSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

export default function configureStore() {
    sagaMiddleware.run(watchEveryAuthentification)
    store.subscribe(() => {
        console.log(store.getState())
    });
    return store;
}