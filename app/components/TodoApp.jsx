var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Nav = require('Nav');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Mow the lawn'
        },
        {
          id: 3,
          text: 'Do laundry'
        },
        {
          id: 4,
          text: 'Put out trash'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render: function () {
    var {todos} = this.state;
    return(
      <div>
        <Nav/>
        <div className="row">
          <div className="small-10 small-centered medium-8 large-6 columns">
            <h1 className="page-title">Todo App</h1>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        </div>
      </div>
    )
  }
});
module.exports = TodoApp;
