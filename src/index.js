import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {combineReducers} from 'redux'
import {reducer} from './redux/redux'
const reducers = combineReducers({reducer})
const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}><App />
</Provider>, document.getElementById('root'));
