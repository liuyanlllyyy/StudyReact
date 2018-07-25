import React,{Component} from 'react';
import {Input,Button,List} from 'antd';
import 'antd/dist/antd.css';

const data = [
	"sfsdf",
	"sfsdfsrwer",
	"qwrwetdv",
];
class TodoList extends Component {
	render(){
		return(
			<div style={{marginTop:'10px',marginLeft:'10px'}}>
				<div>
					<Input placeholder='todo info' style = {{width:300}}/>
					<Button type="primary"> 提交</Button>	
				</div>
				<List style={{marginTop:'10px'}}
				bordered
				dataSource={data}
				renderItem={item =>(<List.Item>{item}</List.Item>)}
				/>	
			</div>	
			)

	}
}

export default TodoList;
