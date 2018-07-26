import React from 'react';
import {
	Input,
	Button,
	List
} from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = (props) => {
	return (
		<div style={{marginTop:'10px',marginLeft:'10px'}}>
				<div>
					<Input 
						value = {props.inputValue}
						placeholder='todo info' 
						style = {{width:300}}
						onChange = {props.handleInputChange}
						// {/*ref={(input) =>{this.input = input}}*/}
						/>
					<Button type="primary" onClick = {props.handleBtnClick}> 提交</Button>	
				</div>
				<List 
					style={{marginTop:'10px'}}
					bordered //边框的样式
					dataSource={props.list}
					renderItem={(item,index) =>(
						<List.Item 
							onClick= {(index)=>{props.handleItemDelete(index)}}>
						{item}
						</List.Item>)
					}
				/>	
			</div>
	)

}
// class TodoListUI extends Component {
// 	render() {
// 		return (
// 			<div style={{marginTop:'10px',marginLeft:'10px'}}>
// 				<div>
// 					<Input 
// 						value = {this.props.inputValue}
// 						placeholder='todo info' 
// 						style = {{width:300}}
// 						onChange = {this.props.handleInputChange}
// 						// {/*ref={(input) =>{this.input = input}}*/}
// 						/>
// 					<Button type="primary" onClick = {this.props.handleBtnClick}> 提交</Button>	
// 				</div>
// 				<List 
// 					style={{marginTop:'10px'}}
// 					bordered //边框的样式
// 					dataSource={this.props.list}
// 					renderItem={(item,index) =>(
// 						<List.Item 
// 							onClick= {(index)=>{this.props.handleItemDelete(index)}}>
// 						{item}
// 						</List.Item>)
// 					}
// 				/>	
// 			</div>
// 		)
// 	}
// }

export default TodoListUI;