import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {Row,Col,Button} from 'antd';
import './index.less';
import Util from '../../utils/utils'
import axios from '../../axios'
export default class Header extends Component {
    state={}
    componentWillMount(){
        this.setState({
            userName:"大帅比刘衍"
        })
        setInterval(()=>{
           let sysTime = Util.fromatDate(new Date().getTime());
           this.setState({
               sysTime
           })
        },1000)
        this.getWeatherApiData();

    }
    getWeatherApiData(){
        this.setState({
            dayPictureUrl:"/assets/logo-ant.svg",
            weather:"22测试度"
        })
        // let city = '成都';
        // axios.jsonp({
        //     url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=9GZY7puONUsbHqiuaEEYqYlVaYhNFtA0'
        // }).then((res)=>{
        //     if(res.status === 'success'){
        //         let data = res.results[0].weather_data[0];
        //         this.setState({
        //             dayPictureUrl:data.dayPictureUrl,
        //             weather:data.weather
        //         })
        //     }
        // })
    }

    render() {
        return (
            <div className= "header">
                <Row className= "header-top">
                    <Col span="24">
                        <span> 欢迎,{this.state.userName}</span>
                        <Button type="primary">退出</Button>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className = "breadcrumb-title">首页</Col>
                    <Col span="20"className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img"> 
                        <img src={this.state.dayPictureUrl} alt=""></img>
                      
                        </span>
                        <span className="weather-detail"> 
                        {this.state.weather}
                        </span>
                    
                    </Col>
                </Row>
            </div>
        );
    }
}
