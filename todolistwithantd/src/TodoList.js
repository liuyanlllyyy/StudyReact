import React, {
	Component
} from 'react';

import store from './store';
import {
	getInputChangeAction,
	getTodoList
} from './store/actionCreators';
import TodoListUI from './TodoListUI';
// import axios from 'axios';
class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		// console.log(store.getState());
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handeleStoreChange = this.handeleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		//订阅这个消息
		store.subscribe(this.handeleStoreChange);



	}

	render() {
		return (
			<TodoListUI
				inputValue = {this.state.inputValue}
				list = {this.state.list}
				handleInputChange = {this.handleInputChange}
				handleBtnClick = {this.handleBtnClick}
				handleItemDelete = {this.handleItemDelete}
			/>
		)

	}

	componentDidMount() {
		// const action = getTodoList();
		// store.dispatch(action);
		// axios.get().then((res)=>{
		// 	const data = res.data;


		// })
	}


	handleInputChange(e) {
		// const value = this.input.value;

		const action = getInputChangeAction(e.target.value);
		//通知store 我这个行为action
		//
		//
		store.dispatch(action);
		// console.log(e.target.value);
	}

	handeleStoreChange() {
		//接收到了之后设置新值
		this.setState(store.getState())
		// console.log('storechange');
	}

	handleBtnClick() {
		const action = {
			type: 'add_todo_item',
		};
		store.dispatch(action);
	}

	handleItemDelete(index) {
		const action = {
			type: 'delete_todo_item',
			value: index
		};
		store.dispatch(action);

	}
}

export default TodoList;