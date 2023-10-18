interface Todo {
  id: string;
  text: string;
  complete?: boolean;
}

interface AddTodoAction {
  type: "ADD_TODO";
  payload: Todo;
}

interface UpdateTodoAction {
  type: "UPDATE_TODO";
  payload: Todo;
}

interface DeleteTodoAction {
  type: "DELETE_TODO";
  payload: {
    id: string;
  };
}

interface ToggleTodoAction {
  type: "TOGGLE_TODO";
  payload: {
    id: string;
  };
}

interface SearchTodoAction {
  type: "SEARCH_TODO";
  payload: string;
}

const addTodoActionCreator = (todo: Todo): AddTodoAction => {
  return {
    type: "ADD_TODO",
    payload: {
      ...todo,
      complete: false,
    },
  };
};

const updateTodoActionCreator = (todo: Todo): UpdateTodoAction => {
  return {
    type: "UPDATE_TODO",
    payload: {
      ...todo,
    },
  };
};

const deleteTodoActionCreator = (id: string): DeleteTodoAction => {
  return {
    type: "DELETE_TODO",
    payload: {
      id,
    },
  };
};

const toggleTodoActionCreator = (id: string): ToggleTodoAction => {
  return {
    type: "TOGGLE_TODO",
    payload: {
      id,
    },
  };
};

const searchTodoActionCreator = (query: string): SearchTodoAction => {
  return {
    type: "SEARCH_TODO",
    payload: query,
  };
};

export {
  addTodoActionCreator,
  updateTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
  searchTodoActionCreator
};
