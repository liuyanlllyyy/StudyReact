import {reducer as headerReducer}from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {
  combineReducers
} from 'redux-immutable';


const reducer =  combineReducers({
	header: headerReducer,
	home:homeReducer
});

export default reducer;
//拆分reducer 
//