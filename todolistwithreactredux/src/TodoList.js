import React, {
	Component
}
from 'react';
import store from './store';
import {
	connect
} from 'react-redux';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputCHange = this.handleInputCHange.bind(this);
		this.handleClick = this.this.handleClick.bind(this);

	}
	render() {
		return (
			<div>
			<div>
				<input value = {this.props.inputValue} onChange={this.handleInputCHange}/>
				<button onClick = {this.handleClick}>提交</button>
			</div>
			<ul>
				<li>hello</li>
			</ul>
			</div>
		)
	}
	handleInputCHange() {

	}
}

const mapStateToProps = (state) => {

	return {
		inputValue: state.inputValue

	}
}

export default connect(null, null)(TodoList);