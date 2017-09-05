import React from "react";
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, createStore} from 'redux';

import Layout from "./containers/Layout.jsx";

const app = document.getElementById('app');
const appReducer = (state={}, action) => {
    return state;
};
const userReducer = (state={}, action) => {
    switch(action.type) {
        case "CHANGE AGE": {
            return {...state,name:action.payload};
            break;
        }

    }
    return state;
};
const reducers = combineReducers({
    user:userReducer,
    app:appReducer
});
const logger = (store) => (next) => (action) => {
    console.log('action fired', action);
    next(action);
}
const middleware = applyMiddleware(logger);

const store = createStore(reducers, middleware);
store.subscribe(()=>{console.log('here', store.getState())});
store.dispatch({type:"INC", payload:1});
store.dispatch({type:"INC", payload:1});
store.dispatch({type:"DEC", payload:10});
store.dispatch({type:"INC", payload:100});

ReactDOM.render(
    <Layout/>,
    app);