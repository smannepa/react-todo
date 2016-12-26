var React = require('react');
var TodoList = require('TodoList');

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
  render: function () {
    var {todos} = this.state;
    return(
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});
module.exports = TodoApp;
