import React, { FC, useState } from "react";
import { Flex, Box, Checkbox, Text, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface Todo {
  id: string;
  text: string;
  complete: boolean;
}

interface TodoItemProps {
  id: string;
  text: string;
  complete?: boolean;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

const TodoItem: FC<TodoItemProps> = ({ id, text, complete, toggleTodo, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);
  

  const handleUpdateClick = (): void => {
    updateTodo({
      id,
      text: updatedText,
      complete: complete || false, // Menggunakan nilai existing complete jika ada
    });
    setIsEditing(false);
  };

  return (
    <Flex align="center" justifyContent="space-between" p={2}>
      <Checkbox isChecked={complete} onChange={() => toggleTodo(id)}>
        {isEditing ? (
          <input
          value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            autoFocus
          />
        ) : (
          <Text color='white' textDecoration={complete ? "line-through" : "none"}>{text}</Text>
        )}
      </Checkbox>
      <Box>

      {isEditing ? (
        <IconButton
        icon={<EditIcon />}
        colorScheme="green"
        onClick={handleUpdateClick}
        aria-label="Update Todo"
        />
        ) : (
          <IconButton
          icon={<EditIcon />}
          colorScheme="orange"
          onClick={() => setIsEditing(true)}
          aria-label="Edit Todo"
          mr={2}
          />
          )}
      <IconButton
        icon={<DeleteIcon />}
        colorScheme="red"
        onClick={() => deleteTodo(id)}
        aria-label="Delete Todo"
        />
        </Box>
    </Flex>
  );
};

export default TodoItem;
