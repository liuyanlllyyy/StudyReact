import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {Row,Col,Button} from 'antd';
import './index.less';
import Util from '../../utils/utils'
export default class Header extends Component {
    state={}
    componentWillMount(){
        this.setState({
            userName:"guofsu "
        })
        setInterval(()=>{
           let sysTime = Util.fromatDate(new Date().getTime());
           this.setState({
               sysTime
           })
        },1000)
    }
    render() {
        return (
            <div className= "header">
                <Row className= "header-top">
                    <Col span="24">
                        <span> 欢迎,{this.state.userName}</span>
                        <Button>退出是</Button>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className = "breadcrumb-title">首页</Col>
                    <Col span="20"className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail"> 天气</span>
                    
                    </Col>
                </Row>
            </div>
        );
    }
}
