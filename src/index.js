/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

// apps to choose from
import ComponentChooser from './ComponentChooser';
import AppCounter1 from './AppCounter1';
import AppCounter2 from './AppCounter2';
import AppHackerNews from './AppHackerNews';

const activeApp = <AppCounter2 />;
ReactDOM.render(activeApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
