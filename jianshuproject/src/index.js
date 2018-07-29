import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import './statics/iconfont/iconfont';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();