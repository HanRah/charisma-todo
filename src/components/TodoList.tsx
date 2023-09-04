import { useState } from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Delete from "@mui/icons-material/DeleteForever";

import TodoInput from "./TodoInput";
import JSONPreview from "./JSONPreview";
import TodoItems from "./TodoItems";

export interface Task {
  id: number;
  title: string;
}

let index: number = 1;

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    setTasks([{ title, id: index }, ...tasks]);
    index++;
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <Stack spacing={2}>
      <TodoInput addTask={addTask} />
      <TodoItems tasks={tasks} deleteTask={deleteTask} setTasks={setTasks} />
      <JSONPreview data={tasks} />
      <Button color="error" onClick={deleteAllTasks} startIcon={<Delete />}>
        Clear all tasks
      </Button>
    </Stack>
  );
};

export default TodoList;
