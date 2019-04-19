import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

var LeftMenuList =[
    {"id": 1, "name": "First floor", "details" : "Bank"},
    {"id": 2, "name": "Second floor floor", "details" : "Origyn"},
    {"id": 3, "name": "Third floor", "details" : "OSF"},
    {"id": 4, "name": "Forth floor","details" : "Centric IT Solutions - Storeworld Team"},
    {"id": 5, "name": "Fifth floor","details" : "Centric IT Solutions - Red Team"},
    {"id": 6, "name": "Sixth floor","details" : "Centric IT Solutions - Sharepoint Team"},
    {"id": 7, "name": "Seventh floor","details" : "Centric IT Solutions - Managed Services"},
];

ReactDOM.render(<App menulist={LeftMenuList} />, document.getElementById('root'));
//const div = document.createElement('div');
 // ReactDOM.render(<App />, div);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
