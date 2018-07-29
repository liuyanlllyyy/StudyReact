import * as constants from './constants';
import {
	fromJS
} from 'immutable';
const defaultStatus = fromJS({
	focused: false
});

export default (state = defaultStatus, action) => {
	if (action.type === constants.SEARCH_FOCUS) {
		//使用immutable 之后 set方法会结合之前对象的值何设置的值，返回一个全新的对象
		//
		return state.set('focused', true);
		// return {
		// 	focused: true
		// }
	}
	if (action.type === constants.SEARCH_BLUR) {
		return state.set('focused', false);
		// return {
		// 	focused: false
		// }
	}
	return state;
}