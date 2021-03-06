import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
  it('Should exist', () => {
    expect(Todo).toExist();
  });
  it('Should dispatch toggleTodo action on click', () => {
    var todoData = {
      id: 121,
      text: 'Test todo #4',
      completed: true
    };
    var action = actions.startToggleTodo(todoData.id, !todoData.completed);
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
