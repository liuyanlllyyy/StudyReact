 import React, {
 	Component
 } from 'react';
 import {
 	connect
 } from 'react-redux';
 import {
 	HeaderWrapper,
 	Logo,
 	Nav,
 	NavItem,
 	NavSearch,
 	Addition,
 	Button,
 	SearchWrapper,
 	SearchInfo,
 	SearchInfoTitle,
 	SearchInfoSwitch,
 	SearchInfoItem,
 	SearchInfoList
 } from './style';
 import {
 	actionCreators
 } from './store';
 import {
 	CSSTransition
 } from 'react-transition-group';

 class Header extends Component {

 	getListArea() {
 		//结构赋值语法
 		const {
 			focused,
 			MouseIn,
 			list,
 			page,
 			totalPage,
 			hanleMouseEnter,
 			hanleMouseLeave,
 			handleChangePage
 		} = this.props;
 		const newList = list.toJS();
 		const pageList = [];

 		if (newList.length) {
 			for (let i = (page - 1) * 10; i < page * 10; i++) {
 				pageList.push(
 					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
 				)
 			}
 		}
 		if (focused || !MouseIn) {
 			return (<SearchInfo 
 				onMouseEnter = {hanleMouseEnter}
 				onMouseLeave = {hanleMouseLeave}
 				>
						<SearchInfoTitle>
								tokyoHot
								<SearchInfoSwitch 
								onClick = {()=>handleChangePage(page,totalPage,this.spinIcon)}
								>
								 <i ref = {(icon)=>{this.spinIcon = icon}} className="iconfont">&#xe851;</i>
								换一换
								</SearchInfoSwitch>
						</SearchInfoTitle>
						<SearchInfoList >
							{pageList}
							{/*list.map((item)=>{
								return <SearchInfoItem key= {item}>{item}</SearchInfoItem>
							})
							*/}
						</SearchInfoList>

					</SearchInfo>);

 		} else {
 			return null;
 		}
 	}


 	render() {
 		const {
 			focused,
 			handleInputFocus,
 			handleInputBlur,
 			list
 		} = this.props;

 		return (
 			<HeaderWrapper>
				<Logo/> 
				<Nav>
					<NavItem className = 'left active'>首页</NavItem>
					<NavItem className = 'left'>下载 app</NavItem>
					<NavItem className = 'right'>登录</NavItem>
					<NavItem className = 'right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
						 	in = {focused}
						 	timeout ={200}
						 	classNames = "slide "
						 >
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus = {()=>handleInputFocus(list)}
								onBlur ={handleInputBlur}
							></NavSearch>
						</CSSTransition>
							<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
					{this. getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='reg'>登录</Button>
					<Button className='writting'>
						<i className="iconfont">&#xe615;</i>
					</Button>
				</Addition>
					
				
		</HeaderWrapper>
 		);


 	}
 }



 const mapDispatchToProps = (dispatch) => {
 	return {
 		handleInputFocus(list) {
 			// if (list.size > 0) {
 			// 	dispatch(actionCreators.getList());
 			// 	dispatch(actionCreators.searchFocus());
 			// }
 			// console.log("sdfsdf");
 			(list.size === 0) && dispatch(actionCreators.getList());
 			dispatch(actionCreators.searchFocus());



 		},
 		handleInputBlur() {
 			dispatch(actionCreators.searchBlur());
 			// const action = {
 			// 	type: 'search_blur'
 			// };
 			// dispatch(action);
 			// console.log("1q123123");
 		},
 		hanleMouseEnter() {
 			dispatch(actionCreators.mouseEnter());
 			// console.log('error');

 		},
 		hanleMouseLeave() {
 			dispatch(actionCreators.mouseLeave());

 		},
 		handleChangePage(page, totalPage, spin) {
 			// spin.style.transform = 'rotate(360deg)';
 			if (page < totalPage) {
 				dispatch(actionCreators.changePage(page + 1));
 			} else {
 				dispatch(actionCreators.changePage(1));
 			}

 		}
 	}
 }
 const mapStateToProps = (state) => {
 	return {
 		//immutable-redux的2种写法
 		//
 		focused: state.getIn(['header', 'focused']),
 		list: state.getIn(['header', 'list']),
 		page: state.getIn(['header', 'page']),
 		mouseIn: state.getIn(['header', 'mouseIn']),
 		totalPage: state.getIn(['header', 'totalPage']),


 		// focused: state.get('header').get('focused')

 	}
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Header);