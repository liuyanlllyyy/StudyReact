import React, {
	Component
} from 'react';
import {
	Input,
	Button,
	List
} from 'antd';
import 'antd/dist/antd.css';
import store from './store';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		// console.log(store.getState());
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handeleStoreChange = this.handeleStoreChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		//订阅这个消息
		store.subscribe(this.handeleStoreChange);



	}

	render() {
		return (
			<div style={{marginTop:'10px',marginLeft:'10px'}}>
				<div>
					<Input 
						value = {this.state.inputValue}
						placeholder='todo info' 
						style = {{width:300}}
						onChange = {this.handleInputChange}
						// {/*ref={(input) =>{this.input = input}}*/}
						/>
					<Button type="primary" onClick = {this.handleBtnClick}> 提交</Button>	
				</div>
				<List style={{marginTop:'10px'}}
				bordered //边框的样式
				dataSource={this.state.list}
				renderItem={(item,index) =>(
					<List.Item 
						onClick= {this.handleItemDelete.bind(this,index)}>
						{item}
					</List.Item>)}
				/>	
			</div>
		)

	}

	handleInputChange(e) {
		// const value = this.input.value;

		const action = {
			type: 'change_input_value',
			value: e.target.value
		};
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