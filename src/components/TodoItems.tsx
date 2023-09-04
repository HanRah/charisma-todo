import React from "react";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import TodoItem from "./TodoItem";
import { Task } from "./TodoList";

interface Props {
  tasks: Task[];
  deleteTask: (id: number) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TodoItems = ({ tasks, deleteTask, setTasks }: Props) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTasks((prevTasks) => {
        const oldIndex = prevTasks.findIndex((task) => task.id === active.id);
        const newIndex = prevTasks.findIndex((task) => task.id === over.id);

        const newTasks = arrayMove(prevTasks, oldIndex, newIndex).map(
          (task, index) => ({
            ...task,
            id: index + 1,
          })
        );

        return newTasks;
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            title={task.title}
            deleteTask={deleteTask}
            id={task.id}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default TodoItems;
