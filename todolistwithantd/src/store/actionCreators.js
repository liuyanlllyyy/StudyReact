import {
	CHANGE_INPUT_VALUE
} from './actionTypes';
// import axios from 'axios';

export const getInputChangeAction = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
})

// export const getTodoList = () => {
// 	return () => {
// 		axios.get().then((res) => {
// 			const data = res.data;
// 			console.log('f网络请求');


// 		})
// 	}

// }