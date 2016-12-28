var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state: ', store.getState());
});

store.dispatch(actions.addTodo('Go bowl'));
store.dispatch(actions.setSearchText('go'));
store.dispatch(actions.toggleShowCompleted());

//load foundation
$(document).foundation();
//load custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={TodoApp}/>
  </Router>,
  document.getElementById('app')
);
