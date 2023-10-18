import React, { useState, ChangeEvent, FC } from "react";
import { Flex, Input, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";


interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");

  const onTextChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  const onAddTodoHandler = (): void => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <Flex mt={4}>
      <Input
        value={text}
        onChange={onTextChangeHandler}
        mr={2}
        placeholder="Enter your task"
        color='white'
      />
      <IconButton
        icon={<AddIcon />}
        colorScheme="blue"
        onClick={onAddTodoHandler}
        aria-label="Delete Todo"
      />
    </Flex>
  );
};

export default TodoInput;
