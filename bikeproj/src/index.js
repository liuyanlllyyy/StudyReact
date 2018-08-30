import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router from './router';
// import YanRouter from './pages/router_demo/route3/router'
ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
