import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import registerServiceWorker from './registerServiceWorker';
import {
	Provider
} from 'react-redux';
import store from './store';
const defass = (
	//provider 里面所有的组件都能能力获取store
	<Provider store = {store}>
		<TodoList/>
	</Provider>
);
ReactDOM.render(<defass />, document.getElementById('root'));
registerServiceWorker();