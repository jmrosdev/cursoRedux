import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import rootReducer from '../reducers';

const enhancer = composeWithDevTools(applyMiddleware(thunk,logger()));

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}