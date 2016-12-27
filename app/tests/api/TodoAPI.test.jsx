var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('Should exist', () => {
    expect(TodoAPI).toExist();
  });
  describe('setTodos', () => {
    it('Should set valid todos array', () => {
      var todos = [{
        id: 45,
        text: 'Test todo #4',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });
    it('Should not set invalid todos array', () => {
      var badTodos = {
        id: 45,
        text: 'Test todo #4',
        completed: false
      };
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });
  describe('getTodos', () => {
    it('Should get valid todos array', () => {
      var todos = [{
        id: 45,
        text: 'Test todo #4',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);

    });
    it('Should not get invalid todos array', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });
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
    it('Should return all items if searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(todos.length);
    });
  });
});
