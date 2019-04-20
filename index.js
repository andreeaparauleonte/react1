import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

var LeftMenuList =[
    {"id": 0, "name": "Ground floor", "details" : "UBC4 Reception, Banca Transilvania"},
    {"id": 1, "name": "First floor", "details" : "Origyn"},
    {"id": 2, "name": "Second floor", "details" : "Some it company or other"},
    {"id": 3, "name": "Third floor", "details" : "OSF"},
    {"id": 4, "name": "Forth floor","details" : "Centric IT Solutions - Storeworld Team & others"},
    {"id": 5, "name": "Fifth floor","details" : "Centric IT Solutions - Red Team & others"},
    {"id": 6, "name": "Sixth floor","details" : "Centric IT Solutions - Sharepoint Team & others"},
    {"id": 7, "name": "Seventh floor","details" : "Centric IT Solutions - Managed Services"}
];

ReactDOM.render(<App list={LeftMenuList} titleheader="List of floors in UBC4" />, document.getElementById('root'));

serviceWorker.unregister();
