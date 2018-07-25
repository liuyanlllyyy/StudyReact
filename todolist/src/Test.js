import React,{Component} from 'react';

class Test extends Component{
    //父组件的 render 被执行，子组件的也要执行
    render(){
        return <div>{this.props.content}</div>
    }

}

export  default Test;