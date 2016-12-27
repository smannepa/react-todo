var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });
  it('Should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'Test todo #2';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
  it('Should toggle completed value when handleToggle is called', () => {
    var todoData = {
      id: 12,
      text: 'Test todo #3',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(12);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  it('Should remove completedAt value when toggled from completed to incomplete', () => {
    var todoData = {
      id: 12,
      text: 'Test todo #3',
      completed: true,
      createdAt: 0,
      completedAt: 123
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(12);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  });
});
