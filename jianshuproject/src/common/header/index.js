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
 		if (this.props.focused) {
 			return (<SearchInfo>
						<SearchInfoTitle>
								tokyoHot
								<SearchInfoSwitch>换一换</SearchInfoSwitch>
						</SearchInfoTitle>
						<SearchInfoList>
							{
								this.props.list.map((item)=>{
									return <SearchInfoItem key ={item}>{item}</SearchInfoItem>
								}) 
							}
						</SearchInfoList>
					</SearchInfo>);

 		} else {
 			return null;
 		}
 	}


 	render() {
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
						 	in = {this.props.focused}
						 	timeout ={200}
						 	classNames = "slide "
						 >
							<NavSearch
								className={this.props.focused ? 'focused' : ''}
								onFocus = {this.props.handleInputFocus}
								onBlur ={this.props.handleInputBlur}
							></NavSearch>
						</CSSTransition>
							<i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
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
 		handleInputFocus() {
 			dispatch(actionCreators.getList());
 			dispatch(actionCreators.searchFocus());
 			// console.log("sdfsdf");



 		},
 		handleInputBlur() {
 			dispatch(actionCreators.searchBlur());
 			// const action = {
 			// 	type: 'search_blur'
 			// };
 			// dispatch(action);
 			// console.log("1q123123");


 		}
 	}
 }
 const mapStateToProps = (state) => {
 	return {
 		//immutable-redux的2种写法
 		//
 		focused: state.getIn(['header', 'focused']),
 		list: state.getIn(['header', 'list'])

 		// focused: state.get('header').get('focused')

 	}
 }

 export default connect(mapStateToProps, mapDispatchToProps)(Header);