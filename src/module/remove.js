import { getTodos, sortList, savedTodos } from './storage.js';

const removeTask = (idToDelete) => {
  let todos = getTodos();
  todos = todos.filter((todo) => {
    if (JSON.stringify(todo.index) === idToDelete) {
      return false;
    }

    return true;
  });
  sortList(todos);
  savedTodos(todos);
};

export default removeTask;