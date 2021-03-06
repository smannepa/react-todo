import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  });
  it('Should render 1 todo component for each todo item', () => {
    var todos = [{
      id: 1,
      text: 'Do something',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }, {
      id: 2,
      text: 'Check mail',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }];

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    );
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponent.length).toBe(todos.length);
  });
  it('Should render empty message if no todos', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} showCompleted={false} searchText={''}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
