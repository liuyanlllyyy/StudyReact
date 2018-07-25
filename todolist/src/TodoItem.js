import React,{Component} from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);

    }
//避免做无谓的 render 操作
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
        return true;
    }

    else {
            return false;
        }
}
    render() {
        const {content} = this.props;
        return (
            <div onClick={this.handleDelete}>
                {content}
                </div>
        )
    }
    //子跟父通讯，要调取父亲的方法
    handleDelete(){
        const{deleteM,index} = this.props;
        deleteM(index);
        // console.log(this.props.index);
    }

}
//类型校验
TodoItem.propTypes = {
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteM:PropTypes.func,
    index:PropTypes.number
}
//添加默认值
TodoItem.defaultProps = {

}
export default TodoItem;