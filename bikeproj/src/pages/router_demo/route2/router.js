import React, { Component } from 'react';
import {HashRouter as Router ,Route} from 'react-router-dom'
import Main from './Main';
import About from './../route1/about';
import Topic from './../route1/topic';
import Home from './Home'
export default class YanRouter extends Component {
    state = {  }
    render() {
        return (
            <Router>
                <Home>
                <Route  path="/main" render={()=>
                <Main>
                    <Route path= "/main/a"component={About}></Route>
                </Main>
                
                }></Route>
                   <Route path = "/about" component={About}></Route>
                   <Route path = "/topics" component={Topic}></Route>
                   </Home>
                   
 {/* 抽取路由配置 只能在子节点加exact 精准匹配*/}
            </Router>
       
        );
    }
}
