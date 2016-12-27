var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

  render: function () {
    var {id, text, completed, createdAt, completedAt} = this.props;
    var renderDate = () => {
      var message = 'Created: ';
      var timestamp = createdAt;

      if(completed) {
        message = 'Completed: ';
        timestamp = completedAt;
      }

      return message + moment(timestamp).format('MMM Do YYYY @ hh:mm a');
    };
    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" checked={completed}/> {text}
        <p>{renderDate()}</p>
      </div>
    )
  }
});
module.exports = Todo;
