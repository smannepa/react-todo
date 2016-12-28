var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    if(todoText && todoText.length > 0) {
      dispatch(actions.startAddTodo(todoText));
      this.refs.todoText.value = '';
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="todoForm" onSubmit={this.onSubmit} className="todo-form">
          <input type="text" ref="todoText" placeholder="Enter todo"/>
          <button type="submit" className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});
export default connect()(AddTodo);
