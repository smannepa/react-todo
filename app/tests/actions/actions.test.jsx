var expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
  it('Should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('Should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: 1234,
        text: 'anything',
        complted: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('Should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'mock store todo';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });

  it('Should generate addTodos action object', () => {
    var todos = [
      {
        id: 111,
        text: 'anything',
        completed: false,
        createdAt: 34567890,
        completedAt: undefined
      }
    ];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });
  it('Should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });
  it('Should generate update todo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {
        complted: false
      }
    };
    var res = actions.updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });
  describe('Tests with firebase todos', () => {
    var testTodoRef;

    beforeEach((done) => {

    });
    afterEach((done) => {

    });
  });
});
