import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    if(todoText && todoText.length > 0) {
      dispatch(actions.startAddTodo(todoText));
      this.refs.todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }
  }
  render() {
    return (
      <div className="container__footer">
        <form ref="todoForm" onSubmit={this.onSubmit.bind(this)} className="todo-form">
          <input type="text" ref="todoText" placeholder="Enter todo"/>
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
};
export default connect()(AddTodo);
