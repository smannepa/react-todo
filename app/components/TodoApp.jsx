import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export var TodoApp = React.createClass({
  onLogout(e) {
    e.preventDefault();
    var {dispatch} = this.props;

    dispatch(actions.startLogout());
  },
  render() {
    return(
      <div>
        <div className="page-actions">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <div>
          <h1 className="page-title">Todooy</h1>
        </div>
        <div className="row">
          <div className="small-10 small-centered medium-8 large-6 columns">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
export default Redux.connect()(TodoApp);
