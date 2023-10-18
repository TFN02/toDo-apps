interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

interface Action {
  type: string;
  payload: {
    id: number;
    text: string;
    complete: boolean;
  };
}

const todosReducer = (todos: Todo[] = [], action: Action = {} as Action): Todo[] => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo: Todo = {
        id: action.payload.id,
        text: action.payload.text || "",
        complete: action.payload.complete || false,
      };
      return [...todos, newTodo];

      case "UPDATE_TODO":
        const updatedTodos = todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text || todo.text, complete: action.payload.complete || todo.complete }
            : todo
        );
        return updatedTodos;

    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.payload.id);

    case "TOGGLE_TODO":
      return todos.map((todo) => (todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo));

    case "SEARCH_TODO":
      const searchTerm = action.payload.text?.toLowerCase() || "";
      const searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchTerm));
      return searchedTodos;

    default:
      return todos;
  }
};

export { todosReducer };
