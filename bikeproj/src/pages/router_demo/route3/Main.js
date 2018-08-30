import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
               <div>
                   zheshi Main
                   <Link to="/main/test-id">嵌套路由1</Link>
                   <br/>
                   <Link to="/main/45">嵌套路由4</Link>
                   <hr/>
                   {this.props.children}
               </div>
        );
    }
}

export default Main;