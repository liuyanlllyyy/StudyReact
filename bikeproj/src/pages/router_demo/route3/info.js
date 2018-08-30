import React, { Component } from 'react';
class info extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
               <div>
                   动态路由获取参数:{this.props.match.params.value}
               </div>
        );
    }
}

export default info;