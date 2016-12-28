var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function () {
    return(
      <div>
        <div>
          <h1 className="page-title">Todo App</h1>
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
module.exports = TodoApp;
