var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
$(document).foundation();
//load custom css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boiler plate 3 project</p>,
  document.getElementById('app')
);
