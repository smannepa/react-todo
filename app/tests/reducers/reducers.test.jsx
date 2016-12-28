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
        text: 'Read a book'
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toBe(1);
      expect(res[0].text).toBe(action.text);
    });
    it('Should toggle a todo', () => {
      var todos = [{
        id: 124,
        text: 'todo to be complted',
        completed: true,
        createdAt: 123,
        completedAt: 345
      }];
      var action = {
        type: 'TOGGLE_TODO',
        id: 124
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toBe(undefined);
    });
  });
});
