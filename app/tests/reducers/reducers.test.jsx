var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('Should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    it('Should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });
  describe('todosReducer', () => {
    it('Should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 1234,
          text: 'something',
          completed: false,
          createdAt: 34823984
        }
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });
    it('Should update a todo', () => {
      var todos = [{
        id: 124,
        text: 'todo to be complted',
        completed: true,
        createdAt: 123,
        completedAt: 345
      }];
      var updates = {
        completed: false,
        completedAt: null
      };
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toBe(updates.completed);
      expect(res[0].completedAt).toBe(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });
    it('Should add existing todos', () => {
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
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
