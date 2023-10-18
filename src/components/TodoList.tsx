import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoActionCreator,
  deleteTodoActionCreator,
  toggleTodoActionCreator,
  updateTodoActionCreator,
  searchTodoActionCreator,
} from "../states/todos/action";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { Box, Heading, Input } from "@chakra-ui/react";

interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

const TodoList: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const todos: Todo[] = useSelector((states: any) => states.todos);
  const dispatch = useDispatch();

  const onAddTodo = (text: string): void => {
    const id = `todo-${+new Date()}`;
    dispatch(
      addTodoActionCreator({
        id,
        text,
      })
    );
  };

  const onToggleTodo = (id: string): void => {
    dispatch(toggleTodoActionCreator(id));
  };

  const onUpdateTodo = (todo: Todo) => {
    console.log(todo);
    dispatch(updateTodoActionCreator({ ...todo }));
  };

  const onDeleteTodo = (id: string): void => {
    dispatch(deleteTodoActionCreator(id));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value); 
    dispatch(searchTodoActionCreator(e.target.value)); 
  };

  const filteredTodos = searchQuery
    ? todos.filter((todo) => todo.text.toLowerCase().includes(searchQuery.toLowerCase()))
    : todos;

  return (
    <Box mt={4}>
      <Heading as='h2' color='white'>Create Your Task !</Heading>
      <TodoInput addTodo={onAddTodo} />
      <Input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search tasks"
        mt={2}
        color='white'
        focusBorderColor='pink.400'
      />
      <Box mt={2} maxH="65vh" overflowY='scroll'>
      {filteredTodos.map((todo: Todo) => (
        <TodoItem
        key={todo.id}
        {...todo}
        toggleTodo={onToggleTodo}
        deleteTodo={onDeleteTodo}
        updateTodo={onUpdateTodo}
        />
      ))}
        </Box>
    </Box>
  );
};

export default TodoList;
