import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

export default function configureStore() {
    sagaMiddleware.run(rootSaga)
    store.subscribe(() => {
        console.log(store.getState())
    });
    return store;
}