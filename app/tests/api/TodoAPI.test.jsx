var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('Should exist', () => {
    expect(TodoAPI).toExist();
  });
  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Test todo #5',
      completed: true
    }, {
      id: 2,
      text: 'some todo #6',
      completed: false
    }, {
      id: 3,
      text: 'some todo #7',
      completed: true
    }];
    it('Should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });
    it('Should return items that have not been completed', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('Should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });
    it('Should filter todos by search text', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });
    it('Should filter todos by search text if UPPER CASE', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'SOME');
      expect(filteredTodos.length).toBe(2);
    });
    it('Should return all items if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });
  });
});
