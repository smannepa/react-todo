var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  });
  it('Should render 1 todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something'
    }, {
      id: 2,
      text: 'Check mail'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponent.length).toBe(todos.length);
  });
});
