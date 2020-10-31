import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

export { default as ACTIONS } from './constants/actions';
export { default as EVENTS } from './constants/events';
export { default as LIFECYCLE } from './constants/lifecycle';
export { default as STATUS } from './constants/status';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
