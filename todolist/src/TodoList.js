import React, { Component ,Fragment} from 'react';
// import logo from './logo.svg';
// import './App.css';
import TodoItem from './TodoItem';
import  './style.css';

import axios from 'axios';

// import Test from './Test';
class TodoList extends Component {

    constructor(props){
        //当组件的 state 或者 props 发生变化时，会调取 render
        super(props);
        this.state = {
            list:[],
            inputValue:''

        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    componentDidMount() {
        // axios.get('/api/todolist')
        //     .then(()=>{alert('success')})
        //     .catch(()=>{alert('failed')})

    }
    //子通过 props 接受,父通过属性
    render() {
        return (
            <Fragment >

                <div >
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id= "insertArea"
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) =>{this.input = input}}

                    />
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>{this.getToDoItem()}</ul>
                {/*<Test content={this.state.inputValue}></Test>*/}
            </Fragment>
        );
    }

    handleBtnClick(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''

        })
        // this.state.list.push('hello word');
        // alert('click');
    }
    handleInputChange(){
        const value = this.input.value;

        //es6的 return 简写
        this.setState(()=>({
            inputValue:value
        }));
        // this.setState(()=>{
        //     return {
        //         inputValue:e.target.value
        //     }
        // })
        // this.setState({
        //     inputValue:e.target.value
        // })
    }
    handleItemClick(index){
        this.setState((prevState)=>({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        }));
        // const list = [...this.state.list];
        // list.splice(index,1);
        // this.setState({
        //     list
        // })


    }
    handleDelete(index){
        // const  list = [...this.state.list];


        this.setState((prevState)=>{
            const  list = [...prevState.list];
            list.splice(index,1);
           return{ list}
        });
    }
    getToDoItem(){
        return this.state.list.map((item,index) => {
                // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
                return (
                    <TodoItem  key={item }
                               deleteM ={this.handleDelete}
                               index={index}
                               content ={item}
                    />
                )
            })

    }

}

export default TodoList;
