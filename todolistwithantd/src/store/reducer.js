const defaultState = {
	inputValue: '输入啊',
	list: [],

}
//reducer 可以接受，但是不能修改state
export default (state = defaultState, action) => {
	if (action.type === 'change_input_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if (action.type === 'add_todo_item') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		// console.log(newState);
		return newState;

	}
	if (action.type === 'delete_todo_item') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index, 1);
		return newState;

	}
	// console.log(state, action);
	return state;
}
//state 就是整个书籍的信息 相当于整个的数据