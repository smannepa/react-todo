export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED',
  };
};
export var addTodo = (todoText) => {
  return {
    type: 'ADD_TODO',
    todoText
  };
};
export var toggleTodo = (todoId) => {
  return {
    type: 'TOGGLE_TODO',
    id: todoId
  };
};
