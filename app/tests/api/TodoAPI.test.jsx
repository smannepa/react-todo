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
});
